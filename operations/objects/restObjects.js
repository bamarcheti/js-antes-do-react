// Rest Operator

function mostrarRestObjects() {
  // const { name, ...rest } = user;

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const [first, second, ...rest] = array;
  const [first, , ...rest] = array;
  // Retornar os resultados como uma string
  // const destructuring = `${destructuringAdress}\n\n${destructuringAge}\n\n${destructuringNickname}`;

  const resultadoDiv = document.getElementById("resultado");

  // Para trazer todos os dados do user menos o name
  // resultadoDiv.innerText = JSON.stringify(rest);

  // Para trazer a primeira e segunda posição e o restante
  // resultadoDiv.innerText = JSON.stringify({ first, second, rest });

  // Para trazer todos menos a segunda posição
  resultadoDiv.innerText = JSON.stringify({ first, rest });
}
