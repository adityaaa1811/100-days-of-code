# Problem 1: Merge Sorted Array

Problem:
Given two sorted arrays nums1 and nums2,
merge them into a single sorted array.

Approach:
Used two pointers to compare elements from both arrays.
Placed larger elements from the back of nums1.

Started filling array from the end to avoid overwriting existing values.

Time Complexity:
O(m + n)

Space Complexity:
O(1)

Mistakes:
Initially confused about pointer positions and reverse traversal.

Learnings:
- Learned merging technique
- Understood backward traversal logic
- Practiced pointer manipulation
- Saw importance of using sorted property efficiently

# Problem 2: Longest Substring Without Repeating Characters

Problem:
Given a string s,
find the length of the longest substring without repeating characters.

Approach:
Used Sliding Window technique.

Maintained:
- left pointer
- right pointer
- set/map for tracking characters

Expanded window using right pointer.
If duplicate found:
moved left pointer until duplicate removed.

Tracked maximum window length.

Time Complexity:
O(n)

Space Complexity:
O(n)

Mistakes:
Initially confused about when to move left pointer.

Learnings:
- Learned Sliding Window technique
- Understood dynamic window expansion/shrinking
- Practiced hashing with strings
- Learned optimization from brute force to O(n)

# Problem 3: Valid Parentheses

Problem:
Given a string containing brackets:
(), {}, []
determine whether the brackets are valid.

Approach:
Used stack data structure.

Traversed each character:
- opening bracket → pushed into stack
- closing bracket → checked top element

If mismatch found:
return false

At end:
if stack empty → valid

Time Complexity:
O(n)

Space Complexity:
O(n)

Mistakes:
Initially forgot to check whether stack was empty before accessing top element.

Learnings:
- Learned stack data structure usage
- Understood LIFO principle
- Practiced bracket matching logic
- Learned importance of edge case handling