const checkbox = document.querySelector(".checkbox");
const body = document.querySelector(".body");
const container = document.querySelectorAll(".light");
const socialMedia = document.querySelectorAll(".social-media");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    body.classList.add("darkMode");
    socialMedia.forEach((element) => {
      element.classList.add("darkMode1");
    });
    container.forEach((element) => {
      element.classList.add("darkMode1");
    });
  } else {
    body.classList.remove("darkMode");
    socialMedia.forEach((element) => {
      element.classList.remove("darkMode1");
    });
    container.forEach((element) => {
      element.classList.remove("darkMode1");
    });
  }
});
