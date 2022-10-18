var cards = document.querySelectorAll('.card');
let cont =0;
let fiCart;

[...cards].forEach((card)=>{
    if(card.getAttribute('facing') === 'false') {
      card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
      });
    }
    else {
      card.setAttribute('facing', 'true');
      console.log(card.getAttribute('facing'))
    }
  });



function acumu(car){
  cont =cont+1;
  if(cont==2){
    if(car.getAttribute('ident')==fiCart.getAttribute('ident')){
      console.log('son iguales chavo');
      car.setAttribute('facing', 'true');
      fiCart.setAttribute('facing', 'true');
    }
    else{
      setTimeout(() => {
        car.classList.toggle('is-flipped');
        fiCart.classList.toggle('is-flipped');
      }, 1500);

    }
    cont=0;
  }
  else{
    fiCart=car;

  }
console.log(cont);
}