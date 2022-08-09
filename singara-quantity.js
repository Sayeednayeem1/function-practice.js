function singara(money){
    let singaraPrice = 10;
    let quantity = money / singaraPrice;
    return quantity;
}
let myAmount = 300;
let totalSingara = singara(myAmount);
console.log("i will get: ", totalSingara, "singaras.");