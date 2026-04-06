let dataAtual = new Date()
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();
let fusorario = dataAtual.getTimezoneOffset();

let formatador = new Intl.DateTimeFormat()

console.log(`${dia < 10 ? `0${dia}` : dia }/${mes < 10 ? `0${mes}` : mes }/${ano} ${hora}:${minuto}:${segundo}:${fusorario}`)