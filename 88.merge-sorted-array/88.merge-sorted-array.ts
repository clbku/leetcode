/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    if (m === 1 && n === 0) return;
    if (m === 0 && n === 1) {
        nums1[0] = nums2[0]
        return;
    };
    
    let i = m - 1, j = n - 1, k = m + n - 1;

    for (let l = 0; l < m + n; l++) {
        if (i < 0 || nums2[j] >= nums1[i]) {
            nums1[k] = nums2[j];
            k--;
            j--;
        }
        else {
            nums1[k] = nums1[i];
            i--;
            k--;
        }
    }
    console.log(nums1)
};
// @lc code=end

merge([2,0], 1, [1], 1);