function run () {
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, r_tempo)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, l_tempo)
}
function stop () {
    maqueen.motorStop(maqueen.Motors.All)
}
let los = 0
let l_tempo = 0
let r_tempo = 0
r_tempo = 160
l_tempo = 40
basic.forever(function () {
    // toggle los
    if (input.buttonIsPressed(Button.A)) {
        if (los == 0) {
            los = 1
        } else {
            los = 0
        }
    }
    if (los == 1) {
        run()
        basic.showIcon(IconNames.Chessboard)
    } else {
        stop()
        basic.showIcon(IconNames.Square)
    }
})
