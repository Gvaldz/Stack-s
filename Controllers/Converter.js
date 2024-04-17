import { Stack } from '../models/Stack.js';

export class Converter {
    constructor() {}

    verifyOperator(character) {
        const operators = ['+', '-', '*', '/'];
        return operators.includes(character);
    }

    evaluate(operator) {
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

    convert(expression) {
        let prefix = '';
        const operatorStack = new Stack();

        for (let i = expression.length - 1; i >= 0; i--) {
            const character = expression[i];

            if (this.verifyOperator(character)) {
                while (!operatorStack.isEmpty() && this.evaluate(operatorStack.top.value) >= this.evaluate(character)) {
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
}

export default Converter;
