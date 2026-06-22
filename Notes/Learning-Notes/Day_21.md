# Problem 1: Valid Sudoku

Problem:
Determine if a 9×9 Sudoku board is valid.

Rules:
- Each row must contain unique digits.
- Each column must contain unique digits.
- Each 3×3 box must contain unique digits.

Approach:
Used HashSets to track seen values.

For every filled cell:
- checked row uniqueness
- checked column uniqueness
- checked box uniqueness

Stored values using unique keys.

Time Complexity:
O(81)

Space Complexity:
O(81)

Learnings:
- Practiced matrix traversal
- Strengthened HashSet usage
- Learned validation techniques
- Improved coordinate-based thinking

# Problem 2: Longest Substring Without Repeating Characters

Problem:
Given a string s,
find the length of the longest substring
without repeating characters.

Approach:
Used Sliding Window and HashSet.

Maintained:
- left pointer
- right pointer

Expanded window by moving right.

If duplicate character appeared:
- removed characters from left side
- shrunk window until duplicate removed

Tracked maximum window size.

Time Complexity:
O(n)

Space Complexity:
O(min(n, m))

Learnings:
- Learned Sliding Window pattern
- Practiced Two Pointer technique
- Used HashSet for fast lookups
- Improved substring handling