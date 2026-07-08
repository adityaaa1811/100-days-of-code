# Problem 1: Two Sum

Problem:
Given an array of integers and a target value, find the indices of two numbers whose sum equals the target.

Approach:
Used HashMap to store previously visited elements and their indices.

Steps:
- Created an empty HashMap
- Traversed the array once
- Calculated complement as target - current element
- Checked whether the complement already existed in the HashMap
- If found, returned the stored index and current index
- Otherwise, stored the current element and its index in the HashMap

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:
- HashMap Lookup
- Complement Technique
- Single-Pass Array Traversal
- Optimization from O(n²) brute force to O(n)