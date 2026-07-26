(() => {
  const config = window.ONECLICK_CONFIG || {};
  const placeholders = new Set([
    "PASTE_YOUR_DISCORD_INSTALL_URL_HERE",
    "PASTE_YOUR_APP_DIRECTORY_URL_HERE",
    "PASTE_YOUR_SUPPORT_SERVER_INVITE_HERE"
  ]);

  const bindConfiguredLink = (selector, value) => {
    document.querySelectorAll(selector).forEach((element) => {
      const valid =
        typeof value === "string" &&
        value.startsWith("https://") &&
        !placeholders.has(value);

      if (valid) {
        element.href = value;
        element.target = "_blank";
        element.rel = "noopener noreferrer";
      } else {
        element.href = "#";
        element.classList.add("disabled-link");
        element.addEventListener("click", (event) => {
          event.preventDefault();
          alert("Add the real Discord URL in site-config.js before publishing.");
        });
      }
    });
  };

  bindConfiguredLink(".install-link", config.installUrl);
  bindConfiguredLink(".directory-link", config.appDirectoryUrl);
  bindConfiguredLink(".support-server-link", config.supportServerUrl);

  const setLanguage = (language) => {
    const selected = language === "de" ? "de" : "en";
    document.documentElement.lang = selected;

    document.querySelectorAll("[data-en][data-de]").forEach((element) => {
      const value = element.dataset[selected];
      if (value) element.textContent = value;
    });

    document.querySelectorAll("[data-language]").forEach((button) => {
      button.classList.toggle(
        "active",
        button.dataset.language === selected
      );
    });

    localStorage.setItem("oneclick-language", selected);
  };

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.language);
    });
  });

  const savedLanguage = localStorage.getItem("oneclick-language");
  const browserLanguage = navigator.language?.toLowerCase().startsWith("de")
    ? "de"
    : "en";
  setLanguage(savedLanguage || browserLanguage);

  const revealElements = document.querySelectorAll(".reveal");

  if (
    "IntersectionObserver" in window &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealElements.forEach((element) => observer.observe(element));
  } else {
    revealElements.forEach((element) => element.classList.add("visible"));
  }
})();
