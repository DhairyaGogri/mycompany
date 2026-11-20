(function () {
  "use strict";

  const login = document.querySelector("[data-portal-login]");
  const dashboard = document.querySelector("[data-portal-dashboard]");
  const content = document.querySelector("[data-view-content]");
  const title = document.querySelector("[data-view-title]");
  const roleLabel = document.querySelector("[data-portal-role]");
  const menu = document.querySelector(".portal-menu");
  if (!login || !dashboard || !content || !title || !roleLabel || !menu) return;

  let demoRole = "admin";

  const employees = [
    "Smit Gogri", "Nikhil Shah", "Varun Somaiya", "Harsh Dand",
    "Yash Shah", "Keira Cuerden", "Sebin Sebastian", "Akash Kannan",
    "Roshan Pradhan"
  ];

  const policies = [
    ["Privacy and data protection", "Live draft", "Annual review"],
    ["Information security", "Live draft", "Annual review"],
    ["Accessibility", "Live draft", "Annual review"],
    ["Anti-bribery", "Live draft", "Annual review"],
    ["Equality and fair work", "Live draft", "Annual review"],
    ["Health and safety", "Live draft", "Annual review"],
    ["Whistleblowing", "Live draft", "Annual review"],
    ["Disciplinary procedure", "Not created", "Required"],
    ["Capability procedure", "Not created", "Required"],
    ["Work from home", "Not created", "Add this policy"],
    ["Maternity leave", "Not created", "Add this policy"],
    ["Paternity and partner leave", "Not created", "Add this policy"]
  ];

  const escapeHtml = (value) =>
    String(value).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);

  const overview = () => `
    <div class="portal-grid">
      <article class="card"><h3>${employees.length + 1}</h3><p>Admin and employee records in a full portal</p></article>
      <article class="card"><h3>${policies.length}</h3><p>Policy pack items tracked in this preview</p></article>
      <article class="card"><h3>Draft</h3><p>Production approval and publication status</p></article>
    </div>
    <div class="card" style="margin-top:18px">
      <h3>Director attention</h3>
      <p>Add employment policies, approve the existing draft pack, verify right-to-work records, and configure secure identity storage before using this portal for real people.</p>
    </div>`;

  const employeeDirectory = () => `
    <div class="portal-toolbar">
      <p class="small">Names are previews; no personal contact details or documents are stored.</p>
      ${demoRole === "admin" ? '<button type="button" class="btn btn-primary" data-demo-action="add-employee">Add employee preview</button>' : ""}
    </div>
    <div class="portal-table-wrap"><table class="portal-table">
      <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>Director (admin)</td><td>Administrator</td><td><span class="portal-status">Preview</span></td></tr>
        ${employees.map((name, index) => `<tr><td>${escapeHtml(name)}</td><td>${escapeHtml(["Delivery Lead","Technical Lead","Solutions Consultant","UX Lead","Data Analyst","Content / Research","QA Engineer","Delivery & Support","Business Support Analyst"][index])}</td><td><span class="portal-status-draft portal-status">Review details</span></td></tr>`).join("")}
      </tbody>
    </table></div>`;

  const policyList = () => `
    <div class="portal-toolbar">
      <p class="small">Policy text should be reviewed, approved and version-controlled.</p>
      ${demoRole === "admin" ? '<button type="button" class="btn btn-primary" data-demo-action="add-policy">Add policy preview</button>' : ""}
    </div>
    <div class="portal-table-wrap"><table class="portal-table">
      <thead><tr><th>Policy</th><th>Status</th><th>Review</th></tr></thead>
      <tbody>${policies.map(([name, status, review]) => `<tr><td>${escapeHtml(name)}</td><td><span class="portal-status ${status === "Not created" ? "portal-status-draft" : ""}">${escapeHtml(status)}</span></td><td>${escapeHtml(review)}</td></tr>`).join("")}</tbody>
    </table></div>`;

  const documents = () => `
    <div class="portal-grid">
      <article class="card"><h3>Employee documents</h3><p>Contracts, right-to-work evidence and signed acknowledgements belong in restricted storage only.</p></article>
      <article class="card"><h3>Policy documents</h3><p>Approved PDF or controlled web versions should have owners and expiry dates.</p></article>
      <article class="card"><h3>Training records</h3><p>Completion, assessments and refresher dates should be recorded separately from policy text.</p></article>
    </div>`;

  const tasks = () => `
    <div class="portal-table-wrap"><table class="portal-table">
      <thead><tr><th>Task</th><th>Owner</th><th>Status</th></tr></thead>
      <tbody>
        <tr><td>Approve policy pack</td><td>Director</td><td><span class="portal-status-draft portal-status">Required</span></td></tr>
        <tr><td>Configure secure authentication</td><td>Administrator</td><td><span class="portal-status-draft portal-status">Backend required</span></td></tr>
        <tr><td>Add employment policy set</td><td>Director / adviser</td><td><span class="portal-status-draft portal-status">Required</span></td></tr>
        <tr><td>Verify employee details</td><td>Director</td><td><span class="portal-status-draft portal-status">Required</span></td></tr>
      </tbody>
    </table></div>`;

  const settings = () => demoRole === "admin"
    ? `<div class="portal-grid">
        <article class="card"><h3>Authentication</h3><p>Configure email sign-in, MFA and recovery through a production provider.</p></article>
        <article class="card"><h3>Roles</h3><p>Use admin, employee and named approver roles with least-privilege rules.</p></article>
        <article class="card"><h3>Retention</h3><p>Set employee, policy, document and audit-log retention periods.</p></article>
        <article class="card"><h3>Audit logs</h3><p>Log sign-in, role changes, policy edits, downloads and administrative actions.</p></article>
        <article class="card"><h3>Security alerts</h3><p>Add unusual-sign-in alerts, lockout review and incident escalation.</p></article>
        <article class="card"><h3>Backups</h3><p>Protect production records with encrypted backups and restore tests.</p></article>
      </div>`
    : `<div class="notice"><strong>Administrator-only settings</strong>Employee accounts can view assigned policies and tasks only.</div>`;

  const views = {
    overview: ["Overview", overview],
    employees: ["Employee directory", employeeDirectory],
    policies: ["Policies", policyList],
    documents: ["Documents", documents],
    tasks: ["Work and training", tasks],
    settings: ["Admin settings", settings]
  };

  const showView = (view) => {
    const selected = views[view] || views.overview;
    title.textContent = selected[0];
    content.innerHTML = selected[1]();
    menu.querySelectorAll("[data-view]").forEach((button) => {
      button.classList.toggle("active", button.dataset.view === view);
    });
  };

  login.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    demoRole = document.querySelector("#demo-role").value;
    roleLabel.textContent = demoRole === "admin"
      ? "Administrator preview"
      : "Employee preview";
    login.style.display = "none";
    dashboard.style.display = "block";
    showView("overview");
  });

  menu.addEventListener("click", (event) => {
    const button = event.target.closest("[data-view]");
    if (!button) return;
    showView(button.dataset.view);
  });

  dashboard.querySelector("[data-logout]").addEventListener("click", () => {
    dashboard.style.display = "none";
    login.style.display = "block";
  });

  content.addEventListener("click", (event) => {
    const action = event.target.closest("[data-demo-action]");
    if (!action) return;
    const message = action.dataset.demoAction === "add-policy"
      ? "Policy creation is disabled in this preview. Production setup should validate the policy, owner, review date and restricted file storage."
      : "Employee creation is disabled in this preview. Production setup should verify identity and collect details only in a secure, access-controlled backend.";
    window.alert(message);
  });
})();
