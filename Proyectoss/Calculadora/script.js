function appendValue(value) {
  const display = document.getElementById('display');
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.innerText = '0';
}

function calculate() {
  const display = document.getElementById('display');
  try {
    const result = eval(display.innerText);
    display.innerText = result;
  } catch {
    display.innerText = 'Error';
  }
}
