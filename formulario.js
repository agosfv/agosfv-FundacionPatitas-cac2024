const text = document.getElementById('texto')
const botonenviar = document.getElementById('botonprueba')

boto      nenviar.addEventListener('click',()=>{
    if (text.value.lenght == 0){
        alert('no')
    }
})

const nombreapellido = document.getElementById("nombreapellido").value.null;
const correo = document.getElementById("correo").value.notnull;
const telefono = document.getElementById("telefono").value.notnull;
const mensaje = document.getElementById("mensajeText").value.notnull;



function borrar() {
    let borrar = confirm('¿Desea borrar el formulario?');
    if (borrar == true) {
        document.getElementById("nombreapellido").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("mensajeText").value = "";
    }
    else if (borrar == false) {
        console.log('cancelado')
    }
}

function enviar() {
    let enviar = confirm('¿Desea enviar el fomulario?');

    if (enviar == true) {
        document.getElementById("nombreapellido").value="";
        document.getElementById("correo").value = "";
        document.getElementById("telefono").value = "";
        document.getElementById("mensajeText").value = "";
        alert('¡Formulario enviado con exito!');
        console.log('Enviado');
    }
    else if (enviar == false) {
        console.log('cancelado')
    }
}

function prueba2() {
    let valor = document.getElementById("prueba").value;
    if (valor.value == notnull){
        alert('completa');    
    } else if (valor.value == null){
        alert('ok');
    }
}