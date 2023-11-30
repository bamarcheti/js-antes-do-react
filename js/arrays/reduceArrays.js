//  Método de Array Reduce

function mostrarReduceArray() {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  const soma = array.reduce((acc, item) => {
    // resultadoDiv.innerText += acc + "," + "";
    return acc + item;
  }, 0);

  resultadoDiv.innerText = soma;
}
