// Objetos

function mostrarObjeto() {
  // Objetos

  const user = {
    name: "Diego",
    idade: 27,
    address: {
      street: "Rua teste",
      number: 176,
    },
  };

  const resultadoDiv = document.getElementById("resultado");

  resultadoDiv.innerText = "name" in user;

  // resultadoDiv.innerText = Object.keys(user);

  // resultadoDiv.innerText = Object.values(user);
}
