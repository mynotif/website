document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-wrapper");
  const openButton = document.querySelector(".navbarOpen");
  const closeButton = document.querySelector(".navbarClose");
  const header = document.querySelector(".navbar");
  const backToTop = document.querySelector(".back-to-top");

  function setMenuOpen(isOpen, restoreFocus = false) {
    menu.classList.toggle("dc", !isOpen);
    document.body.classList.toggle("ze", isOpen);
    openButton.setAttribute("aria-expanded", String(isOpen));
    if (isOpen) closeButton.focus();
    if (restoreFocus) openButton.focus();
  }

  if (menu && openButton && closeButton) {
    openButton.addEventListener("click", () => setMenuOpen(true));
    closeButton.addEventListener("click", () => setMenuOpen(false, true));
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuOpen(false);
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
          target.setAttribute("tabindex", "-1");
          target.focus({ preventScroll: true });
        }
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.classList.contains("dc")) {
        setMenuOpen(false, true);
      }
    });
  }

  function updateScrollState() {
    header?.classList.toggle("sticky-navbar", window.scrollY >= 100);
    if (backToTop)
      backToTop.style.display = window.scrollY > 50 ? "flex" : "none";
  }

  window.addEventListener("scroll", updateScrollState, { passive: true });
  updateScrollState();
});
