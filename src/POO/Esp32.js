const PlacasDeDesenvolvimento = require('./PlacasDeDesenvolvimento')

class Esp32 extends PlacasDeDesenvolvimento{
    #wifi

    constructor(chip, quantidadeDePinos, memoriaRam, memoriaFlash, fabricante){
        super(chip, quantidadeDePinos, memoriaRam, memoriaFlash, fabricante)
        this.#wifi = true;
    }

    velocidade(){
        console.log("Eps32 tem um processamento mais rápido.");
    }

    getWifi() {
        if(this.#wifi == true){
            return console.log("Has a wifi connection.")
        }else{
            return console.log("no wifi connection.")
        }
    }

    setWifi(wifi){
        this.#wifi = wifi;
    }
}

module.exports = Esp32;