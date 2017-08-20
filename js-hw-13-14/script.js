(function () {
    'use strict';

    var data = {
      title: 'Тест по какой-то теме',
      questions: [{
        title: 'Вопрос #1',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3'],
        correctAnswers: [1, 3]
      },
      {
        title: 'Вопрос #2',
        answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4'],
        correctAnswers: [1, 3, 4]
      },
      {
        title: 'Вопрос #3',
        answers: ['Вариант овтета 1', 'Вариант овтета 2'],
        correctAnswers: [2]
      }
    ]
  };

    function createNode (type, cls, attributes, str) {
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


    var createLayout = function() {

      var DOMParser,
        questionNodes,
        answers,
        checkBtn;

      var container = createNode('div', 'container', null, null);

      // !генерирование списка вопросов
        const parser = new DOMParser(); // Создаем экземпляр DOMParser

        function parseHTMLString (string) {
          return parser.parseFromString(`<div>string</div>`, 'application/xml');
        }

        function createQuestionNode (data, index) {
          var htmlString = `<ul id="index">data.questions.title</ul>`;
          return parseHTMLString(htmlString);
        }
        function appendToContainer (node) {
          document.container.appendChild(node);
        }

        questionNodes = data.questions.map(createQuestionNode); // трансформируем массив вопросов в массив нод

        questionNodes.forEach(appendToContainer); // каждый элемент массива нод добавляем в контейнер

        //!генерирование соответствующих ответов
        answers = _.map(data.questions, function (item, index) {
          return '<li' + 'id=' + index + '>' + item.answers + '</li>';
        });
        _.forEach(answers, function (item) {
          questionNodes.appendChild(item);
        });

      //   answers = _.map(data.questions, nodeCreate());
      //
      //   function nodeCreate(item) {
      //   var answer = document.createElement('li');
      //   answer.appendChild(document.createTextNode(item.answers));
      //   return answer;
      // }
        console.log(answer);

        checkBtn = createNode('button', 'check', null, 'Проверить мои результаты'); checkBtn.style.background = '#2eb34b';

        container.append(question, checkBtn);

        return container;
      };

      root.appendChild(createLayout());

    })();
