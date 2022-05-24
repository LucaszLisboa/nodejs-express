const PlacasDeDesenvolvimento = require('./PlacasDeDesenvolvimento')

class Stm32 extends PlacasDeDesenvolvimento{
    #debug

    constructor(chip, quantidadeDePinos, memoriaRam, memoriaFlash, fabricante){
        super(chip, quantidadeDePinos, memoriaRam, memoriaFlash, fabricante)
        this.#debug = true;
    }

    velocidade(){
        console.log("Stm32 tem um processamento mais lento.")
    }

    getDebug(){
        if(this.#debug == true){
           return console.log("Has debug on chip.")
        } else {
            return console.log("There is no debug on the chip.")
        }
    }

    setDebug(debug){
        this.#debug = debug;
    }
}

module.exports = Stm32;