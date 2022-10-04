/* Conceitos para se trabalhar com classes*/

class Animal {

    constructor(especie){
        this.especie = especie
    }

    falar (){
        console.log(this.especie + ' late')
    }

    comer (){
        console.log(this.especie + ' come')
    }

    dormir (){
        console.log(this.especie + ' dorme')
    }
}

class Cachorro extends Animal {
    falar(){
        console.log(this.especie + ' au au au')
    }
}

const cachorro = new Cachorro('cachorro')
cachorro.falar()
cachorro.comer()
cachorro.dormir()