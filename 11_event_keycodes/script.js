const key = document.querySelector("#key");
const keyCode = document.querySelector("#keycode");
const code = document.querySelector("#code");

document.body.addEventListener("keydown", (e) => {
  key.innerHTML = e.key;
  keyCode.innerHTML = e.keyCode;
  code.innerHTML = e.code;
});
