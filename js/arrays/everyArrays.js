//  Método de Array Every

const array2 = [1, 4, 3, 2, 5, "teste"];

function mostrarEveryArray() {
  const todosItensSaoNumeros = array2.every((item) => {
    return typeof item == "number";
  });

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  resultadoDiv.innerText = `Todos são números? ${todosItensSaoNumeros}`;
}
