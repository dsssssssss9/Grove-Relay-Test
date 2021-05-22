input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 64; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(Dlay)
        pins.digitalWritePin(DigitalPin.P1, 0)
        // for grove ropto relay min approx 2 - 4
        basic.pause(2)
    }
})
let Dlay = 0
// for seeed grove opto relay reliable minimum seems to be 30 - can be less depend on orientation of counter
// 
Dlay = 30
basic.showNumber(Dlay)
basic.pause(100)
