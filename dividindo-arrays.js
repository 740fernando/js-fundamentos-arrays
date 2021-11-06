//slice() ´-Copia uma parte do array para outro array.




const nomes =['Joao','Juliana','Ana','Caio','Lara','Marjorie','Guilherme','Fernando']

const sala1 = nomes.slice(0,nomes.length/2);//corte - inicio 0 termina na metade
const sala2 = nomes. slice(nomes.length/2);// corte - inicio quando nao coloca nada vai até o final do array

console.log(`Alunos da sala 1 : ${sala1}`);
console.log(`Alunos da sala 1 : ${sala2}`);