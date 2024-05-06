document.addEventListener("DOMContentLoaded", () => {
  const projectsButton = document.querySelector("[data-collapse-toggle='dropdown-example']");
  const dropdownMenu = document.getElementById("dropdown-example");
  const dropdownArrow = document.getElementById("dropdown-arrow");
  const projectsText = document.getElementById("projects-text");

  if (projectsButton && dropdownMenu && dropdownArrow && projectsText) {
    // DISPLAY OPEN INITIAL
      dropdownMenu.classList.remove("hidden");
      dropdownMenu.classList.remove("opacity-0");
      projectsButton.addEventListener("click", () => {
          dropdownMenu.classList.toggle("opacity-0");
          dropdownMenu.classList.toggle("hidden");
          
          // Toggle rotation of the arrow icon
          dropdownArrow.classList.toggle("rotate-270");

          if (dropdownMenu.classList.contains("hidden")) {
              dropdownArrow.classList.remove("align-self-right");
          } else {
              dropdownArrow.classList.add("");
          }
      });
  }
});
