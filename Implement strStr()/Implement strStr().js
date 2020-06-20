var strStr = (haystack, needle) => {
    if (haystack === "" && needle === "") return 0
    	return haystack.search(eval(`/${needle}/`));
};