const inputTemperature = document.getElementById('inputTemperature');
const outputCelsius = document.getElementById('outputCelsius');
const outputFahrenheit = document.getElementById('outputFahrenheit');
const outputKelvin = document.getElementById('outputKelvin');
const resetBtn = document.getElementById('resetBtn');
const fromScaleSelect = document.getElementById('fromScale');
const toScaleSelect = document.getElementById('toScale');

const roundToTwoDP = (num) => {
  return num.toFixed(2);
};

const convertTemperature = () => {
  const temperature = parseFloat(inputTemperature.value);
  const fromScale = fromScaleSelect.value;
  const toScale = toScaleSelect.value;

  let celsiusTemp, fahrenheitTemp, kelvinTemp;

  if (fromScale === 'celsius') {
    celsiusTemp = temperature;
    fahrenheitTemp = (celsiusTemp * 1.8) + 32;
    kelvinTemp = celsiusTemp + 273.15;
  } else if (fromScale === 'fahrenheit') {
    fahrenheitTemp = temperature;
    celsiusTemp = (fahrenheitTemp - 32) * (5 / 9);
    kelvinTemp = (fahrenheitTemp + 459.67) * (5 / 9);
  } else if (fromScale === 'kelvin') {
    kelvinTemp = temperature;
    celsiusTemp = kelvinTemp - 273.15;
    fahrenheitTemp = 1.8 * (kelvinTemp - 273) + 32;
  }

  if (toScale === 'celsius') {
    outputCelsius.value = roundToTwoDP(celsiusTemp);
    outputFahrenheit.value = roundToTwoDP(fahrenheitTemp);
    outputKelvin.value = roundToTwoDP(kelvinTemp);
  } else if (toScale === 'fahrenheit') {
    outputCelsius.value = roundToTwoDP(celsiusTemp);
    outputFahrenheit.value = roundToTwoDP(fahrenheitTemp);
    outputKelvin.value = roundToTwoDP(kelvinTemp);
  } else if (toScale === 'kelvin') {
    outputCelsius.value = roundToTwoDP(celsiusTemp);
    outputFahrenheit.value = roundToTwoDP(fahrenheitTemp);
    outputKelvin.value = roundToTwoDP(kelvinTemp);
  }
};

const resetFields = () => {
  inputTemperature.value = '';
  outputCelsius.value = '';
  outputFahrenheit.value = '';
  outputKelvin.value = '';
};

inputTemperature.addEventListener('input', convertTemperature);
fromScaleSelect.addEventListener('change', convertTemperature);
toScaleSelect.addEventListener('change', convertTemperature);
resetBtn.addEventListener('click', resetFields);

document.getElementById('tipBtn').addEventListener('click', function() {
  var noteContainer = document.getElementById('noteContainer');
  if (noteContainer.style.display === 'block') {
    noteContainer.style.display = 'none';
  } else {
    noteContainer.style.display = 'block';
  }
});
