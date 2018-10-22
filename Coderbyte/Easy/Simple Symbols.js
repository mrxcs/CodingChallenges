function SimpleSymbols(str) {

  for (var i = 0; i < str.length; i++) {

      let curr = str.charAt(i);

      if (RegExp(/[a-zA-Z]/).test(curr)) {
          if (i - 1 < 0 || str.charCodeAt(i - 1) != 43 ||
              str.charAt(i + 1) == str.length ||  str.charCodeAt(i + 1) !== 43) {
              return false;
          }
      }
  }
  return true;
}


/*

function SimpleSymbols(str) {

 for (var i = 0, x = str.length; i < x; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            if ((str[i + 1] != "+") || (str[i - 1] != "+")) {
                return false;
            }
        }
    }

    return true;
}

*/
