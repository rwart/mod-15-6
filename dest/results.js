var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Results = function () {
  function Results(element) {
    _classCallCheck(this, Results);

    this.list = element;
  }

  _createClass(Results, [{
    key: 'store',
    value: function store(strTimes) {
      var element = document.createElement('li');
      element.innerHTML = strTimes;
      this.list.appendChild(element);
    }
  }, {
    key: 'clear',
    value: function clear() {
      while (this.list.lastChild) {
        this.list.removeChild(this.list.lastChild);
      }
    }
  }]);

  return Results;
}();