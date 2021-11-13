
console.log("*************** 1 **************");
function alwaysHungry(arr) {
    let tally = 0;
    for( let i = 0; i < arr.length; i++){
        if(arr[i]=="food"){
            console.log("yummy");
            tally++;
        }
    } 
    if (tally == 0){
        console.log("I'm hungry")
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

console.log("*************** 2 **************");
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

console.log("*************** 3 **************");
function betterThanAverage(arr) {
    var sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    let averageNumber = sum / arr.length;
    var count = 0;
    console.log(averageNumber);
    for(i = 0; i< arr.length; i++){
        if(arr[i] > averageNumber){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

console.log("*************** 4 **************");
function reverse(arr) {
    let newArray = [];
    for(let i = arr.length-1; i >= 0; i--){
        newArray.push(arr[i]);
    }
    arr = newArray;
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

console.log("*************** 5 **************");
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    let i = 0;
    while(fibArr.length < n){
        let nextNumber = fibArr[i] + fibArr[i + 1];
        i++;
        fibArr.push(nextNumber);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


