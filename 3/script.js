function converterParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

document.getElementById('conversorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let celsius = parseFloat(document.getElementById('celsius').value);
    
    const fahrenheit = converterParaFahrenheit(celsius);

    document.getElementById('resultado').innerText = "A temperatura em Fahrenheit é: " + fahrenheit.toFixed(2);
});



