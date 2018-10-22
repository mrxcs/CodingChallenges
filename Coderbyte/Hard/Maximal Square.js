// Mathematical logic by https://www.youtube.com/watch?v=_Lf1looyJMU , Code by Marcelo R.

function MaximalSquare(matrix) {

    matrix = treatMatrix(matrix);
    var answerMatrix = createAnswerMatrix (matrix);
    var biggest = 0;

    for (let i = 1; i < matrix.length; i++) { // interator each row of Matrix, starting at the second row
        for (let ii = 1; ii < matrix[i].length; ii++) { // interator each 'char' of Row, starting at the second 'char'
            var topLeft = matrix[i-1].charAt(ii-1);
            var topRight  = matrix[i-1].charAt(ii);
            var botLeft = matrix[i].charAt(ii-1);
            var botRight  = matrix[i].charAt(ii);

            var aTopLeft = answerMatrix[i-1].charAt(ii-1);
            var aTopRight  = answerMatrix[i-1].charAt(ii);
            var aBotLeft = answerMatrix[i].charAt(ii-1);
            var aBotRight  = answerMatrix[i].charAt(ii);

            if (parseInt(botRight) === 0) {
                answerMatrix[i] = answerMatrix[i] + 0;
            }

            else {
                let number = Math.min(parseInt(aTopLeft), parseInt(aTopRight), parseInt(aBotLeft)) + 1;
                answerMatrix[i] = answerMatrix[i] + number.toString();

                if (number > biggest) {
                    biggest = number;
                }
            }
        }
    }
  return biggest * biggest;
}

function treatMatrix(matrix) {

    //add the first 'all 0' row
    var firstRow = "";
    for (let i = 0; i < matrix [0].length; i++) {
        firstRow = firstRow + 0;
    }
    matrix.unshift(firstRow);

    //add '0' at the begging of each row
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = 0 + matrix[i];
    }

    return matrix;
}

function createAnswerMatrix(base) {

    var output = [base[0]]; //copy the first 'all 0' row

    for (let i = 1; i < base.length; i++) { //create and add '0' at the begging of each row
        output.push("0");
    }

    return output;
}

MaximalSquare(readline()); // keep this function call here
