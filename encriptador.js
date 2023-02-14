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

    // document.getElementById("muneco").style.visibility="hidden";
    // document.getElementById("subtitulo").style.visibility="hidden";
    // document.getElementById("parrafo").style.visibility="hidden";

    document.getElementById("muneco").style.display="none";
    document.getElementById("no-texto").style.display="none";

    document.getElementById("copiarTexto").style.display="show";
    document.getElementById("copiarTexto").style.display="inherit";
}

function desencriptar(){
    var mensaje = document.getElementById("texto").value.toLowerCase();

    let mensajeDesencriptado = mensaje.replace(/enter/igm,"e");
    mensajeDesencriptado = mensajeDesencriptado.replace(/imes/igm,"i");
    mensajeDesencriptado = mensajeDesencriptado.replace(/ai/igm,"a");
    mensajeDesencriptado = mensajeDesencriptado.replace(/ober/igm,"o");
    mensajeDesencriptado = mensajeDesencriptado.replace(/ufat/igm,"u");

    document.getElementById("resultado").innerHTML = mensajeDesencriptado;
    document.getElementById("resultado").style.display="show";
    document.getElementById("resultado").style.display="inherit";

    // document.getElementById("muneco").style.visibility="hidden";
    // document.getElementById("subtitulo").style.visibility="hidden";
    // document.getElementById("parrafo").style.visibility="hidden";

    document.getElementById("muneco").style.display = "none";
    document.getElementById("no-texto").style.display = "none";

    document.getElementById("copiarTexto").style.display="show";
    document.getElementById("copiarTexto").style.display="inherit";
}

function copiar(){
    resultado.select();
    navigator.clipboard.writeText(resultado.value);
    alert("Texto Copiado");
}