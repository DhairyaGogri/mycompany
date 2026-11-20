(function () {
  "use strict";

  const projects = [
    {
      id: "company-corporate-website",
      status: "live company project",
      kind: "public website",
      category: "Software delivery",
      title: "DHAIRYA & SMIT GOGRI LTD corporate website",
      subtitle: "A responsive static company and tender-evidence website",
      client: "DHAIRYA & SMIT GOGRI LTD",
      sector: "Corporate and public-sector procurement",
      challenge: "Present company capabilities, evidence and controls clearly while keeping unsupported tender claims separate from verified facts.",
      solution: "Built a multi-page responsive website using semantic HTML, CSS and vanilla JavaScript, with privacy controls, mobile navigation, project filtering and procurement evidence pages.",
      outcome: "Published through GitHub Pages with HTTPS and publicly accessible routes for company, service, project and policy information.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages", "Accessibility"],
      procurementSignals: ["Public evidence", "Responsive delivery", "Privacy controls", "Maintainable implementation"],
      liveUrl: "https://dhairyagogri.github.io/mycompany/",
      repoUrl: "https://github.com/DhairyaGogri/mycompany"
    },
    {
      id: "founder-portfolio",
      status: "live portfolio project",
      kind: "public website",
      category: "Web & application",
      title: "Founder technical and professional portfolio",
      subtitle: "A live portfolio covering data, AI, software and professional experience",
      client: "Founder-led public portfolio",
      sector: "Technology, data and software",
      challenge: "Present technical work and professional experience clearly without obscuring which items are portfolio evidence and which are commercial company contracts.",
      solution: "Developed a published portfolio with project summaries, experience information, CV access and links to underlying public repositories.",
      outcome: "Provides a publicly accessible starting point for reviewing the founder's published technical work and software repositories.",
      technologies: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
      procurementSignals: ["Public provenance", "Technical portfolio", "Repository links", "Clear evidence status"],
      liveUrl: "https://dhairyagogri.github.io/",
      repoUrl: "https://github.com/DhairyaGogri/DhairyaGogri.github.io"
    },
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
      (activeFilter === "live" && Boolean(project.liveUrl)) ||
      (activeFilter === "data" && project.category === "Data & AI") ||
      (activeFilter === "software" && (project.category === "Software delivery" || project.category === "Web & application"))
    );

    container.innerHTML = visible.map((project) => {
      const tagClass = "status-tag";
      const source = project.repoUrl
        ? `<a class="btn btn-secondary" href="${escapeHtml(project.repoUrl)}" target="_blank" rel="noopener noreferrer">View repository <span aria-hidden="true">↗</span></a>`
        : "";
      const live = project.liveUrl
        ? `<a class="btn btn-primary" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer">View live project <span aria-hidden="true">↗</span></a>`
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
          ${(live || source) ? `<div class="actions">${live}${source}</div>` : ""}
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