(function () {
  "use strict";

  const projects = [
    {
      id: "mobile-mapping-app",
      status: "verified portfolio evidence",
      kind: "client delivery",
      category: "Software delivery",
      title: "Client-facing mobile application",
      subtitle: "Location-aware mobile experience with integrated messaging",
      client: "Client-facing delivery · client name not published in the public portfolio",
      sector: "Application development",
      challenge: "A mobile application required a practical user interface plus location-aware functionality and reliable message delivery.",
      solution: "Delivered mobile application development using Java and Kotlin, integrating the Google Maps API for location functionality and Firebase Cloud Messaging for push notifications.",
      outcome: "The existing portfolio records this as client-facing delivery and provides direct evidence of application, mapping and messaging integration capability.",
      technologies: ["Java", "Kotlin", "Google Maps API", "Firebase Cloud Messaging"],
      procurementSignals: ["Client-facing delivery", "API integration", "Mobile UX", "Maintainable implementation"],
      sourceUrl: "about.html#application-development"
    },
    {
      id: "performance-improvement",
      status: "verified portfolio evidence",
      kind: "client delivery",
      category: "Web & application",
      title: "Web & application performance improvement",
      subtitle: "Troubleshooting and reliability-focused development",
      client: "Client-facing development · client name not published in the public portfolio",
      sector: "Web and application development",
      challenge: "An existing website/application required troubleshooting and performance improvements to reduce service disruption.",
      solution: "Worked across website/application development, troubleshooting and performance improvement, with a focus on diagnosing causes of instability and implementing targeted fixes.",
      outcome: "The public portfolio reports a 10% reduction in downtime associated with this work.",
      technologies: ["Web development", "Application troubleshooting", "Performance improvement"],
      procurementSignals: ["Reliability", "Problem solving", "Performance", "Measured outcome"],
      sourceUrl: "about.html#web-application-development"
    },
    {
      id: "stock-prediction",
      status: "verified portfolio evidence",
      kind: "technical portfolio",
      category: "Data & AI",
      title: "Stock market prediction & portfolio optimisation",
      subtitle: "Machine learning and evolutionary optimisation over historical market data",
      client: "Independent technical portfolio / research project",
      sector: "Data science & AI",
      challenge: "Explore how historical financial data can be transformed into predictive and portfolio-allocation insights.",
      solution: "The public repository documents analysis of ten assets using historical stock data, daily-return calculations, covariance analysis and a genetic algorithm to optimise portfolio weights against a Sharpe-ratio objective.",
      outcome: "Produced a reproducible analytical workflow and comparative visualisation of an optimised portfolio against individual assets.",
      technologies: ["R", "GA", "quantmod", "xts", "zoo", "ggplot2"],
      procurementSignals: ["Analytical reasoning", "Data preparation", "Reproducible modelling", "Visualisation"],
      repoUrl: "https://github.com/DhairyaGogri/StockPrediction"
    },
    {
      id: "sentiment-analysis",
      status: "verified portfolio evidence",
      kind: "technical portfolio",
      category: "Data & AI",
      title: "Natural-language sentiment analysis",
      subtitle: "Comparative NLP modelling with cleaning and transfer-learning workflows",
      client: "Independent technical portfolio / research project",
      sector: "Data science & AI",
      challenge: "Compare several sequence-model approaches for classifying sentiment from text while testing the effect of data cleaning and transfer learning.",
      solution: "The repository documents LSTM, Attention, GRU and RNN approaches, text-cleaning functions and transfer-learning experiments using publicly available datasets.",
      outcome: "Created a comparative NLP workflow that can be adapted to text classification, feedback analysis and other unstructured-data use cases.",
      technologies: ["Python", "Keras", "LSTM", "GRU", "RNN", "Attention"],
      procurementSignals: ["Data preparation", "Model comparison", "Unstructured data", "Analytical experimentation"],
      repoUrl: "https://github.com/DhairyaGogri/SentimentAnalysis"
    },
    {
      id: "spotify-regression",
      status: "verified portfolio evidence",
      kind: "technical portfolio",
      category: "Data & AI",
      title: "Predictive modelling on Spotify data",
      subtitle: "Regression, data quality and model comparison",
      client: "Independent technical portfolio / research project",
      sector: "Data science",
      challenge: "Investigate which measurable track attributes are useful for predicting song popularity and compare several regression approaches.",
      solution: "The notebook documents preprocessing, null-value handling, duplicate removal, exploratory visualisation and regression modelling using linear regression, SVM, random forest, decision tree and gradient boosting.",
      outcome: "Produced a structured modelling workflow with explicit data-cleaning and evaluation steps, useful as evidence of practical analytical method rather than a production forecast.",
      technologies: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn"],
      procurementSignals: ["Data quality", "Model evaluation", "Exploratory analysis", "Clear methodology"],
      repoUrl: "https://github.com/DhairyaGogri/RegressionSpotify"
    },
    {
      id: "deep-reinforcement-learning",
      status: "verified portfolio evidence",
      kind: "technical portfolio",
      category: "Advanced computing",
      title: "Deep reinforcement learning research",
      subtitle: "Multi-agent learning and experimental evaluation",
      client: "MSc / dissertation research project",
      sector: "Advanced computer science",
      challenge: "Evaluate how reinforcement-learning approaches perform in a repeated strategic environment and investigate improvements beyond basic Q-learning.",
      solution: "The project documents Q-learning applied to the iterated prisoner's dilemma, including neural function approximation, experience replay, hyperparameter tuning, multiple learning agents and tournament-based evaluation.",
      outcome: "Delivered a documented research implementation, experimental methodology and analysis of where basic and more advanced learning approaches succeed or fail.",
      technologies: ["Python", "Q-learning", "Deep reinforcement learning", "Axelrod"],
      procurementSignals: ["Experimental design", "Technical research", "Model evaluation", "Documentation"],
      repoUrl: "https://github.com/DhairyaGogri/Evolution-of-deep-reinforcement-learning-algorithm"
    },

    /* These entries are intentionally not represented as completed contracts. */
    {
      id: "illustrative-place-map",
      status: "illustrative example",
      kind: "prospective case study",
      category: "Public sector",
      title: "Local place discovery & digital mapping service",
      subtitle: "A curated alternative to generic navigation for residents and visitors",
      client: "Illustrative local authority / place partnership",
      sector: "Local government, tourism & place",
      challenge: "A town centre has useful local destinations, heritage assets and green spaces, but information is fragmented across pages, maps and third-party services.",
      solution: "Create a responsive, accessible place-discovery map with curated categories, story-led points of interest, route ideas, search, content management and clear hand-off to external navigation tools.",
      outcome: "Intended outcome: clearer discovery, stronger local storytelling, easier wayfinding and better visibility for town-centre destinations. Final measures would be agreed with the buyer.",
      technologies: ["Accessible web UI", "Interactive mapping", "Structured content", "APIs", "Analytics"],
      procurementSignals: ["Accessibility", "User-centred design", "Data governance", "Value for money"],
      templateNote: "Replace the client, scope, dates, measures and delivery details with a real project before publishing this as completed work."
    },
    {
      id: "illustrative-service-directory",
      status: "illustrative example",
      kind: "prospective case study",
      category: "Public sector",
      title: "Accessible public-service directory",
      subtitle: "Searchable information service for residents and frontline teams",
      client: "Illustrative public-sector body",
      sector: "Central or local government",
      challenge: "Residents and staff need to find accurate service information quickly, including contact routes, eligibility information and location-specific support.",
      solution: "Design a mobile-first directory with plain-language content, robust search and filtering, structured service records, accessible templates, clear ownership and a lightweight administration workflow.",
      outcome: "Intended outcome: faster task completion, reduced duplication, improved content consistency and a maintainable service that can evolve with policy or organisational change.",
      technologies: ["Semantic HTML", "Accessible components", "Search & filtering", "Structured data", "Content workflows"],
      procurementSignals: ["WCAG-aligned delivery", "Content governance", "Maintainability", "Operational efficiency"],
      templateNote: "Replace the client, scope, dates, measures and delivery details with a real project before publishing this as completed work."
    },
    {
      id: "illustrative-performance-dashboard",
      status: "illustrative example",
      kind: "prospective case study",
      category: "Public sector",
      title: "Operational performance dashboard",
      subtitle: "Decision-ready reporting from fragmented operational data",
      client: "Illustrative council, arm's-length body or public service",
      sector: "Public-sector data & reporting",
      challenge: "Operational teams rely on multiple spreadsheets or data exports and need a consistent view of service demand, performance and emerging issues.",
      solution: "Create a governed data model, automated refresh process and accessible dashboard with agreed KPI definitions, exception views and audit-friendly documentation.",
      outcome: "Intended outcome: less manual reporting effort, clearer management information, faster identification of service issues and stronger confidence in reported figures.",
      technologies: ["Python", "SQL", "Data validation", "Dashboard UI", "Documentation"],
      procurementSignals: ["Data quality", "Auditability", "Value for money", "Decision support"],
      templateNote: "Replace the client, scope, dates, measures and delivery details with a real project before publishing this as completed work."
    },
    {
      id: "illustrative-secure-workflow",
      status: "illustrative example",
      kind: "prospective case study",
      category: "Public sector",
      title: "Secure digital workflow and case intake",
      subtitle: "Accessible forms with controlled data handling and clear status",
      client: "Illustrative public-sector service",
      sector: "Digital service delivery",
      challenge: "A paper/email-led process creates avoidable manual handling, weak status visibility and inconsistent information capture.",
      solution: "Design an accessible digital intake journey with validation, role-based access, audit-friendly status changes, notifications and clear data-retention rules.",
      outcome: "Intended outcome: higher-quality submissions, faster routing, better service visibility and reduced administrative rework while keeping data protection requirements explicit.",
      technologies: ["Accessible forms", "Server-side validation", "Role-based access", "Audit logging", "Data-retention controls"],
      procurementSignals: ["Security", "Privacy by design", "Accessibility", "Operational efficiency"],
      templateNote: "Replace the client, scope, dates, measures and delivery details with a real project before publishing this as completed work."
    }
  ];

  const container = document.querySelector("[data-project-grid]");
  const filters = document.querySelector("[data-project-filters]");
  const count = document.querySelector("[data-project-count]");
  if (!container || !filters) return;

  let activeFilter = "all";

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);

  const render = () => {
    const visible = projects.filter((project) =>
      activeFilter === "all" ||
      (activeFilter === "verified" && project.status === "verified portfolio evidence") ||
      (activeFilter === "public-sector" && project.category === "Public sector") ||
      (activeFilter === "data" && project.category === "Data & AI") ||
      (activeFilter === "software" && (project.category === "Software delivery" || project.category === "Web & application"))
    );

    container.innerHTML = visible.map((project) => {
      const tagClass = project.status === "illustrative example" ? "status-tag status-tag-illustrative" : "status-tag";
      const source = project.repoUrl
        ? `<a class="btn btn-secondary" href="${escapeHtml(project.repoUrl)}" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>`
        : "";
      const note = project.templateNote
        ? `<div class="case-study-note"><strong>Publishing note</strong><span>${escapeHtml(project.templateNote)}</span></div>`
        : "";
      return `
        <article class="case-study-card card">
          <div class="case-study-topline">
            <span class="${tagClass}">${escapeHtml(project.status)}</span>
            <span class="case-study-kind">${escapeHtml(project.kind)}</span>
          </div>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="case-study-subtitle">${escapeHtml(project.subtitle)}</p>
          <dl class="case-study-meta">
            <div><dt>Client / provenance</dt><dd>${escapeHtml(project.client)}</dd></div>
            <div><dt>Sector</dt><dd>${escapeHtml(project.sector)}</dd></div>
          </dl>
          <div class="case-study-body">
            <div><h4>Challenge</h4><p>${escapeHtml(project.challenge)}</p></div>
            <div><h4>Solution</h4><p>${escapeHtml(project.solution)}</p></div>
            <div><h4>Outcome</h4><p>${escapeHtml(project.outcome)}</p></div>
          </div>
          <div class="pill-row">${project.technologies.map((item) => `<span class="pill">${escapeHtml(item)}</span>`).join("")}</div>
          <div class="case-study-signals"><strong>Procurement relevance</strong><span>${project.procurementSignals.map(escapeHtml).join(" · ")}</span></div>
          ${note}
          ${source ? `<div class="actions">${source}</div>` : ""}
        </article>
      `;
    }).join("");

    count.textContent = `${visible.length} ${visible.length === 1 ? "project" : "projects"} shown`;
  };

  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    activeFilter = button.dataset.filter;
    filters.querySelectorAll("button[data-filter]").forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("active", active);
      candidate.setAttribute("aria-pressed", String(active));
    });
    render();
  });

  render();
})();