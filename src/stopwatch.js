class Stopwatch {
  constructor(display) {
    this.runing = false;
    this.display = display;
    this.reset();
    this.print(this.times);
  }

  reset() {
    this.times = {
      minutes: 0,
      seconds: 0,
      centiseconds: 0,
    };
  }

  print() {
    this.display.innerHTML = this.format(this.times);
  }

  format(times) {
    return `${pad0(times.minutes)} : ${pad0(times.seconds)} : ${
      pad0(Math.floor(times.centiseconds))}`;
  }

  start() {
    if (!this.running) {
      this.running = true;
      this.watch = setInterval(()=>this.step(), 10);
    }
  }

  step() {
    if (!this.running) return;
    this.calculate();
    this.print();
  }

  calculate() {
    this.times.centiseconds += 1;
    if (this.times.centiseconds >= 100) {
      this.times.seconds += 1;
      this.times.centiseconds = 0;
    }

    if (this.times.seconds >= 60) {
      this.times.minutes += 1;
      this.times.seconds = 0;
    }

    if (this.times.minutes >= 100) {
      this.times.centiseconds = 0;
      this.times.seconds = 0;
      this.times.minutes = 0;
    }
  }

  stop() {
    this.running = false;
    clearInterval(this.watch);
  }

  clear() {
    this.stop();
    this.reset();
    this.print(this.times);
  }
}

function pad0(value) {
  let result = value.toString();
  if (result.length < 2) {
    result = '0' + result;
  }

  return result;
}
