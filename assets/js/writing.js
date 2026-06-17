(function () {
  // 更新文章時主要維護下方幾個清單：
  // 1. Medium / 技術實作文章放在 articles 開頭的完整物件。
  // 2. ZeroJudge 只要新增 slug 到 zeroJudgeNotes，例如 apcs_a290。
  // 3. LeetCode 只要新增 slug 到 leetCodeNotes，例如 leetcode_001。
  // 4. 資訊分享或新分類請新增 categoryKey，並同步 writing.html 的 filter button 與 site-language.js 的 filters。
  // 5. 首頁精選由 featured 控制；設為 true 的文章會出現在首頁文章區塊，data-limit 會限制數量。
  const zeroJudgeNotes = [
    "apcs_c463",
    "apcs_d768_DFS",
    "apcs_d768_BFS",
    "apcs_d406",
    "apcs_a290",
    "apcs_d378",
    "apcs_d904_v2",
    "apcs_d418",
    "apcs_d221",
    "apcs_d904",
    "apcs_e591",
    "apcs_d732",
    "apcs_d673",
    "apcs_d481",
    "apcs_e605",
    "apcs_f149",
    "apcs_b519",
    "apcs_d150",
    "apcs_e283",
    "apcs_a471",
    "apcs_a227",
    "apcs_d487",
    "apcs_e357",
    "apcs_f607",
    "apcs_f606"
  ];

  const leetCodeNotes = [
    "leetcode_122",
    "leetcode_2962",
    "leetcode_041",
    "leetcode_143",
    "leetcode_234",
    "leetcode_452",
    "leetcode_057",
    "leetcode_525",
    "leetcode_930",
    "leetcode_1171",
    "leetcode_231",
    "leetcode_1768",
    "leetcode_028",
    "leetcode_053",
    "leetcode_238",
    "leetcode_217",
    "leetcode_121",
    "leetcode_007",
    "leetcode_005",
    "leetcode_003",
    "leetcode_002",
    "leetcode_088",
    "leetcode_083",
    "leetcode_070",
    "leetcode_069",
    "leetcode_067",
    "leetcode_066",
    "leetcode_058",
    "leetcode_035",
    "leetcode_027",
    "leetcode_026",
    "leetcode_021",
    "leetcode_020",
    "leetcode_014",
    "leetcode_001",
    "leetcode_009",
    "leetcode_013"
  ];

  const unique = (items) => [...new Set(items)];

  const formatApcsCode = (slug) => slug
    .replace(/^apcs_/, "")
    .replace(/_/g, " ")
    .replace(/\bdfs\b/i, "DFS")
    .replace(/\bbfs\b/i, "BFS")
    .replace(/\bv2\b/i, "v2");

  const formatLeetCodeNumber = (slug) => {
    const rawNumber = slug.replace(/^leetcode_/, "");
    return {
      rawNumber,
      displayNumber: String(Number(rawNumber))
    };
  };

  const zeroJudgeArticle = (slug) => {
    const code = formatApcsCode(slug);
    return {
      platform: "HackMD",
      categoryKey: "zerojudge",
      category: "Algorithm / ZeroJudge",
      title: `APCS ${code} 解題筆記`,
      url: `https://hackmd.io/@HowN/${slug}`,
      excerpt: `ZeroJudge / APCS ${code} 解題紀錄，整理題意拆解、資料結構選擇與實作細節，方便回頭複習。`,
      date: "HackMD",
      read: "Algorithm note",
      tags: ["APCS", "ZeroJudge", code]
    };
  };

  const leetCodeArticle = (slug) => {
    const number = formatLeetCodeNumber(slug);
    return {
      platform: "HackMD",
      categoryKey: "leetcode",
      category: "Algorithm / LeetCode",
      title: `LeetCode ${number.displayNumber} 解題筆記`,
      url: `https://hackmd.io/@HowN/${slug}`,
      excerpt: `LeetCode ${number.displayNumber} 解題紀錄，整理題型觀察、解法思路與邊界條件。`,
      date: "HackMD",
      read: "Algorithm note",
      tags: ["LeetCode", number.rawNumber, "Algorithm"]
    };
  };

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
    ...unique(zeroJudgeNotes).map(zeroJudgeArticle),
    ...unique(leetCodeNotes).map(leetCodeArticle),
    {
      platform: "HackMD",
      categoryKey: "info",
      category: "Information Sharing",
      title: "NoteForIM 資訊管理學習筆記",
      url: "https://hackmd.io/@HowN/NoteForIM",
      excerpt: "HackMD 資訊分享文章，整理資訊管理學習、課程與相關資源筆記。",
      date: "HackMD",
      read: "Info note",
      tags: ["Information Management", "Sharing", "HackMD"]
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
      const haystack = [article.title, article.excerpt, article.platform, article.category, article.url, article.tags.join(" ")].join(" ").toLowerCase();
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
