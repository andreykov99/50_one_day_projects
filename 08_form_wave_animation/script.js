const wavies = document.querySelectorAll(".wavytext");
const inputs = document.querySelectorAll("input");
console.log("#####:  ", inputs.length);

for (input of inputs) {
  input.addEventListener("focus", (e) => {
    const inputBx = e.target.parentElement;
    inputBx.querySelector(".wavytext").classList.add("active");
  });
  input.addEventListener("blur", (e) => {
    const inputBx = e.target.parentElement;
    if (!e.target.value)
      inputBx.querySelector(".wavytext").classList.remove("active");
  });
}

for (wavy of wavies) {
  const text = wavy.textContent;
  wavy.textContent = "";
  let target = "";
  for (let i = 0; i < text.length; i += 1) {
    target = `${target}<span style="--i:${i};">${text[i]}</span>`;
  }
  wavy.insertAdjacentHTML("beforeend", target);
}
