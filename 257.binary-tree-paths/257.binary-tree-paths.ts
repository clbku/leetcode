/*
 * @lc app=leetcode id=257 lang=typescript
 *
 * [257] Binary Tree Paths
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

function binaryTreePaths(root: TreeNode | null): string[] {
    if (root === null) return [];

    if (!root.left && !root.right) return [root.val.toString()]
    
    const leftPaths = binaryTreePaths(root.left);
    const rightPaths = binaryTreePaths(root.right);

    return [
        ...leftPaths.map(path => root.val + "->" + path),
        ...rightPaths.map(path => root.val + "->" + path)
    ]
};

// @lc code=end

const tree = new TreeNode(1, new TreeNode(2, null, new TreeNode(5)), new TreeNode(3))
console.log(binaryTreePaths(tree))