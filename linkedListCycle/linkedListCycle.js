// leetcode 141 LinkedListCycle

var hasCycle = function(head) {
    index = 0;
    //set current node to be the first node in the Linked list
    currentNode = head;
    var nextNodeDict = new Set();
    //create loop that continues moving through the elements until the last element
    while (currentNode){
        //check if the node value already exists in dictionary, if so return true
        if (nextNodeDict.has(currentNode.next)){
            return true;
        }
        else{
            // add the value to the dictionary
            nextNodeDict.add(currentNode.next);
            currentNode = currentNode.next
        }
    }

    //if no duplicates were hit then return true
    return false;    
};