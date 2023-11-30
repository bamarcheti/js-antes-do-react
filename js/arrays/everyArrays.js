//  Método de Array Every

function mostrarEveryArray() {
  const todosItensSaoNumeros = array.every((item) => {
    return typeof item == "number";
  });

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  resultadoDiv.innerText = `Todos são números? ${todosItensSaoNumeros}`;
}
