class Temperature{
    constructor(celcius) {
        this.cel=celcius;
        this.minCel= -273;
    }
    convertToF(){
        if(this.cel> -273){
            return this.cel*9/5 +32;
        }else {
            return "cannot convert";
        }
    }
    convertToK(){
        if(this.cel> -273){
            return this.cel+ 273.15;
        }else {
            return "cannot convert";
        }
    }
}
let myTemperature = new Temperature(25);
document.write(`Độ F là: ${myTemperature.convertToF()} <br>`);
document.write(`Độ K là: ${myTemperature.convertToK()}`);
