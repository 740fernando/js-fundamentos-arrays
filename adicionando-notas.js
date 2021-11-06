const notas = [10,6,8];

notas.push(10);
console.log(notas);

let media;
let soma=0;
for(let i = 0; i<notas.length;i++){
    soma+=notas[i];
}
media = soma/notas.length;

console.log(media);