// Nullish Coalescing Operator
function mostrarIdade() {
  const idade1 = 27;
  const idade2 = null;

  const resultadoDiv = document.getElementById("resultado");

  resultadoDiv.innerText =
    "A idade 01 é: " +
    (idade1 || "Não informado") +
    " e a idade 02 é: " +
    (idade2 ?? "Não informado");

  // (idade1 || "Não informado")
  // 0, '', [], false, undefined, null => falsy

  // (idade2 ?? "Não informado")
  // mais restritivo então irá olhar para valores como
  // null, undefined
}
