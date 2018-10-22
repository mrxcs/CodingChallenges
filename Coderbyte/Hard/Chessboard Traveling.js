function ChessboardTraveling(str) {

    // convert the string into integer to define x, y, a and b
    var arg = [];

    for (let i of str.split('')) {
        if (RegExp(/[0-9]/).test(i)) {
            arg.push(i);
        }
    }

    var x = parseInt(arg[0]);
    var y = parseInt(arg[1]);
    var a = parseInt(arg[2]);
    var b = parseInt(arg[3]);

    // make sure a and b is greater than x and y
    if (a <= x || b <= y) {
        return "Please provide us coorindates where a > x and b > y such that str = '(x y)(a b)'";
    }

    // create var solutions to track the number of solutions available
    var solutions = 0;

    // define differences, if differene is 2 then solutions is 2
    // otherwise get 'n' solutions
    if (a > x && b > y) {
        var diff = (a-x) + (b-y);
        var diff_a = a - x;
        var diff_b = b - y;
        if (diff == 2) {
            solutions = 2;
        } else {
            solutions = factorial(diff_a+diff_b) / (factorial(diff_a) * factorial(diff_b)); 
			// Fórmula: Análise Combinatória - Permutação com Repetição
        }
    }
    return parseInt(solutions);
}

function factorial(num) {

    var result = num;

    for (let i = num - 1; i >= 1; i--) {
        result = result * i;
    }
    return result;
}

// keep this function call here
ChessboardTraveling(readline());
