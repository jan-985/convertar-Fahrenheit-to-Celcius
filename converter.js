function convert() {
  fahrenheit = document.getElementById('input-number').value;
  document.getElementById('result').innerHTML=(Math.round((fahrenheit-32)/1.8));
}