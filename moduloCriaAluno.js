class Educando{
    constructor(nome, quantFaltas, notas){
        this.nome = nome,
        this.quantFaltas = quantFaltas,
        this.notas = notas
    }
   
    calcularMedia(){
        let media = (this.notas[0] + this.notas[1] + this.notas[2]) / this.notas.length;
        return media;
    }

    faltas(){
        return ++this.quantFaltas
    }
}

module.exports = Educando;