# Problem 1: Minimum Size Subarray Sum

Problem:
Given an array of positive integers nums
and a target value,
return the minimum length of a subarray
whose sum is greater than or equal to target.

Approach:
Used Sliding Window.

Steps:
- expanded window by moving right pointer
- maintained current sum
- when sum >= target:
  updated minimum length
  shrank window from left side

Time Complexity:
O(n)

Space Complexity:
O(1)

Learnings:
- Strengthened Sliding Window pattern
- Practiced dynamic window shrinking
- Learned minimum length optimization
- Improved two-pointer thinking

