/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function swap(nums: number[], i: number, j: number) {
    const tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
}

function removeDuplicates(nums: number[]): number {
    let left = 0, right = 1;

    if (nums.length === 1) return 1;
   
    while (right < nums.length) {
        if (nums[right] <= nums[left]) {
            right++;
        }
        else {
            const tmp = nums[left + 1];
            nums[left + 1] = nums[right];
            nums[right] = tmp;
            left++;
        }
    }

    return left + 1; 
};
// @lc code=end

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));