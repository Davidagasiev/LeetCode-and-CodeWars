var isAnagram = (s, t) => {
    let main1 = s.split("").sort(),
    	main2 = t.split("").sort(),
    	res = true;
    	if (main1.length === main2.length) {
    		main1.forEach( function(element, index) {
    			if (element != main2[index]) {
    			res = false;
       			}
    		});
    	} else {
    		res = false;
    	}
    
    return res;
};