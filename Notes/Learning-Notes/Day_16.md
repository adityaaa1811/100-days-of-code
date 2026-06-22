# Problem 1: Isomorphic Strings

Problem:
Given two strings s and t,
determine if they are isomorphic.

Two strings are isomorphic if characters
from one string can be replaced to get the other string.

Approach:
Used HashMap to maintain character mapping.

For each character:
- checked existing mapping
- ensured consistency
- prevented multiple characters mapping
  to the same character

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:
- Improved HashMap understanding
- Learned character-to-character mapping
- Practiced pattern recognition
- Understood one-to-one relationships

# Problem 2: Happy Number

Problem:
Determine whether a number is a happy number.

A happy number eventually reaches 1
when replaced by the sum of squares
of its digits repeatedly.

Approach:
Used a HashSet to track previously seen numbers.

Steps:
- calculate sum of squares of digits
- if number becomes 1 → return true
- if number repeats → return false

Time Complexity:
O(log n)

Space Complexity:
O(log n)

Learnings:
- Learned HashSet usage
- Understood cycle detection
- Practiced digit manipulation
- Solved infinite loop detection problem