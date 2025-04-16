# LeetCode 141 Linked List Cycle
## Explanation and steps of code  
1) create a hash table to track values in the linked list
2) iterate throught the linked list and over each node take the value and put it in hash table
3) if the hash table key already exists then return false

## Time Efficiency  
O(n) because it must iterate over every item in the linked list.  

## Problem Explanation  
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

