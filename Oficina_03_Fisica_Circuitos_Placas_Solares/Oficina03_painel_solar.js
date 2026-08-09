// O laço "forever" garante a leitura contínua.
// Além do feedback visual na matriz de LEDs (opcional),
// enviamos o dado bruto via Serial para o computador.

basic.forever(function () {
    // 1. Leitura do pino P0 (variando de 0 a 1023)
    let leitura = pins.analogReadPin(AnalogPin.P0)

    // 2. Envio para a Porta Serial (USB)
    // O comando "writeValue" é fundamental para a Ciência de Dados.
    // O MakeCode interpreta esse comando e gera um gráfico de linha 
    // em tempo real na aba "Show console Device".
    serial.writeValue("tensao", leitura)

    // 3. Feedback visual (Mantém o gráfico de barras na matriz de LEDs)
    led.plotBarGraph(leitura, 1023)
    // Pequena pausa (100ms) para não saturar a buffer serial 
    // e estabilizar o tempo de coleta (amostragem a 10Hz).
    basic.pause(100)
})
