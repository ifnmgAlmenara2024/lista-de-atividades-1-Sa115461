document.getElementById('retanguloForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);
    
    const area = base * altura;

    document.getElementById('resultado').innerText = "A área do retângulo é: " + area.toFixed(2);
});



