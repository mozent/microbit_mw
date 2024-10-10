let x = 0
let y = 0
let fnf = 1
for (let index = 0; index < 13; index++) {
    led.plot(x, y)
    basic.pause(500)
    if (fnf < 5) {
        x += 1
    } else {
        if (x > 0) {
            x += -1
        }
        if (y < 5) {
            y += 1
        }
    }
    fnf += 1
    if (fnf == 9) {
        fnf = 0
        x = 0
        y = 4
    }
    basic.clearScreen()
    if (x == 4 && y == 4) {
        for (let index = 0; index < 4; index++) {
            led.plot(x, y)
            basic.pause(500)
            x += -1
            y += -1
            basic.clearScreen()
        }
    }
}
