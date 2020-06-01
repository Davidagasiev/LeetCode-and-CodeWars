function solution(number){
    var result = 0;

  for(var i = 0; i < number;i++){
    if((i % 3) === 0){
    result += i;
    }else if((i % 5) === 0 ){
    result += i; 
    }else if((i % 5) === 0  && (i % 3) === 0 ){
    result += i;
    }
  }
  return result;
}