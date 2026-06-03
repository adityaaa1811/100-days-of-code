# Problem 1: Intersection of Two Arrays II

Problem:
Given two arrays, return their intersection.
Each element should appear as many times
as it shows in both arrays.

Approach:
Used HashMap to store frequency
of elements from first array.

Traversed second array:
- checked if element exists in map
- added to answer
- decreased frequency

Time Complexity:
O(n + m)

Space Complexity:
O(n)

Learnings:
- Revised HashMap usage
- Improved frequency counting
- Practiced array traversal
- Learned handling duplicates correctly

# Problem 2: Single Number

Problem:
Given a non-empty array where every element
appears twice except for one, find that single element.

Approach:
Used XOR operation.

Properties:
- a ^ a = 0
- a ^ 0 = a

Traversed array and XORed all elements.

Duplicate elements cancelled each other,
leaving only the unique element.

Time Complexity:
O(n)

Space Complexity:
O(1)

Learnings:
- Learned XOR basics
- Understood Bit Manipulation
- Solved problem without extra memory
- Learned optimization beyond HashMaps