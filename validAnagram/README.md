# LeetCode 242 Valid Anagram
## Explanation and steps of code  
1) take the letters from both of the words and put them into arrays
2) sort the arrays and compare the arrays to see if they are equal

## Time Efficiency  
O(nlogn + mlogm) n is letters in first word and m is letters in second word.  
This is because to append the strings to arrays, we must loop through each of the letters. And to sort takes nlogn or klogk time

## Problem Explanation  
Given two strings s and t, return true if t is an anagram of s, and false otherwise.


