/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true;
    if (root.left === null && root.right === null) return true;
    
    if (root.left && root.right) {
        let left: (TreeNode | null)[] = [root.left];
        let right: (TreeNode | null)[] = [root.right];

        while (left.length !== 0 && right.length !== 0) {
            
            const firstLeft = left.shift();
            const lastRight = right.pop();
            
            if (firstLeft === null && lastRight !== null) return false;
            if (firstLeft !== null && lastRight === null) return false;
            
            if (firstLeft?.val !== lastRight?.val) return false;
            
            firstLeft !== null && left.unshift(firstLeft?.left ?? null, firstLeft?.right ?? null);
            lastRight !== null && right.push(lastRight?.left ?? null, lastRight?.right ?? null);
            console.log(left, right);
        }

        return left.length === right.length;
    }

    return false;

};
// @lc code=end

console.log(isSymmetric(
    new TreeNode(
        0, 
        new TreeNode(
            2, 
            new TreeNode(3), 
            new TreeNode(4)
        ), 
        new TreeNode(
            2, 
            new TreeNode(4), 
            new TreeNode(3)
        )
    )))
