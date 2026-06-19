# Problem 1: Binary Subarrays With Sum

Problem:
Given a binary array nums and an integer goal,
return the number of non-empty subarrays
with sum equal to goal.

Approach:
Used Prefix Sum and HashMap.

Steps:
- Maintained running sum
- Checked if (currentSum - goal) existed
- Added count of matching prefix sums
- Updated HashMap frequency

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:
- Prefix Sum
- HashMap Frequency Counting
- Subarray Counting
- Running Sum Optimization

# Problem 2: Maximum Average Subarray I

Problem:
Given an integer array nums and integer k,
find the maximum average value of any
contiguous subarray of length k.

Approach:
Used Fixed Sliding Window.

Steps:
- Calculated first window sum
- Slid window across array
- Added incoming element
- Removed outgoing element
- Tracked maximum sum

Time Complexity:
O(n)

Space Complexity:
O(1)

Learnings:
- Fixed Sliding Window
- Running Sum
- Window Optimization
- Average Calculation