class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map = {}
        for num in nums:
            map[num] = map.get(num, 0) + 1
        sorted_map = sorted(map.items(), key=lambda x: x[1], reverse=True)
        top_k = sorted_map[:k]
        result = [item[0] for item in top_k]
        return result