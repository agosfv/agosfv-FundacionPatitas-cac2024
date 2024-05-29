
function borrar() {
    let borrar = confirm('¿Desea borrar el formulario?');
    if (borrar == true) {
        document.getElementById("nombreapellido").value = "";
        document.getElementById("correo").value = "";
        document.getElementById("telefono").value = "";
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

        alert('¡Formulario enviado con exito!');
        console.log('Enviado');
    }
    else if (enviar == false) {
        console.log('cancelado')
    }
}
