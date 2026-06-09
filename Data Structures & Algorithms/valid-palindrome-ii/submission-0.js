class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let n = s.length;
        let left = 0;
        let right = n - 1;

        const isPalindrome = (l, r) => {
            while(l < r) {
                if(s[l] !== s[r]) {
                    return false;
                }
                l++;
                r--;
            }
            return true;
        }

        while(left < right) {
            if(s[left] !== s[right]) {
                return isPalindrome(left+1, right) || isPalindrome(left, right-1);
            }
            left++;
            right--;
        }
        return true;
    }
}
