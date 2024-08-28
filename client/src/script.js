const main = document.querySelector("main");
const menuPage = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");
const crossbutton = document.querySelector("#crossbutton");

hamburger.addEventListener("click", () => {
  main.classList.toggle("hidden");
  menuPage.classList.toggle("hidden");
});

crossbutton.addEventListener("click", () => {
  main.classList.toggle("hidden");
  menuPage.classList.toggle("hidden");
});

function updateInput(type) {
  const input = document.getElementById("contactInput");
  if (type === "email") {
    input.placeholder = "Enter your email";
    input.type = "email";
  } else if (type === "phone") {
    input.placeholder = "Enter your phone number";
    input.type = "tel";
  }
}
