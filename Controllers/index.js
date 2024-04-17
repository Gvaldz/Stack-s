import { Converter } from './Converter.js';

const infixToPrefix = new Converter();

document.getElementById("btn").addEventListener("click", function() {
    const infixExpression = document.getElementById('infixExpression').value;
    const result = document.getElementById('result');
    const prefixExpression = infixToPrefix.convert(infixExpression);
    result.textContent = 'Prefija: ' + prefixExpression;
});
