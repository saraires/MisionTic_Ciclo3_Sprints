let registros = [];

function agregarRegistro() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("numero").value;
    let correo = document.getElementById("correo").value;
    let contrasena = document.getElementById("contrasena").value;

    let data = {
        'nombre': nombre,
        'apellido': apellido,
        'telefono': telefono,
        'correo': correo,
        'contrasena': contrasena
    }

    agregar();

    function agregar() {
        registros.push(data);
    }

    // ordenarArreglo(registros)
    // filtrarCorreo(registros)

    console.log(registros)
}


function ordenarArreglo(arreglo) {
    arreglo.sort(function (a, b) {
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

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.ordenarArreglo = ordenarArreglo;
module.exports.filtrarCorreo = filtrarCorreo;