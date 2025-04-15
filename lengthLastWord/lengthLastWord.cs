//Leetcode #58 Length of Last Word
//Time Complexity: O(n)

public class Solution {
    public int LengthOfLastWord(string s) {
        List<string> words = new List<string>();
        //split the string into an array based on spaces
        words = s.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries).ToList();
        //get the length of the last element (word) in the array 
        string lastWord = words[words.Count - 1];
        return lastWord.Length;
    }
}