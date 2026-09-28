class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        map = {}
        longest = 0
        for num in nums:
            map[num] = False

        for num in nums:
            currentLength = 1

            nextNum = num + 1

            while nextNum in map and map[nextNum] == False:
                currentLength += 1

                map[nextNum] = True

                nextNum += 1
            

            prevNum = num - 1

            while prevNum in map and map[prevNum] == False:
                currentLength += 1

                map[prevNum] = True

                prevNum -= 1

            longest = max(longest, currentLength)
        
        return longest
            