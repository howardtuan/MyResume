(function () {
  const DATA_URL = "assets/data/github.json";
  const REFRESH_INTERVAL = 30 * 60 * 1000;
  const USERNAME = "howardtuan";
  const languageColors = {
    Python: "#3572A5",
    HTML: "#e34c26",
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    CSS: "#663399",
    "Jupyter Notebook": "#da5b0b",
    Java: "#b07219",
    Vue: "#41b883",
    C: "#555555",
    "C++": "#f34b7d"
  };
  const copy = {
    en: {
      openProfile: "Open GitHub",
      updated: "Updated",
      staleUpdated: "Last fresh update",
      pending: "Pending",
      unavailable: "GitHub data is temporarily unavailable",
      metrics: [
        ["Public Repos", "Repositories"],
        ["Stars Earned", "Total stars received"],
        ["Followers", "GitHub followers"],
        ["Forks", "Repository forks"]
      ],
      languages: "Top Languages",
      activity: ["Contribution Activity", "Public GitHub contributions"],
      streak: ["Contribution Streak", "Current streak, longest streak, and total contributions"],
      stats: ["Overall Stats", "Stars, commits, PRs, issues, and contribution rank"],
      recent: ["Recently Updated", "Public repositories sorted by latest activity"],
      noRepos: "No public repositories available.",
      statusAccepted: "Updated",
      repoFallback: "No description yet",
      fork: "Fork",
      avatar: "avatar"
    },
    zh: {
      openProfile: "開啟 GitHub",
      updated: "更新於",
      staleUpdated: "上次成功更新",
      pending: "等待更新",
      unavailable: "GitHub 資料暫時無法讀取",
      metrics: [
        ["公開 Repos", "公開儲存庫"],
        ["Stars 獲得", "收到的 stars 總數"],
        ["追蹤者", "GitHub followers"],
        ["Forks", "Repos 被 fork 次數"]
      ],
      languages: "主要語言",
      activity: ["貢獻活動紀錄", "GitHub 公開貢獻紀錄"],
      streak: ["連續貢獻紀錄", "當前連續天數、最長紀錄與總貢獻"],
      stats: ["整體統計", "Stars、Commits、PRs、Issues 與貢獻排名"],
      recent: ["最近更新", "依最新活動排序的公開 repositories"],
      noRepos: "目前沒有公開 repositories。",
      statusAccepted: "已更新",
      repoFallback: "尚未填寫描述",
      fork: "Fork",
      avatar: "頭像"
    }
  };
  let latestData = null;

  const getLang = () => (document.documentElement.lang || "").toLowerCase().startsWith("zh") ? "zh" : "en";

  const formatNumber = (value) => {
    if (value === null || value === undefined || Number.isNaN(Number(value))) {
      return "--";
    }

    return new Intl.NumberFormat("en-US").format(Number(value));
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

  const renderMetrics = (root, data, lang) => {
    const text = copy[lang];
    const values = [
      data.profile?.publicRepos,
      data.stats?.totalStars,
      data.profile?.followers,
      data.stats?.totalForks
    ];

    root.querySelectorAll(".github-metric").forEach((metric, index) => {
      metric.querySelector(".metric-number").textContent = formatNumber(values[index]);
      metric.querySelector(".metric-label").textContent = text.metrics[index][0];
      metric.querySelector(".metric-note").textContent = text.metrics[index][1];
    });
  };

  const renderLanguages = (root, data, lang) => {
    const list = root.querySelector("[data-github-languages]");
    if (!list) {
      return;
    }

    setText(root, "[data-github-languages-title]", copy[lang].languages);
    const languages = data.topLanguages || [];
    const maxCount = Math.max(1, languages[0]?.count || 1);
    const nodes = languages.map((item) => {
      const row = document.createElement("div");
      row.className = "github-language-row";

      const name = document.createElement("span");
      name.className = "github-language-name";
      name.textContent = item.language;

      const barWrap = document.createElement("span");
      barWrap.className = "github-language-bar";

      const bar = document.createElement("span");
      bar.style.width = `${Math.max(7, Math.round((item.count / maxCount) * 100))}%`;
      bar.style.background = languageColors[item.language] || "#8e8e93";
      barWrap.appendChild(bar);

      const count = document.createElement("strong");
      count.textContent = formatNumber(item.count);

      row.append(name, barWrap, count);
      return row;
    });

    list.replaceChildren(...nodes);
  };

  const imageUrl = (type, lang) => {
    const locale = lang === "zh" ? "zh-tw" : "en";
    if (type === "streak") {
      return `https://streak-stats.demolab.com?user=${USERNAME}&theme=default&hide_border=true&date_format=Y-m-d&locale=${lang === "zh" ? "zh_Hant" : "en"}`;
    }
    if (type === "stats") {
      return `https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&hide_border=true&title_color=172235&icon_color=2478ff&text_color=52647a&bg_color=ffffff00&include_all_commits=true&count_private=false&locale=${locale}`;
    }
    return `https://ghchart.rshah.org/49c69d/${USERNAME}`;
  };

  const renderImages = (root, lang) => {
    root.querySelectorAll("[data-github-image]").forEach((image) => {
      image.src = imageUrl(image.dataset.githubImage, lang);
    });
  };

  const renderRecentRepos = (root, data, lang) => {
    const list = root.querySelector("[data-github-repos]");
    if (!list) {
      return;
    }

    const text = copy[lang];
    const repos = data.recentRepos || [];
    const items = repos.map((repo) => {
      const item = document.createElement("a");
      item.className = "github-repo-card";
      item.href = repo.url;
      item.target = "_blank";
      item.rel = "noopener noreferrer";

      const title = document.createElement("strong");
      title.innerHTML = '<i class="fas fa-book"></i>';
      title.append(document.createTextNode(repo.name));

      const description = document.createElement("span");
      description.className = "github-repo-description";
      description.textContent = repo.description || text.repoFallback;

      const meta = document.createElement("span");
      meta.className = "github-repo-meta";

      const language = document.createElement("span");
      language.innerHTML = `<span class="github-language-dot" style="background:${languageColors[repo.language] || "#8e8e93"}"></span>${repo.language || "N/A"}`;

      const stars = document.createElement("span");
      stars.innerHTML = `<i class="fas fa-star"></i> ${formatNumber(repo.stars)}`;

      const updated = document.createElement("span");
      updated.innerHTML = `<i class="fas fa-clock"></i> ${formatDate(repo.updatedAt, lang)}`;

      meta.append(language, stars, updated);
      if (repo.isFork) {
        const fork = document.createElement("span");
        fork.textContent = text.fork;
        meta.appendChild(fork);
      }

      item.append(title, description, meta);
      return item;
    });

    if (items.length) {
      list.replaceChildren(...items);
      return;
    }

    const empty = document.createElement("div");
    empty.className = "github-empty";
    empty.textContent = text.noRepos;
    list.replaceChildren(empty);
  };

  const renderLabels = (root, lang) => {
    const text = copy[lang];
    setText(root, "[data-github-profile-link]", text.openProfile);
    setText(root, "[data-github-activity-title]", text.activity[0]);
    setText(root, "[data-github-activity-copy]", text.activity[1]);
    setText(root, "[data-github-streak-title]", text.streak[0]);
    setText(root, "[data-github-streak-copy]", text.streak[1]);
    setText(root, "[data-github-stats-title]", text.stats[0]);
    setText(root, "[data-github-stats-copy]", text.stats[1]);
    setText(root, "[data-github-recent-title]", text.recent[0]);
    setText(root, "[data-github-recent-copy]", text.recent[1]);
  };

  const renderGitHub = (root, data) => {
    const lang = getLang();
    const text = copy[lang];

    root.classList.remove("is-loading", "has-error");
    root.classList.toggle("is-stale", data.status === "stale");
    latestData = data;

    setText(root, "[data-github-username]", data.username || USERNAME);
    setText(root, "[data-github-name]", data.profile?.name || data.username || USERNAME);
    setText(root, "[data-github-updated]", `${text.updated} ${formatDate(data.generatedAt, lang)}`);
    setLink(root, "[data-github-profile-link]", data.profileUrl);

    const avatar = root.querySelector("[data-github-avatar]");
    if (avatar && data.profile?.avatar) {
      avatar.src = data.profile.avatar;
      avatar.alt = `${data.username || "GitHub"} ${text.avatar}`;
    }

    if (data.status === "stale") {
      setText(root, "[data-github-updated]", `${text.staleUpdated} ${formatDate(data.generatedAt, lang)}`);
    }

    renderLabels(root, lang);
    renderMetrics(root, data, lang);
    renderLanguages(root, data, lang);
    renderImages(root, lang);
    renderRecentRepos(root, data, lang);
  };

  const renderError = (root) => {
    const lang = getLang();
    root.classList.remove("is-loading");
    root.classList.add("has-error");
    setText(root, "[data-github-updated]", copy[lang].unavailable);
  };

  const loadGitHub = async (root) => {
    try {
      const response = await fetch(`${DATA_URL}?v=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Unable to load ${DATA_URL}`);
      }

      const data = await response.json();
      renderGitHub(root, data);
    } catch {
      renderError(root);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    const root = document.querySelector("[data-github-profile]");
    if (!root) {
      return;
    }

    root.classList.add("is-loading");
    loadGitHub(root);
    window.setInterval(() => loadGitHub(root), REFRESH_INTERVAL);
    window.addEventListener("site-language-change", () => {
      if (latestData) {
        renderGitHub(root, latestData);
      }
    });
  });
})();
