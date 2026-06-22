# Problem 1: Plus One

Problem:
Given an integer array representing a large number,
increment the number by one
and return the resulting array.

Approach:
Started from last digit.

If digit was less than 9:
- increment it
- return answer immediately

If digit was 9:
- convert it to 0
- continue carry forward

If all digits became 0:
- created new array with leading 1

Time Complexity:
O(n)

Space Complexity:
O(1)

Mistakes:
Initially confused about carry handling after 9.

Learnings:
- Learned carry propagation
- Practiced array manipulation
- Improved simulation problem solving
- Understood edge cases like [9,9,9]

# Problem 2: Move Zeroes

Problem:
Move all zeroes to the end of array
while maintaining relative order
of non-zero elements.

Approach:
Used Two Pointer technique.

Maintained:
- one pointer for placing non-zero elements
- another pointer for traversal

Whenever non-zero element found:
- swapped with correct position
- incremented non-zero pointer

Time Complexity:
O(n)

Space Complexity:
O(1)

Mistakes:
Initially confused about pointer movement after swapping.

Learnings:
- Learned in-place array modification
- Strengthened Two Pointer technique
- Improved array traversal logic
- Understood optimization without extra space