/*
 * @lc app=leetcode id=303 lang=typescript
 *
 * [303] Range Sum Query - Immutable
 */

// @lc code=start
class NumArray {
    nums: number[];
    constructor(nums: number[]) {
        this.nums = nums;
    }

    sumRange(left: number, right: number): number {
        let sum = 0;
        for (let i = left; i <= right; i++) {
            sum += this.nums[i];
        }        
        return sum;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

const numArr = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(numArr.sumRange(0,2))
