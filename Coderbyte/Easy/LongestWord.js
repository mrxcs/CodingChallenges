function LongestWord(sen) {

  sen = sen.match(/[^_\W]+/g).join(' ');     // Negate anything that is not a word char, including underscore.

  var words = sen.split(" ");

  var biggest = words[0];

  for (let word of words) {
      if (word.length > biggest.length) {
          biggest = word;
      }
  }

  return biggest;


}

/*
Input:"fun&!! time"

Output:"time"


Input:"I love dogs"

Output:"love"
*/
