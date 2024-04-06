/*
 * @lc app=leetcode id=268 lang=typescript
 *
 * [268] Missing Number
 */

// @lc code=start
function missingNumber(nums: number[]): number {
    let missingNumber = 0;
    
    for (let i = 1; i <= nums.length; i++) {
        missingNumber += i - nums[i - 1];
    }

    return missingNumber;
};
// @lc code=end

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))