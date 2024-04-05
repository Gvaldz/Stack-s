import { convert as infixToPrefix } from './converter.js';

document.getElementById("btn").addEventListener("click", function() {
    const infixExpression = document.getElementById('infixExpression').value;
    const result = document.getElementById('result');
    const prefixExpression = infixToPrefix(infixExpression);
    result.textContent = 'Prefija: ' + prefixExpression;
});