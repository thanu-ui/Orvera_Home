/* =========================================================
   ORVERA HOME
   UI PREFERENCES + MOBILE NAVIGATION + DATE/TIME ICONS

   JavaScript is used only for:
   - Dark mode
   - RTL / LTR
   - Mobile hamburger open/close
   - Date/time field icons
   ========================================================= */

/* =========================================================
   0. SHARED SITE HEADER + FOOTER
   ========================================================= */

(function () {
  const header = `
    <header class="site-header">
      <div class="container navwrap">
        <a class="brand" href="index.html" aria-label="Orvera Home">
          <img src="assets/orvexa-logo-transparent.png" alt="Orvera Home logo">
          <span class="brand-copy">
            <span class="brand-name"><span class="orvera">Orvera</span><span class="home">Home</span></span>
            <small>Connected Care. Right at Home.</small>
          </span>
        </a>
        <input class="nav-toggle" type="checkbox" id="nav-toggle" aria-label="Toggle navigation">
        <nav class="nav" id="nav" aria-label="Main navigation">
          <div class="drop">
            <a class="drop-home" href="index.html">Home</a>
            <button class="drop-toggle" type="button" aria-label="Open home pages" aria-expanded="false" aria-controls="home-menu">
              <i class="bi bi-chevron-down" aria-hidden="true"></i>
            </button>
            <div class="dropmenu" id="home-menu">
              <a href="index.html">Home 1 — Classic</a>
              <a href="home2.html">Home 2 — Premium</a>
            </div>
          </div>
          <a href="about.html">About</a>
          <a href="services.html">Services</a>
          <a href="pricing.html">Pricing</a>
          <a href="contact.html">Contact</a>
          <a href="dashboard.html">Dashboard</a>
          <a class="nav-login" href="login.html">Log in</a>
        </nav>
        <div class="header-controls">
          <div class="actions">
            <button class="icon theme-control" type="button" onclick="themeToggle()" aria-label="Switch dark mode" title="Dark Mode">
              <i class="bi bi-moon-stars"></i>
            </button>
            <button class="icon direction-control" type="button" onclick="rtlToggle()" aria-label="Switch RTL" title="RTL">RTL</button>
            <a class="login-control" href="login.html">Log in</a>
          </div>
          <label class="icon mobile" for="nav-toggle" aria-label="Open navigation" title="Open menu">
            <i class="bi bi-list"></i>
          </label>
        </div>
      </div>
    </header>`;

  const footer = `
    <footer class="site-footer">
      <div class="container">
        <div class="site-footer-grid">
          <div class="footer-brand-column">
            <a class="brand" href="index.html" aria-label="Orvera Home">
              <img src="assets/orvexa-logo-transparent.png" alt="Orvera Home logo">
              <span class="brand-copy">
                <span class="brand-name"><span class="orvera">Orvera</span><span class="home">Home</span></span>
                <small>Connected Care. Right at Home.</small>
              </span>
            </a>
            <p class="footer-description">Connected care, professional home visits and simple health tracking in one place.</p>
            <div class="footer-social">
              <a href="#" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
              <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i class="bi bi-twitter"></i></a>
            </div>
          </div>
          <div class="footer-column">
            <h4>Explore</h4>
            <a href="index.html">Home</a>
            <a href="about.html">About</a>
            <a href="services.html">Services</a>
            <a href="pricing.html">Pricing</a>
            <a href="contact.html">Contact</a>
          </div>
          <div class="footer-column">
            <h4>Services</h4>
            <a href="vitals.html">Vital Checks</a>
            <a href="medications.html">Medication Review</a>
            <a href="appointments.html">Wellness Visits</a>
            <a href="vitals.html">Home Health Monitoring</a>
          </div>
          <div class="footer-column">
            <h4>Additional Pages</h4>
            <a href="dashboard.html">Patient Dashboard</a>
            <a href="support.html">Help &amp; Support</a>
          </div>
          <div class="footer-column footer-contact">
            <h4>Contact Us</h4>
            <div class="contact-item"><i class="bi bi-geo-alt-fill"></i><span>Hyderabad, Telangana</span></div>
            <div class="contact-item"><i class="bi bi-telephone-fill"></i><a href="tel:+919876543210">+91 98765 43210</a></div>
            <div class="contact-item"><i class="bi bi-envelope-fill"></i><a href="mailto:hello@orverahome.com">hello@orverahome.com</a></div>
          </div>
        </div>
        <div class="site-footer-bottom">
          <span>© 2026 Orvera Home. All rights reserved.</span>
          <span>Connected Care. Right at Home.</span>
        </div>
      </div>
    </footer>`;

  function renderSharedChrome() {
    const body = document.body;
    if (body.classList.contains("dashboard-page") || body.classList.contains("auth-page")) {
      return;
    }

    body.querySelectorAll(":scope > header.header, :scope > header.site-header, :scope > footer.footer, :scope > footer.site-footer").forEach(function (element) {
      element.remove();
    });

    body.insertAdjacentHTML("afterbegin", header);
    body.insertAdjacentHTML("beforeend", footer);

    const homeDropdown = body.querySelector(".site-header .nav .drop");
    const homeDropdownToggle = homeDropdown
      ? homeDropdown.querySelector(".drop-toggle")
      : null;

    if (homeDropdownToggle && homeDropdown) {
      homeDropdownToggle.addEventListener("click", function () {
        const isOpen = homeDropdown.classList.toggle("open");
        homeDropdownToggle.setAttribute("aria-expanded", String(isOpen));
        homeDropdownToggle.setAttribute(
          "aria-label",
          isOpen ? "Close home pages" : "Open home pages"
        );
      });
    }

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";


body.querySelectorAll(".site-header .nav a").forEach(function (link) {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

        link.setAttribute("aria-current", "page");

    }

});


/* Keep HOME active for both Home 1 and Home 2 */

if (currentPage === "index.html" || currentPage === "home2.html") {

    const homeLink =
        body.querySelector(".site-header .nav .drop-home");

    if (homeLink) {

        homeLink.classList.add("active");

        homeLink.setAttribute("aria-current", "page");

    }

}
  }

  if (document.body) {
    renderSharedChrome();
  }
})();


/* =========================================================
   1. THEME + RTL PREFERENCES
   ========================================================= */

(function () {

  function updatePreferenceControls() {

    const theme =
      document.documentElement.dataset.theme || "light";

    const dir =
      document.documentElement.dir || "ltr";


    /* -----------------------------
       DARK MODE BUTTON
       ----------------------------- */

    document.querySelectorAll(".theme-control").forEach(function (button) {

      button.innerHTML =
        theme === "dark"
          ? '<i class="bi bi-sun"></i>'
          : '<i class="bi bi-moon-stars"></i>';

      button.setAttribute(
        "aria-label",
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode"
      );

      button.title =
        theme === "dark"
          ? "Switch to light mode"
          : "Switch to dark mode";

    });


    /* -----------------------------
       RTL BUTTON
       ----------------------------- */

    document.querySelectorAll(".direction-control").forEach(function (button) {

      button.textContent =
        dir === "rtl"
          ? "LTR"
          : "RTL";

      button.setAttribute(
        "aria-label",
        dir === "rtl"
          ? "Switch to left-to-right"
          : "Switch to right-to-left"
      );

      button.title =
        dir === "rtl"
          ? "Switch to LTR"
          : "Switch to RTL";

    });

  }


  /* =====================================================
     DARK MODE
     ===================================================== */

  window.themeToggle = function () {

    const next =
      (document.documentElement.dataset.theme || "light") === "light"
        ? "dark"
        : "light";

    document.documentElement.dataset.theme = next;

    localStorage.setItem(
      "orvexa-theme",
      next
    );

    updatePreferenceControls();

  };


  /* =====================================================
     RTL / LTR
     ===================================================== */

  window.rtlToggle = function () {

    const next =
      (document.documentElement.dir || "ltr") === "ltr"
        ? "rtl"
        : "ltr";

    document.documentElement.dir = next;

    localStorage.setItem(
      "orvexa-dir",
      next
    );

    updatePreferenceControls();

  };


  /* =====================================================
     LOAD SAVED PREFERENCES
     ===================================================== */

  document.addEventListener("DOMContentLoaded", function () {

    document.documentElement.dataset.theme =
      localStorage.getItem("orvexa-theme") || "light";

    document.documentElement.dir =
      localStorage.getItem("orvexa-dir") || "ltr";

    updatePreferenceControls();

  });

})();



/* =========================================================
   2. MOBILE HAMBURGER
   ☰  <->  ✕
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const sideToggle = document.getElementById("side-toggle");

  if (sideToggle) {
    const dashboard = document.querySelector(".dashboard-page .dash");
    const menuButton = document.querySelector(".dashboard-page .dashboardMenu");

    function syncDashboardSidebar() {
      document.body.classList.toggle("sidebar-open", sideToggle.checked);
      if (menuButton) {
        menuButton.setAttribute("aria-expanded", String(sideToggle.checked));
      }
    }

    if (dashboard && !dashboard.querySelector(".sidebar-backdrop")) {
      const backdrop = document.createElement("button");
      backdrop.className = "sidebar-backdrop";
      backdrop.type = "button";
      backdrop.setAttribute("aria-label", "Close navigation");
      dashboard.insertBefore(backdrop, dashboard.firstChild);
      backdrop.addEventListener("click", function () {
        sideToggle.checked = false;
        syncDashboardSidebar();
      });
    }

    sideToggle.addEventListener("change", syncDashboardSidebar);
    syncDashboardSidebar();

    if (menuButton) {
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape" && sideToggle.checked) {
          sideToggle.checked = false;
          syncDashboardSidebar();
          menuButton.focus();
        }
      });
    }

    window.addEventListener("resize", function () {
      if (window.matchMedia("(min-width: 901px)").matches && sideToggle.checked) {
        sideToggle.checked = false;
        syncDashboardSidebar();
      }
    });
  }

  if (document.body.classList.contains("dashboard-page")) {
    const topUser = document.querySelector(".dashboard-page .topuser");
    if (topUser && !topUser.querySelector(".profile-menu")) {
      const themeButton = topUser.querySelector(".theme-control");
      const directionButton = topUser.querySelector(".direction-control");
      const notificationsButton = topUser.querySelector('[aria-label="Notifications"]');
      const avatar = topUser.querySelector(".avatar");
      if (notificationsButton) {
        notificationsButton.classList.add("notification-control");
      }

      const profileMenu = document.createElement("div");
      profileMenu.className = "profile-menu";
      profileMenu.innerHTML = `
        <button class="profile-menu-toggle" type="button" aria-expanded="false" aria-haspopup="true">
          <span class="profile-menu-avatar"></span>
          <span class="profile-menu-label">Profile</span>
          <i class="bi bi-chevron-down" aria-hidden="true"></i>
        </button>
        <nav class="profile-menu-dropdown" aria-label="Profile menu">
          <a href="profile.html"><i class="bi bi-person-circle" aria-hidden="true"></i>My Profile</a>
          <a href="support.html"><i class="bi bi-headset" aria-hidden="true"></i>Help &amp; Support</a>
          <a class="profile-menu-logout" href="login.html"><i class="bi bi-box-arrow-right" aria-hidden="true"></i>Log out</a>
        </nav>`;

      const profileToggle = profileMenu.querySelector(".profile-menu-toggle");
      const profileAvatar = profileMenu.querySelector(".profile-menu-avatar");
      if (avatar) {
        profileAvatar.append(avatar);
      } else {
        profileAvatar.textContent = "MK";
      }

      topUser.replaceChildren();
      [themeButton, directionButton, notificationsButton, profileMenu]
        .filter(Boolean)
        .forEach(function (control) {
          topUser.append(control);
        });

      profileToggle.addEventListener("click", function () {
        const isOpen = profileMenu.classList.toggle("open");
        profileToggle.setAttribute("aria-expanded", String(isOpen));
      });

      document.addEventListener("click", function (event) {
        if (!profileMenu.contains(event.target)) {
          profileMenu.classList.remove("open");
          profileToggle.setAttribute("aria-expanded", "false");
        }
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          profileMenu.classList.remove("open");
          profileToggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  }

  const navToggle =
    document.getElementById("nav-toggle");

  const mobileButton =
    document.querySelector(".site-header .mobile");

  const mobileIcon =
    mobileButton
      ? mobileButton.querySelector("i")
      : null;

  const header =
    document.querySelector(".site-header");

  const mobileNav =
    document.querySelector(".site-header .nav");

  const homeDropdown =
    document.querySelector(".site-header .nav .drop");
  const homeDropdownToggle =
    homeDropdown
      ? homeDropdown.querySelector(".drop-toggle")
      : null;

  function closeHomeDropdown() {
    if (homeDropdown) {
      homeDropdown.classList.remove("open");
    }
    if (homeDropdownToggle) {
      homeDropdownToggle.setAttribute("aria-expanded", "false");
      homeDropdownToggle.setAttribute("aria-label", "Open home pages");
    }
  }


  /* -------------------------------------------------------
     If page doesn't contain header, stop here
     ------------------------------------------------------- */

  if (!navToggle || !mobileButton) {
    return;
  }


  /* =======================================================
     UPDATE HAMBURGER ICON
     ======================================================= */

  function updateMobileMenuIcon() {

    if (!mobileIcon) {
      return;
    }

    document.body.classList.toggle("mobile-menu-open", navToggle.checked);
    mobileButton.setAttribute("aria-expanded", String(navToggle.checked));


    if (navToggle.checked) {

      /* ☰ -> ✕ */

      mobileIcon.classList.remove(
        "bi-list"
      );

      mobileIcon.classList.add(
        "bi-x-lg"
      );


      mobileButton.setAttribute(
        "aria-label",
        "Close navigation"
      );

      mobileButton.setAttribute(
        "title",
        "Close menu"
      );

    } else {

      /* ✕ -> ☰ */

      mobileIcon.classList.remove(
        "bi-x-lg"
      );

      mobileIcon.classList.add(
        "bi-list"
      );


      mobileButton.setAttribute(
        "aria-label",
        "Open navigation"
      );

      mobileButton.setAttribute(
        "title",
        "Open menu"
      );

    }

  }


  /* =======================================================
     OPEN / CLOSE MOBILE MENU
     ======================================================= */

  navToggle.addEventListener(
    "change",
    function () {

      updateMobileMenuIcon();


      if (!navToggle.checked) {
        closeHomeDropdown();
      }

    }
  );


  /* =======================================================
     INITIAL STATE
     ======================================================= */

  updateMobileMenuIcon();

  /* =======================================================
     CLOSE MENU AFTER NAVIGATION
     ======================================================= */

  if (mobileNav) {

    mobileNav.addEventListener("click", function (event) {
      if (event.target === mobileNav && navToggle.checked) {
        navToggle.checked = false;
        updateMobileMenuIcon();
        closeHomeDropdown();
      }
    });

    mobileNav
      .querySelectorAll("a")
      .forEach(function (link) {

        link.addEventListener(
          "click",
          function () {

            navToggle.checked = false;

            updateMobileMenuIcon();


            closeHomeDropdown();

          }
        );

      });

  }


  /* =======================================================
     CLOSE MENU WHEN CLICKING OUTSIDE
     ======================================================= */

  document.addEventListener(
    "click",
    function (event) {
      if (homeDropdown && !homeDropdown.contains(event.target)) {
        closeHomeDropdown();
      }

      if (!navToggle.checked) {
        return;
      }


      if (!header) {
        return;
      }


      if (!header.contains(event.target)) {

        navToggle.checked = false;

        updateMobileMenuIcon();
        closeHomeDropdown();

      }

    }
  );


  /* =======================================================
     CLOSE MENU WITH ESC KEY
     ======================================================= */

  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Escape") {
        closeHomeDropdown();
      }

      if (
        event.key === "Escape" &&
        navToggle.checked
      ) {

        navToggle.checked = false;

        updateMobileMenuIcon();
        closeHomeDropdown();

      }

    }
  );

});



/* =========================================================
   3. CUSTOM DATE & TIME ICONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const dateInputs =
    document.querySelectorAll(
      'input[type="date"], input[type="time"]'
    );


  if (!dateInputs.length) {
    return;
  }


  /* =======================================================
     ADD CSS FOR DATE/TIME ICONS
     ======================================================= */

  const style =
    document.createElement("style");


  style.textContent = `

    .orvera-picker-wrap {
      position: relative;
      width: 100%;
    }


    .orvera-picker-icon {
      position: absolute;

      top: 50%;
      right: 14px;

      transform: translateY(-50%);

      width: 20px;
      height: 20px;

      color: #02A59D;

      pointer-events: none;

      z-index: 5;

      transition:
        color .2s ease,
        transform .2s ease;
    }


    .orvera-picker-wrap:hover
    .orvera-picker-icon {
      color: #F86B4F;
    }


    .orvera-picker-wrap input {
      padding-right: 48px !important;
    }


    /* Hide browser native calendar icon */

    .orvera-picker-wrap input::-webkit-calendar-picker-indicator {

      opacity: 0 !important;

      width: 24px !important;
      height: 24px !important;

      cursor: pointer !important;
    }


    /* =====================================================
       RTL DATE/TIME
       ===================================================== */

    [dir="rtl"] .orvera-picker-icon {

      right: auto;

      left: 14px;
    }


    [dir="rtl"] .orvera-picker-wrap input {

      padding-right: 14px !important;

      padding-left: 48px !important;
    }


    /* =====================================================
       DARK MODE
       ===================================================== */

    [data-theme="dark"] .orvera-picker-icon {
      color: #02A59D;
    }


    [data-theme="dark"]
    .orvera-picker-wrap:hover
    .orvera-picker-icon {

      color: #F86B4F;
    }

  `;


  document.head.appendChild(style);


  /* =======================================================
     CREATE ICONS
     ======================================================= */

  dateInputs.forEach((input) => {

    /* Prevent duplicate icons */

    if (
      input.parentElement.classList.contains(
        "orvera-picker-wrap"
      )
    ) {
      return;
    }


    /* Create wrapper */

    const wrapper =
      document.createElement("div");

    wrapper.className =
      "orvera-picker-wrap";


    input.parentNode.insertBefore(
      wrapper,
      input
    );


    wrapper.appendChild(input);


    /* Create icon */

    const icon =
      document.createElement("span");

    icon.className =
      "orvera-picker-icon";

    icon.setAttribute(
      "aria-hidden",
      "true"
    );


    /* =====================================================
       DATE ICON
       ===================================================== */

    if (input.type === "date") {

      icon.innerHTML = `

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >

          <rect
            x="3"
            y="4.5"
            width="18"
            height="16"
            rx="2"
          ></rect>

          <path
            d="M16 2.5v4M8 2.5v4M3 9h18"
          ></path>

          <path
            d="
              M8 13h.01
              M12 13h.01
              M16 13h.01
              M8 17h.01
              M12 17h.01
              M16 17h.01
            "
          ></path>

        </svg>

      `;

    }


    /* =====================================================
       TIME ICON
       ===================================================== */

    else {

      icon.innerHTML = `

        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
        >

          <circle
            cx="12"
            cy="12"
            r="8.5"
          ></circle>

          <path
            d="M12 7.5v5l3.2 2"
          ></path>

        </svg>

      `;

    }


    wrapper.appendChild(icon);

  });

});