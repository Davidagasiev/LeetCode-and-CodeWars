function sort(sentence){
	let arr = sentence.replace(/[^\w\s]/gi,"").split(" "),
		uppercaseWord = [],
		lowercaseWord = [];
	arr.forEach( function(element, index) {
		element === element.toLowerCase()? lowercaseWord.push(element) : uppercaseWord.push(element);
	});
	lowercaseWord = lowercaseWord.sort();
	uppercaseWord = uppercaseWord.sort().reverse();
	let res = lowercaseWord.concat(uppercaseWord);
	return res.join(" ");
}