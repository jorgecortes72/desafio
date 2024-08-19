/* Declaracion de Variables  */
const mensajeIngresado= document.querySelector(".campo-mensaje-ingresado");
const mensajeSalida= document.querySelector(".campo__mensaje__salida");

// BLOQUE ENCRIPTAR 
function btnEncriptar(mensajeIngresado){
    const textoEncriptado=encriptar(mensajeIngresado.value);
    mensajeSalida.value= textoEncriptado;
    mensajeSalida.style.backgroundImage="none";
}
function encriptar(mensajeIngresado){
    // cambiando mensaje a minusculas
    mensajeIngresado = mensajeIngresado.toLowerCase();
    // asignando vector con llave de encriptacion
    let llaveEncriptacion=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        // recorrido del vector y ejecucion de cambios segun llave
        for (i=0; i < llaveEncriptacion.length; i++){
            if(mensajeIngresado.includes(llaveEncriptacion[i][0])){
                mensajeIngresado= mensajeIngresado.replaceAll(llaveEncriptacion[i][0], llaveEncriptacion[i][1]);
             }
        }
      return mensajeIngresado;
}
// BLOQUE DESENCRIPTAR 
function btnDesencriptar(mensajeIngresado){
    const textoEncriptado=desencriptar(mensajeIngresado.value);
    mensajeSalida.value= textoEncriptado;
    mensajeSalida.style.backgroundImage="none";
}
function desencriptar(mensajeIngresado){
    // cambiando mensaje a minusculas
    mensajeIngresado = mensajeIngresado.toLowerCase();
    // asignando vector con llave de encriptacion
    let llaveEncriptacion=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    // recorrido del vector y ejecucion de cambios segun llave
        for (i=0; i < llaveEncriptacion.length; i++){
            if(mensajeIngresado.includes(llaveEncriptacion[i][1])){
                mensajeIngresado= mensajeIngresado.replaceAll(llaveEncriptacion[i][1], llaveEncriptacion[i][0]);
            }
        }
     return mensajeIngresado;
}
// FUNCION COPIAR AL PORTAPAPELES
function btncopiar(){
    // leyendo mensaje salida.
    const mensajeSalida01= document.querySelector(".campo__mensaje__salida");
    // escribiendo mensaje en portapapeles
    navigator.clipboard.writeText(mensajeSalida01.value);
    //informando mensaje copiado
    alert('el texto se ha copiado');
    // recargando pagina y limpieza de campos
    location.reload();
}