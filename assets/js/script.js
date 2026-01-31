/**
 * 2C = TWO OF CLUBS
 * 2H = TWO OF HEARTHS
 * 2S = TWO OF SPADES
 * 2D = TWO OF DIAMONDS
 */

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

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
    console.log(deck);
    console.log(carta);
    return carta;
}

// pedirCarta();
// Funcion identificar el valor de la carta
const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1;
    
    //FUNCION DE OBTENCION DE VALOR EXTENSA 
    // let puntos = 0;

    // if(isNaN(valor)){
        
    //     puntos = (valor === 'A') ? 11 : 10;
    // }else{
        
    //     puntos = valor*1;
    // }

}
const valor = valorCarta(pedirCarta());
console.log({valor});