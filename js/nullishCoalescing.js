// Nullish Coalescing Operator

function mostrarIdade() {
  const idade1 = 27;
  const idade2 = null;

  const idade1Result = `A idade 01 é: ${idade1 || "Não informado"}`;
  // 0, '', [], false, undefined, null => falsy

  const idade2Result = `A idade 02 é: ${idade2 ?? "Não informado"}`;
  // mais restritivo então irá olhar para valores como
  // null, undefined

  // Retornar os resultados como uma string
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = `${idade1Result}\n\n${idade2Result}`;
}
