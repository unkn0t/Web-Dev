let getMaxSubSum = function (arr) {
    let max = 0;
    for (let l = 0; l < arr.length; ++l) {
        let sum = 0;
        for (let r = l; r < arr.length; ++r) {
            sum += arr[r];
            max = Math.max(max, sum);
        }
    }
    return max;
}

console.log(getMaxSubSum([-1, 2, 3, -9]) === 5);
console.log(getMaxSubSum([2, -1, 2, 3, -9]) === 6);
console.log(getMaxSubSum([-1, 2, 3, -9, 11]) === 11);
console.log(getMaxSubSum([-2, -1, 1, 2]) === 3);
console.log(getMaxSubSum([100, -9, 2, -3, 5]) === 100);
console.log(getMaxSubSum([1, 2, 3]) === 6 );
console.log(getMaxSubSum([-1, -2, -3]) === 0);