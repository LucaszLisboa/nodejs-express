class PlacasDeDesenvolvimento{
    #chip;
    #quantidadeDePinos;
    #memoriaRam;
    #memoriaFlash;
    #fabricante;
    
    constructor(chip, quantidadeDePinos, memoriaRam, memoriaFlash, fabricante){
        this.#chip = chip;
        this.#quantidadeDePinos = quantidadeDePinos;
        this.#memoriaRam = memoriaRam;
        this.#memoriaFlash = memoriaFlash;
        this.#fabricante = fabricante;
    }
    
    getChip(){
        return this.#chip;
    }
    
    setChip(chip){
        this.#chip = chip;
    }
    
    getQuantidadeDePinos(){
        return this.#quantidadeDePinos;
    }

    setQuantidadeDePinos(quantidadeDePinos){
        this.#quantidadeDePinos = quantidadeDePinos;
    }

    getMemoriaRam(){
        return this.#memoriaRam;
    }

    setMemoriaRam(memoriaRam){
        this.#memoriaRam = memoriaRam;
    }

    getMemoriaFlash(){
        return this.#memoriaFlash;
    }

    setMemoriaFlash(memoriaFlash){
        this.#memoriaFlash = memoriaFlash;
    }

    getFabricante(){
        return this.#fabricante;
    }

    setFabricante(fabricante){
        this.#fabricante = fabricante;
    }
}

module.exports = PlacasDeDesenvolvimento;