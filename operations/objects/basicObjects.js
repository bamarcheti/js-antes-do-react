// Basic Objects

const user = {
  name: "Diego",
  nickname: "Schell",
  idade: 27,
  address: {
    street: "Rua teste",
    number: 176,
  },
};

function mostrarObjeto() {
  const entriesResult = `${JSON.stringify(Object.entries(user))}`;
  const propExistenceResult = `${"name" in user}`;
  const keysResult = `${JSON.stringify(Object.keys(user))}`;
  const valuesResult = `${JSON.stringify(Object.values(user))}`;

  // Retornar os resultados como uma string
  const objetos = `${entriesResult}\n\n${propExistenceResult}\n\n${keysResult}\n\n${valuesResult}`;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = objetos;
}
