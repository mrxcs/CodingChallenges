function LetterChanges (str) {

  str = str.toLowerCase();
  var plus = "";
  var result = "";

  for (let i = 0; i < str.length; i++) {

      if (str.charAt(i).match(/[_\W]+/g)) { /* '\W' means any not word */
           plus = plus + str.charAt(i);
      } else {
          plus = plus + String.fromCharCode(str.charCodeAt(i)+1);
      }
  }

  for (let i = 0; i < plus.length; i++) {

      if (plus.charAt(i).match(/[aeiou]/)){
          result = result + plus.charAt(i).toUpperCase();
      } else {
          result = result + plus.charAt(i);
      }
  }

  return result;
}
