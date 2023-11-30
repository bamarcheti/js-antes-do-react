//  Método de Array For

const array = [1, 4, 3, 2, 5, "teste"];

function mostrarForArray() {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  for (const i of array) {
    resultadoDiv.innerText += i;
  }
}
