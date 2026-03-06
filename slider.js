document.addEventListener("DOMContentLoaded", () => {

  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(button => {

    button.addEventListener("click", function () {

      const slider = this.nextElementSibling;

      if (slider.style.height) {

        slider.style.height = null;
        button.classList.remove("active");

      } else {

        document.querySelectorAll(".toggle.active").forEach(openBtn => {
          openBtn.classList.remove("active");
          openBtn.nextElementSibling.style.height = null;
        });

        button.classList.add("active");
        slider.style.height = slider.scrollHeight + "px";

      }

    });

  });

});
