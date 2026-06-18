const fs = require("node:fs/promises");
const path = require("node:path");

const USERNAME = process.env.LEETCODE_USERNAME || "howardtuan";
const OUTPUT_PATH = process.env.LEETCODE_OUTPUT || path.join("assets", "data", "leetcode.json");
const PROFILE_URL = `https://leetcode.com/u/${USERNAME}/`;

const query = `
query profile($username: String!) {
  matchedUser(username: $username) {
    username
    profile {
      realName
      ranking
      userAvatar
    }
    submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }
    submissionCalendar
  }
  userContestRanking(username: $username) {
    attendedContestsCount
    rating
    globalRanking
    totalParticipants
    topPercentage
  }
  recentSubmissionList(username: $username, limit: 12) {
    title
    titleSlug
    timestamp
    statusDisplay
    lang
  }
}`;

const headers = {
  "content-type": "application/json",
  accept: "application/json",
  origin: "https://leetcode.com",
  referer: PROFILE_URL,
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
};

const toDateKey = (timestampSeconds) => {
  const date = new Date(Number(timestampSeconds) * 1000);
  return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10);
};

const normalizeStats = (stats = []) => {
  const byDifficulty = stats.reduce((result, item) => {
    result[item.difficulty.toLowerCase()] = {
      solved: Number(item.count) || 0,
      submissions: Number(item.submissions) || 0
    };
    return result;
  }, {});

  return {
    total: byDifficulty.all?.solved || 0,
    easy: byDifficulty.easy?.solved || 0,
    medium: byDifficulty.medium?.solved || 0,
    hard: byDifficulty.hard?.solved || 0,
    acceptedSubmissions: byDifficulty.all?.submissions || 0
  };
};

const normalizeCalendar = (rawCalendar) => {
  if (!rawCalendar) {
    return {};
  }

  const calendar = typeof rawCalendar === "string" ? JSON.parse(rawCalendar) : rawCalendar;
  const entries = Object.entries(calendar)
    .map(([timestamp, count]) => [toDateKey(timestamp), Number(count) || 0])
    .filter(([dateKey, count]) => dateKey && count > 0)
    .sort(([a], [b]) => a.localeCompare(b));

  return Object.fromEntries(entries);
};

const normalizeSubmissions = (submissions = []) =>
  submissions.map((item) => ({
    title: item.title,
    titleSlug: item.titleSlug,
    url: `https://leetcode.com/problems/${item.titleSlug}/`,
    timestamp: Number(item.timestamp) || null,
    submittedAt: item.timestamp ? new Date(Number(item.timestamp) * 1000).toISOString() : null,
    status: item.statusDisplay,
    language: item.lang
  }));

const fetchLeetCode = async () => {
  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables: { username: USERNAME }
    })
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`LeetCode returned ${response.status}: ${text.slice(0, 180)}`);
  }

  const payload = JSON.parse(text);
  if (payload.errors?.length) {
    throw new Error(payload.errors.map((error) => error.message).join("; "));
  }

  const matchedUser = payload.data?.matchedUser;
  if (!matchedUser) {
    throw new Error(`LeetCode user "${USERNAME}" was not found.`);
  }

  const solved = normalizeStats(matchedUser.submitStatsGlobal?.acSubmissionNum);
  const calendar = normalizeCalendar(matchedUser.submissionCalendar);
  const contest = payload.data?.userContestRanking || null;

  return {
    username: matchedUser.username,
    profileUrl: PROFILE_URL,
    generatedAt: new Date().toISOString(),
    source: "leetcode-graphql",
    status: "fresh",
    profile: {
      realName: matchedUser.profile?.realName || "",
      ranking: matchedUser.profile?.ranking || null,
      avatar: matchedUser.profile?.userAvatar || ""
    },
    solved,
    contest: contest
      ? {
          attendedContests: contest.attendedContestsCount,
          rating: contest.rating,
          globalRanking: contest.globalRanking,
          totalParticipants: contest.totalParticipants,
          topPercentage: contest.topPercentage
        }
      : null,
    calendar,
    recentSubmissions: normalizeSubmissions(payload.data?.recentSubmissionList)
  };
};

const readExisting = async () => {
  try {
    const text = await fs.readFile(OUTPUT_PATH, "utf8");
    return JSON.parse(text);
  } catch {
    return null;
  }
};

const writeData = async (data) => {
  await fs.mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
  await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(data, null, 2)}\n`, "utf8");
};

(async () => {
  try {
    const data = await fetchLeetCode();
    await writeData(data);
    console.log(`Updated ${OUTPUT_PATH} for ${data.username}.`);
  } catch (error) {
    const existing = await readExisting();
    if (!existing) {
      throw error;
    }

    existing.status = "stale";
    existing.lastAttemptAt = new Date().toISOString();
    existing.error = error.message;
    await writeData(existing);
    console.warn(`LeetCode update failed; kept existing ${OUTPUT_PATH}.`);
    console.warn(error.message);
  }
})();
