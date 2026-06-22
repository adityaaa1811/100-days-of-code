# Problem 1: Ransom Note

Problem:
Given two strings ransomNote and magazine,
return true if ransomNote can be constructed
using the letters from magazine.

Each letter in magazine can only be used once.

Approach:
Used HashMap to store character frequencies
from magazine.

Traversed ransomNote:
- checked if character exists
- decreased frequency when used
- returned false if character unavailable

Time Complexity:
O(n + m)

Space Complexity:
O(1)

Learnings:
- Revised frequency counting
- Strengthened HashMap concepts
- Practiced string traversal
- Learned resource allocation logic

# Problem 2: Word Pattern

Problem:
Given a pattern and a string,
check if the string follows the same pattern.

Approach:
Used two HashMaps.

One map:
pattern character → word

Second map:
word → pattern character

While traversing:
- ensured both mappings remained consistent
- returned false if conflict found

Time Complexity:
O(n)

Space Complexity:
O(n)

Learnings:
- Practiced two-way mapping
- Improved HashMap understanding
- Learned pattern matching logic
- Strengthened string processing skills