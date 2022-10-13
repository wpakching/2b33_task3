let button_a = false
let subtract = 0
input.onButtonPressed(Button.A, function () {
    if (button_a == true) {
        button_a = false
    } else {
        button_a = true
    }
    for (let index = 0; index <= 9; index++) {
        if (button_a == true) {
            subtract = 9 - subtract
            basic.showNumber(subtract)
        } else {
            break;
        }
    }
})
basic.forever(function () {
	
})
