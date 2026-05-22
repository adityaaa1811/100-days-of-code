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