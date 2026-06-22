#include<vector>
#include<string>
using namespace std;

class Solution {
public:
    bool checkInclusion(string s1, string s2) {

        if(s1.size() > s2.size()){
            return false;
        }

        vector<int> s1Count(26,0);
        vector<int> window(26,0);

        for(char ch : s1){
            s1Count[ch-'a']++;
        }

        for(int i = 0; i < s1.size(); i++){
            window[s2[i]-'a']++;
        }

        if(window == s1Count){
            return true;
        }

        for(int right = s1.size();
            right < s2.size();
            right++){

            window[s2[right]-'a']++;

            window[s2[right-s1.size()]-'a']--;

            if(window == s1Count){
                return true;
            }
        }

        return false;
    }
};