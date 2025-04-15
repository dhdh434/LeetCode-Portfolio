// leetcode 100 same tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    //base cases
    if (!p && !q){
        return true
    } else if (!p || !q){
        return false
    }

    if (p.val !== q.val){
        return false
    }

    //recursively call this function but passing in its children to 
    //see if it matches its corresponding counterpart
    //return true or false depending on if they match
    return (isSameTree(p.left, q.left)
        && isSameTree(p.right, q.right))
};