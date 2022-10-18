var cards = document.querySelectorAll('.card');
let cont =0;
let fiCart;

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

function acumu(car){
  cont =cont+1;
  if(cont==2){
    if(car.getAttribute('ident')==fiCart.getAttribute('ident')){
      console.log('son iguales chavo');
    }
    else{
      car.classList.toggle('is-flipped');
      fiCart.classList.toggle('is-flipped');
    }
    cont=0;
    fiCart=null;
  }
  else{
    fiCart=car;

  }

}