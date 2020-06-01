function squareDigits(num){
  //may the code be with you
    var numberString = num.toString().split('');
    var toUp = 0;
    var result = '';
    for (var i = 0; i < numberString.length; i++) {
      toUp = Number(numberString[i]) * Number(numberString[i]);
      result+=toUp;
    }
return Number(result);
}