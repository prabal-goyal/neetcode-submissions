class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const map = new Map();
        if(s.length !== t.length) {
            return false;
        }
        for(const c of s) {
            map.set(c, (map.get(c) || 0) + 1);
        }
        for(const c of t) {
            if(!map.get(c)) {
                return false;
            }
            map.set(c, map.get(c) - 1);
        }
        return true;
    }
}
