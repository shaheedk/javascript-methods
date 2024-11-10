function trueCount(arr){
    return arr.filter(value=> value===true).length
}
console.log( trueCount([true,false,true,true]))

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            // Handle division by zero
            if (num2 === 0) {
                return "Cannot divide by zero";
            } else {
                return num1 / num2;
            }
        default:
            return "Invalid operator";
    }
}
console.log(calculator(2, "+", 2));
