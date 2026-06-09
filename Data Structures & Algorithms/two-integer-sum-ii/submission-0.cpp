class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        vector<int> ans;
        int n = numbers.size();
        int l = 0;
        int r = n - 1;
        while(l < r){
            int sum = (numbers[l] + numbers[r]);

            if(sum == target && l != r){
                ans.push_back(l+1);
                ans.push_back(r+1);
                break;
            }

            if(sum < target) {
                l++;
            }

            if(sum > target) {
                r--;
            }
        } 
        return ans;
    }
};
