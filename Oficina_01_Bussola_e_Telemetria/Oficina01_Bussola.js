// Autoria: Bruno Nobrega — Mestrado Poficiências — Projeto Meninas nas Exatas / UFRJ, 2025
// Inspirado em: microbit.org e cardboard.lofirobot.com

let graus = 0

// Calibração do sensor (exibe a mensagem "TILT TO FILL SCREEN" na primeira execução)
input.calibrateCompass()
basic.forever(function () {
    // Leitura contínua da direção em graus (0 a 359)
    graus = input.compassHeading()
    // Lógica para determinar os 4 pontos cardeais
    if (graus < 45 || graus > 315) {
        // Norte (315° a 45°)
        basic.showString("N")
    } else if (graus < 135) {
        // Leste (45° a 135°)
        basic.showString("L")
    } else if (graus < 225) {
        // Sul (135° a 225°)
        basic.showString("S")
    } else {
        // Oeste (225° a 315°)
        basic.showString("O")
    }
})
