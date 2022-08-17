function isValidIP(str) {
    let verdad = str.split('.');
    if (verdad.length != 4)
        return false;
    for (i in verdad) {
        if (i == 0) {
            if (!/^\d+$/g.test(verdad[i]) ||
                +verdad[i] > 223 ||
                +verdad[i] <= 191 ||
                /^[0][0-9]{1,2}/.test(verdad[i]))
                return false;
        } else if (i == 1) {
            if (!/^\d+$/g.test(verdad[i]) ||
                +verdad[i] > 255 ||
                +verdad[i] <= 0 ||
                /^[0][0-9]{1,2}/.test(verdad[i]))
                return false;
        } else if (i == 2) {
            if (!/^\d+$/g.test(verdad[i]) ||
                +verdad[i] > 255 ||
                +verdad[i] <= 0 ||
                /^[0][0-9]{1,2}/.test(verdad[i]))
                return false;
        } else if (!/^\d+$/g.test(verdad[i]) ||
            +verdad[i] != 0 ||
            /^[0][0-9]{1,2}/.test(verdad[i]))
            return false;
    }
    return true
}

function validar() {
    var direccionip, subredes;
    direccionip = document.getElementById('ip').value;
    subredes = document.getElementById('subredes').value;

    sub = parseInt(subredes);

    if (direccionip == "" && subredes == "") {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            text: "Por favor, digite los datos solicitados.",
            showConfirmButton: false,
            timer: 8000
        })
        return false;
    } else if (direccionip == "") {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            text: "Por favor, digite la dirección ip.",
            showConfirmButton: false,
            timer: 8000
        })
        return false;
    } else if (isValidIP(direccionip) == false) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: "Por favor, digite una dirección ip valida para clase b.",
            text: "Ejemplo: 192.120.20.0",
            showConfirmButton: false,
            timer: 8000
        })
        return false;
    } else if (subredes == "") {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            text: "Por favor, digite la cantidad de subredes que desea.",
            showConfirmButton: false,
            timer: 8000
        })
        return false;
    } else if (subredes > 64) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Lo sentimos.',
            text: "Haz llegado al monto máximo permitido para la clase c. Utiliza clase b",
            showConfirmButton: false,
            timer: 8000
        })
        return false;
    } else if (isNaN(subredes)) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Número de subredes incorrecto',
            text: "Ejemplo: 10",
            showConfirmButton: false,
            timer: 8000
        })
        return false;
    } else if (subredes % 1 != 0) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'El número de subredes debe ser un número entero.',
            text: "Ejemplo: 10",
            showConfirmButton: false,
            timer: 8000
        })
        return false;
    } else if (subredes == 0 || subredes == 1) {
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Por favor digite un número de subredes valido.',
            showConfirmButton: false,
            timer: 8000
        })
        return false;
    } else {
        return true;
    }
}