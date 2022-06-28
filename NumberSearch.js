function NumberSearch(str) {

    // Declare variables
    var separatedString = str.split('')
    var letters = [];
    var numbers = [];
    var sum = 0;

    /*Once we´ve created the empty arrays we can
    now filter and push those separated Items into the lists*/
    for (var i = 0; i < str.lenght; i++) {
        var currentItem = separatedString[i];
        if (isNaN(parseInt(currentItem))) {
            letters.push(currentItem);
        } else {
            numbers.push(currentItem);
        };
    };

    /*Now we can operate with the numbers, */
    for (var i = 0; i < numbers.length; i++) {
        currentNumber = Number(numbers[i]);
        sum = sum + currentNumber;
    };

    return (Math.round(sum / letters.length));

};

// keep this function call here 
console.log(NumberSearch(readline()));