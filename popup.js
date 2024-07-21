document.getElementById("toggleDarkTheme").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: toggleDarkTheme,
    });
  });
});

function toggleDarkTheme() {
  if (document.documentElement.hasAttribute("dark-theme")) {
    document.documentElement.removeAttribute("dark-theme");
    document.querySelector("style#dark-theme-styles")?.remove();
  } else {
    document.documentElement.setAttribute("dark-theme", "true");
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
      header, footer, nav, aside {
        background-color: #1e1e1e !important;
        color: #e0e0e0 !important;
      }
      .navbar, .nav, .menu, .menu-item {
        background-color: #1e1e1e !important;
        color: #e0e0e0 !important;
      }
      .card, .panel, .widget {
        background-color: #2b2b2b !important;
        color: #e0e0e0 !important;
        border: 1px solid #444444 !important;
      }
      table, th, td {
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
      .alert, .notification, .message {
        background-color: #3a3a3a !important;
        color: #e0e0e0 !important;
      }
      .modal, .dialog, .popup {
        background-color: #3a3a3a !important;
        color: #e0e0e0 !important;
      }
      .banner, .ad, .advertisement {
        background-color: #333333 !important;
        color: #e0e0e0 !important;
      }
      .form-control, .form-group, .form-check {
        background-color: #333333 !important;
        color: #e0e0e0 !important;
        border: 1px solid #555555 !important;
      }
      .breadcrumb, .pagination, .pager {
        background-color: #2b2b2b !important;
        color: #e0e0e0 !important;
      }
      .dropdown-menu, .dropdown-item {
        background-color: #3a3a3a !important;
        color: #e0e0e0 !important;
      }
      .tooltip, .popover {
        background-color: #3a3a3a !important;
        color: #e0e0e0 !important;
      }
      .sidebar, .sidebar-menu {
        background-color: #2b2b2b !important;
        color: #e0e0e0 !important;
      }
      .list-group-item, .list-group {
        background-color: #2b2b2b !important;
        color: #e0e0e0 !important;
      }
      .badge, .tag, .label {
        background-color: #444444 !important;
        color: #e0e0e0 !important;
      }
      .breadcrumb-item a {
        color: #bb86fc !important;
      }
      .breadcrumb-item.active {
        color: #e0e0e0 !important;
      }
      .page-link {
        background-color: #333333 !important;
        color: #e0e0e0 !important;
        border: 1px solid #555555 !important;
      }
      .page-item.active .page-link {
        background-color: #555555 !important;
        border-color: #666666 !important;
      }
      /* Add more rules as necessary to target specific elements */
    `;
    const style = document.createElement("style");
    style.id = "dark-theme-styles";
    style.textContent = css;
    document.head.append(style);
  }
}
