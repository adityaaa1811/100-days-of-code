# Problem 2: Contains Duplicate III

Problem:
Given an integer array nums and two integers
indexDiff and valueDiff,
return true if there exist two indices i and j such that:

|i - j| <= indexDiff

and

|nums[i] - nums[j]| <= valueDiff

Approach:
Used Sliding Window and Hashing concepts.

Maintained a valid window of elements
within the allowed index range.

Checked whether elements satisfied
the value difference condition.

Time Complexity:
Depends on implementation

Learnings:
- Advanced Sliding Window
- Ordered Lookup Thinking
- Window Constraints
- Hashing Optimization