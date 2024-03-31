# [228. Summary Ranges](https://leetcode.com/problems/summary-ranges/)

Given the `root` of a binary tree, invert the tree, and return its root.

**Example 1:** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg" style="width: 500px; height: 165px;">

```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]
```

**Example 2:** 
<img alt="" src="https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg" style="width: 500px; height: 120px;">

```
Input: root = [2,1,3]
Output: [2,3,1]
```

**Example 3:** 

```
Input: root = []
Output: []
```

**Constraints:** 

- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`