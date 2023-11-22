// Nullish Coalescing Operator

// const idade = 27
const idade = null

document.body.innerText = "Sua idade é: " + (idade || 'Não informado');

// 0, '', [], false, undefined, null => falsy

document.body.innerText = "Sua idade é: " + (idade ?? 'Não informado');

// mais restritivo então irá olhar para valores como
// null, undefined