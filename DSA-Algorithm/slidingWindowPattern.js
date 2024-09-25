const arr = [10, 36, 9, 34, 18, 22, 32]
const N = arr.length//7
const K = 2
//Solution without sliding window pattern
console.log(findSubArrayMaxSum1(N, K, arr))
console.log(findSubArrayMaxSum2(N, K, arr))
function findMax(n1, n2) {
    return Number(n1) > Number(n2) ? n1 : n2
}

function findSubArrayMaxSum1(N, K, arr) {
    let maxNum = 0
    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < K + i && K + i - 1 < N; j++) {
            sum += arr[j]
        }
        maxNum = findMax(maxNum, sum)
    }
    return maxNum
}
function findSubArrayMaxSum4(N, K, arr) {
    let maxNum = 0
    for (let i = 0; i < N - K + 1; i++) {
        let sum = 0
        for (let j = i; j < K + i; j++) {
            sum += arr[j]
        }
        maxNum = findMax(maxNum, sum)
    }
    return maxNum
}

//Sliding window pattern
console.log(findSubArrayMaxSum3(arr, K))
console.log(findSubArrayMaxSum4(arr, K))

function findSubArrayMaxSum3(arr, K) {
    let currentSum = 0;
    let maxSum = 0;
    for (let i = 0; i < K; i++) {
        currentSum += arr[i]
    }
    maxSum = currentSum
    for (let i = 1; i <= arr.length - K; i++) {
        currentSum = currentSum - arr[i - 1] + arr[i + K - 1]
        maxSum = findMax(maxSum, currentSum)
    }
    return maxSum
}

function findSubArrayMaxSum4(arr, p) {
    let max = 0;
    let sum = 0;

    let i = 0;
    while (i < p) {
        sum = sum + arr[i]
        i++
    }
    max = sum;

    i = p;
    while (i < arr.length) {
        sum += arr[i] - arr[i - p]
        if (sum > max) {
            max = sum
        }
        i++
    }
    return max
}



