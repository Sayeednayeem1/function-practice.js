// lets multiply a given array numbers
// using function

function mult(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result =  result * i;
    }
    return result;
}
let numbers = mult(10);
console.log(numbers);
