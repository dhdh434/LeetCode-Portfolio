# LeetCode 1791 Find Center of Star Graph
## Explanation and steps of code  
first take the first two arrays from the edges, and if one number is in both of them, then we will know that it is the center node. So check which number is in both the first adn second array and that is the center node

## Time Efficiency  
O(1) 

## Problem Explanation  
There is an undirected star graph consisting of n nodes labeled from 1 to n. A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi. Return the center of the given star graph.
