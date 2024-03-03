/*
 * @lc app=leetcode id=100 lang=typescript
 *
 * [100] Same Tree
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && q) return false;
    if (p && !q) return false;
    
    if (p && q) {
        if (p.val !== q.val) return false;
        if (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) return true;
        return false;
    }

    return true;
};
// @lc code=end

const tree1 = new TreeNode(1, new TreeNode(2), null)
const tree2 = new TreeNode(1, null, new TreeNode(2))

console.log(isSameTree(tree1, tree2))