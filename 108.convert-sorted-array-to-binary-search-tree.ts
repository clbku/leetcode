/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
 */


class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
    const root = new TreeNode(nums[Math.floor(nums.length / 2)]);

    if (nums.slice(0, Math.floor(nums.length / 2)).length) {
        root.left = sortedArrayToBST(nums.slice(0, Math.floor(nums.length / 2)));
    }
    if (nums.slice(Math.floor(nums.length / 2 + 1)).length) {
        root.right = sortedArrayToBST(nums.slice(Math.floor(nums.length / 2 + 1)));
    }

    return root;
};
// @lc code=end

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
