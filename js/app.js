(() => {
  const DATA = window.PORTFOLIO_DATA;
  if (!DATA) {
    throw new Error("PORTFOLIO_DATA is missing. Make sure data/portfolio-data.js is loaded before js/app.js.");
  }

  const $ = (id) => document.getElementById(id);
  const profile = DATA.profile;
  let currentPage = 1;
  let pageSize = 6;
  let filteredProjects = [];

  const escapeHtml = (value) => String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const norm = (value) => String(value || "").toLowerCase().trim();

  const icon = (name, className = "w-4 h-4") => `<i data-lucide="${escapeHtml(name)}" class="${className}"></i>`;
  const badge = (text) => `<span class="tech">${escapeHtml(text)}</span>`;

  function setText(id, value) {
    const element = $(id);
    if (element) element.textContent = value;
  }

  function setHref(id, value) {
    const element = $(id);
    if (element) element.href = value || "#";
  }

  function initProfile() {
    document.title = `Portfolio — ${profile.name}`;
    setText("navName", profile.name.split(" ")[0] || profile.name);
    setText("profileName", profile.name);
    setText("profileTitle", profile.title);
    setText("profileSummary", profile.summary);
    setText("profileLocation", profile.location);
    setText("photoName", profile.name);
    setText("photoLocation", profile.location);
    setText("emailText", profile.email);
    setText("phoneText", profile.phone || "-");
    setText("footerName", profile.name);
    setText("year", new Date().getFullYear());

    const photo = $("profilePhoto");
    if (photo) {
      photo.src = profile.photo;
      photo.alt = profile.name;
    }

    setHref("linkedin", profile.linkedin);
    setHref("github", profile.github);
    setHref("blog", profile.blog);
    setHref("cvBtn", profile.cv);
    setHref("cvHero", profile.cv);
    setHref("emailBtnRight", `mailto:${profile.email}`);

    const wa = (profile.whatsapp || "").replace(/[^\d]/g, "");
    setHref("waBtn", wa ? `https://wa.me/${wa}` : "#");
  }

  function renderHighlights() {
    $("highlights").innerHTML = (DATA.highlights || []).map((item) => `
      <article class="highlight-card lift">
        <div class="highlight-label">${icon(item.icon)} ${escapeHtml(item.label)}</div>
        <div class="highlight-value">${escapeHtml(item.value)}</div>
      </article>
    `).join("");
  }

  function renderHeroTags() {
    $("heroTags").innerHTML = (DATA.heroTags || []).map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");
  }

  function renderInfoCards(containerId, items) {
    const container = $(containerId);
    container.innerHTML = (items || []).map((item) => `
      <article class="info-card glass lift ${item.featured ? "featured" : ""}">
        <div class="card-top">
          <div>
            <h3 class="card-title">${escapeHtml(item.title)}</h3>
            <div class="card-period">${escapeHtml(item.period)}</div>
          </div>
          <span class="category-badge">${escapeHtml(item.category)}</span>
        </div>
        <ul class="bullet-list">
          ${(item.descriptions || []).map((desc) => `<li>${escapeHtml(desc)}</li>`).join("")}
        </ul>
      </article>
    `).join("");
  }

  function getCategories(project) {
    const tag = norm(project.tag);
    const text = `${tag} ${norm(project.title)} ${norm(project.desc)} ${(project.tech || []).map(norm).join(" ")}`;
    const categories = new Set();
    if (/(fullstack|web|website|asp\.net|laravel|react|vue|php|dotnet|sql|api|database|iis)/i.test(text)) categories.add("fullstack");
    if (/(ai|machine\s*learning|ml|computer\s*vision|deep\s*learning|transformer|caption|yolo|ocr|agentic|llm)/i.test(text)) categories.add("ai");
    if (/(research|skripsi|thesis|final\s*project|paper|journal|evaluation|dataset|bleu|rouge|bertscore)/i.test(text)) categories.add("research");
    if (!categories.size) categories.add("research");
    return categories;
  }

  function getSortKey(project, index) {
    const year = Number(project.year);
    if (Number.isFinite(year)) return year;
    const date = Date.parse(project.date);
    if (!Number.isNaN(date)) return date;
    return index;
  }

  function computePageSize() {
    const width = window.innerWidth;
    if (width >= 1024) return 6;
    if (width >= 768) return 4;
    return 3;
  }

  function applyProjectQuery() {
    const query = norm($("search").value);
    const filter = $("filter").value;
    const sort = $("sort").value || "newest";

    const items = (DATA.projects || [])
      .map((project, index) => ({ project, index, categories: getCategories(project) }))
      .filter(({ project, categories }) => {
        const matchesFilter = filter === "all" || categories.has(filter);
        const haystack = norm(project.title) + " " + norm(project.desc) + " " + norm(project.tag) + " " + norm((project.tech || []).join(" "));
        const matchesSearch = !query || haystack.includes(query);
        return matchesFilter && matchesSearch;
      });

    items.sort((a, b) => {
      if (sort === "az") return a.project.title.localeCompare(b.project.title);
      if (sort === "za") return b.project.title.localeCompare(a.project.title);
      const ka = getSortKey(a.project, a.index);
      const kb = getSortKey(b.project, b.index);
      return sort === "oldest" ? ka - kb : kb - ka;
    });

    return items;
  }

  function projectCard(project, index) {
    return `
      <button type="button" data-project-index="${index}" class="project-card glass lift">
        <div class="card-top">
          <div>
            <h3 class="card-title">${escapeHtml(project.title)}</h3>
            <div class="card-period">${escapeHtml(project.year || "")}</div>
          </div>
          <span class="category-badge">${escapeHtml(project.tag)}</span>
        </div>
        <p class="project-desc">${escapeHtml(project.desc)}</p>
        <div class="project-thumb">
          <img src="${escapeHtml(project.img)}" alt="${escapeHtml(project.title)}" loading="lazy">
        </div>
        <div class="tech-list">${(project.tech || []).map(badge).join("")}</div>
        <div class="card-footer">
          <span>Click for details</span>
          <span>${icon("arrow-up-right", "w-4 h-4")}</span>
        </div>
      </button>
    `;
  }

  function clampPage(page, totalPages) {
    if (totalPages <= 0) return 1;
    return Math.min(Math.max(1, page), totalPages);
  }

  function pageNumbers(totalPages, active) {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages = [1];
    const left = Math.max(2, active - 1);
    const right = Math.min(totalPages - 1, active + 1);
    if (left > 2) pages.push("…");
    for (let page = left; page <= right; page++) pages.push(page);
    if (right < totalPages - 1) pages.push("…");
    pages.push(totalPages);
    return pages;
  }

  function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / pageSize) || 1;
    currentPage = clampPage(currentPage, totalPages);

    const start = totalItems ? (currentPage - 1) * pageSize + 1 : 0;
    const end = Math.min(currentPage * pageSize, totalItems);
    $("pageInfo").textContent = totalItems ? `Showing ${start}–${end} of ${totalItems} projects` : "No projects found";

    $("prevPage").disabled = currentPage <= 1;
    $("nextPage").disabled = currentPage >= totalPages;

    $("pageButtons").innerHTML = pageNumbers(totalPages, currentPage).map((page) => {
      if (page === "…") return `<span class="page-btn" style="display:inline-flex;align-items:center;justify-content:center;opacity:.55">…</span>`;
      return `<button type="button" data-page="${page}" class="page-btn ${page === currentPage ? "active" : ""}">${page}</button>`;
    }).join("");
  }

  function renderProjects() {
    pageSize = computePageSize();
    filteredProjects = applyProjectQuery();
    const totalItems = filteredProjects.length;
    const totalPages = Math.ceil(totalItems / pageSize) || 1;
    currentPage = clampPage(currentPage, totalPages);
    const start = (currentPage - 1) * pageSize;
    $("projectGrid").innerHTML = filteredProjects
      .slice(start, start + pageSize)
      .map(({ project, index }) => projectCard(project, index))
      .join("");
    renderPagination(totalItems);
    if (window.lucide) lucide.createIcons();
  }

  function resetAndRenderProjects() {
    currentPage = 1;
    renderProjects();
  }

  function renderSkills() {
    $("skillsGrid").innerHTML = (DATA.skills || []).map((skill) => `
      <article class="info-card glass lift">
        <div class="skill-title">${icon(skill.icon, "w-5 h-5")} ${escapeHtml(skill.title)}</div>
        <ul class="bullet-list">
          ${(skill.items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </article>
    `).join("");
  }

  function openProject(project) {
    $("modalTitle").textContent = project.title;
    $("modalDesc").textContent = project.desc;
    $("modalImg").src = project.img;
    $("modalImg").alt = project.title;
    $("modalTech").innerHTML = (project.tech || []).map(badge).join("");

    const links = [];
    if (project.links?.demo && project.links.demo !== "#") {
      links.push(`<a class="btn btn-primary" href="${escapeHtml(project.links.demo)}" target="_blank" rel="noreferrer">Demo</a>`);
    }
    if (project.links?.repo && project.links.repo !== "#") {
      links.push(`<a class="btn" href="${escapeHtml(project.links.repo)}" target="_blank" rel="noreferrer">Repository</a>`);
    }
    $("modalLinks").innerHTML = links.join("");
    $("modal").classList.add("show");
  }

  function closeProject() {
    $("modal").classList.remove("show");
  }

  function showToast(message = "Copied") {
    const toast = $("toast");
    toast.textContent = message;
    toast.classList.add("show");
    window.setTimeout(() => toast.classList.remove("show"), 1300);
  }

  function bindEvents() {
    $("filter").addEventListener("change", resetAndRenderProjects);
    $("sort").addEventListener("change", resetAndRenderProjects);
    $("search").addEventListener("input", resetAndRenderProjects);
    $("prevPage").addEventListener("click", () => { currentPage -= 1; renderProjects(); });
    $("nextPage").addEventListener("click", () => { currentPage += 1; renderProjects(); });
    $("pageButtons").addEventListener("click", (event) => {
      const button = event.target.closest("button[data-page]");
      if (!button) return;
      currentPage = Number(button.dataset.page);
      renderProjects();
    });
    $("projectGrid").addEventListener("click", (event) => {
      const button = event.target.closest("button[data-project-index]");
      if (!button) return;
      const project = DATA.projects[Number(button.dataset.projectIndex)];
      if (project) openProject(project);
    });
    $("closeModal").addEventListener("click", closeProject);
    $("modal").addEventListener("click", (event) => {
      if (event.target.id === "modal") closeProject();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeProject();
    });
    $("copyBtn").addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(profile.email);
        showToast("Email copied");
      } catch {
        window.alert(`Email: ${profile.email}`);
      }
    });
    window.addEventListener("resize", renderProjects);
  }

  function initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  }

  function init() {
    initProfile();
    renderHighlights();
    renderHeroTags();
    renderInfoCards("experienceGrid", DATA.experiences);
    renderInfoCards("organizationGrid", DATA.organizations);
    renderSkills();
    renderProjects();
    bindEvents();
    initReveal();
    if (window.lucide) lucide.createIcons();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
