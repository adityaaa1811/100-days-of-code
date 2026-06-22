# Problem 1: Fruits Into Baskets

Problem:
Given an array fruits,
return the maximum number of fruits
that can be collected using at most
two fruit types.

Approach:
Used Sliding Window and HashMap.

Steps:
- Expanded window by moving right pointer
- Stored fruit frequencies
- If distinct fruit types exceeded 2:
  shrank window from left
- Tracked maximum window size

Time Complexity:
O(n)

Space Complexity:
O(1)

Learnings:
- Variable Sliding Window
- HashMap Frequency Counting
- At Most K Distinct Pattern

# Problem 2: Longest Harmonious Subsequence

Problem:
Given an integer array nums,
find the length of the longest harmonious subsequence.

A harmonious subsequence has:
max value - min value = 1

Approach:
Used HashMap Frequency Counting.

Steps:
- Stored frequency of each number
- For every number:
  checked if num + 1 existed
- Combined frequencies
- Tracked maximum length

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:
- Frequency Counting
- HashMap Optimization
- Sequence Analysis