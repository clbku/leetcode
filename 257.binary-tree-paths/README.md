# [257. Binary Tree Paths](https://leetcode.com/problems/binary-tree-paths/description/)

Given the `root` of a binary tree, return all root-to-leaf paths in **any order** .

A **leaf**  is a node with no children.

**Example 1:** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/12/paths-tree.jpg" style="width: 207px; height: 293px;">

```
Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
```

**Example 2:** 

```
Input: root = [1]
Output: ["1"]
```

**Constraints:** 

- The number of nodes in the tree is in the range `[1, 100]`.
- `-100 <= Node.val <= 100`