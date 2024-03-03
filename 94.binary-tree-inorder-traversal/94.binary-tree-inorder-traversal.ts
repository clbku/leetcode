/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {
    if (!root) return [];

    const res: number[] = [];
    
    if (root.left) {res.push(...inorderTraversal(root.left))}
    res.push(root?.val);
    if (root.right) {res.push(...inorderTraversal(root.right))}

    return res;
};
// @lc code=end

const tree = new TreeNode(1);
tree.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
tree.right = new TreeNode(3, new TreeNode(6), new TreeNode(7))
console.log(inorderTraversal(tree))
console.log(inorderTraversal(null))
console.log(inorderTraversal(new TreeNode(1)))
