//Leetcode 1 Two Sum
//Time Complexity: O(n^2)

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        int sum = 0;
        for(int i = 0; i < nums.Length; i++) {
            for(int j = 0; j < nums.Length; j++){
                if(j != i){
                    sum = nums[i] + nums[j];
                    if(sum == target){
                        return [i, j];
                    }
                }
            }
        }
        return [];
    }
}