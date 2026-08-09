// Leitura sob demanda (Interação)
input.onButtonPressed(Button.A, function () {
    basic.showNumber(temp)
    // Apaga a tela depois de mostrar
    basic.clearScreen()
})
let temp = 0 //Cria a variável
serial.redirectToUSB()
// O "Motor" do Data Logger (Trabalho invisível)
basic.forever(function () {

    // 1. Lê a temperatura no pino correto (P0)
    temp = dstemp.celsius(DigitalPin.P1)

    // 2. Envia para gerar o gráfico no PC
    serial.writeValue("Temp", temp) // Joga os dados para a porta serial "USB"
    basic.pause(200) // Pequena pausa
    basic.showIcon(IconNames.SmallDiamond) 
    basic.clearScreen() // Apaga a tela depois de mostrar
    basic.pause(200) // Pequena pausa
})
