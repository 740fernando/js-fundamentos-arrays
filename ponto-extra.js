const notas = [10,9,8,7,6];

//map - funciona da mesma forma que o ForEach, com a diferença que retorna um valor
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);
const notasAtualizadas2 = notas.forEach(nota =>{ nota == 10 ? nota : ++nota});

console.log(notasAtualizadas);
console.log(notasAtualizadas2)