var smallerNumbersThanCurrent = function(nums) {
    const testSort = nums.slice().sort((a, b) => a - b);
    
    return nums.map((element) => testSort.indexOf(element))
};