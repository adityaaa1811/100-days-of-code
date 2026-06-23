# Problem 1: 3Sum

Problem:
Given an integer array nums, return all unique triplets
[a, b, c] such that a + b + c = 0.

Approach:
Used Sorting + Two Pointer Technique.

Steps:
- Sorted the array
- Fixed one element at a time
- Used two pointers (left and right)
- Checked triplet sum
- Moved pointers based on sum
- Skipped duplicate values
- Stored unique triplets

Time Complexity:
O(n²)

Space Complexity:
O(1) (excluding output array)

Learnings:
- Sorting as a preprocessing step
- Two Pointer Technique
- Duplicate Handling
- Optimization from O(n³) to O(n²)
- Pattern recognition for interview problems