const Stm32 = require('./Stm32')

const placaStm = new Stm32("Planco", "index", "stm32", "boi", "vaca");

console.log(placaStm.getChip());