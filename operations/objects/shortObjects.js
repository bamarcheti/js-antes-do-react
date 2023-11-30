// Short Syntax

const name = "Diego";
const age = 27;

function mostrarShortSyntax() {
  const user = {
    name,
    age,
  };

  const resultadoDiv = document.getElementById("resultado");

  resultadoDiv.innerText = JSON.stringify(user);
}
