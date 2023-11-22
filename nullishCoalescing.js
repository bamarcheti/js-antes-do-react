// Nullish Coalescing Operator
function mostrarIdade() {
  const idade1 = 27;
  const idade2 = null;

  const resultadoDiv = document.getElementById("resultado");

  resultadoDiv.innerText = "Sua idade é: " + (idade1 || "Não informado");

  // 0, '', [], false, undefined, null => falsy

  resultadoDiv.innerText = "Sua idade é: " + (idade2 ?? "Não informado");

  // mais restritivo então irá olhar para valores como
  // null, undefined
}
