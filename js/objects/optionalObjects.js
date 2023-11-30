// Optional Chaining

function mostrarOptionalObjects() {
  const user = {
    name: "Diego",
    age: 27,
    address: {
      street: "Rua teste",
      number: 176,
      zip: {
        code: "89120000",
        city: "Rio do Sul",
      },
      showFullAddress() {
        return "OK";
      },
    },
  };

  const key = "street";

  // const infosAddress = user.address
  //   ? user.address.zip
  //     ? user.address.zip.code
  //     : "Não informado"
  //   : "Não informado";

  const infosAddress = user.address?.zip?.code ?? "Não informado";
  const showAddress = user.address?.showFullAddress?.();
  const infoKey = user.address[key];

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerText = `${infosAddress}\n\n${showAddress}\n\n${infoKey}`;
}
