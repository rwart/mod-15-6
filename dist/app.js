var stopwatch = new Stopwatch(document.querySelector('.stopwatch'));

var results = new Results(document.querySelector('.results'));

var startButton = document.getElementById('start');
startButton.addEventListener('click', function () {
  return stopwatch.start();
});

var stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
  return stopwatch.stop();
});

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
  return stopwatch.clear();
});

var storeButton = document.getElementById('store');
storeButton.addEventListener('click', function () {
  return results.store(stopwatch.format(stopwatch.times));
});

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function () {
  return results.clear();
});