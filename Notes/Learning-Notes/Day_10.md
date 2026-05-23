# Problem 1: Length of Last Word

Problem:
Given a string consisting of words and spaces,
return the length of the last word.

Approach:
Started traversal from end of string.

Steps:
- ignored trailing spaces
- counted characters until next space found

Used reverse traversal for optimization.

Time Complexity:
O(n)

Space Complexity:
O(1)

Mistakes:
Initially forgot to handle trailing spaces.

Learnings:
- Improved string traversal logic
- Learned reverse iteration
- Practiced edge case handling
- Strengthened string manipulation concepts

# Problem 2: Longest Common Prefix

Problem:
Given an array of strings,
find the longest common prefix among them.

Approach:
Took first string as reference.

Compared characters with all other strings:
- if mismatch found
- returned substring till previous index

Continued until mismatch or shortest string ended.

Time Complexity:
O(n * m)

n = number of strings
m = length of smallest string

Space Complexity:
O(1)

Mistakes:
Initially confused about stopping condition during mismatch.

Learnings:
- Improved string comparison logic
- Practiced nested traversal
- Learned prefix matching technique
- Strengthened edge case handling