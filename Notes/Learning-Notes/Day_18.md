# Problem 1: Group Anagrams

Problem:
Given an array of strings,
group all anagrams together.

Approach:
Used HashMap.

For each word:
- sorted its characters
- used sorted string as key
- stored original word in corresponding group

Words with the same sorted form
belonged to the same group.

Time Complexity:
O(n × k log k)

n = number of strings
k = average string length

Space Complexity:
O(n)

Learnings:
- Learned grouping using HashMap
- Revised string sorting
- Practiced key transformation
- Understood how to classify similar data

# Problem 2: Top K Frequent Elements

Problem:
Given an integer array nums and an integer k,
return the k most frequent elements.

Approach:
Used HashMap to count frequency
of each element.

Stored frequencies and selected
the top k elements based on occurrence.

Time Complexity:
O(n log n)

Space Complexity:
O(n)

Learnings:
- Strengthened frequency counting
- Improved HashMap skills
- Learned Top-K selection concepts
- Practiced data prioritization