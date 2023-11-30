//  Método de Array forEach
function mostrarForEachArray() {
  const arrayForEach = [];

  array.forEach((item) => {
    // resultadoDiv.innerText += item;
    arrayForEach.push(item * 2);
  });

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  resultadoDiv.innerText = arrayForEach;
}
