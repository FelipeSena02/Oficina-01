function calcularIMC() {
    // Obtendo os valores do formulário
    var formulario = document.getElementById("formulario");
    var peso = parseFloat(formulario.peso.value);
    var altura = parseFloat(formulario.altura.value);
    
    // Calculando o IMC
    var imc = peso / (altura * altura);
    
    // Exibindo o IMC no campo de resultado
    formulario.imc.value = imc.toFixed(2);
}