def run():
    r_tempo = 0
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, r_tempo)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, l_tempo)
def stop():
    maqueen.motor_stop(maqueen.Motors.ALL)
los = 0
l_tempo = 60
l_tempo = 30

def on_forever():
    global los
    # toggle los
    if input.button_is_pressed(Button.A):
        if los == 0:
            los = 1
        else:
            los = 0
    if los == 1:
        run()
        basic.show_icon(IconNames.CHESSBOARD)
    else:
        stop()
        basic.show_icon(IconNames.SQUARE)
basic.forever(on_forever)
