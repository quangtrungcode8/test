let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
let result = document.getElementById('result');
let errorMessage = document.getElementById('error-message')

function calculate(operator) {
  let num1 = parseFloat(number1.value);
  let num2 = parseFloat(number2.value);
  
  if (isNaN(num1) || isNaN(num2)) {
    errorMessage.textContent = 'Vui lòng nhập số hợp lệ'
    result.value = '';
    return;
  }
  errorMessage.textContent = '';
  
  switch (operator) {
    case '+':
      result.value = num1 + num2;
      break;
    case '-':
      result.value = num1 - num2;
      break;
    case '*':
      result.value = num1 * num2;
      break;
    case '/':
        if(num2 === 0){
            errorMessage.textContent = 'Lỗi chia cho 0!'
            result.value = '';
        } else{
            result.value = num1 / num2;
        }
      break;
    default:
      result.value = 'Error';
  }
}