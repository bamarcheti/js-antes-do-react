//  Método de Array Find

function mostrarFindArray() {
  const par = array.find((item) => item % 2 == 0);

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  resultadoDiv.innerText = par;
}
