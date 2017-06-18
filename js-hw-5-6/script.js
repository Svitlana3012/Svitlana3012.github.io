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
  var startBtn = 0;
  var clearBtn = 0;
  var createLayout = function() {
      var container = createNode('div', 'container', null, null);

      elements.timeField = createNode('p', 'timeField', null, '00 : 00 : 00 : 000');
      startBtn = createNode('button', 'start', null, 'START');
      startBtn.style.background = '#2eb34b';
      clearBtn = createNode('button', 'clear', null, 'CLEAR');
      clearBtn.style.background = '#c62222';

      container.append(elements.timeField, startBtn, clearBtn);

      return container;
  };

  root.appendChild(createLayout());

  startBtn.addEventListener('click', function() {
      if (startBtn.textContent === 'PAUSE') {
        pause();
      }
      else {
        start();
      }
    });

  clearBtn.addEventListener('click', clear);

  var startTime = 0;
  var deltaTime = 0;
  var intervalID = 0;
  var sec = 0;
  var min = 0;
  var hour = 0;
  var msec = 0;
  var savedTime = 0;
  var continueTime = 0;
  var time = 0;

    function updateTime() {
      deltaTime = Date.now() - startTime;
      updateHTML();
    }

    function updateHTML() {
      time = new Date(deltaTime);
      sec = time.getSeconds();
      min = time.getMinutes();
      hour = time.getUTCHours();
      msec = time.getMilliseconds();
      if(min<10){
        min = '0' + min;
      }
      if(sec<10){
        sec = '0' + sec;
      }
      if (msec>10 && msec<100) {
        msec = '0' + msec;
      }
      if (msec<10) {
        msec = '00' + msec
      }
      console.log(hour.toString() + ':' + min.toString() + ':' + sec.toString() + ':' + msec.toString());
      elements.timeField.innerHTML = '0' + hour + ' : ' + min + ' : ' + sec + ' : ' + msec;
    }

    function changeNamePause() {
      var el = document.querySelector('.start');
      el.textContent = 'PAUSE';
      startBtn.style.background = '#1e14de';
      return el;
    }
    function changeNameContinue() {
      var el = document.querySelector('.start');
      el.textContent = 'CONTINUE';
      startBtn.style.background = '#2eb34b';
      return el;
    }
    function changeNameStart() {
      var el = document.querySelector('.start');
      el.textContent = 'START';
      startBtn.style.background = '#2eb34b';
      return el;
    }

    function pause() {
      clearInterval(intervalID);
      // savedTime += deltaTime;
      changeNameContinue();
    }
    function start() {
      startTime = Date.now() - deltaTime;
      // continueTime = savedTime + deltaTime;
      intervalID = setInterval(updateTime, 1);
      changeNamePause();
    }
    function clear() {
      clearInterval(intervalID);
      deltaTime = 0;
      elements.timeField.innerHTML = '00 : 00 : 00 : 000';
      changeNameStart();
    }

})();
