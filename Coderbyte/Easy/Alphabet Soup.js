function AlphabetSoup(str) {

    var array = str.split('');
    var arraySorted = array.sort(function (ch1, ch2) {return (ch1.toLowerCase() > ch2.toLowerCase());});
    return arraySorted.join('');
}
