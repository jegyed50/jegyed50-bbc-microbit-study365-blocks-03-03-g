input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let row = 0; row <= 4; row++) {
        for (let column = 0; column <= 4; column++) {
            if ((row + column) % 2 != 0) {
                led.plot(column, row)
                basic.pause(pause_after_plot_LED)
            }
        }
    }
})
let pause_after_plot_LED = 0
basic.showIcon(IconNames.Heart)
led.setBrightness(255)
pause_after_plot_LED = 300
