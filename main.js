const rueda = document.querySelector(".carruselRueda");
const cartas = document.querySelectorAll(".carruselCarta");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 0;

function moveCarousel() {
  rueda.style.transform = `translateX(-${index * 100}%)`;
}

next.addEventListener("click", () => {
  index++;

  if (index >= cartas.length) {
    index = 0;
  }

  moveCarousel();
});

prev.addEventListener("click", () => {
  index--;

  if (index < 0) {
    index = cartas.length - 1;
  }

  moveCarousel();
});
