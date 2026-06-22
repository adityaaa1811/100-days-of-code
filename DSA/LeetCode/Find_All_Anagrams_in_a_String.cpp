#include<vector>
#include<string>
using namespace std;

class Solution {
public:
    vector<int> findAnagrams(string s, string p) {

        vector<int> ans;

        if(p.size() > s.size()) {
            return ans;
        }

        vector<int> pCount(26,0);
        vector<int> window(26,0);

        for(char ch : p){
            pCount[ch-'a']++;
        }

        for(int i=0; i<p.size(); i++){
            window[s[i]-'a']++;
        }

        if(window == pCount){
            ans.push_back(0);
        }

        for(int right = p.size(); right < s.size(); right++){

            window[s[right]-'a']++;

            window[s[right-p.size()]-'a']--;

            if(window == pCount){
                ans.push_back(right-p.size()+1);
            }
        }

        return ans;
    }
};