// 14. Longest Common Prefix
// complexity O(n*m)
// n is number of words
// m is length of words

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1){
        return strs[0];
    }
    if (strs.length < 0){
        return "";
    }

    let longestPrefix = "";
    let compareWord = strs[0];
    for (let i = 1; i < strs.length; i++){
        longestPrefix = "";
        let smallerWord = Math.min(strs[i].length, compareWord.length)
        for (let j = 0; j < smallerWord; j++){
            if(compareWord[j] === strs[i][j]){
                longestPrefix += strs[i][j];
            }
            else{
                compareWord = longestPrefix;
                break;
            }
            if (j === smallerWord - 1){
                compareWord = longestPrefix;
            }

        }
    }
    return longestPrefix;
};