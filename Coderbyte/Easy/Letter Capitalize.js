function LetterCapitalize(str) {

  var result = "";

  for (let i of str.split(" ")) {
      let temp = i.slice(1,i.length);
      result = result + " " + i.charAt(0).toUpperCase() + temp;
  }
  return result.trim();
}
