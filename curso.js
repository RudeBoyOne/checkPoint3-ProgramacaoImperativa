const listaEducandos = require("./estudantes");

const Educando = require("./moduloCriaAluno")

const curso = {
    nomeCurso : "Programação Imperativa",
    notaAprovação : 7,
    faltaMax : 5,
    listaEstudantes : listaEducandos,
    
    addEstudante : function(novoEstudante){
        this.listaEstudantes.push(novoEstudante);
    },

    aprovacao : function(estudante){
         if(estudante.calcularMedia() >= this.notaAprovação && estudante.faltas() < this.faltaMax){
             return true
         }else if(estudante.faltas() == this.faltaMax && estudante.calcularMedia() > this.notaAprovação * 0.10 + this.notaAprovação){
            return true
         }else{
             return false
         }
    },

    listAprovacao : function(mediAluno){
        let mediALuno2 = mediAluno
        mediALuno2.forEach(mediAprovacao => {

            if(curso.aprovacao(mediAprovacao) == true){
                console.log(`O educanda (o): ${mediAprovacao.nome}, com o total de faltas: ${mediAprovacao.quantFaltas}, com a média: ${Math.round(mediAprovacao.calcularMedia())}, está APROVADO`)
            }else{
                console.log(`O educanda (o): ${mediAprovacao.nome}, com o total de faltas: ${mediAprovacao.quantFaltas}, com a média: ${Math.round(mediAprovacao.calcularMedia())}, está REPROVADO`)
            }
        })
    }


}
    
curso.addEstudante(new Educando("Carlos", 2, [5,6,8]));

curso.addEstudante(new Educando("Fernanda", 1, [7,8,7]));

curso.addEstudante(new Educando("João", 1, [7,5,9]))


curso.listAprovacao(curso.listaEstudantes);