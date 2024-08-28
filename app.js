//ocultar persona al presionar boton encriptar
let imagenPersona = document.querySelector('#imagenPersona');
document.querySelector('#botonEncriptar').addEventListener('click', ()=>{
    document.querySelector('#imagenPersona').style.display = 'none';
    document.querySelector('#valorTextoResultado').style.display = 'block';
})




//funcion encriptar texto
function encriptarTexto() {
    let textoInicial = document.getElementById('valorTextoInicial').value;
    const conversion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };
    let textoEncriptado = '';
    for (let i = 0; i < textoInicial.length; i++) {
        const letra = textoInicial[i];
        if (conversion[letra]) {
            textoEncriptado += conversion[letra];
        } else {
            textoEncriptado += letra; // Si no es una letra a encriptar, se deja igual
        }
    }
    //mostrar texto cifrado en area resultado
    document.getElementById('valorTextoResultado').value = textoEncriptado;
    //limpiar campo texto
    document.getElementById('valorTextoInicial').value = '';

    return ;
}
//funcion desencriptar texto
function desencriptarTexto() {
    const conversion = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    let textoOriginal = document.getElementById('valorTextoInicial').value;
    for (const [clave, valor] of Object.entries(conversion)) {
        textoOriginal = textoOriginal.replaceAll(clave, valor);
    }
    //mostrar texto encriptado en area resultado
    document.getElementById('valorTextoResultado').value = textoOriginal;
    //limpiar campo texto
    document.getElementById('valorTextoInicial').value = '';

    return ;
}
//funcion copia texto
function copiarTextoE() {
    let textoResultado = document.getElementById('valorTextoResultado');
    textoResultado.select();
    textoResultado.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textoResultado.value);
    //opcion extra que pega automaticamente en area de texto destino
    /* let textoInicial = document.getElementById('valorIni');
    textoInicial.value = textoResultado.value; */
}