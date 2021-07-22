const randomNumber1 = 8;
const randomNumber2 = 5;

// function declaration = the old way of defining functions
function calculation1(number1, number2) {
    const squared1 = number1 * number1;
    const squared2 = number2 * number2;
    const sum = squared1 + squared2;
    const sumSquared = sum * sum;
    return sumSquared;
}

console.log(calculation1(randomNumber1, randomNumber2));

// function expression = the new way of defining functions = best practice while being a newby to coding
const calculation2 = function (number1, number2) {
    const squared1 = number1 * number1;
    const squared2 = number2 * number2;
    const sum = squared1 + squared2;
    const sumSquared = sum * sum;
    return sumSquared;
};

console.log(calculation2(randomNumber1, randomNumber2));

// arrow function = the very new and hip way of defining functions
const calculation3 = (number1, number2) => {
    const squared1 = number1 * number1;
    const squared2 = number2 * number2;
    const sum = squared1 + squared2;
    const sumSquared = sum * sum;
    return sumSquared;
};

console.log(calculation3(randomNumber1, randomNumber2));