let datos = [];

function agregarRegistro() {
    let nombre = document.getElementById("IptNombre").value;
    let apellido = document.getElementById("IptApellido").value;
    let telefono = document.getElementById("IptNumero").value;
    let correo = document.getElementById("IptCorreo").value;
    let contrasena = document.getElementById("IptContrasena").value;

    let data = {
        'nombre': nombre,
        'apellido': apellido,
        'telefono': telefono,
        'correo': correo,
        'contrasena': contrasena
    }
    agregar();

    function agregar() {
        datos.push(data);
    }

    ordenarArreglo(datos)
    filtrarCorreo(datos)

    console.log(datos)
}


function ordenarArreglo(arreglo) {
    arreglo.sort(function(a, b) {
        var textA = a.apellido;
        var textB = b.apellido;
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    console.log(arreglo)
    return (arreglo)
}

function filtrarCorreo(arreglo) {

    let regName = /[a-zA-Z0-9_.+-]+@gmail.com/
    let correosOk = []
    for (let i = 0; i < arreglo.length; i++) {
        correoOK = regName.test(arreglo[i]['correo'])

        if (correoOK == true) {
            correosOk.push(arreglo[i])
        }
    }

    console.log(correosOk);
    return (correosOk)
}

module.exports = { agregarRegistro, ordenarArreglo, filtrarCorreo }