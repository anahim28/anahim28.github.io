document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(button => {
    button.addEventListener("click", () => {
      const slider = button.nextElementSibling;

      if (slider.style.height) {
        slider.style.height = null;
        button.classList.remove("active");
      } else {
        toggles.forEach(otherBtn => {
          if (otherBtn !== button) {
            otherBtn.classList.remove("active");
            otherBtn.nextElementSibling.style.height = null;
          }
        });

        button.classList.add("active");
        slider.style.height = slider.scrollHeight + "px";
      }
    });
  });
});
