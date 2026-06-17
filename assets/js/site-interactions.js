(function () {
  // 背景輪播照片維護位置：
  // 1. 把照片放進 assets/images/hero-carousel/。
  // 2. 在 heroSlides 陣列新增圖片路徑；靜態網站無法自動讀資料夾，所以需要在這裡登記。
  // 3. 建議圖片使用 1600px 以上寬度，橫式照片效果最好。
  const heroSlides = [
    "assets/images/hero-carousel/slide-1.jpg",
    "assets/images/hero-carousel/slide-2.jpg",
    "assets/images/hero-carousel/slide-3.jpg",
    "assets/images/hero-carousel/slide-4.jpg",
    "assets/images/hero-carousel/slide-5.jpg"
  ];

  const pageSize = 6;

  const setupHeroCarousel = () => {
    const carousel = document.querySelector("[data-hero-carousel]");
    if (!carousel || !heroSlides.length) {
      return;
    }

    const slides = heroSlides.map((src, index) => {
      const slide = document.createElement("div");
      slide.className = "hero-slide" + (index === 0 ? " is-active" : "");
      slide.style.backgroundImage = `url("${src}")`;
      carousel.appendChild(slide);
      return slide;
    });

    if (slides.length < 2 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let activeIndex = 0;
    window.setInterval(() => {
      slides[activeIndex].classList.remove("is-active");
      activeIndex = (activeIndex + 1) % slides.length;
      slides[activeIndex].classList.add("is-active");
    }, 5200);
  };

  const setupPager = (key) => {
    const grid = document.querySelector(`[data-paginated-grid="${key}"]`);
    if (!grid) {
      return;
    }

    const items = Array.from(grid.children).filter((node) => node.matches(".project-tile, .certificate-card"));
    const prev = document.querySelector(`[data-page-prev="${key}"]`);
    const next = document.querySelector(`[data-page-next="${key}"]`);
    const status = document.querySelector(`[data-page-status="${key}"]`);
    const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
    let page = 0;

    const render = () => {
      items.forEach((item, index) => {
        const visible = index >= page * pageSize && index < (page + 1) * pageSize;
        item.hidden = !visible;
        if (!visible && item.tagName.toLowerCase() === "details") {
          item.removeAttribute("open");
        }
      });

      if (prev) {
        prev.disabled = page === 0;
      }
      if (next) {
        next.disabled = page >= totalPages - 1;
      }
      if (status) {
        status.textContent = `${page + 1} / ${totalPages}`;
      }
    };

    prev?.addEventListener("click", () => {
      page = Math.max(0, page - 1);
      render();
    });

    next?.addEventListener("click", () => {
      page = Math.min(totalPages - 1, page + 1);
      render();
    });

    render();
  };

  const setupCertificateImages = () => {
    document.querySelectorAll(".certificate-card").forEach((card) => {
      const image = card.dataset.certificateImage?.trim();
      const preview = card.querySelector(".certificate-preview");
      if (!image || !preview) {
        return;
      }

      preview.innerHTML = "";
      const img = document.createElement("img");
      img.src = image;
      img.alt = card.dataset.certificateTitle || card.textContent.trim();
      preview.appendChild(img);
    });
  };

  const setupCertificateLightbox = () => {
    const lightbox = document.querySelector("[data-certificate-lightbox]");
    const title = document.getElementById("certificate-lightbox-title");
    const body = document.querySelector("[data-lightbox-body]");
    if (!lightbox || !title || !body) {
      return;
    }

    const close = () => {
      lightbox.hidden = true;
      body.replaceChildren();
    };

    const open = (card) => {
      const image = card.dataset.certificateImage?.trim();
      const label = card.dataset.certificateTitle || card.querySelector("strong")?.textContent || "Certificate";
      title.textContent = label;
      body.replaceChildren();

      if (image) {
        const img = document.createElement("img");
        img.src = image;
        img.alt = label;
        body.appendChild(img);
      } else {
        const placeholder = document.createElement("div");
        placeholder.className = "lightbox-placeholder";
        placeholder.innerHTML = '<i class="fas fa-image"></i><strong>Preview pending</strong>';
        body.appendChild(placeholder);
      }

      lightbox.hidden = false;
    };

    document.querySelectorAll(".certificate-card").forEach((card) => {
      card.addEventListener("click", () => open(card));
    });

    document.querySelectorAll("[data-lightbox-close]").forEach((button) => {
      button.addEventListener("click", close);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !lightbox.hidden) {
        close();
      }
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    setupHeroCarousel();
    setupPager("projects");
    setupPager("certificates");
    setupCertificateImages();
    setupCertificateLightbox();
  });
}());
