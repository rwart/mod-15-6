const stopwatch = new Stopwatch(
  document.querySelector('.stopwatch'));

const results = new Results(
    document.querySelector('.results'));

const startButton = document.getElementById('start');
startButton.addEventListener('click', () => stopwatch.start());

const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', () => stopwatch.stop());

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => stopwatch.clear());

const storeButton = document.getElementById('store');
storeButton.addEventListener('click', () => results.store(
  stopwatch.format(stopwatch.times)
));

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => results.clear());
