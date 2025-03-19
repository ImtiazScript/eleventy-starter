document.addEventListener("DOMContentLoaded", function () {
  let loadedComponents = 0;
  const totalComponents = document.querySelectorAll("[data-include]").length;

  document.querySelectorAll("[data-include]").forEach((element) => {
    const filePath = element.getAttribute("data-include");
    fetch(filePath)
      .then((response) => response.text())
      .then((data) => {
        element.innerHTML = data;
        loadedComponents++;

        // After all components are loaded, set up event listeners
        if (loadedComponents === totalComponents) {

          // Highlight the active navigation link
          const navLinks = document.querySelectorAll(".nav-link");
          navLinks.forEach((link) => {
            if (link.href === window.location.href) {
              link.classList.add("is-active");
            }
          });
        }
      })
      .catch((error) => console.error("Error loading component:", error));
  });
});
