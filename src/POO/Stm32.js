const PlacasDeDesenvolvimento = require('./PlacasDeDesenvolvimento')

class Stm32 extends PlacasDeDesenvolvimento{
    #debug

    constructor(chip, quantidadeDePinos, memoriaRam, memoriaFlash, fabricante){
        super(chip, quantidadeDePinos, memoriaRam, memoriaFlash, fabricante)
        this.#debug = true;
    }
}


module.exports = Stm32;