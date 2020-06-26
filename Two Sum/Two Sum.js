var twoSum = function(nums, target) {
  const values = new Map();
  for (let i = 0; i < nums.length; i++) {
    const targetSubtract = target - nums[i],
          matchingValue = values.get(targetSubtract);
    if (matchingValue !== undefined) {
      return [matchingValue, i];
    }
    values.set(nums[i], i);
  }
}