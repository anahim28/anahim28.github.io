document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(button => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;

      if (content.style.height) {
        // Collapse this section
        content.style.height = null;
        button.classList.remove("active");
      } else {
        // Collapse all other sections
        toggles.forEach(otherBtn => {
          if (otherBtn !== button) {
            otherBtn.classList.remove("active");
            otherBtn.nextElementSibling.style.height = null;
          }
        });

        // Expand clicked section
        button.classList.add("active");
        content.style.height = content.scrollHeight + "px";
      }
    });
  });
});
