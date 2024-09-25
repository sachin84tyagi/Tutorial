//Problem Solution #1
const numStr = "abcdcba"
//console.log(checkPallindromeStr(numStr))
function checkPallindromeStr(str) {
    let revStr = ''
    for (let i = 0; i < str.length; i++) {
        revStr = str[i] + revStr
    }
    return revStr === str
}

//Problem Solution #2 complexity O(n^2)
const nums = [2, 3, 5, 7, 10, 12, 15, 20]
const targetNum = 19
findTwoNumberSum(nums, targetNum)
function findTwoNumberSum(numsArr, target) {
    for (let i = 0; i < numsArr.length; i++) {
        for (let j = i + 1; j < numsArr.length; j++) {
            //console.log(numsArr[i], numsArr[j])
            if (numsArr[i] + numsArr[j] == target) {
                return {
                    firstNumIndex: i,
                    secondNumIndex: j,
                    firstNum: numsArr[i],
                    secondNum: numsArr[j]
                }
            }
        }
    }
}

//Two Pointer Pattern
console.log(findNumSum(nums, targetNum))
function findNumSum(nums, targetNum) {
    let startPointer = 0
    let endPointer = nums.length - 1

    while (startPointer <= endPointer) {
        const numSum = nums[startPointer] + nums[endPointer]
        if (numSum === targetNum) {
            return {
                tppFirstNumIndex: startPointer,
                tppSecondNumIndex: endPointer,
                firstNum: nums[startPointer],
                secondNum: nums[endPointer]
            }
        } else if (numSum > targetNum) {
            endPointer = endPointer - 1
        } else {
            startPointer = startPointer + 1
        }
    }
}
//Opposite direction
//square of sorted arra
// move zeroes
// Remove element
// Two Sum II - Inpurt array is sorted
//Same direction
// Remove duplicates from sorted array
// Merge sorted array
// Linked list cycle
// Remove Element