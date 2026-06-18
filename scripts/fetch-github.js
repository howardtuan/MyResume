const fs = require("node:fs/promises");
const path = require("node:path");

const USERNAME = process.env.GITHUB_USERNAME || "howardtuan";
// GITHUB_OUTPUT is reserved by GitHub Actions for step outputs.
const OUTPUT_PATH = process.env.GITHUB_DATA_OUTPUT || path.join("assets", "data", "github.json");
const PROFILE_URL = `https://github.com/${USERNAME}`;
const API_BASE = "https://api.github.com";

const headers = {
  accept: "application/vnd.github+json",
  "user-agent": "HowardResumeSite"
};

if (process.env.GITHUB_TOKEN) {
  headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const requestJson = async (url) => {
  const response = await fetch(url, { headers });
  const text = await response.text();

  if (!response.ok) {
    throw new Error(`GitHub returned ${response.status}: ${text.slice(0, 180)}`);
  }

  return JSON.parse(text);
};

const fetchAllRepos = async () => {
  const repos = [];

  for (let page = 1; page <= 10; page += 1) {
    const batch = await requestJson(`${API_BASE}/users/${USERNAME}/repos?per_page=100&page=${page}&sort=updated&type=owner`);
    repos.push(...batch);
    if (batch.length < 100) {
      break;
    }
  }

  return repos;
};

const countLanguages = (repos) => {
  const counts = repos.reduce((result, repo) => {
    if (!repo.language) {
      return result;
    }

    result[repo.language] = (result[repo.language] || 0) + 1;
    return result;
  }, {});

  return Object.entries(counts)
    .map(([language, count]) => ({ language, count }))
    .sort((a, b) => b.count - a.count || a.language.localeCompare(b.language))
    .slice(0, 6);
};

const normalizeRepo = (repo) => ({
  name: repo.name,
  description: repo.description || "",
  url: repo.html_url,
  language: repo.language || "N/A",
  stars: repo.stargazers_count || 0,
  forks: repo.forks_count || 0,
  updatedAt: repo.pushed_at || repo.updated_at,
  isFork: Boolean(repo.fork)
});

const buildData = async () => {
  const [profile, repos] = await Promise.all([
    requestJson(`${API_BASE}/users/${USERNAME}`),
    fetchAllRepos()
  ]);

  const ownerRepos = repos.filter((repo) => !repo.fork);
  const languageRepos = ownerRepos.length ? ownerRepos : repos;
  const recentRepos = repos
    .filter((repo) => !repo.archived)
    .sort((a, b) => new Date(b.pushed_at || b.updated_at) - new Date(a.pushed_at || a.updated_at))
    .slice(0, 6)
    .map(normalizeRepo);

  return {
    username: profile.login,
    profileUrl: PROFILE_URL,
    generatedAt: new Date().toISOString(),
    source: "github-rest",
    status: "fresh",
    profile: {
      name: profile.name || profile.login,
      bio: profile.bio || "",
      avatar: profile.avatar_url || "",
      publicRepos: profile.public_repos || 0,
      followers: profile.followers || 0,
      following: profile.following || 0
    },
    stats: {
      totalStars: repos.reduce((total, repo) => total + (repo.stargazers_count || 0), 0),
      totalForks: repos.reduce((total, repo) => total + (repo.forks_count || 0), 0),
      ownerRepos: ownerRepos.length,
      forkedRepos: repos.length - ownerRepos.length
    },
    topLanguages: countLanguages(languageRepos),
    recentRepos
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
    const data = await buildData();
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
    console.warn(`GitHub update failed; kept existing ${OUTPUT_PATH}.`);
    console.warn(error.message);
  }
})();
