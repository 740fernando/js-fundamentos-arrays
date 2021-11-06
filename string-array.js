//“String”, além de ser o tipo de dado usado para representar textos,
// também se define como uma sequência ordenada de caracteres!

const nome = "Alura";
let nomeMaiusculas = "";

for (let i = 0; i < nome.length; i++) {
 nomeMaiusculas += nome[i].toUpperCase()
}
console.log(nomeMaiusculas) //ALURA