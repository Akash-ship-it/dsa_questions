// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
// Input - [2, 7, 11, 15], target = 9, Output - [0, 1]

function twoSum(nums, target) {
    // for(let i = 0; i < nums.length; i++) {
    //     const firstNum = nums[i]

    //     for(j = i + 1; j < nums.length; j++) {
    //         const secondNum = nums[j]

    //         if(firstNum + secondNum === target) {
    //             return [i, j]
    //         }
    //     }
    // }
    // return null

    // Better solution
    const map = new Map()

    for(let i = 0; i < nums.length; i++) {
        // 2 + 7 = 9, 9 - 7 = 2 OR 9 - 2 = 7
        const complement = target - nums[i]

        if(map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }
    return null
}

console.log(twoSum([2, 7, 11, 15], 9))