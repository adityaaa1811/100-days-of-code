# Problem 1: Container With Most Water

Problem:
Find two lines that together with the x-axis form a container that holds the maximum amount of water.

Approach:
Used Two Pointer Technique.

Steps:
- Placed one pointer at the beginning and one at the end
- Calculated the current water area
- Updated the maximum area found so far
- Moved the pointer with the smaller height
- Repeated until both pointers met

Time Complexity:
O(n)

Space Complexity:
O(1)

Learnings:
- Two Pointer Technique
- Greedy Optimization
- Area Calculation
- Eliminating Brute Force O(n²)
- Pointer Movement Strategy

# Problem 2: Daily Temperatures

Problem:
Given an array of daily temperatures, return an array where each element represents the number of days you have to wait until a warmer temperature. If there is no future warmer temperature, return 0.

Approach:
Used Monotonic Stack.

Steps:
- Created an empty stack to store indices
- Traversed the temperature array from left to right
- Compared current temperature with temperatures at indices stored in the stack
- While current temperature was greater, popped indices from the stack
- Calculated waiting days using current index - popped index
- Stored the result in the answer array
- Pushed current index into the stack
- Remaining indices in the stack had no warmer day, so their values remained 0

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:
- Monotonic Stack
- Next Greater Element Pattern
- Index-Based Processing
- Efficient O(n) Solution
- Stack Applications in Arrays

Pattern:
Stack (Monotonic Decreasing Stack)

Key Insight:
Instead of checking every future temperature, maintain a stack of unresolved days. When a warmer temperature appears, resolve all colder temperatures waiting in the stack.

Interview Takeaway:
Daily Temperatures is a classic Monotonic Stack problem and helps build intuition for:
- Next Greater Element
- Stock Span Problem
- Largest Rectangle in Histogram
- Trapping Rain Water