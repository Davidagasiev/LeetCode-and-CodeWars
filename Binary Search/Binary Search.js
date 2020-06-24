var search = function(list, item) {
   let start = 0,
		last  = list.length - 1,
		middleIndex = Math.floor((start + last) / 2);
	while (list[middleIndex] != item && start < last) {
		item < list[middleIndex] ? last = middleIndex -1 : start = middleIndex + 1;
		middleIndex = Math.floor((start + last) / 2);
	}
	return list[middleIndex] != item ? -1 : middleIndex;
};