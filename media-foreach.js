const notas =[100,200,300,400,500,600]
let soma = 0;
notas.forEach(nota =>{ soma +=nota})

let media = soma/notas.length;

console.log(media);