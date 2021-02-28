// function doubleIt(num){
//     return num * 2;
// }

// const doubleIt = function myFun(num){
// return num * 2;
// }

const doubleIt = num => num * 2;
const add = (x, y) => x + y;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum *diff;
    return result;
}



const result = doubleIt(50);
const result2 = add(50 , 70);
const result3 = give5();
const result4 = doMath(7, 5);


console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);