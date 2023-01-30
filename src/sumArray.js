const array = [2,4,6,8,10];
let sum = 0;

function sumArray(array){
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

export default sumArray;