const notas = [10,7,8,5,10];
notas.pop(); // .pop = retira o ultimo elemento
console.log(`A media é  ${notas}`);

let soma= 0;
for(let i=0; i<notas.length ; i++){
     soma+=notas[i];
}
let media = soma/notas.length;