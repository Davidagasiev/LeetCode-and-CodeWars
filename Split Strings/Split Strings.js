function solution(str){
  let result = '';
  str.length === 0 ? result = [] :
  (str.length % 2) === 0 ? result = str.match(/(..?)/g) : result = (str + '_').match(/(..?)/g);
  return result;
}
