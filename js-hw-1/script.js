(function () {
  'use strict';
  // task 1
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
  var num = prompt('Введите число для просчета');
  var pow = prompt('Введите значение степени для просчета');
  var result = calculate(num, pow);
  console.log('result is: ', result);
//

//task 2
  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr [i] = prompt('Введите Ваше имя');
  }

  var name = prompt('Ваше имя пользователя');

  for (var i = 0; i < 5; i++) {
  if (name == arr [i]) {
    alert(name + ',Вы успешно вошли');
    break;
  } else {
    alert('Попробуйте еще раз');
  }
}
  console.log('array', arr);
})();
