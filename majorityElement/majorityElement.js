//Leetcode 169 Majority Element
//Time Complexity: O(n)

/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let numCounter = {};
    let majority = nums.length / 2;
    // loop through the array
    for(let i = 0; i < nums.length; i++){
        // increments dictionary key value if key exists, if not
        // it creates a dictionary key at value 1
        if (numCounter[nums[i]] == undefined){
            numCounter[nums[i]] = 1;
        }
        else{
            numCounter[nums[i]] += 1;
        }
        // checks if the count is greater than the majority
        if(numCounter[nums[i]] > majority){
            return nums[i];
        }
    }
};