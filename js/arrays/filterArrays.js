//  Método de Array Filter

function mostrarFilterArray() {
  const novoArray = array
    .filter((item) => item % 2 !== 0)
    .map((item) => item * 10);

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  resultadoDiv.innerText = novoArray;
}
