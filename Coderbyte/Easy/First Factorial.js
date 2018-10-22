function FirstFactorial(num) {

    var result = num;

    for (let i = num - 1; i >= 1; i--) {
        result = result * i;
    }

  return result;

}
