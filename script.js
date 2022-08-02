// Operador ternario

// if(1 < 5 ){
//  console.log("es menor");
//  } else {
// console.log("es mayor")
//    }


(1 < 5) && true ?
    (true || false) ? console.log("Se cumplo la segunda condicion") : console.log("No se cumplio nada") :
    console.log("Es mayor")


// Speread 


console.clear();

const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

function suma(...numeros) {
    numeros = [1, 2, 3, 5, 67, 84, 6, 75, 69, 96];
    const resultado = numeros.reduce(
        (prevValue, nextValue) => prevValue + nextValue,
        0
    );
    console.log(resultado);
}

suma(1, 2, 3, 5, 67, 84, 6, 75, 69, 96);