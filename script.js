/**
 * BMI - kg/m2
 *
 * under 18.5kg/m2 – you are considered underweight and possibly malnourished
 *
 * 18.5 to 24.9kg/m2 – you are within a healthy weight range for young and middle-aged adults
 *
 * 25.0 to 29.9kg/m2 – you are considered overweight
 *
 * over 30kg/m2 – you are considered obese.
 */

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');

const showResult = (value, color) => {
  result.style.backgroundColor = color;
  return (result.innerHTML = value);
};

const calculateBMI = (event) => {
  event.preventDefault();
  let height = document.querySelector('.height').value;
  let weight = document.querySelector('.weight').value;

  if (height === '' || isNaN(height)) {
    return (result.innerHTML = 'Provide a valid Height!');
  } else if (weight === '' || isNaN(weight)) {
    return (result.innerHTML = 'Provide a valid Weight!');
  } else {
    height = height / 100;
    let bmi = (weight / Math.pow(height, 2)).toFixed(2);

    if (bmi < 18.5) {
      showResult(`Underweight:<span>${bmi}</span>`, 'yellow');
    } else if (bmi >= 18.5 && bmi < 24.9) {
      showResult(`Normal:<span>${bmi}</span>`, 'green');
    } else if (bmi >= 25.0 && bmi < 29.9) {
      showResult(`Overweight:<span>${bmi}</span>`, 'orange');
    } else {
      showResult(`Obese:<span>${bmi}</span>`, 'red');
    }
  }
  reset.style.display = 'block';
};

btn.addEventListener('click', calculateBMI);

reset.addEventListener('click', () => {
  document.querySelector('form').reset();
  reset.style.display = 'none';
  result.style.display = 'none';
});
