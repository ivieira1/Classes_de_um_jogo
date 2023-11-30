//Desafio das Classes//
 class Guerreiro {
    constructor (nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
 }
 //Método//
 Atacar () {
    let nivel;
    if (tipo = "mago")
    nivel = "magia"
    else if (tipo = "guerreiro")
    nivel = "espada"
    else if (tipo = "monge")
    nivel = "usou artes marciais"
    else if (tipo = "ninja")
    nivel = "usou shuriken"
    console.log(`O jogador ${this.nome}, com idade de ${this.idade}, é do tipo ${this.tipo} e atacou usando ${nivel}`)
 }
}
    let Mago = new Guerreiro ("João", "20", "mago")
    let Guerreiro1 = new Guerreiro ("Bruno", "25", "guerreiro")
    let Monge = new Guerreiro ("Caio", "30", "monge")
    let Ninja = new Guerreiro ("Pedro", "18", "ninja")


    Ninja.Atacar();
    //Final do Código//
