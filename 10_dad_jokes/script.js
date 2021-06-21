const card = document.querySelector(".card");
const header = card.querySelector(".header");
const content = card.querySelector(".content");
const btn = card.querySelector("button");

const getJoke = async () => {
  const response = await fetch(
    "https://us-central1-dadsofunny.cloudfunctions.net/DadJokes/random/jokes"
  );
  const result = await response.json();
  header.innerText = result.setup;
  content.innerText = result.punchline;
  return;
};

btn.addEventListener("click", () => {
  getJoke();
});

getJoke();
