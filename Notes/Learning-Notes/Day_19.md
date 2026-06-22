# Problem 1: Product of Array Except Self

Problem:
Given an array nums,
return an array answer such that
answer[i] is equal to the product
of all elements except nums[i].

Approach:
Used Prefix and Suffix Products.

Step 1:
Created prefix products array.

Step 2:
Traversed from right side and maintained
suffix product.

Step 3:
Multiplied prefix and suffix products
to get final answer.

Time Complexity:
O(n)

Space Complexity:
O(1) Extra Space
(excluding output array)

Learnings:
- Learned Prefix Product technique
- Learned Suffix Product technique
- Practiced space optimization
- Solved problem without division

# Problem 2: Longest Consecutive Sequence

Problem:
Given an unsorted array of integers,
return the length of the longest consecutive sequence.

Approach:
Used HashSet for O(1) lookups.

For each number:
- checked if it was the start of a sequence
- expanded forward while consecutive numbers existed
- tracked maximum sequence length

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:
- Learned HashSet optimization
- Practiced sequence detection
- Avoided sorting for better performance
- Solved a classic interview problem