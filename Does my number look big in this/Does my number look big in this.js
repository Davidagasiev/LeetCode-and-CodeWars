function narcissistic(value) {
  // Code me to return true or false
  let eg = 0,
      val = value.toString().split('');
  for (let i = 0; i < val.length; i++) {
  eg+= Math.pow(val[i],val.length);
  }
  if (eg === value) return true
    return false;
    }
