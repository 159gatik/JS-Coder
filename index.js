
let cantidadJugadores = 2;
let cantidadNumeros = prompt("elija la cantidad de numeros")

    let pararJugadorUno = false;
    let cantidadIntentosJugadorUno = 1;
    let numeroAleatorioJugadorUno = "" + Math.floor(Math.random() * cantidadNumeros);
    console.log("el numero que salio es el: " + numeroAleatorioJugadorUno)

    while(pararJugadorUno === false){

        let numeroElegido = prompt("elija un numero")   
    
      if(numeroAleatorioJugadorUno === numeroElegido){
        alert("lo encontraste en el " + cantidadIntentosJugadorUno +  "!")
        pararJugadorUno = true;
      }
      cantidadIntentosJugadorUno++;
    }



    let pararJugadorDos = false;
    let cantidadIntentosJugadorDos = 1;
    let numeroAleatorioJugadorDos = "" + Math.floor(Math.random() * cantidadNumeros);
    console.log("el numero que salio es el: " + numeroAleatorioJugadorDos)

    while(pararJugadorDos === false){

        let numeroElegido = prompt("elija un numero")   
    
      if(numeroAleatorioJugadorDos === numeroElegido){
        alert("lo encontraste en el " + cantidadIntentosJugadorDos +  "!")
        pararJugadorDos = true;
      }
      cantidadIntentosJugadorDos++;
    }

    if (cantidadIntentosJugadorUno<cantidadIntentosJugadorDos)
    {
        alert("GANÓ EL JUGADOR UNO CON "+cantidadIntentosJugadorUno+" INTENTOS")
    }
    else if(cantidadIntentosJugadorUno===cantidadIntentosJugadorDos)
    {
        alert("SE CONSIDERA UN EMPATE CON "+cantidadIntentosJugadorUno+cantidadIntentosJugadorDos+" INTENTOS")
    }
    else {
        alert("GANÓ EL JUGADOR DOS CON "+cantidadIntentosJugadorDos+" INTENTOS")
    }

//}



