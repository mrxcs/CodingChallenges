function FirstReverse(str) {

    var result = "";

  for (let i = str.length-1 ; i >= 0; i--) {

      result = result + str.charAt(i);

  }
  return result;

}
