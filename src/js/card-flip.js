const cards = document.querySelectorAll('.doctors-card-wrapper');

const cardSVGs = document.querySelectorAll('.doctors-card-arrow');

[...cards].forEach(card => {
  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');

    [...cardSVGs].find(svg => {
    });
  });
});





 setTimeout(() => {
        svg.classList.toggle('invisible');
      }, 350);