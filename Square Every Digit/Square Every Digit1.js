function squareDigits(num){
  //may the code be with you
    var numberString = num.toString().split('');
    var result = '';
    for (var i = 0; i < numberString.length; i++) {
      result+= Number(numberString[i]) * Number(numberString[i]);
    }
return Number(result);
}