//Leetcode #9 Palindrome Number
//Time Complexity: O(n)

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var xString = x.toString();
    var isPalidrome = true;
    // go through the first half of the palidrom
    // if the palidrom has an odd number of digits,
    // it will stop just before the center digit
    for(var i = 0; i < xString.length /2; i++){
        //compares the each character with its symmetrical counterpart
        if(xString[i] == xString[xString.length - i - 1]){
            continue;
        }
        else{
            isPalidrome = false;
            break;
        }
    }
    return isPalidrome;
};