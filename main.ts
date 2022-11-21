input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.soundLevel())
})
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    255
    )
})
basic.forever(function () {
    if (input.soundLevel() > 200) {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    if (input.soundLevel() < 150) {
    	
    }
})
