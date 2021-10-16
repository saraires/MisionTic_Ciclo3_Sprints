let registros = [
    {
        'correo': 'juan@gmail.com',
        'contrasena': 'SecurePassword123'
    }
];

function agregarRegistro() {

    var inputs = document.getElementsByTagName('input');
    correo = inputs[0].value;
    contrasena = inputs[1].value;
    captcha = inputs[2].value;
    captcha = parseInt(captcha);

    let data = {
        'correo': correo,
        'contrasena': contrasena,
        'captcha': captcha
    };

    agregar();

    function agregar() {
        registros.push(data);
    }

    console.log(registros)
}


function login() {

    let a;
    var inputs = document.getElementsByTagName('input');
    let correo = inputs[0].value;
    let contrasena = inputs[1].value;

    for (let i = 0; i < registros.length; i++) {
        a = registros[i]

        if (a.correo == correo) {
            console.log('correo correcto')

            if (contrasena == a.contrasena) {
                console.log('contraseña correcta');

                if (validarCAPTCHA(parseInt(inputs[2].value))) {
                    console.log('captcha correcta');
                    return true
                } else {
                    console.log('captcha malo');
                    break;
                }

            } else {
                console.log('contraseña mala');
                break;
            }

        } else {
            console.log('correo malo');
            break
        }
    }
    return false
}

function validarCAPTCHA(valor) {
    if (valor != 1000) {
        return false
    } else {
        return true
    }
}

module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;