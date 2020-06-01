function digital_root(n) {
  if (n < 10) return n;
  return digital_root(
    n.toString().split('').reduce((acc, d) => {
      return acc + +d;
    },0));
}