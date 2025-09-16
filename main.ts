input.onButtonPressed(Button.A, function () {
    Counter = 0
    Test_Number += 1
    Time = 0
    LL = 0
    serial.writeValue("Test", Test_Number)
    for (let index = 0; index < 30; index++) {
        basic.pause(2000)
        serial.writeValue("LL", input.lightLevel())
        serial.writeValue("Time", Time)
        LL += input.lightLevel()
        Time += 2
        if (Counter >= 10) {
            basic.showIcon(IconNames.No)
        } else if (input.lightLevel() < 25) {
            basic.showIcon(IconNames.Sad)
            Counter += 2
        } else {
            Counter = 0
            basic.showIcon(IconNames.Yes)
        }
        if (Shake) {
            break;
        }
    }
    basic.clearScreen()
    Shake = false
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(LL / Time)
})
input.onGesture(Gesture.Shake, function () {
    basic.pause(2000)
    Shake = true
    basic.clearScreen()
    Counter = 0
})
let Shake = false
let LL = 0
let Time = 0
let Counter = 0
let Test_Number = 0
Test_Number = 0
