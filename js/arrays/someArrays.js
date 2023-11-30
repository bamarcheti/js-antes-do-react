//  Método de Array Some

const array3 = [1, 4, 3, 2, 5, "teste"];

function mostrarSomeArray() {
  const peloMenosUmItemEUmNumero = array3.some((item) => {
    return typeof item !== "number";
  });

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = "";

  resultadoDiv.innerText = `Pelo menos um é número? ${peloMenosUmItemEUmNumero}`;
}
