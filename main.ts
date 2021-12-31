let numS = ""
let num = 0
basic.forever(function () {
    serial.writeLine("What is the number?")
    numS = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    num = parseFloat(numS)
    for (let i = 0; i < num - 1; i++) {       
        getType(i);
    }  
    let isPrime = getType(num)
    serial.writeLine(convertToText(num))
    if (isPrime == true) {
        serial.writeLine("prím")
    } else {
        serial.writeLine("nem prím")
    }
})
