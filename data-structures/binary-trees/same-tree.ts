// Source: LeetCode #100

/* 

Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Input: p = [1,2,3], q = [1,2,3]
Output: true

Example 2:
Input: p = [1,2], q = [1,null,2]
Output: false

*/

// Definition for a binary tree node.
// Definition for a binary tree node.
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

 function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // if both nodes are null, return true
    if (!p && !q) return true;
    // if either node is null, return false
    if (!p || !q) return false;
    // return if both node's values match AND the result of left nodes AND result of right nodes
    return p.val === q.val && isSameTree(p.right, q.right) && isSameTree(p.left, q.left)
 };