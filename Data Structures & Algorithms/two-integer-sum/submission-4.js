class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        const res = []
        for(let i = 0; i < nums.length; i++) {
            let complement = target - nums[i];
            if(map.has(complement)) {
                res.push(map.get(complement));
                res.push(i);
            }
            map.set(nums[i], i);
        }
        return res;
    }
}
