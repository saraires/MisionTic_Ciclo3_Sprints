let datos = [];

function agregarRegistro() {
    var inputs = document.getElementsByTagName('input');
    let nombre = inputs[0].value;
    let apellido = inputs[1].value;
    let telefono = inputs[2].value;
    let correo = inputs[3].value;
    let contrasena = inputs[4].value;

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