function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}
function minus(num1, num2, num3) {
    return num1 - num2 - num3;
}
function multiply(num1, num2, num3) {
    return num1 * num2 * num3;
}
function devide(num1, num2, num3) {
    return num1 / num2 / num3;
}

function calculate(num1, num2, num3, opera) {
    return opera(num1+10, num2+10,num3+10);
}

calculate(50, 10, 1, sum);