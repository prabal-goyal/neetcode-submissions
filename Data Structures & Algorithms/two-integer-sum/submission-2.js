class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const n = nums.length;
        const result = new Array();
        for(let i = 0; i < n - 1; i++) {
            for(let j = i+1; j < n; j++){
                if(nums[i] + nums[j] === target) {
                    result.push(i, j);
                }
            }
        }
        return result;
    }
}
