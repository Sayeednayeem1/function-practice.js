function addSum(numbers){
    const oddNumbers = [];
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let index = i;
        let element = numbers[index];
        if(element % 2 !== 0){
            // console.log(index, element);
            oddNumbers.push(element);
            sum = sum + element;
            // console.log(sum);
        }
    }
    return sum;
}
let arrayGiven = [34, 45, 67, 56, 23, 89];
let addedArray = addSum(arrayGiven);
console.log(addedArray);