const checkbox = document.querySelector(".checkbox");
const body = document.querySelector(".body");
const container = document.querySelector(".container");
const containers = container.getElementsByClassName("light");

checkbox.addEventListener("change", function () {
  if (this.checked) {
    console.log("checked");
    body.classList.add("darkMode");
    containers.classList.add("darkMode");
  } else {
    console.log("not checked");
    body.classList.remove("darkMode");
  }
});
