const main = document.querySelector("main");
const menuPage = document.querySelector("#menu");
const hamburger = document.querySelector("#hamburger");
const signupBtn = document.querySelector("#signupBtn");
const modelSignup = document.querySelector("#modelSignup");
const loginBtn = document.querySelector("#loginBtn");
const modelLogin = document.querySelector("#modelLogin");
const accForLogin = document.querySelector("#accForLogin");
const accForSignup = document.querySelector("#accForSignup");

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
crossbutton.addEventListener("click", () => {
  modelLogin.classList.toggle("hidden");
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modelSignup.classList.remove("hidden");
  modelLogin.classList.add("hidden");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modelLogin.classList.remove("hidden");
  modelSignup.classList.add("hidden");
});

accForSignup.addEventListener("click", (e) => {
  e.preventDefault();
  modelSignup.classList.remove("hidden");
  modelLogin.classList.add("hidden");
});

accForLogin.addEventListener("click", (e) => {
  e.preventDefault();
  modelLogin.classList.remove("hidden");
  modelSignup.classList.add("hidden");
});
