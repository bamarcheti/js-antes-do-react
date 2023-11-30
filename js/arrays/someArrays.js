//  Método de Array Some

function mostrarSomeArray() {
  const peloMenosUmItemEUmNumero = array.some((item) => {
    return typeof item !== "number";
  });

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  resultadoDiv.innerText = `Pelo menos um é número? ${peloMenosUmItemEUmNumero}`;
}
