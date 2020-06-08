const searchInsert = (nums, target) => {
  if(nums.includes(target)){
    return nums.indexOf(target);
  }else{
    nums.push(target);
    return nums.sort((a, b) => a - b).indexOf(target);
  }
};