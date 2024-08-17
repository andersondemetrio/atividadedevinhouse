function calcular() {
    const num1 = parseFloat(document.getElementById('inputNumero1').value);
    const num2 = parseFloat(document.getElementById('inputNumero2').value);

    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    const divisao = num1 / num2;

    document.getElementById('resultado').innerHTML = `
        <p>Soma: ${soma}</p>
        <p>Subtração: ${subtracao}</p>
        <p>Multiplicação: ${multiplicacao}</p>
        <p>Divisão: ${divisao}</p>
    `;
}
