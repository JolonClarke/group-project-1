let Counter = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 30; index++) {
        basic.pause(2000)
        if (Counter >= 10) {
            basic.showIcon(IconNames.No)
        } else if (input.lightLevel() < 25) {
            basic.showIcon(IconNames.Sad)
            Counter += 2
        } else {
            Counter = 0
            basic.showIcon(IconNames.Yes)
        }
    }
    basic.clearScreen()
})
