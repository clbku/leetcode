/*
 * @lc app=leetcode id=110 lang=typescript
 *
 * [110] Balanced Binary Tree
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

function maxDepth(root: TreeNode | null): number {
    if (!root) return 0;
    if (root.left === null && root.right === null) return 1;
    
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    
    if (Math.abs(left - right) <= 1) {
        return 1 + Math.max(left, right);
    }
    else {return -1000}
};



function isBalanced(root: TreeNode | null): boolean {
    if (!root) return true;
    
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    if (left < 0 || right < 0) return false;
    return Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1
};
// @lc code=end