var containsDuplicate = function(nums) {
    const unique = new Set(nums);
    if(unique.size === nums.length) return false;
    return true;
};