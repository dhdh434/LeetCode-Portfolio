//Leetcode 110 Balanced Binary Tree
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
 * @return {boolean}
 */

function getHeight(node){
    //base case for recursion
    if(!node){
        return 0;
    }
    //gets the height of the left side of the tree, returns -1 if
    //the tree is not balanced
    let hLeft = getHeight(node.left);
    if (hLeft === -1){
        return -1;
    }

    //gets the height of the right side of the tree, returns -1 if
    //the tree is not balanced
    let hRight = getHeight(node.right);
    if (hRight === -1){
        return -1;
    }

    //calculates the height difference and returns -1 if not balanced
    if (Math.abs(hLeft - hRight) > 1){
        return -1;
    }
    
    //returns the height if the tree is balanced
    return (Math.max(hLeft, hRight) + 1);
}

var isBalanced = function(root) {
    //calls getHeight function that finds the height and also checks balance
    //Return -1 if any part is not balanced
    let balNum = getHeight(root);
    if(balNum === -1){
        return false;
    }
    return true;
};