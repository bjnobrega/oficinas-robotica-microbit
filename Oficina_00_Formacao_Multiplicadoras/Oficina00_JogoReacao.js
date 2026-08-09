// Autoria: Bruno Nobrega — Mestrado Proficiências — Projeto Meninas nas Exatas / UFRJ, 2025-2026
// Oficina 00 — Formação de Multiplicadoras — Capítulo 4: Jogo de Reação
// Circuito humano com pads de alumínio e cabos jacaré

// ── JOGO DE REAÇÃO · micro:bit ──
let liberado = false // 'Semáforo': controla se o toque vale ponto ou punição

// Árbitro: Prepara a rodada
input.onButtonPressed(Button.A, function () {
    liberado = false // Bloqueia toques no início
    basic.showIcon(IconNames.Square)
    // Pausa surpresa 2 a 5s
    basic.pause(randint(2000, 5000))
    // SINAL!
    liberado = true // Libera para ganhar ponto
    basic.showIcon(IconNames.Yes)
    music.playTone(880, 250)
    basic.pause(4000)
    liberado = false
    basic.clearScreen()
})

// Jogadora A (Pino P1)
input.onPinPressed(TouchPin.P1, function () {
    if (liberado == true) {
        // Trava a oponente
        liberado = false
        basic.showString("A")
        music.playMelody("C5 B A G ", 300)
    } else {
        // Punição por toque precoce
        basic.showIcon(IconNames.No)
        music.playTone(175, 250)
    }
})

// Jogadora B (Pino P2)
input.onPinPressed(TouchPin.P2, function () {
    if (liberado == true) {
        // Trava a oponente
        liberado = false
        basic.showString("B")
        music.playMelody("C5 B A G ", 300)
    } else {
        // Punição por toque precoce
        basic.showIcon(IconNames.No)
        music.playTone(175, 250)
    }
})
