function solution(string) {
	let stringArray = string.split(""),
		indexes = [],
		arrays = [],
		res = [];
// Take idexes of camelcases
	for(let i = 0;i < stringArray.length;i++){
		if (stringArray[i] == stringArray[i].toUpperCase()) {
			indexes.push(i);
		}
	} 
// Split camecased words  
	for(let i = 0;i <= indexes.length;i++){
		let zeroIndex = 0;
		if (i != 0) {
			zeroIndex = indexes[i - 1];
		arrays.push(stringArray.slice(zeroIndex,indexes[i]));
		}else if (i == indexes.length) {
			arrays.push(stringArray.slice(zeroIndex));
		}else{
			arrays.push(stringArray.slice(zeroIndex,indexes[i]));
		}
	}
// Add spaces to the end of the arrays
	for (let i = 0;i < arrays.length - 1;i++) {
		arrays[i].push(" ");
	}
// Join them all
	for (let i = 0;i < arrays.length;i++) {
		res = res.concat(arrays[i]);
	}
	return res.join(""); 
}