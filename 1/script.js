function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  var classificacao = '';

  if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
  } else if (imc < 25) {
      classificacao = 'Pesos normais';
  } else if (imc < 30) {
      classificacao = 'Sobrepeso';
  } else if (imc < 35) {
      classificacao = 'Obesidade grau I';
  } else if (imc < 40) {
      classificacao = 'Obesidade grau II';
  } else {
      classificacao = 'Obesidade grau III';
  }

  return { imc: imc.toFixed(2), classificacao: classificacao };
}

document.getElementById('imcForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var peso = parseFloat(document.getElementById('peso').value);
  var altura = parseFloat(document.getElementById('altura').value);
  
  var resultado = calcularIMC(peso, altura);

  var resultadoHTML = "<h2>Resultado:</h2><table><tr><th>IMC</th><th>Classificação</th></tr><tr><td>" + resultado.imc + "</td><td>" + resultado.classificacao + "</td></tr></table>";

  document.getElementById('resultado').innerHTML = resultadoHTML;
});
