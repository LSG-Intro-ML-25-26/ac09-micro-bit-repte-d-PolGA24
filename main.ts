basic.forever(function () {
    if (input.temperature() > 22) {
        basic.showString("CALOR!")
    } else {
        basic.showString("FRIO!")
    }
})
