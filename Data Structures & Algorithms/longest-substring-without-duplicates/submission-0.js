class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let left = 0;
        let n = s.length;
        const set = new Set();
        for(let right = 0; right < n; right++) {
            while(set.has(s[right])){
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
