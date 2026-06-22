# Day 12 Goals

- Solve 2 DSA problems
- Learn hashmap thinking
- Practice JavaScript conditionals
- Add active navbar section effect
- Add loading animation
- Improve portfolio UX
- Push progress to GitHub

# Problem 1: Roman to Integer

Problem:
Convert a Roman numeral string
into an integer.

Approach:
Used HashMap to store:
- Roman symbol
- corresponding integer value

Traversed string from left to right.

Logic:
- if current value < next value
  subtract current value
- otherwise add current value

Time Complexity:
O(n)

Space Complexity:
O(1)

Mistakes:
Initially confused about subtraction cases like IV and IX.

Learnings:
- Learned HashMap usage
- Improved traversal logic
- Understood condition-based parsing
- Practiced optimization using mappings

# Problem 2: Majority Element

Problem:
Find the element that appears
more than n/2 times in array.

Approach:
Used HashMap for frequency counting.

Traversed array:
- stored count of each element
- checked if count exceeded n/2

Returned majority element immediately.

Time Complexity:
O(n)

Space Complexity:
O(n)

Mistakes:
Initially forgot to update frequency correctly.

Learnings:
- Learned frequency counting
- Strengthened HashMap usage
- Improved array traversal logic
- Understood optimization using mappings