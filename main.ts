IR.IR_callbackUser(function (message) {
    if (message == 64) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 25)
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (message == 65) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 25)
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (message == 7) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.M1)
    }
    if (message == 6) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 25)
        basic.pause(200)
        maqueen.motorStop(maqueen.Motors.M2)
    }
})
maqueen.motorStop(maqueen.Motors.All)
basic.showIcon(IconNames.Happy)
