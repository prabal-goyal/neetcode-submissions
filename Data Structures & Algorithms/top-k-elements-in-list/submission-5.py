class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map = {}

        for num in nums:
            map[num] = map.get(num, 0) + 1
        keys = sorted(map, key=map.get, reverse=True)
        return keys[:k]
            
