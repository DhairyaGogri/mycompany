(function () {
  "use strict";

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });

    links.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && links.classList.contains("open")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === path || (!path && href === "index.html")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const analyticsId = document.documentElement.dataset.analyticsId;
  const analyticsKey = "site-analytics-consent";

  const loadAnalytics = () => {
    if (!analyticsId) return;
    if (document.querySelector('script[data-analytics-loader]')) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", analyticsId, { anonymize_ip: true });

    const script = document.createElement("script");
    script.async = true;
    script.dataset.analyticsLoader = "true";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(analyticsId)}`;
    document.head.appendChild(script);
  };

  const consentChoice = (() => {
    try {
      return localStorage.getItem(analyticsKey);
    } catch (_) {
      return null;
    }
  })();

  if (consentChoice === "accepted") loadAnalytics();

  if (!consentChoice) {
    const banner = document.createElement("aside");
    banner.className = "consent-banner";
    banner.setAttribute("aria-label", "Analytics consent");
    banner.innerHTML =
      '<div class="consent-copy"><strong>Privacy choices</strong>' +
      '<span>Optional analytics are off until you choose to allow them. Essential website storage is not used for tracking.</span></div>' +
      '<div class="consent-actions">' +
      '<button type="button" class="btn btn-secondary" data-consent="rejected">Reject optional analytics</button>' +
      '<button type="button" class="btn btn-primary" data-consent="accepted">Allow optional analytics</button>' +
      '</div>';
    document.body.appendChild(banner);

    banner.addEventListener("click", (event) => {
      const button = event.target.closest("[data-consent]");
      if (!button) return;
      const choice = button.dataset.consent;
      try {
        localStorage.setItem(analyticsKey, choice);
      } catch (_) {
        // The choice is session-only if browser storage is unavailable.
      }
      banner.remove();
      if (choice === "accepted") loadAnalytics();
    });
  }

  document.querySelectorAll("[data-privacy-settings]").forEach((button) => {
    button.addEventListener("click", () => {
      try {
        localStorage.removeItem(analyticsKey);
      } catch (_) {}
      location.reload();
    });
  });

  const enquiryForm = document.querySelector("[data-enquiry-form]");
  const formStatus = document.querySelector("#form-status");
  if (enquiryForm && formStatus) {
    enquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!enquiryForm.reportValidity()) return;

      const data = new FormData(enquiryForm);
      const fields = [
        ["Name", data.get("name")],
        ["Email", data.get("email")],
        ["Organisation", data.get("company") || "Not provided"],
        ["Enquiry type", data.get("type")],
        ["Message", data.get("message")]
      ];
      const text = fields
        .map(([label, value]) => `${label}: ${String(value).trim()}`)
        .join("\n\n");
      const blob = new Blob([`DHAIRYA & SMIT GOGRI LTD enquiry\n\n${text}\n`], {
        type: "text/plain;charset=utf-8"
      });
      const url = URL.createObjectURL(blob);
      const download = document.createElement("a");
      download.href = url;
      download.download = "company-enquiry.txt";
      download.click();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);

      formStatus.hidden = false;
      formStatus.focus();
    });
  }
})();
