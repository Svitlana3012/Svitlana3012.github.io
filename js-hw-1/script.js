(function () {
  'use strict';
  // task 1
  function calculate(a, b) {
    var result = a;

    if (b >= 0) {
    for (var i = 1; i < b; i++) {
      result *= a;
    }
  return result;

  } else {
    for (var j = 1; j < b; j++) {
      result *= a;
    }
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
//
//task 2
  var arr = [];
  for (var i = 0; i < 5; i++) {
    arr [i] = prompt('Введите Ваше имя');
  }

  var name = prompt('Ваше имя пользователя');

  for (var j = 0; j < 5; j++) {
  if (name == arr [i]) {
    alert(name + ',Вы успешно вошли');
    break;
  } else {
    alert('Попробуйте еще раз');
    break;
  }
}
  console.log('array', arr);

  //task 3
  var str = prompt('Ведите слово');
  var arrow = str.split('');
  // var newArrow = arrow.sort()
  var newArrow = arrow.reverse();
  var newStr = newArrow.join ('');
  console.log(arrow);
  console.log(newArrow);
  console.log(newStr);
})();
