let type = "";
let prime: number[] = [];
function getType(num:number):boolean{
    if (num == 0) {
        return false
    }
    if(num == 1){
        return false
    }
    for (let i = 0; i < prime.length; i++) {
        if (num % prime[i] == 0){
            return false
        }
    }
    prime[prime.length] = num;
    serial.writeLine(convertToText(num) + ":prime")
    return true
}
