// Promises

function mostrarPromise() {
  const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(a + b); // Corrigir para usar resolve em vez de reject
      }, 2000);
    });
  };

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = ""; // Limpar o conteúdo anterior

  somaDoisNumeros(1, 3)
    .then((soma) => {
      resultadoDiv.innerText = soma;
    })
    .catch((err) => {
      console.log(err);
    });
}
