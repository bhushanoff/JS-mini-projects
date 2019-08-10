var calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = parseFloat(n1) + parseFloat(n2)
  }
  else if (operator === 'subtract') {
    result = parseFloat(n1) - parseFloat(n2)
  } 
  else if (operator === 'multiply') {
    result = parseFloat(n1) * parseFloat(n2)
  } 
  else if (operator === 'divide') {
    result = parseFloat(n1) / parseFloat(n2)
  }
  
  return result
}

var calculator = document.querySelector('.calculator')
var keys = calculator.querySelector('.calculator__keys')
var display = document.querySelector('.calculator__display')
var previousKeyType = calculator.dataset.previousKeyType;

keys.addEventListener('click', e => {

  if (e.target.matches('button')) {
      var key = e.target
      var action = key.dataset.action
      var keyContent = key.textContent
      var displayedNum = display.textContent
  
    if (!action) {
      if (displayedNum === '0' || previousKeyType === 'operator') {
        display.textContent = keyContent
      } else {
        display.textContent = displayedNum + keyContent
      }
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

    if (action === 'calculate') {
      var firstValue = calculator.dataset.firstValue;
      var operator = calculator.dataset.operator;
      var secondValue = display.textContent;

      display.textContent = calculate(firstValue, operator, secondValue)
      // ...
    }

    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
  }
})