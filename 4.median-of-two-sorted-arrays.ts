/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merge: number[] = [];

    for (let i = 0, left = 0, right = 0; i < nums1.length + nums2.length; i++) {
        if (left === nums1.length) {
            merge.push(nums2[right]);
            right++;
            continue;
        }
        else if (right === nums2.length) {
            merge.push(nums1[left])
            left++;
        }
        else if (nums1[left] < nums2[right]) {
            merge.push(nums1[left])
            left++;
        }
        else {
            merge.push(nums2[right])
            right++;
        }
    }

    if (merge.length % 2 === 1) return merge[(merge.length - 1) / 2]
    else {
        return (merge[merge.length / 2] + merge[merge.length / 2 - 1]) / 2
    }
};
// @lc code=end

console.log(findMedianSortedArrays([1, 3], [2]));