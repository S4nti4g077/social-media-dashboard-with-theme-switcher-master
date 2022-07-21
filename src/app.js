const checkbox = document.querySelector(".checkbox");
const body = document.querySelector(".body");
const container = document.querySelectorAll(".light");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("darkMode");

    container.forEach((element) => {
      element.classList.add("darkMode1");
    });
  } else {
    body.classList.remove("darkMode");

    container.forEach((element) => {
      element.classList.remove("darkMode1");
    });
  }
});
