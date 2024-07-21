// Function to apply the dark theme
function applyDarkTheme() {
  const css = `
    body, html {
      background-color: #121212 !important;
      color: #e0e0e0 !important;
    }
    a {
      color: #bb86fc !important;
    }
    button, input, select, textarea {
      background-color: #333333 !important;
      color: #e0e0e0 !important;
      border: 1px solid #555555 !important;
    }
    header, footer, nav, aside, .navbar, .nav, .menu, .menu-item, .breadcrumb, .pagination, .pager, .modal, .dialog, .popup, .alert, .notification, .message {
      background-color: #1e1e1e !important;
      color: #e0e0e0 !important;
    }
    .card, .panel, .widget, table, th, td, .form-control, .form-group, .form-check, .sidebar, .sidebar-menu, .list-group-item, .list-group {
      background-color: #2b2b2b !important;
      color: #e0e0e0 !important;
      border: 1px solid #444444 !important;
    }
    .highlight, .code, pre {
      background-color: #2e2e2e !important;
      color: #f8f8f2 !important;
    }
    img, video {
      filter: brightness(0.8) contrast(1.2) !important;
    }
    .badge, .tag, .label, .breadcrumb-item.active, .dropdown-menu, .dropdown-item, .tooltip, .popover {
      background-color: #444444 !important;
      color: #e0e0e0 !important;
    }
    .breadcrumb-item a, .page-link {
      color: #bb86fc !important;
    }
    .page-item.active .page-link {
      background-color: #555555 !important;
      border-color: #666666 !important;
    }
    .banner, .ad, .advertisement, .form-control, .breadcrumb, .pagination, .pager, .list-group-item, .badge, .tag, .label {
      background-color: #333333 !important;
      color: #e0e0e0 !important;
    }
    /* Specific elements targeting for RGPV site */
    .header-top, .footer, .nav-menu, .nav-bar, .dropdown-menu, .dropdown-item, .submenu, .dropdown-toggle {
      background-color: #1e1e1e !important;
      color: #e0e0e0 !important;
    }
    .alert, .notice, .message, .modal, .popup {
      background-color: #3a3a3a !important;
      color: #e0e0e0 !important;
    }
    .form-group, .form-check, .breadcrumb-item, .pagination-item {
      background-color: #2b2b2b !important;
      color: #e0e0e0 !important;
      border: 1px solid #444444 !important;
    }
    .footer-links a, .nav-links a {
      color: #bb86fc !important;
    }
    /* Ensure all divs, spans, and other containers are covered */
    div, span, section, article {
      background-color: inherit !important;
      color: inherit !important;
    }
    /* Additional elements to ensure all areas are styled */
    .important-notice, .university-distinctiveness, .important-links {
      background-color: #1e1e1e !important;
      color: #e0e0e0 !important;
    }
    /* Specific rules for button contrast */
    .btn, .btn-primary, .btn-secondary, .btn-success, .btn-danger, .btn-warning, .btn-info, .btn-light, .btn-dark {
      color: #fff !important; /* Ensure all buttons have white text for contrast */
      background-color: #333 !important; /* Darken button background */
      border: 1px solid #555 !important; /* Ensure visible button border */
    }
    .btn-primary {
      background-color: #007bff !important;
      border-color: #007bff !important;
    }
    .btn-secondary {
      background-color: #6c757d !important;
      border-color: #6c757d !important;
    }
    .btn-success {
      background-color: #28a745 !important;
      border-color: #28a745 !important;
    }
    .btn-danger {
      background-color: #dc3545 !important;
      border-color: #dc3545 !important;
    }
    .btn-warning {
      background-color: #ffc107 !important;
      border-color: #ffc107 !important;
    }
    .btn-info {
      background-color: #17a2b8 !important;
      border-color: #17a2b8 !important;
    }
    .btn-light {
      background-color: #f8f9fa !important;
      border-color: #f8f9fa !important;
      color: #000 !important; /* Ensure dark text on light buttons */
    }
    .btn-dark {
      background-color: #343a40 !important;
      border-color: #343a40 !important;
    }
    /* Change black text to white or blue */
    *:not(a):not(.btn) {
      color: #e0e0e0 !important; /* Default to white */
    }
    a {
      color: #bb86fc !important; /* Change link text to blue */
    }
  `;

  const style = document.createElement("style");
  style.id = "dark-theme-styles";
  style.textContent = css;
  document.head.append(style);
}

// Function to remove the dark theme
function removeDarkTheme() {
  const style = document.querySelector("#dark-theme-styles");
  if (style) {
    style.remove();
  }
}

// Function to toggle the dark theme
function toggleDarkTheme() {
  if (document.documentElement.hasAttribute("dark-theme")) {
    document.documentElement.removeAttribute("dark-theme");
    removeDarkTheme();
  } else {
    document.documentElement.setAttribute("dark-theme", "true");
    applyDarkTheme();
  }
}

// Inject a button into the webpage to toggle the dark theme
function injectToggleButton() {
  const button = document.createElement("button");
  button.textContent = "Toggle Dark Theme";
  button.style.position = "fixed";
  button.style.bottom = "10px";
  button.style.right = "10px";
  button.style.zIndex = "1000";
  button.style.padding = "10px";
  button.style.backgroundColor = "#333";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";

  button.addEventListener("click", toggleDarkTheme);
  document.body.appendChild(button);
}

injectToggleButton();
applyDarkTheme(); // Apply dark theme by default, remove this line if you want it to be off by default
