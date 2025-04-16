# LeetCode 146 LRU Cache
## Explanation and steps of code  
1) create the constructor  
2) create the get function. Check if the key belongs in the dictionary, if so, delete it and add it back to the list the list so that it starts at the beginning of the list and wont expire as soon.  
3) create the put function. If the key already is in the cache dictionary, then delete the item. Check if the cache is full, if so then pop off the oldest item. Then add the new key.

## Time Efficiency  
O(1) because I am using hash tables which have O(1) lookup efficiency.  

## Problem Explanation  
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.
