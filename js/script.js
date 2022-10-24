var cards = document.querySelectorAll('.card');
let cont =0;
let fiCart;
let b=0;
let punt=0;

// [...cards].forEach((card)=>{
//       card.addEventListener( 'click', function() {
//         if(card.getAttribute('facing')!='true'){
//           card.classList.toggle('is-flipped');
//         }
//       });
//   });


function acumu(car){
  console.log(cont);
  if(car.getAttribute('facing')!='true' & b!=1){
    car.classList.toggle('is-flipped');
    alt(car);
  }
}

function alt(car){
  cont =cont+1;
  if(cont==2){//se seleccionaron dos cartas.
    if(car.getAttribute('id')!=fiCart.getAttribute('id')){//Entra a este if si las cartas seleccionada no es la misma carta.
      if(car.getAttribute('ident')==fiCart.getAttribute('ident')){//entra al if si las cartas si son pareja.
        b=1;
        setTimeout(()=>{
          car.setAttribute('facing', 'true');
          fiCart.setAttribute('facing', 'true');
          b=0;
        },100);
        punt=punt+2;
        document.getElementById('lpun').innerHTML='Puntos: '+punt
        if (punt==12){
          setTimeout(()=>{
            window.alert('Ganaste! c:');
          },100);
        }
        cont=0;
      }else if(car.getAttribute('facing')=='false' | fiCart.getAttribute('facing')=='false'){//entra a este else cuando seleccionaste las dos cartas pero no son pareja.
        b=1;
        setTimeout(() => {
          car.classList.toggle('is-flipped');
          fiCart.classList.toggle('is-flipped');
          b=0;
        }, 1500);
        fiCart.setAttribute('facing', 'false');
        cont=0;
      }

    }else{//cuando seleccionas las dos cartas pero son la misma carta.
      cont=1;
    }


  }else{//else para cuando solo se ha volteado una carta
    fiCart=car;
    setTimeout(()=>{
      car.setAttribute('facing', 'true');
    },100)
  }
}