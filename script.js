function calcular(){
    let nro1 = 0;
    let total = 0;
    let tipo = '';

    nro1 = document.getElementById('cantidad').value;


    tipo = document.getElementById('selecttipo').value;
    
    if(tipo == 'est'){
        total = (200 * parseInt(nro1)) *0.8;
    }
    if(tipo == 'tra'){
        total = (200 * parseInt(nro1)) *0.5;
        }
    if(tipo == 'jur'){
        total = (200 * parseInt(nro1)) *0.15;
    }

    document.getElementById("total").innerHTML= 'Total a Pagar: $' + total;
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    if (!validateEmail(email)) {
        alert('Por favor ingrese un correo electrónico válido.');
    } else {
        window.alert('Correo electrónico enviado correctamente.');
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}