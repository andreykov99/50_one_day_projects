const cards = document.querySelectorAll(".card");

for (card of cards) {
  const btn = card.querySelector(".btn");
  btn.addEventListener("click", (e) => {
    e.target.parentNode.parentNode.classList.toggle("active");
  });
}
