#Leetcode 234 Palindrome Linked List
#complexity O(n)


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        #if the list is nothing or 1 length then it is a palindrone
        if not head or not head.next:
            return True 

        # Step 1: Find the middle using fast and slow pointers
        # fast moves 2 for every 1 and that slow moves, so slow
        # will always be at the halfway point
        slow, fast = head, head
        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next

        # Step 2: Reverse the second half of the list
        #now we reverse the seocnd half of the list so it goes backwards 
        prev = None
        while slow:
            temp = slow.next
            slow.next = prev
            prev = slow
            slow = temp
        
        # Step 3: Compare first half with reversed second half
        left, right = head, prev  # prev is now the head of the reversed half
        while right:  # Right half might be shorter for odd-length lists
            if left.val != right.val:
                return False
            left = left.next
            right = right.next

        return True  # If all matched, it's a palindrome

        

            
        

        

            
        
            
        