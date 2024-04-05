import { Stack } from '../models/Stack.js';

function verifyOperator(character) {
    let operators = ['+', '-', '*', '/'];
    for (let i = 0; i < operators.length; i++) {
        if (operators[i] === character) {
            return true;
        }
    }
    return false;
}

function evaluate(operator) {
    switch (operator) {
        case '+':
        case '-':
            return 1;
        case '*':
        case '/':
            return 2;
        default:
            return 0;
    }
}

export function convert(expression) {
    let prefix = '';
    let operatorStack = new Stack();

    for (let i = expression.length - 1; i >= 0; i--) {
        let character = expression[i];

        if (verifyOperator(character)) {
            while (!operatorStack.isEmpty() && evaluate(operatorStack.top.value) >= evaluate(character)) {
                prefix = operatorStack.pop() + prefix;
            }
            operatorStack.push(character);
        } else if (character === ')') {
            operatorStack.push(character);
        } else if (character === '(') {
            while (!operatorStack.isEmpty() && operatorStack.top.value !== ')') {
                prefix = operatorStack.pop() + prefix;
            }
            operatorStack.pop();
        } else {
            prefix = character + prefix;
        }
    }

    while (!operatorStack.isEmpty()) {
        prefix = operatorStack.pop() + prefix;
    }

    return prefix;
}