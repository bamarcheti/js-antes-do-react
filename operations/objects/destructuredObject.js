// Desestruturação

function mostrarObjetoDesestruturado() {
  const { address, idade: age, nickname = "Fernandes" } = user;
  const destructuringAdress = `Endereço: ${JSON.stringify(address)}`;
  const destructuringAge = `Idade: ${age}`;
  const destructuringNickname = `Sobrenome: ${nickname}`;

  // Retornar os resultados como uma string
  const destructuring = `${destructuringAdress}\n\n${destructuringAge}\n\n${destructuringNickname}`;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = destructuring;
}
