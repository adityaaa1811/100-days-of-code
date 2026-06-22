# Problem 1: Fibonacci Number

Problem:
Given n,
return the nth Fibonacci number.

Fibonacci sequence:
0, 1, 1, 2, 3, 5, 8...

Approach:
Used recursion.

Base Cases:
- if n == 0 → return 0
- if n == 1 → return 1

Recursive Relation:
fib(n) =
fib(n - 1) + fib(n - 2)

Function keeps calling itself
until base cases are reached.

Time Complexity:
O(2^n)

Space Complexity:
O(n)

Mistakes:
Initially confused about recursive function flow.

Learnings:
- Learned recursion basics
- Understood base cases
- Learned recursive function calls
- Saw how recursion builds call stack

# Problem 2: Climbing Stairs

Problem:
You are climbing stairs.
Each time you can climb:
- 1 step
or
- 2 steps

Find total distinct ways to reach nth stair.

Approach:
Used recursion.

At every stair:
- either take 1 step
- or take 2 steps

Recursive Relation:
climb(n) =
climb(n - 1) + climb(n - 2)

Base Cases:
- n == 0 → 1
- n == 1 → 1

Time Complexity:
O(2^n)

Space Complexity:
O(n)

Mistakes:
Initially confused why answer becomes sum of previous two states.

Learnings:
- Understood recursion more deeply
- Learned problem breakdown
- Saw connection with Fibonacci pattern
- Introduced to Dynamic Programming thinking