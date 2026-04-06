radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(tempF())
})
function tempF () {
    return 32 + 1.8 * input.temperature()
}
radio.onReceivedString(function (receivedString) {
    if ("temp" == receivedString) {
        radio.sendNumber(tempF())
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("temp")
})
radio.setGroup(1)
basic.forever(function () {
	
})
