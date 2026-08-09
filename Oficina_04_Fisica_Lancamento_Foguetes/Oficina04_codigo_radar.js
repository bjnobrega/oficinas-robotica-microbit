radio.onReceivedValue(function (name, value) {
    serial.writeValue(name, value)
    led.toggle(2, 2)
})
radio.setGroup(255)
basic.showIcon(IconNames.Happy)
