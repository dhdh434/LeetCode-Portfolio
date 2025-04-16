# LeetCode 23 Merge k Sorted Lists
## Explanation and steps of code  
1) create a min heap
2) add the head of each item to the heap
3) prepare the result list
4) go through items in the heap, popping off smallest item one at a time and build the merged list

## Time Efficiency  
O(nLogk) n is total number of nodes. k is number of linked lists

## Problem Explanation  
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

