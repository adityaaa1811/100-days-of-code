# Problem 1: Two Sum

Problem:
Given an array and a target, return indices of two numbers whose sum equals target.

Approach:
Used two nested loops.
Checked every pair:
nums[i] + nums[j] == target
If equal, return indices.

Time Complexity:
O(n²)

Space Complexity:
O(1)

Mistakes:
Initially syntax error in for loop.
Also return statement placement issue.

Learnings:
- Understood nested loop traversal
- Learned brute force approach
- Learned how returning indices works
- Realized syntax matters a lot in C++

# Problem 2: Running Sum of 1D Array

Problem:
Given an array nums, return the running sum where:
runningSum[i] = sum(nums[0]...nums[i])

Approach:
Traversed the array from left to right.
Added previous sum into current element.

Time Complexity:
O(n)

Space Complexity:
O(1)

Mistakes:
(No major mistakes — fill if any happened)

Learnings:
- Learned prefix/running sum concept
- Understood how previous computations help
- Practiced array traversal

# Problem 3: Contains Duplicate

Problem:
Given an integer array nums, return true if any value appears at least twice, otherwise return false.

Approach:
Used unordered_set.
Traversed array elements one by one.
Checked:
if element already exists in set → return true
Otherwise insert into set.

Time Complexity:
O(n)

Space Complexity:
O(n)

Mistakes:
Initially confusion about:
st.find(nums[i]) != st.end()

Learnings:
- Learned use of unordered_set
- Understood hashing concept
- Learned how lookup in set is faster
- Saw optimization from O(n²) brute force to O(n)