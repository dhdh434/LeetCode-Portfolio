# LeetCode 14 Longest Common Prefix
## Explanation and steps of code  
1) loop through each letter in each word and if the letter is in the previous longest prefix then move to next letter, if not then change the longest prefix to to be shorter

## Time Efficiency  
O(n*m) where n is number of words and m is length of words 

## Problem Explanation  
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

