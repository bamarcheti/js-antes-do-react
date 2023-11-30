//  Método de Array Map

function mostrarMapArray() {
  const novoArray = array.map((item) => {
    // return item * 2;

    // Faz com que os números ímpares sejam multiplicados por 10
    if (item % 2 == 0) {
      return item * 10;
    }
    return item;
  });

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  resultadoDiv.innerText = novoArray;
}
