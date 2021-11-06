const alunos = ['Joao','Juliana','Caio','Ana']

const mediasDosAlunos= [10,7,9,6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota=(nomeDoAluno)=>{
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){ // nome do aluno esta na posicao 0 includes- faz a procura do parametro passado.retorna true ou false
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno); //indexOf- retorna a posicao do nomeDoAluno
        return listaDeNotasEAlunos[0][indice]+', sua media é '+listaDeNotasEAlunos[1][indice]
    }else{
        return "Aluno não esta cadastrado"
    }
}
console.log(exibeNomeNota("Fernando"))

