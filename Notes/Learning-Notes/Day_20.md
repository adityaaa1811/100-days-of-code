# Problem 1: Two Sum II – Input Array Is Sorted

Problem:
Given a sorted array of integers,
find two numbers such that they add up
to a specific target.

Approach:
Used Two Pointer technique.

Initialized:
- left pointer at start
- right pointer at end

If sum was too small:
- moved left pointer forward

If sum was too large:
- moved right pointer backward

If sum matched target:
- returned indices

Time Complexity:
O(n)

Space Complexity:
O(1)

Learnings:
- Strengthened Two Pointer technique
- Learned how sorted arrays enable optimization
- Avoided extra HashMap space
- Improved pattern recognition

# Problem 2: Sort Colors

Problem:
Given an array containing only
0s, 1s, and 2s,
sort it in-place.

Approach:
Used Dutch National Flag Algorithm.

Maintained:
- low pointer for 0s
- mid pointer for current element
- high pointer for 2s

Rules:
- if nums[mid] == 0:
  swap low and mid
  move both forward

- if nums[mid] == 1:
  move mid forward

- if nums[mid] == 2:
  swap mid and high
  move high backward

Time Complexity:
O(n)

Space Complexity:
O(1)

Learnings:
- Learned Three Pointer technique
- Understood Dutch National Flag Algorithm
- Practiced in-place array manipulation
- Improved pattern recognition