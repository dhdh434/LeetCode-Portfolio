//Leetcode 1791 Find Center of Star Graph
//Time Complexity: O(1) because it only has 5 steps

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    //get the values of the first two arrays in edges
    edge1 = edges[0];
    edge2 = edges[1];

    //compare the different combination of values and
    //return the value that is in both of the arrays
    if (edge1[0] === edge2[0]){
        return edge1[0];
    }
    else if (edge1[1] === edge2[0]){
        return edge1[1];
    }
    else{
        return edge2[1];
    }
};