(function () {
  const DATA_URL = "assets/data/leetcode.json";
  const REFRESH_INTERVAL = 30 * 60 * 1000;
  const copy = {
    en: {
      pending: "Pending",
      updated: "Updated",
      staleUpdated: "Last fresh update",
      unavailable: "LeetCode data is temporarily unavailable",
      difficulties: {
        easy: "Easy",
        medium: "Medium",
        hard: "Hard"
      },
      submissionSingular: "submission",
      submissionPlural: "submissions",
      submitted: "Submitted",
      accepted: "Accepted",
      problemFallback: "LeetCode problem",
      emptySubmissions: "No public submissions yet.",
      avatar: "avatar"
    },
    zh: {
      pending: "等待更新",
      updated: "更新於",
      staleUpdated: "上次成功更新",
      unavailable: "LeetCode 資料暫時無法讀取",
      difficulties: {
        easy: "簡單",
        medium: "中等",
        hard: "困難"
      },
      submissionSingular: "次提交",
      submissionPlural: "次提交",
      submitted: "已提交",
      accepted: "通過",
      problemFallback: "LeetCode 題目",
      emptySubmissions: "目前沒有公開提交紀錄。",
      avatar: "頭像"
    }
  };
  let latestData = null;

  const getLang = () => (document.documentElement.lang || "").toLowerCase().startsWith("zh") ? "zh" : "en";

  const formatNumber = (value, maximumFractionDigits = 0) => {
    if (value === null || value === undefined || Number.isNaN(Number(value))) {
      return "--";
    }

    return new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(Number(value));
  };

  const formatDate = (value, lang = getLang()) => {
    const text = copy[lang];
    if (!value) {
      return text.pending;
    }

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return text.pending;
    }

    return new Intl.DateTimeFormat(lang === "zh" ? "zh-TW" : "en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(date);
  };

  const dateKey = (date) => date.toISOString().slice(0, 10);

  const addUtcDays = (date, amount) => {
    const next = new Date(date);
    next.setUTCDate(next.getUTCDate() + amount);
    return next;
  };

  const getActivityLevel = (count) => {
    if (!count) return 0;
    if (count === 1) return 1;
    if (count <= 3) return 2;
    if (count <= 6) return 3;
    return 4;
  };

  const setText = (root, selector, value) => {
    const target = root.querySelector(selector);
    if (target) {
      target.textContent = value;
    }
  };

  const setLink = (root, selector, value) => {
    const target = root.querySelector(selector);
    if (target && value) {
      target.href = value;
    }
  };

  const getCalendarSummary = (calendar, generatedAt) => {
    const end = new Date(generatedAt || Date.now());
    const endUtc = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate()));
    const startUtc = addUtcDays(endUtc, -364);
    let total = 0;
    let activeDays = 0;

    for (let cursor = new Date(startUtc); cursor <= endUtc; cursor = addUtcDays(cursor, 1)) {
      const count = Number(calendar[dateKey(cursor)]) || 0;
      total += count;
      activeDays += count > 0 ? 1 : 0;
    }

    return { startUtc, endUtc, total, activeDays };
  };

  const renderCalendar = (root, data, lang = getLang()) => {
    const calendar = root.querySelector("[data-leetcode-calendar]");
    if (!calendar) {
      return;
    }

    const text = copy[lang];
    const activity = data.calendar || {};
    const { startUtc, endUtc, total, activeDays } = getCalendarSummary(activity, data.generatedAt);
    const cells = [];

    for (let index = 0; index < startUtc.getUTCDay(); index += 1) {
      const spacer = document.createElement("span");
      spacer.className = "leetcode-day is-empty";
      cells.push(spacer);
    }

    for (let cursor = new Date(startUtc); cursor <= endUtc; cursor = addUtcDays(cursor, 1)) {
      const key = dateKey(cursor);
      const count = Number(activity[key]) || 0;
      const cell = document.createElement("span");
      cell.className = `leetcode-day level-${getActivityLevel(count)}`;
      const unit = count === 1 ? text.submissionSingular : text.submissionPlural;
      cell.setAttribute("title", `${key}: ${count} ${unit}`);
      cell.setAttribute("aria-label", `${key}: ${count} ${unit}`);
      cells.push(cell);
    }

    calendar.replaceChildren(...cells);
    setText(root, "[data-leetcode-calendar-total]", formatNumber(total));
    setText(root, "[data-leetcode-calendar-days]", formatNumber(activeDays));
  };

  const renderBreakdown = (root, solved, lang = getLang()) => {
    const text = copy[lang];
    const total = Math.max(1, solved.total || 0);
    const rows = [
      ["easy", text.difficulties.easy, solved.easy || 0],
      ["medium", text.difficulties.medium, solved.medium || 0],
      ["hard", text.difficulties.hard, solved.hard || 0]
    ];

    rows.forEach(([key, label, count]) => {
      const row = root.querySelector(`[data-leetcode-difficulty="${key}"]`);
      if (!row) {
        return;
      }

      row.querySelector(".difficulty-name").textContent = label;
      row.querySelector(".difficulty-count").textContent = formatNumber(count);
      row.querySelector(".difficulty-fill").style.width = `${Math.min(100, (count / total) * 100)}%`;
    });
  };

  const renderSubmissions = (root, submissions, lang = getLang()) => {
    const list = root.querySelector("[data-leetcode-submissions]");
    if (!list) {
      return;
    }

    const text = copy[lang];
    const items = (submissions || []).slice(0, 8).map((submission) => {
      const item = document.createElement("a");
      item.className = "leetcode-submission";
      item.href = submission.url;
      item.target = "_blank";
      item.rel = "noopener noreferrer";

      const status = document.createElement("span");
      status.className = submission.status === "Accepted" ? "submission-status accepted" : "submission-status";
      status.textContent = submission.status === "Accepted" ? text.accepted : submission.status || text.submitted;

      const title = document.createElement("strong");
      title.textContent = submission.title || text.problemFallback;

      const meta = document.createElement("span");
      meta.className = "submission-meta";
      meta.textContent = [submission.language, formatDate(submission.submittedAt, lang)].filter(Boolean).join(" / ");

      item.append(status, title, meta);
      return item;
    });

    if (items.length) {
      list.replaceChildren(...items);
      return;
    }

    const empty = document.createElement("div");
    empty.className = "leetcode-empty";
    empty.textContent = text.emptySubmissions;
    list.replaceChildren(empty);
  };

  const renderLeetCode = (root, data) => {
    const solved = data.solved || {};
    const contest = data.contest || {};
    const lang = getLang();
    const text = copy[lang];

    root.classList.remove("is-loading", "has-error");
    root.classList.toggle("is-stale", data.status === "stale");

    setText(root, "[data-leetcode-username]", data.username || "howardtuan");
    setText(root, "[data-leetcode-real-name]", data.profile?.realName || "Howard Tuan");
    setText(root, "[data-leetcode-updated]", `${text.updated} ${formatDate(data.generatedAt, lang)}`);
    setText(root, "[data-leetcode-ranking]", `#${formatNumber(data.profile?.ranking)}`);
    setText(root, "[data-leetcode-solved]", formatNumber(solved.total));
    setText(root, "[data-leetcode-accepted]", formatNumber(solved.acceptedSubmissions));
    setText(root, "[data-leetcode-contest]", contest.rating ? formatNumber(contest.rating, 0) : "--");
    setText(root, "[data-leetcode-top]", contest.topPercentage ? `${formatNumber(contest.topPercentage, 1)}%` : "--");
    setLink(root, "[data-leetcode-profile-link]", data.profileUrl);

    const avatar = root.querySelector("[data-leetcode-avatar]");
    if (avatar && data.profile?.avatar) {
      avatar.src = data.profile.avatar;
      avatar.alt = `${data.username || "LeetCode"} ${text.avatar}`;
    }

    renderBreakdown(root, solved, lang);
    renderCalendar(root, data, lang);
    renderSubmissions(root, data.recentSubmissions, lang);

    if (data.status === "stale") {
      setText(root, "[data-leetcode-updated]", `${text.staleUpdated} ${formatDate(data.generatedAt, lang)}`);
    }
  };

  const renderError = (root) => {
    const lang = getLang();
    root.classList.remove("is-loading");
    root.classList.add("has-error");
    setText(root, "[data-leetcode-updated]", copy[lang].unavailable);
  };

  const loadLeetCode = async (root) => {
    try {
      const response = await fetch(`${DATA_URL}?v=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Unable to load ${DATA_URL}`);
      }

      const data = await response.json();
      latestData = data;
      renderLeetCode(root, data);
    } catch {
      renderError(root);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("[data-leetcode-profile]");
    if (!root) {
      return;
    }

    root.classList.add("is-loading");
    loadLeetCode(root);
    window.setInterval(() => loadLeetCode(root), REFRESH_INTERVAL);
    window.addEventListener("site-language-change", () => {
      if (latestData) {
        renderLeetCode(root, latestData);
      }
    });
  });
})();
