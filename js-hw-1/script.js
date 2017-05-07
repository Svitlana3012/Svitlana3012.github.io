(function () {
  'use strict';
  function calculate(a, b) {
    var result = a;

    if (b >= 0) {
    for (var i = 1; i < b; i++) {
      result *= a;
    }
  return (result);

  } else {
    for (var i = 1; i < b; i++) {
      result *= a;
    }
  return (1 / result);
}
  }

  var num = prompt(`Введите число для просчета`);
  var pow = prompt(`Введите значение степени для просчета`);
  var result = calculate(num, pow);
  console.log(`result is: `, result);

})();
