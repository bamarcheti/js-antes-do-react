// Template Literals

function mostrarTemplateLiterals() {
  const name = "Diego";
  const messagem = `Bem-vindo, ${name ?? "visitante"}`;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = messagem;
}
