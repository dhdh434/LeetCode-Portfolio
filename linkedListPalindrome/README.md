# LeetCode 234 Palindrome Linked List
## Explanation and steps of code  
1) find the middle and end of the linked list using slow and fast pointers
2) reverse the second half of the linked list
3) compare the last half to the first half

## Time Efficiency  
O(n) because it loops through n/2 times and then reverses the back half of the linked list and then compares the front half to the last half (n/2) loops.  

## Problem Explanation  
Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
