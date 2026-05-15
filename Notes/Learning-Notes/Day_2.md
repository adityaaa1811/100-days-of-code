# Day 2 Goals

- Solve Maximum Subarray
- Solve 2 more LeetCode problems
- Setup Codeforces properly
- Build personal webpage
- Push everything to GitHub

# Problem 1: Maximum Subarray

Problem:
Given an integer array nums, find the contiguous subarray with the largest sum and return its sum.

Approach:
Used Kadane’s Algorithm.

Maintained:
- currentSum
- maxSum

Added each element to currentSum.
If currentSum became larger than maxSum:
updated maxSum.

If currentSum became negative:
reset currentSum to 0.

Time Complexity:
O(n)

Space Complexity:
O(1)

Mistakes:
Initially confused about:
why negative currentSum should be discarded.

Learnings:
- Learned Kadane’s Algorithm
- Understood optimization from brute force O(n²) to O(n)
- Learned how greedy thinking works
- Realized previous negative sum only hurts future subarrays

# Problem 2: Best Time to Buy and Sell Stock

Problem:
Given an array where prices[i] is the stock price on day i,
find the maximum profit possible by buying once and selling once.

Approach:
Maintained:
- minimum price seen so far
- maximum profit

For every price:
- updated minimum price
- calculated current profit
- updated maximum profit if needed

Time Complexity:
O(n)

Space Complexity:
O(1)

Mistakes:
Initially thought brute force was needed.

Learnings:
- Learned sliding/minimum tracking pattern
- Understood how single traversal solves optimization problems
- Practiced greedy thinking
- Learned importance of maintaining state while traversing

# Problem 3: Valid Anagram

Problem:
Given two strings s and t,
return true if t is an anagram of s.

Approach:
Used unordered_map / frequency counting.
Counted frequency of characters in both strings.
Compared frequencies.

Time Complexity:
O(n)

Space Complexity:
O(1) or O(n)

Mistakes:
Initially forgot edge case when string lengths differ.

Learnings:
- Learned frequency counting technique
- Understood hashing with strings
- Practiced unordered_map usage
- Learned importance of edge cases