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
var i=0;
keys.addEventListener('click', e => {

  if (e.target.matches('button')) {
    var key = e.target
    var action = key.dataset.action
    var keyContent = key.textContent
    var displayedNum = display.textContent

    if (!action) {
      if(i > 0)
      {
        if(i == 1)
        {
          display.textContent = keyContent;
          i = 2;
        }
        else
        {
          display.textContent = displayedNum + keyContent;
        }
      }    
      else if (displayedNum === '0')
      {       
        display.textContent = keyContent;
      } 
      else 
      {       
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

      i = 1
    }

    if(action === 'clear'){
      delete calculator.dataset.operator;
      delete calculator.dataset.previousKeyType;
      delete calculator.dataset.firstValue;

      display.textContent = '0';
      displayedNum = '0';
    }

    if (action === 'calculate') {
      i = 0;

      var firstValue = calculator.dataset.firstValue;
      var operator = calculator.dataset.operator;
      var secondValue = display.textContent;

      display.textContent = calculate(firstValue, operator, secondValue)
      
      delete calculator.dataset.operator;
      delete calculator.dataset.previousKeyType;
      delete calculator.dataset.firstValue;
    }

    Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
  }
})