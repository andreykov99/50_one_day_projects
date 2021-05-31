function populate() {
  while (true) {
    let windowRelativeBottom =
      document.documentElement.getBoundingClientRect().bottom;
    if (windowRelativeBottom > document.documentElement.clientHeight + 100)
      break;
    document.body.insertAdjacentHTML(
      "beforeend",
      `<div class="card"><div class="text">Content</div></div>`
    );
  }
}

function isVisible(elem) {
  let coords = elem.getBoundingClientRect();

  let windowHeight = document.documentElement.clientHeight;

  // верхний край элемента виден?
  let topVisible = coords.top > 0 && coords.top < windowHeight;

  // нижний край элемента виден?
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return topVisible || bottomVisible;
}

const showVisible = () => {
  const cards = document.querySelectorAll(".card");
  for (let card of cards) {
    if (isVisible(card)) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  }
};
showVisible();

window.onscroll = showVisible;
window.addEventListener("scroll", populate);
