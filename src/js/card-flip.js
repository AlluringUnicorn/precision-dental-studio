const cards = document.querySelectorAll('.doctors-card-wrapper');

const cardSVGs = document.querySelectorAll('.doctors-card-arrow');

console.log(cards);
console.log(cardSVGs);

[...cards].forEach(card => {
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');

    const svgToHide = [...cardSVGs].find(svg => svg.id === card.id);

    setTimeout(() => {
      svgToHide.classList.toggle('invisible');
    }, 300);
  });
});
