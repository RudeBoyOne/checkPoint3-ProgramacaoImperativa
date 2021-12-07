const Educando = require("./moduloCriaAluno");

const educando00 = new Educando("Lucas", 3, [7,8,8]);

const educando01 = new Educando("Lívia", 2 , [9,9,8]);

const educando02 = new Educando("Vânia", 4, [7,6,7]);

const educando03 = new Educando("Camila", 2, [6,8,7]);

const educando04 = new Educando("Nogueira", 6, [5,6,8]);

const listaEducandos = [];
listaEducandos.push(educando00, educando01, educando02, educando03, educando04)

module.exports = listaEducandos;