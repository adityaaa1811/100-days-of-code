# Problem 1: Valid Palindrome

Problem:
Given a string, determine whether it is a palindrome after removing non-alphanumeric characters and ignoring cases.

Approach:
Used two pointers:
- left pointer starting from beginning
- right pointer starting from end

Ignored special characters and spaces.
Compared characters after converting to lowercase.

If characters mismatched:
return false

Otherwise continued until pointers crossed.

Time Complexity:
O(n)

Space Complexity:
O(1)

Mistakes:
Initially forgot to ignore special characters.

Learnings:
- Learned two pointer technique
- Understood pointer movement logic
- Learned string preprocessing
- Practiced edge case handling