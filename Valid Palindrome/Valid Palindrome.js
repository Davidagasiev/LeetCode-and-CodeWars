var isPalindrome = function(s) {
    let s2 = s.replace(/[\W_]+/g,"").split("").reverse().map((item) => item.toLowerCase()).join("");
    s = s.replace(/[\W_]+/g,"").split("").map((item) => item.toLowerCase()).join("");
 return s === s2 ? true : false;
}