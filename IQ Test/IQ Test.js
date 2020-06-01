function iqTest(numbers){
  var ary = numbers.split(" ")
  var even = []
  var odd = []
  
  ary.forEach(function(num){
    if ((Number(num) % 2) === 0) {
      even.push(num);
    }else {
      odd.push(num);
    }
  }
    )
  return even.length > odd.length ? ary.indexOf(odd[0]) + 1 : ary.indexOf(even[0]) + 1  ;
}