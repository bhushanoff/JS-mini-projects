var calculate = (n1, operator, n2) => {
  const num1 = parseFloat(n1) , num2 = parseFloat(n2) ;
        if (operator === 'add') { return num1 + num2 }
        else if (operator === 'subtract') { return num1 - num2 } 
        else if (operator === 'multiply') { return num1 * num2 } 
        else if (operator === 'divide') { return num1 / num2 }
        
        return result
}

var calculator = document.querySelector('.calculator')
var keys = calculator.querySelector('.calculator__keys')
var display = document.querySelector('.calculator__display')
var previousKeyType = calculator.dataset.previousKeyType;

keys.addEventListener('click', e => {

  if (e.target.matches('button')) 
  {
    var key = e.target
    var action = key.dataset.action
    var keyContent = key.textContent
    var displayedNum = display.textContent

    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))

    if (!action) {
          if(calculator.dataset.previousKeyType) // either no previousType or if p..Type is an operator
          {
            if(calculator.dataset.previousKeyType == 'number')
            {
              display.textContent += keyContent;
            }
            else if(calculator.dataset.previousKeyType != 'number')
            {
              display.textContent = keyContent;
            }
          }
          else
          {
            display.textContent = keyContent;
          }
          calculator.dataset.previousKeyType = 'number'
    }

    if (action === 'decimal') {
      display.textContent = displayedNum + '.'
    }

    if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      key.classList.add('is-depressed');
      calculator.dataset.previousKeyType = 'operator';
      previousKeyType = calculator.dataset.previousKeyType;
      
      calculator.dataset.firstValue = displayedNum;
      calculator.dataset.operator = action;
    }

    if(action === 'clear'){
      delete calculator.dataset.operator;
      delete calculator.dataset.previousKeyType;
      delete calculator.dataset.firstValue;

      display.textContent = '0';
      displayedNum = '0';
    }

    if (action === 'calculate') {
      var firstValue = calculator.dataset.firstValue;
      var operator = calculator.dataset.operator;
      var secondValue = display.textContent;

      display.textContent = calculate(firstValue, operator, secondValue);
      
      delete calculator.dataset.operator;
      delete calculator.dataset.previousKeyType;
      delete calculator.dataset.firstValue;
    }

    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
  }
})