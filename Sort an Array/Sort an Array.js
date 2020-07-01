const sortArray = (nums) => {
    let noSwaps;
    for(let i = nums.length - 1;i > 0;i--){
    	noSwaps = true;
    	for(let j = 0;j < i;j++){
    		if (nums[j] > nums[j + 1]) {
    			let temp = nums[j];
    			nums[j] = nums[j + 1];
    			nums[j + 1] = temp;
    			noSwaps = false;
    		}
	   	}
	   	if(noSwaps) break;
    }
    return nums;
};