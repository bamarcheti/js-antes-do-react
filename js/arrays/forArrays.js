//  Método de Array For

const array = [1, 2, 3, 4, 5];

function mostrarForArray() {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  for (const i of array) {
    resultadoDiv.innerText += i;
  }
}
