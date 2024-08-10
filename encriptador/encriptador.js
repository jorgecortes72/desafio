/* Declaracion de Variables  */
const mensajeIngresado= document.querySelector(".campo-mensaje-ingresado");
const mensajeSalida= document.querySelector(".campo__mensaje__salida");

/*   llaves de encriptacion
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

// Asignacion del arreglo Matriz

// let llaveEncriptacion=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
console.log(mensajeIngresado);


// BLOQUE ENCRIPTAR 

function btnEncriptar(mensajeIngresado){
    // const mensajeIngresado= document.querySelector(".campo-mensaje-ingresado");
    //console.log('holis')
    //console.log(mensajeIngresado.value);

    const textoEncriptado=encriptar(mensajeIngresado.value);
    mensajeSalida.value= textoEncriptado;
    mensajeSalida.style.backgroundImage="none";
    
    console.log(mensajeSalida);
}



function encriptar(mensajeIngresado){

    mensajeIngresado = mensajeIngresado.toLowerCase();
    //console.log(mensajeIngresado);

    let llaveEncriptacion=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    console.table(llaveEncriptacion);

    // for (j=1; j <=mensajeIngresado.length;j++){

        for (i=0; i < llaveEncriptacion.length; i++){

            console.log(mensajeIngresado[[i][0]]);
            // console.log(mensajeIngresado[[j][0]]);
            console.log(llaveEncriptacion[i][0]);

            if(mensajeIngresado.includes(llaveEncriptacion[i][0])){

                console.log(i);
                mensajeIngresado= mensajeIngresado.replaceAll(llaveEncriptacion[i][0], llaveEncriptacion[i][1]);
                console.log(mensajeIngresado[i][1]);
            }
        }
    // }
    // console.log(mensajeIngresado);
    return mensajeIngresado;

}

// BLOQUE DESENCRIPTAR 


function btnDesencriptar(mensajeIngresado){
    // const mensajeIngresado= document.querySelector(".campo-mensaje-ingresado");
    //console.log('holis')
    //console.log(mensajeIngresado.value);

    const textoEncriptado=desencriptar(mensajeIngresado.value);
    mensajeSalida.value= textoEncriptado;
    mensajeSalida.style.backgroundImage="none";
    
    console.log(mensajeSalida);
}



function desencriptar(mensajeIngresado){

    mensajeIngresado = mensajeIngresado.toLowerCase();
    //console.log(mensajeIngresado);

    let llaveEncriptacion=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    console.table(llaveEncriptacion);

    // for (j=1; j <=mensajeIngresado.length;j++){

        for (i=0; i < llaveEncriptacion.length; i++){

            console.log(mensajeIngresado[[i][0]]);
            // console.log(mensajeIngresado[[j][0]]);
            console.log(llaveEncriptacion[i][0]);

            if(mensajeIngresado.includes(llaveEncriptacion[i][1])){

                console.log(i);
                mensajeIngresado= mensajeIngresado.replaceAll(llaveEncriptacion[i][1], llaveEncriptacion[i][0]);
                console.log(mensajeIngresado[i][1]);
            }
        }
    // }
    // console.log(mensajeIngresado);
    return mensajeIngresado;

}