function likes(names) {
  if(names.length === 0){
    return 'no one likes this';
  }else if(names.length === 1){
    return names[0] + " likes this";
  }else if (names.length  === 2){
    return names[0] + ' and ' + names[1] + " like this";
  }else if (names.length === 3){
    var result = names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
    return result;
  }else if(names.length > 3){
    var others = names.length - 2;
    var result = names[0] + ', ' + names[1] + ' and ' + others + " others " + 'like this' ;
    return result;
  }
}