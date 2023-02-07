

function encriptar(){
    var mensaje = document.getElementById("texto").value.toLowerCase();

    let mensajeEncriptado = mensaje.replace(/e/igm,"enter");
    mensajeEncriptado = mensajeEncriptado.replace(/i/igm,"imes");
    mensajeEncriptado = mensajeEncriptado.replace(/a/igm,"ai");
    mensajeEncriptado = mensajeEncriptado.replace(/o/igm,"ober");
    mensajeEncriptado = mensajeEncriptado.replace(/u/igm,"ufat");

    document.getElementById("resultado").innerHTML = mensajeEncriptado;
    document.getElementById("resultado").style.display="show";
    document.getElementById("resultado").style.display="inherit";

    document.getElementById("muneco").style.visibility="hidden";
    document.getElementById("subtitulo").style.visibility="hidden";
    document.getElementById("parrafo").style.visibility="hidden";

    document.getElementById("copiarTexto").style.display="show";
    document.getElementById("copiarTexto").style.display="inherit";
}