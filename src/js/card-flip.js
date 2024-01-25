const cards = document.querySelectorAll('.doctors-card-wrapper');

console.log(cards);

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});