let aceleracao_z = 0

// Configura a comunicação por rádio.
radio.setGroup(255)
radio.setTransmitPower(7)

// Configura o acelerômetro para medir até 8g.
input.setAccelerometerRange(AcceleratorRange.EightG)

// Indica que a placa está pronta.
basic.showIcon(IconNames.Yes)

// Realiza leituras contínuas do eixo Z.
basic.forever(function () {

    // Lê a aceleração no eixo Z.
    aceleracao_z = input.acceleration(Dimension.Z)

    // Envia o valor para a segunda Micro:bit.
    radio.sendValue("aceleracao_z", aceleracao_z)

    // Pequena pausa entre as leituras.
    basic.pause(20)
})
