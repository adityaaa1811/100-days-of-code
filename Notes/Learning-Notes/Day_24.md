# Problem 1: Find All Anagrams in a String

Problem:
Given two strings s and p,
return all starting indices of p's anagrams in s.

Approach:
Used Sliding Window with frequency counting.

Steps:
- Stored frequency of characters in p
- Created a window of size p.length
- Updated frequencies while sliding
- Compared window frequency with target frequency
- Stored starting index when frequencies matched

Time Complexity:
O(n)

Space Complexity:
O(1)

Learnings:
- Fixed-size Sliding Window
- Frequency Counting
- String Processing
- Window Updates

# Problem 2: Subarray Sum Equals K

Problem:
Given an array of integers nums
and an integer k,
return the total number of subarrays
whose sum equals k.

Approach:
Used Prefix Sum and HashMap.

Steps:
- Maintained running sum
- Stored frequency of prefix sums
- For each position:
  checked if (currentSum - k) existed
- Added occurrences to answer
- Updated HashMap

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:
- Prefix Sum Technique
- HashMap Frequency Tracking
- Running Sum Optimization
- Counting Subarrays Efficiently