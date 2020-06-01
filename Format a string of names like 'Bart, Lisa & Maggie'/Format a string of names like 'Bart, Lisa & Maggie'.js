function list(names){
  //your code here
      var lastResult = '';
      // Check if there is names
      if(names.length === 0){
          return lastResult;
        }else {
      // Create loop and loop through names 
    for (var i = 0; i < names.length; i++) {
      // If there is only one name
        if (names.length === 1 ) {
          return names[i].name;
      // If there is two names
        }else if(names.length === 2){
        return names[0].name + ' & ' + names[1].name; 
      // If there is more than two names
        }else if (names.length > 2){
          var nameMoreThanTwo = names[names.length - 2].name + ' & ' + names[names.length - 1].name;
          for (var i = 0; i < names.length - 2; i++) {
            lastResult+= names[i].name + ', ';
          }
          return lastResult + nameMoreThanTwo;    
        }
      }
    }   
}