const visor = document.getElementById("visor");
const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const operador = document.getElementById("operador");
const resultado = document.getElementById("resultado");

let operacao = "";

function cliqueBtn(valor) {
  if (operacao == "") {
    if (valor == "+" || valor == "-" || valor == "*" || valor == "/") {
      operacao = valor;
      operador.innerHTML = operacao;
    } else {
      valor1.value += valor;
      visor.innerHTML = valor1.value;
    }
  } else {
    valor2.value += valor;
    visor.innerHTML = valor2.value;
  }
}

function clearVisor() {
  valor1.value = "";
  valor2.value = "";
  operacao = "";
  operador.innerHTML = "";
  visor.innerHTML = "0";
  resultado.innerHTML = "";
}

function calcular() {
  let num1 = parseFloat(valor1.value);
  let num2 = parseFloat(valor2.value);
  let res;

  switch (operacao) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num1 / num2;
      break;
    default:
      break;
  }

  if (isNaN(res)) {
    resultado.innerHTML = "Operação inválida";
  } else {
    resultado.innerHTML = res;
  }
}


