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
function checkIfMirror(p, q) {
  //base cases
  if (!p && !q) {
    return true;
  } else if (!p || !q) {
    return false;
  }
  if (p.val !== q.val) {
    return false;
  }

  //recursively call this function but passing in its children
  //to see if it matches its corresponding counterpart
  //return true or false depending on if they match
  return checkIfMirror(p.left, q.right) && checkIfMirror(p.right, q.left);
}

var isSymmetric = function (root) {
  // split the tree between its children
  p = root.left;
  q = root.right;
  // pass in the two halves of the tree to the checkIfMirrorFunction
  return checkIfMirror(p, q);
};
