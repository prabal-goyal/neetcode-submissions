class Solution:
    def findMin(self, nums: List[int]) -> int:
        left = 0;
        right = len(nums) - 1

        while left < right:
            mid = int(left + (right - left) / 2)

            if nums[mid] > nums[right]:
                left = mid + 1
            elif nums[mid] < nums[left]:
                right = mid
            else:
                return nums[left]
        return nums[left]

        