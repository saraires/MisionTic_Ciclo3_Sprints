"use strict"

function checkNombre(valor){

    let nombre = document.getElementById("IptNombre").value
    let regName =  /^[a-zA-ZÀ-ÿ\s]{4,30}$/

    console.log(regName.test(nombre));

    if (!regName.test (nombre)) {
        return false;
    } else {
        return true;
    }
} 

function checkApellido(valor){
    let apellido = document.getElementById("IptApellido").value
    let regName =  /^[a-zA-ZÀ-ÿ\s]{4,30}$/

    console.log(regName.test(apellido));


    if (!regName.test (apellido)) {
        return false;
    } else {
        return true;
    }
}

function checkTelefono(valor){
    let numero = document.getElementById("IptNumero").value
    let regName = /^\d{7}$/ 

    console.log(regName.test(numero));


    if (!regName.test (numero)) {
        return false;
    } else {
        return true;
    }
}

function checkCorreo(valor){
    let correo = document.getElementById("IptCorreo").value
    let regName = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    console.log(regName.test(correo));


    if (!regName.test (correo)) {
        return false;
    } else {
        return true;
    }
}

function checkContrasena(valor){
    let contraseña = document.getElementById("IptContraseña").value
    let regName = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/

    console.log(regName.test(contraseña));

    if (!regName.test (contraseña)) {
        return false;
    } else {
        return true;
    }
}

module.exports = checkNombre;