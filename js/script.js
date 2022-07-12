let inputEl = document.querySelector("#my_input");
let btnEl = document.querySelector("#btn");

btnEl.addEventListener("click", togglePassword);

function togglePassword() {
  if (inputEl.type == "password") {
    inputEl.type = "string";
    this.innerHTML = "Hide";
  } else {
    inputEl.type = "password";
    this.innerHTML = "show";
  }
}
