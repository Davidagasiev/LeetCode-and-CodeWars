function narcissistic(value) {
  // Code me to return true or false
  var eg = 0;
  var val = value.toString().split('');
  for (var i = 0; i < val.length; i++) {
  eg+= Math.pow (val[i],val.length);
  }
  if (eg === value) return true
    return false;
    }