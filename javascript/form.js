//"use strict"

function checkNombre(valor) {

    let nombre = valor;
    let regName = /^[a-zA-ZÀ-ÿ\s]{4,30}$/

    console.log(regName.test(nombre))

    if (!regName.test(nombre)) {
        return false;
    } else {
        return true;
    }
}

function checkApellido(valor) {
    let apellido = valor;
    let regName = /^[a-zA-ZÀ-ÿ\s]{4,30}$/

    if (!regName.test(apellido)) {
        return false;
    } else {
        return true;
    }
}

function checkTelefono(valor) {
    let numero = valor;
    let regName = /^\d{7}$/

    console.log(regName.test(numero))

    if (!regName.test(numero)) {
        return false;
    } else {
        return true;
    }
}

function checkCorreo(valor) {
    let correo = valor;
    let regName = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    if (!regName.test(correo)) {
        return false;
    } else {
        return true;
    }
}

function checkContrasena(valor) {
    let contraseña = valor;
    let regName = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/

    if (!regName.test(contraseña)) {
        return false;
    } else {
        return true;
    }
}

module.exports = {
    checkNombre,
    checkApellido,
    checkTelefono,
    checkCorreo, 
    checkContrasena
};