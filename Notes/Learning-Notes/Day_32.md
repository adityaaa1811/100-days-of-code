# Problem 1: Next Greater Element I

Problem:
Given two arrays nums1 and nums2, find the next greater element for each element in nums1 based on its position in nums2.

Approach:
Used a Monotonic Decreasing Stack with a HashMap.

Steps:

* Traverse nums2
* Maintain a decreasing stack
* If current element is greater than stack top:
* Pop element
* Store mapping in HashMap
* Push current element into stack
* For remaining elements, next greater element is -1
* Build answer using HashMap

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:

* Monotonic Stack
* Next Greater Element Pattern
* HashMap Lookup
* Stack Optimization

# Problem 2: Next Greater Element II

Problem:
Given a circular integer array nums, return the next greater number for every element. If no greater element exists, return -1.

Approach:
Used a Monotonic Decreasing Stack and traversed the array twice to simulate circular behavior.

Steps:

* Initialize result array with -1
* Traverse array from 2n-1 to 0
* Use modulo (i % n) to access circular elements
* Pop all smaller or equal elements from stack
* Top of stack becomes next greater element
* Push current element into stack

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:

* Circular Array Traversal
* Monotonic Stack
* Modulo Indexing
* Next Greater Element Pattern