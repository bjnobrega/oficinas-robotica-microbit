// Autoria: Bruno Nobrega — Mestrado Proficiências — Projeto Meninas nas Exatas / UFRJ, 2025-2026
// Oficina 00 — Formação de Multiplicadoras — Capítulo 3: Alarme de Escuridão
// Sensor LDR com divisor de tensão (10kΩ) + LED controlado por lógica SE/SENÃO

let Luz = 0

basic.forever(function () {
    // Lê o valor analógico do sensor LDR no Pino P1 (0 a 1023)
    Luz = pins.analogReadPin(AnalogPin.P1)

    // Lógica condicional: SE está escuro, acende o LED; SENÃO, apaga
    if (Luz < 500) {
        // Está escuro! Acende o LED no Pino P0
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else {
        // Tem luz! Apaga o LED
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
