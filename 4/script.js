const taxaUSD = 5.50;
const taxaEUR = 6.50;
const taxaGBP = 7.50;

function converterParaUSD(valor) {
    return valor / taxaUSD;
}

function converterParaEUR(valor) {
    return valor / taxaEUR;
}

function converterParaGBP(valor) {
    return valor / taxaGBP;
}

document.getElementById('conversorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valor = parseFloat(document.getElementById('valor').value);
    let moeda = document.getElementById('moeda').value;
    let resultado;

    switch (moeda) {
        case 'USD':
            resultado = converterParaUSD(valor);
            break;
        case 'EUR':
            resultado = converterParaEUR(valor);
            break;
        case 'GBP':
            resultado = converterParaGBP(valor);
            break;
        case 'BRL':
        default:
            resultado = valor; // Não há necessidade de conversão para Real (BRL)
    }

    document.getElementById('resultado').innerText = "O valor convertido é: " + resultado.toFixed(2) + " " + moeda;
});



