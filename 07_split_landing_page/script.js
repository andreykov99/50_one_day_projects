const sections = document.querySelectorAll(".section");

for (section of sections) {
  section.addEventListener("mouseenter", (e) => {
    e.target.classList.add("max");
    e.target.classList.remove("min");
  });
  section.addEventListener("mouseleave", (e) => {
    e.target.classList.add("min");
    e.target.classList.remove("max");
  });
}
