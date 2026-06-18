# Problem 1: Permutation in String

Problem:
Given two strings s1 and s2,
return true if s2 contains a permutation of s1.

Approach:
Used Sliding Window and Frequency Counting.

Steps:
- Stored frequency of characters in s1
- Created a fixed-size window in s2
- Updated window frequencies while sliding
- Compared frequencies with target

If frequencies matched:
- returned true

Otherwise:
- returned false

Time Complexity:
O(n)

Space Complexity:
O(1)

Learnings:
- Fixed-size Sliding Window
- Frequency Counting
- String Matching
- Window Optimization

# Problem 2: Continuous Subarray Sum

Problem:
Given an integer array nums and integer k,
return true if the array contains a continuous subarray
of size at least 2 whose sum is a multiple of k.

Approach:
Used Prefix Sum and HashMap.

Stored remainder of:
prefixSum % k

If the same remainder appeared again
with distance >= 2,
a valid subarray existed.

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:
- Prefix Sum
- Modulo Arithmetic
- HashMap Optimization
- Subarray Detection