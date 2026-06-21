# Problem 1: Max Consecutive Ones III

Problem:
Given a binary array nums and an integer k,
return the maximum number of consecutive 1s
if you can flip at most k zeros.

Approach:
Used Variable Sliding Window.

Steps:
- Expanded window using right pointer
- Counted zeros in current window
- If zeros exceeded k:
  shrank window from left
- Tracked maximum window length

Time Complexity:
O(n)

Space Complexity:
O(1)

Learnings:
- Variable Sliding Window
- Window Constraints
- Two Pointer Optimization

# Problem 2: Degree of an Array

Problem:
Find the smallest possible length of a subarray
that has the same degree as the entire array.

Approach:
Used HashMaps.

Stored:
- frequency of each number
- first occurrence
- last occurrence

Computed:
- array degree
- minimum valid subarray length

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:
- Frequency Counting
- Index Tracking
- HashMap Optimization