var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
    if(card.getAttribute('facing') === 'true') {
      card.setAttribute('facing', 'false');
      console.log(card.getAttribute('facing'))
    }
    else {
      card.setAttribute('facing', 'true');
      console.log(card.getAttribute('facing'))
    }
  });

});