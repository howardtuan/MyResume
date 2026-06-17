(function () {
  // 更新文章時只需要維護這個陣列：
  // 1. 新增一篇文章就複製一個物件，填入 platform、categoryKey、category、title、url、excerpt、tags。
  // 2. categoryKey 目前支援 tech、zerojudge、leetcode；如果新增分類，記得同步 writing.html 的 filter button。
  // 3. 首頁精選由 featured 控制；設為 true 的文章會出現在首頁文章區塊，data-limit 會限制數量。
  // 4. 不需要改 HTML 卡片，首頁與完整文章頁都會自動從這裡渲染。
  const articles = [
    {
      platform: "Medium",
      categoryKey: "tech",
      category: "Technical Implementation",
      title: "OpenAI Whisper 影片字幕生成教學：CC 字幕",
      url: "https://medium.com/@HowardTuan/openai-whisper-影片字幕生成教學-cc字幕-5bb7aa3fd530",
      excerpt: "用 OpenAI Whisper 產生影片字幕與 CC 字幕的實作筆記，適合需要影音處理、自動字幕流程的人參考。",
      date: "Medium",
      read: "Tutorial",
      tags: ["Whisper", "Subtitle", "AI"],
      featured: true
    },
    {
      platform: "Medium",
      categoryKey: "tech",
      category: "Technical Implementation",
      title: "不靠雲端，用 Ollama + Open WebUI 建立你的私人 AI 助理",
      url: "https://medium.com/@HowardTuan/不靠雲端-用-ollama-open-webui-建立你的私人-ai-助理-c69c110d5a7b",
      excerpt: "從本機模型、Ollama 到 Open WebUI，整理不依賴雲端也能建立私人 AI 助理的操作流程。",
      date: "Medium",
      read: "Tutorial",
      tags: ["Ollama", "Open WebUI", "Local AI"],
      featured: true
    },
    {
      platform: "HackMD",
      categoryKey: "tech",
      category: "Technical Implementation",
      title: "Name Card Bot 名片機器人",
      url: "https://hackmd.io/@HowN/name-card-bot",
      excerpt: "以 HackMD 記錄名片機器人的實作流程，包含互動設計、資料處理與部署前的技術整理。",
      date: "HackMD",
      read: "Build note",
      tags: ["Bot", "Automation", "Project"],
      featured: true
    },
    {
      platform: "HackMD",
      categoryKey: "zerojudge",
      category: "Algorithm / ZeroJudge",
      title: "APCS c463 解題筆記",
      url: "https://hackmd.io/@HowN/apcs_c463",
      excerpt: "ZeroJudge / APCS 題目解題紀錄，整理題意拆解、實作方向與容易踩到的細節。",
      date: "HackMD",
      read: "Algorithm note",
      tags: ["APCS", "ZeroJudge", "Practice"]
    },
    {
      platform: "HackMD",
      categoryKey: "zerojudge",
      category: "Algorithm / ZeroJudge",
      title: "APCS d768 DFS 解題筆記",
      url: "https://hackmd.io/@HowN/apcs_d768_DFS",
      excerpt: "以 DFS 思路整理 d768 題目的搜尋流程、狀態設計與遞迴實作重點。",
      date: "HackMD",
      read: "Algorithm note",
      tags: ["APCS", "DFS", "ZeroJudge"]
    },
    {
      platform: "HackMD",
      categoryKey: "zerojudge",
      category: "Algorithm / ZeroJudge",
      title: "APCS d768 BFS 解題筆記",
      url: "https://hackmd.io/@HowN/apcs_d768_BFS",
      excerpt: "以 BFS 思路整理 d768 題目的層序搜尋、queue 狀態與替代解法比較。",
      date: "HackMD",
      read: "Algorithm note",
      tags: ["APCS", "BFS", "ZeroJudge"]
    },
    {
      platform: "HackMD",
      categoryKey: "zerojudge",
      category: "Algorithm / ZeroJudge",
      title: "APCS d406 解題筆記",
      url: "https://hackmd.io/@HowN/apcs_d406",
      excerpt: "ZeroJudge d406 解題筆記，聚焦資料結構選擇、條件判斷與可讀性較高的實作方式。",
      date: "HackMD",
      read: "Algorithm note",
      tags: ["APCS", "ZeroJudge", "Implementation"]
    },
    {
      platform: "HackMD",
      categoryKey: "leetcode",
      category: "Algorithm / LeetCode",
      title: "LeetCode 122：Best Time to Buy and Sell Stock II",
      url: "https://hackmd.io/@HowN/leetcode_122",
      excerpt: "LeetCode 122 解題紀錄，整理貪心策略與股票買賣題型的直覺推導。",
      date: "HackMD",
      read: "Algorithm note",
      tags: ["LeetCode", "Greedy", "Array"]
    },
    {
      platform: "HackMD",
      categoryKey: "leetcode",
      category: "Algorithm / LeetCode",
      title: "LeetCode 28：Find the Index of the First Occurrence in a String",
      url: "https://hackmd.io/@HowN/leetcode_028",
      excerpt: "LeetCode 28 解題筆記，整理字串搜尋的基本思路、邊界條件與實作細節。",
      date: "HackMD",
      read: "Algorithm note",
      tags: ["LeetCode", "String", "Search"]
    },
    {
      platform: "HackMD",
      categoryKey: "leetcode",
      category: "Algorithm / LeetCode",
      title: "LeetCode 53：Maximum Subarray",
      url: "https://hackmd.io/@HowN/leetcode_053",
      excerpt: "LeetCode 53 解題筆記，整理 Kadane's Algorithm、狀態轉移與最大連續子陣列的判斷方式。",
      date: "HackMD",
      read: "Algorithm note",
      tags: ["LeetCode", "DP", "Array"]
    },
    {
      platform: "HackMD",
      categoryKey: "leetcode",
      category: "Algorithm / LeetCode",
      title: "LeetCode 67：Add Binary",
      url: "https://hackmd.io/@HowN/leetcode_067",
      excerpt: "LeetCode 67 解題筆記，整理二進位字串加法、進位處理與迴圈邊界。",
      date: "HackMD",
      read: "Algorithm note",
      tags: ["LeetCode", "Binary", "String"]
    }
  ];

  const platformSamples = {
    medium: {
      platform: "Medium",
      author: "Howard Tuan",
      accent: "Article",
      fallbackTitle: "OpenAI Whisper 影片字幕生成教學：CC 字幕",
      excerpt: "A simulated Medium preview generated from the pasted link. Replace it with real metadata later if you wire an API.",
      meta: "Tutorial"
    },
    hackmd: {
      platform: "HackMD",
      author: "Howard Tuan",
      accent: "Memo",
      fallbackTitle: "Name Card Bot 名片機器人",
      excerpt: "A simulated HackMD preview generated from the pasted link. Good enough for static portfolio layout testing.",
      meta: "Build note"
    }
  };

  const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;"
  }[char]));

  const titleFromUrl = (rawUrl, fallbackTitle) => {
    try {
      const parsed = new URL(rawUrl);
      const slug = parsed.pathname.split("/").filter(Boolean).pop() || "";
      const cleaned = decodeURIComponent(slug)
        .replace(/[-_]+/g, " ")
        .replace(/\s+/g, " ")
        .replace(/\s+[a-f0-9]{8,}$/i, "")
        .trim();

      if (!cleaned || cleaned.length < 4) {
        return fallbackTitle;
      }

      return cleaned
        .split(" ")
        .map((word) => {
          const lower = word.toLowerCase();
          const titleCase = {
            openai: "OpenAI",
            webui: "WebUI"
          };
          const acronyms = ["ai", "api", "apcs", "bfs", "cc", "dfs", "gui", "llm", "rag", "roi", "yolo"];
          return titleCase[lower] || (acronyms.includes(lower)
            ? lower.toUpperCase()
            : lower.charAt(0).toUpperCase() + lower.slice(1));
        })
        .join(" ");
    } catch (error) {
      return fallbackTitle;
    }
  };

  const hostFromUrl = (rawUrl, platform) => {
    try {
      return new URL(rawUrl).hostname.replace(/^www\./, "");
    } catch (error) {
      return platform === "medium" ? "medium.com" : "hackmd.io";
    }
  };

  const iconForPlatform = (platform) => platform.toLowerCase() === "medium"
    ? '<i class="fab fa-medium"></i>'
    : '<i class="fas fa-file-lines"></i>';

  const articleCard = (article) => `
    <a class="article-card article-card-rich" href="${escapeHtml(article.url)}" target="_blank" rel="noopener noreferrer" data-platform="${escapeHtml(article.platform.toLowerCase())}" data-category="${escapeHtml(article.categoryKey)}">
      <span class="article-source">
        <span class="mini-platform ${escapeHtml(article.platform.toLowerCase())}-mini" aria-hidden="true">${iconForPlatform(article.platform)}</span>
        ${escapeHtml(article.platform)} · ${escapeHtml(article.category)}
      </span>
      <strong>${escapeHtml(article.title)}</strong>
      <span>${escapeHtml(article.excerpt)}</span>
      <span class="article-meta">
        <span>${escapeHtml(article.date)}</span>
        <span>${escapeHtml(article.read)}</span>
        ${article.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}
      </span>
    </a>
  `;

  const renderFeatured = () => {
    document.querySelectorAll("[data-featured-articles]").forEach((container) => {
      const limit = Number(container.dataset.limit || 3);
      container.innerHTML = articles
        .filter((article) => article.featured)
        .slice(0, limit)
        .map(articleCard)
        .join("");
    });
  };

  const renderLibrary = () => {
    const library = document.querySelector("[data-article-library]");
    if (!library) {
      return;
    }

    const search = document.getElementById("article-search");
    const activeFilter = document.querySelector("[data-article-filter].is-active")?.dataset.articleFilter || "all";
    const query = (search?.value || "").trim().toLowerCase();

    const filtered = articles.filter((article) => {
      const matchesFilter = activeFilter === "all"
        || article.platform.toLowerCase() === activeFilter
        || article.categoryKey === activeFilter;
      const haystack = [article.title, article.excerpt, article.platform, article.category, article.tags.join(" ")].join(" ").toLowerCase();
      return matchesFilter && (!query || haystack.includes(query));
    });

    library.innerHTML = filtered.length
      ? filtered.map(articleCard).join("")
      : '<div class="empty-state">No matching article yet.</div>';

    const count = document.querySelector("[data-article-count]");
    if (count) {
      count.textContent = String(filtered.length);
    }
  };

  const renderLinkPreview = (platform) => {
    const input = document.getElementById(platform + "-url");
    const target = document.getElementById(platform + "-preview");
    const sample = platformSamples[platform];

    if (!input || !target || !sample) {
      return;
    }

    const rawUrl = input.value.trim();
    const displayUrl = rawUrl || (platform === "medium"
      ? "https://medium.com/@howardtuan/building-medical-imaging-ai-workflows"
      : "https://hackmd.io/@howardtuan/rag-local-ai-teaching-assistant");
    const title = titleFromUrl(displayUrl, sample.fallbackTitle);
    const host = hostFromUrl(displayUrl, platform);

    target.innerHTML = `
      <a class="article-card preview-card" href="${escapeHtml(displayUrl)}" target="_blank" rel="noopener noreferrer">
        <span class="article-source">${escapeHtml(sample.platform)} · ${escapeHtml(host)}</span>
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(sample.excerpt)}</span>
        <span class="article-meta">
          <span>${escapeHtml(sample.author)}</span>
          <span>${escapeHtml(sample.meta)}</span>
          <span>${escapeHtml(sample.accent)}</span>
        </span>
      </a>
    `;
  };

  const bindPreviewControls = () => {
    document.querySelectorAll("[data-preview-target]").forEach((button) => {
      button.addEventListener("click", () => renderLinkPreview(button.dataset.previewTarget));
    });

    ["medium", "hackmd"].forEach((platform) => {
      const input = document.getElementById(platform + "-url");
      if (!input) {
        return;
      }

      let typingTimer;
      input.addEventListener("input", () => {
        clearTimeout(typingTimer);
        typingTimer = window.setTimeout(() => renderLinkPreview(platform), 160);
      });
      renderLinkPreview(platform);
    });
  };

  const bindLibraryControls = () => {
    const search = document.getElementById("article-search");
    search?.addEventListener("input", renderLibrary);

    document.querySelectorAll("[data-article-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        document.querySelectorAll("[data-article-filter]").forEach((item) => {
          item.classList.remove("is-active");
        });
        button.classList.add("is-active");
        renderLibrary();
      });
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    renderFeatured();
    bindPreviewControls();
    bindLibraryControls();
    renderLibrary();
  });
}());
