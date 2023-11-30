//  Método de Array FindIndex

function mostrarFindIndexArray() {
  const par = array.findIndex((item) => item % 2 == 0);
  // O índice do primeiro par é 1 pelo 4 estar na posição 1

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  resultadoDiv.innerText = par;
}
