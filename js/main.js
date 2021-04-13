let bs = 0;
let ars = 0;
let resultadoBs = document.querySelector('#resultadoBs');
let resultadoArs = document.querySelector('#resultadoArs');
let btn = document.querySelector('#calcular')

let numberFormat = (num) => {
    let numParts = num.toString().split(".");
    numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return numParts.join(",");
}

let calcular = () => {
    btn.addEventListener('click', (e) => {
        let usd = parseFloat(document.querySelector('#usd').value);
        let monitorDolar = parseFloat(document.querySelector('#monitorDolar').value);
        let pactta = parseFloat(document.querySelector('#pactta').value);
        bs = usd * monitorDolar;
        ars = bs / pactta;
        resultadoBs.innerHTML = `Bs ${numberFormat(Math.round(bs))}`;
        resultadoArs.innerHTML = `ARS ${numberFormat(Math.round(ars))}`;
    })
}

calcular();
