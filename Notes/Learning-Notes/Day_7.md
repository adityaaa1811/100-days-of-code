# Problem 1: Binary Search

Problem:
Given a sorted array and a target,
return the index of target if found,
otherwise return -1.

Approach:
Used Binary Search.

Maintained:
- low pointer
- high pointer

Calculated:
mid = low + (high - low) / 2

Compared target with nums[mid]:
- if equal → return mid
- if smaller → search left half
- if greater → search right half

Repeated until low > high.

Time Complexity:
O(log n)

Space Complexity:
O(1)

Mistakes:
Initially confused about updating low and high pointers.

Learnings:
- Learned Binary Search technique
- Understood search space reduction
- Practiced sorted-array optimization
- Learned logarithmic complexity

# Problem 2: Search Insert Position

Problem:
Given a sorted array and a target,
return the index if target is found.
If not found,
return the index where it should be inserted.

Approach:
Used Binary Search.

Compared target with middle element:
- if equal → return index
- if target smaller → move left
- if target greater → move right

When search ended:
low pointer represented correct insert position.

Time Complexity:
O(log n)

Space Complexity:
O(1)

Mistakes:
Initially confused about why low becomes insert position after loop ends.

Learnings:
- Strengthened Binary Search understanding
- Learned boundary handling
- Understood insert-position logic
- Practiced pointer updates carefully