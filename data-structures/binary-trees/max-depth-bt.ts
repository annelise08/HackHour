// Source: Leetcode #104
/* Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1: 
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2
*/

// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
    // need to recursively call function, finding depth of farthest node
    // if current val is null, return 0
    if (root === null) return 0;
    // base case: both left and right are null, return 1
    if (root.left === null && root.right === null) return 1;

    // recursive case
    // find left max depth
    let left = maxDepth(root.left) + 1;
    // find right max depth
    let right = maxDepth(root.right) + 1;
    // return max of left and right depths
    return Math.max(left, right)
}
