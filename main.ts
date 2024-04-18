let rad = ""
pxtlora.e32Init(
DigitalPin.P8,
DigitalPin.P9,
DigitalPin.P16,
SerialPin.P14,
SerialPin.P15,
BaudRate.BaudRate9600,
false
)
let ID = "CanSat-NTNU"
let fukt = 45.5
let temp = 21.3
let trykk = 996.67
let hoyde = 67
basic.forever(function () {
    rad = "" + ID + "," + input.runningTime() + "," + fukt + "," + temp + "," + trykk + "," + hoyde + ""
    pxtlora.e32SendStringFixed(rad, 1, 23)
    basic.pause(1000)
    pxtlora.e32SendStringFixed(" ", 1, 23)
    basic.pause(1000)
})
