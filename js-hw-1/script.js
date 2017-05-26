  (function() {
    'use strict';

  // task 1
  function calculate(a, b) {
    var result = a;
    for (var i = 1; i < b; i++) {
    result *= a;
    }
    if (b >= 0) {
      return result;
    } else {
      return 1 / result;
    }
  }

  var num = prompt('Введите число для просчета');
  var pow = prompt('Введите значение степени для просчета');

    if (isNaN(num)) {
      while (isNaN(num)) {
        alert('Значение должно быть ЧИСЛОВЫМ');
        num = prompt('Введите число для просчета');
      }
    } else if (isNaN(pow)) {
       while (isNaN(pow)) {
        alert('Значение должно быть ЧИСЛОВЫМ');
        pow = prompt('Введите значение степени для просчета');
      }
    } else {
       var result = calculate(+num, +pow);
    }
  console.log('result is: ', result);

//task 2
  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr [i] = prompt('Введите Ваше имя');
  }
  console.log('arr=', arr);

  var name = prompt('Ваше имя пользователя');

  function compare(arr, name) {
    var user = 'Такого пользователя нет';
    for (var i = 0; i<arr.length; i++) {
      if (name === arr[i]) {
         user = name + ', Вы успешно вошли';
         break;
      }
  }
  alert (user);
  }
  compare (arr, name);
  console.log('name', name);

  // task 3
  var str = prompt('Ведите слово');
  var arrow = str.split('');
  // var newArrow = arrow.sort()
  var newArrow = arrow.reverse();
  var newStr = newArrow.join ('');
  console.log(arrow);
  console.log(newArrow);
  console.log(newStr);
})();
