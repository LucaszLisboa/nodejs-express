const Stm32 = require('./Stm32')
const Esp32 = require('./Esp32')

const placaStm = new Stm32("Arm Cortex-M", 94, "144KB", "512KB", "STMicroelectronics");
const placaEsp = new Esp32("Xtensa LX6", 38, "512 Bytes", "520KB", "Espressif Systems");

console.log(`\nMicrocontrolador Stm32 possui o chip ${placaStm.getChip()}, com ${placaStm.getQuantidadeDePinos()} pinos,
${placaStm.getMemoriaRam()} de RAM, ${placaStm.getMemoriaFlash()} de memoria flash, e é fabricado pela ${placaStm.getFabricante()}.`);
placaStm.velocidade();
placaStm.getDebug();

console.log(`\nMicrocontrolador Esp32 possui o chip ${placaEsp.getChip()}, com ${placaEsp.getQuantidadeDePinos()} pinos,
${placaEsp.getMemoriaRam()} de RAM, ${placaEsp.getMemoriaFlash()} de memoria flash, e é fabricado pela ${placaEsp.getFabricante()}.`);
placaEsp.velocidade();
placaEsp.getWifi();

