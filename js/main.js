const menuToggle = document.querySelector("[data-menu-toggle]");
const mobileMenu = document.getElementById("mobile-menu");

if (menuToggle && mobileMenu) {
  const closeMenu = () => mobileMenu.close();

  menuToggle.addEventListener("click", () => {
    if (mobileMenu.open) {
      closeMenu();
    } else {
      mobileMenu.showModal();
      menuToggle.setAttribute("aria-expanded", "true");
    }
  });

  const closeButton = mobileMenu.querySelector("[data-menu-close]");
  if (closeButton) closeButton.addEventListener("click", closeMenu);
  mobileMenu.addEventListener("close", () => menuToggle.setAttribute("aria-expanded", "false"));
  mobileMenu.querySelectorAll("a[href]").forEach(link => link.addEventListener("click", closeMenu));
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024 && mobileMenu.open) closeMenu();
  });
}

// shortcut: language selection is visual only; add real translations when translated pages are ready.
const languageButtons = document.querySelectorAll("[data-language]");
languageButtons.forEach(button => {
  button.addEventListener("click", () => {
    const language = button.dataset.language;
    if (language !== "bn" && language !== "en") return;
    document.documentElement.lang = language;
    languageButtons.forEach(control => {
      control.setAttribute("aria-pressed", String(control.dataset.language === language));
    });
  });
});

document.querySelectorAll(".faq-toggle[aria-controls]").forEach(button => {
  const panel = document.getElementById(button.getAttribute("aria-controls"));
  if (!panel) return;
  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") !== "true";
    button.setAttribute("aria-expanded", String(expanded));
    panel.hidden = !expanded;
  });
});
