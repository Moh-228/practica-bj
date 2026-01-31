/**
 * 2C = TWO OF CLUBS
 * 2H = TWO OF HEARTHS
 * 2S = TWO OF SPADES
 * 2D = TWO OF DIAMONDS
 */

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//Referencias del HTML
const btnPedir   = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo = document.querySelector('#btnNuevo');


const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');


const puntosHTML = document.querySelectorAll('small');





//* Funcion de Crear Baraja

const crearDeck = ()=>{
    for(let i=2;i<=10;i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo)
        }
    }  
    deck = _.shuffle(deck);
    console.log(deck);
    
    return deck;
}

crearDeck();

//* Funcion Pedir Carta

const pedirCarta = () => {

    if (deck.length === 0){
        throw 'No hay cartas en la baraja';
    }
    const carta = deck.pop();
    return carta;
}

//* Funcion Valor Carta

const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;

}

//* Funcion Turno Computadora

const turnoComputadora = ( puntosMinimos ) => {

    do{

        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');

        imgCarta.src = `assets/cartas/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append( imgCarta );

        if (puntosMinimos > 21){
            break;
        }

    }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <= 21) );

    setTimeout(()=>{
        if(puntosComputadora === puntosMinimos){

        alert('Nadie Gana');

        }else if(puntosMinimos > 21){

        alert('Computadora Gana');

        }else if(puntosComputadora > 21){
        alert('Jugador Gana');
        }else{
            alert('Computadora Gana');
        };

    }, 100);
}


//! Funciones de Eventos

btnPedir.addEventListener('click',() => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');

    imgCarta.src = `assets/cartas/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append( imgCarta );

    if(puntosJugador > 21){
        console.warn('Lo siento ya perdiste');
        btnPedir.disabled = true;
        turnoComputadora(puntosJugador);


    }else if(puntosJugador === 21){
        console.warn('21, genial');
        turnoComputadora(puntosJugador);
    }
});

btnDetener.addEventListener('click',()=>{
    btnDetener.disabled = true;
    btnPedir.disabled = true;

    turnoComputadora(puntosJugador);
});

btnNuevo.addEventListener('click',()=>{
    console.clear();

    deck = [];
    deck = crearDeck();

    puntosJugador = 0;
    puntosComputadora = 0;
    puntosHTML[0].innerText = 0;
    puntosHTML[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

    btnPedir.disabled = false;
    btnDetener.disabled = false;
});