//Leetcode 226 Invert Binary Tree
//Time Complexity: O(n) because it must itereate over each node in the tree
//for worst case scenario

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */


var invertTree = function(root) {
    // check if root is null
    if (!root){
        return null;
    }

    //switch the children nodes
    let p = root.left;
    let q = root.right;
    root.left = q;
    root.right = p;


    // recursively invert the children
    invertTree(root.left);
    invertTree(root.right);

    return root;
};