//um array (ou lista) pode armazenar diversos valores
//medias 10, 6.5 , 8, 7.5
let notas = [10,6.5,8,7.5];

let media;
let soma=0;
for(let i = 0; i<notas.length;i++){
    soma+=notas[i];
}
media = soma/notas.length;

console.log(media);
