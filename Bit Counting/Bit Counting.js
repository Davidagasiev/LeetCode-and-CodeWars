var countBits = (n) => {
  let arr = n.toString(2).split(""),
    times = 0;
  arr.forEach(function(element, index) {
    if(element == "1") times++;
  });
  return times;
};