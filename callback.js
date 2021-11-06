
//Uma função callback é uma função passada a outra função como argumento,
// que é então invocado dentro da função externa para completar algum tipo
//de rotina ou ação.
const nome = ["Ana","Ju","Leo","Paulo"]

nome.forEach(ImprimeNomes);

function ImprimeNomes(nome){
    console.log(nome)
}