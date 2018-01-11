class Results {
  constructor(element) {
    this.list = element;
  }

  store(strTimes) {
    let element = document.createElement('li');
    element.innerHTML = strTimes;
    this.list.appendChild(element);
  }

  clear() {
    while (this.list.lastChild)
      this.list.removeChild(this.list.lastChild);
  }
}
