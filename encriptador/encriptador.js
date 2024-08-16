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
//console.log(mensajeIngresado);


// BLOQUE ENCRIPTAR 

function btnEncriptar(mensajeIngresado){
    // const mensajeIngresado= document.querySelector(".campo-mensaje-ingresado");
    //console.log('holis')
    //console.log(mensajeIngresado.value);

    const textoEncriptado=encriptar(mensajeIngresado.value);
    mensajeSalida.value= textoEncriptado;
    mensajeSalida.style.backgroundImage="none";
    
    // console.log(mensajeSalida.value);
}

// console.log(mensajeSalida.value);


function encriptar(mensajeIngresado){

    mensajeIngresado = mensajeIngresado.toLowerCase();
    //console.log(mensajeIngresado);

    let llaveEncriptacion=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    // console.table(llaveEncriptacion);

    // for (j=1; j <=mensajeIngresado.length;j++){

        for (i=0; i < llaveEncriptacion.length; i++){

           // console.log(mensajeIngresado[[i][0]]);
            // console.log(mensajeIngresado[[j][0]]);
           // console.log(llaveEncriptacion[i][0]);

            if(mensajeIngresado.includes(llaveEncriptacion[i][0])){

               // console.log(i);
                mensajeIngresado= mensajeIngresado.replaceAll(llaveEncriptacion[i][0], llaveEncriptacion[i][1]);
               // console.log(mensajeIngresado[i][1]);
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
    
    // console.log(mensajeSalida);
}



function desencriptar(mensajeIngresado){

    mensajeIngresado = mensajeIngresado.toLowerCase();
    //console.log(mensajeIngresado);

    let llaveEncriptacion=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

    // console.table(llaveEncriptacion);

    // for (j=1; j <=mensajeIngresado.length;j++){

        for (i=0; i < llaveEncriptacion.length; i++){

            // console.log(mensajeIngresado[[i][0]]);
            // console.log(mensajeIngresado[[j][0]]);
           // console.log(llaveEncriptacion[i][0]);

            if(mensajeIngresado.includes(llaveEncriptacion[i][1])){

               // console.log(i);
                mensajeIngresado= mensajeIngresado.replaceAll(llaveEncriptacion[i][1], llaveEncriptacion[i][0]);
                // console.log(mensajeIngresado[i][1]);
            }
        }
    // }
    // console.log(mensajeIngresado);
    return mensajeIngresado;

}

// FUNCION COPIAR AL PORTAPAPELES

function btncopiar(){

    console.log('estoy en funcion');
    const mensajeSalida01= document.querySelector(".campo__mensaje__salida");

           // console.log(mensajeSalida01.value);

    /* const mensajeSalida = async () => {

        try {
            const mensajeSalida01= document.querySelector(".campo__mensaje__salida");

            console.log(mensajeSalida01.value); */

            // await navigator.clipboard.writeText(mensajeSalida01);
            navigator.clipboard.writeText(mensajeSalida01.value);

            alert('el texto se ha copiado');
            location.reload();
       
       /* } catch (error){
            console.log(error);

        }

    }*/

    // const mensajeSalida01= document.querySelector(".campo__mensaje__salida");

   // await navigator.clipboard.writeText(mensajeSalida01);


    // console.log(mensajeSalida01.value);
    // mensajeSalida.value= mensajeSalida;
    // mensajeSalida01.Select();
    // console.log(mensajeSalida.value);

   // Navigator.clipboard.write(mensajeSalida01.value);
    
}