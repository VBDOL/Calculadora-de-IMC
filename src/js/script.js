// script.js
document.getElementById('calcularBtn').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = "Por favor, insira valores válidos para peso e altura.";
        resultadoDiv.style.color = 'red';
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        classificacao = 'Obesidade grau 2';
    } else if (imc >= 40) {
        classificacao = 'Obesidade grau 3';
    }

    resultadoDiv.innerHTML = `Você está no nível de <strong>${imc.toFixed(2)}</strong>: ${classificacao}`;
    resultadoDiv.style.color = 'green';
    resultadoDiv.style.opacity = 0;
    setTimeout(() => {
        resultadoDiv.style.transition = 'opacity 1s';
        resultadoDiv.style.opacity = 1;
    }, 100);
});
