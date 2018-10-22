function KaprekarsConstant(num) {

    var result = num;
    var count = 0;

    while (result != 6174) {
        result = execute(result);
        count++;
    }
    return count;
}

function execute (num) {
    var arrayAsc = num.toString().split('').sort();
    var arrayDesc = arrayAsc.slice(0).reverse();
    return get1000(parseInt(arrayDesc.join('')) - parseInt(arrayAsc.join('')));
}

function get1000( num ) {
    while (num < 1000) {
        num = num * 10;
    }
    return num;
}
