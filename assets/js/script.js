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

const divCartasJugador = document.querySelector('#jugador-cartas')

const puntosHTML = document.querySelectorAll('small');





// Funcion de creacion de una nueva baraja
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

//Esta funcion me deja pedir una carta
const pedirCarta = () => {

    if (deck.length === 0){
        throw 'No hay cartas en la baraja';
    }
    const carta = deck.pop();
    return carta;
}

// pedirCarta();
// Funcion identificar el valor de la carta
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;

}

//Eventos 

btnPedir.addEventListener('click',() => {
    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    puntosHTML[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');

    imgCarta.src = `assets/cartas/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');

    divCartasJugador.append( imgCarta );
});
