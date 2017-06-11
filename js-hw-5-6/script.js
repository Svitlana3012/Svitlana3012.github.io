(function() {
  'use strict';

// 1) сделать елемент с типом тега
// 2) дать класс
// 3) дать опциональные аттрибуты
// 4) повесить текстовую ноду
// вернуть готовый узел

function createNode(type, cls, attributes, str) {
  var el = document.createElement(type);

  if (cls && (typeof cls === 'string')) {
    el.classList.add(cls);
  }

  if (attributes && (typeof attributes === 'object')) {
    for (var i = 0; i < attributes.length; i++) {
      el.setAttribute(attributes[i].name, attributes[i].value);
    }
  }

  if (str && (typeof str === 'string')) {
    el.appendChild(document.createTextNode(str));
  }

  return el;
}

  var root = document.createElement('div');
  root.classList.add('root');

  var body = document.querySelector('body');
  body.appendChild(root);


  var elements = {};
  var createLayout = function() {
      var container = createNode('div', null, null, null);
      container.style.border = '1px solid #ccc';

      var startBtn = createNode('button', 'start', null, 'START'),
      clearBtn = createNode('button', 'clear', null, 'CLEAR');
      elements.timeField = createNode('p', 'timeField', null, '0');
      elements.timeField.style.fontSize = '3rem';

      startBtn.addEventListener('click', start);
      // startBtn.addEventListener('click', pause);
      // startBtn.addEventListener('click', start);
      clearBtn.addEventListener('click', pause);

      container.append(startBtn, clearBtn, elements.timeField);

      return container;
    };

    root.appendChild(createLayout());

    var deltaTime = 0;
    var startTime = Date.now();
    var intervalID = 0;
    var sec = 0;
    var min = 0;
    var hour = 0;
    var msec = 0;

    function updateTime() {
      deltaTime = Date.now() - startTime;
      sec = Math.floor(deltaTime/1000);
      min = Math.floor(sec/60);
      hour = Math.floor(min/60);
      msec = deltaTime - sec*1000;
      console.log(hour.toString() + ':' + min.toString() + ':' + sec.toString() + ':' + msec.toString());

      // updateHTML();
    }

    // function updateHTML() {
    //   elements.timeField.appendChild(hour.toString() + ':' + min.toString() + ':' + sec.toString() + ':' + msec.toString())
    // }

    function changeNamePause() {
      var el = document.querySelector('.start');
      el.textContent = 'PAUSE';
      return el;
    }
    // function changeNameContinue() {
    //   var el = document.querySelector('.start');
    //   el.textContent = 'CONTINUE';
    //   return el;
    // }
    function start() {
      startTime = Date.now();
      intervalID = setInterval(updateTime, 1);
      changeNamePause();
    }

    function pause() {
      clearInterval(intervalID);
      // changeNameContinue();
    }

    // function pause() {
    //
    // }

})();
