#Leetcode 242 Valid Anagram
#Time Complexity: O(nlogn + mlogm)


class Solution(object):
    def isAnagram(self, s, t):
        rtype = False
        ogWord = []
        compareWord = []
        for x in range(0, len(s)):
            ogWord.append(s[x])
        for i in range(0, len(t)):
            compareWord.append(t[i])
        ogWord.sort()
        compareWord.sort()
        if (ogWord == compareWord):
            rtype = True

        return rtype
        