const checkbox = document.querySelector(".checkbox");
const body = document.querySelector(".body");
const containers = document.querySelectorAll(".light");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    console.log("checked");
    body.classList.add("darkMode");
  } else {
    console.log("not checked");
    body.classList.remove("darkMode");
  }
});
