function PentagonalNumber(num) {

  var dots = Array(num+1); dots[0] = 0; dots[1] = 1;

  for (let i = 2; i < dots.length; i++) {
      dots[i] = dots[i-1] + 5 * (i-1);
  }
  return dots[num];
}

PentagonalNumber(readline()); // keep this function call here
