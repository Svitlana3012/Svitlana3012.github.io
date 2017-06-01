(function() {
  'use strict';

  var root = document.createElement('div');
  root.classList.add('root');

  var body = document.querySelector('body');
  body.appendChild(root);

  var test = document.createElement('div');
  test.classList.add('test');
  root.appendChild(test);

  var title = document.createElement('h3');
  title.classList.add('title');
  title.appendChild(document.createTextNode('Тест по программированию'));
  test.appendChild(title);

  var wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  test.appendChild(wrapper);

  var data = [{
      questionNumber: '1. Вопрос #1',
      answerVariant: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
    },
    {
      questionNumber: '2. Вопрос #2',
      answerVariant: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
    },
    {
      questionNumber: '3. Вопрос #3',
      answerVariant: ['Вариант овтета 1', 'Вариант овтета 2']
    }
  ];

  var questions = document.createDocumentFragment();
  var answers = [];


  for (var i = 0, max = data.length; i < max; i++) {
    var question = document.createElement('ul');
    question.appendChild(document.createTextNode(data[i].questionNumber));
    questions.appendChild(question);

    for (var a = 0, length = data[i].answerVariant.length; a < length; a++) {
      var label = document.createElement('label');
      // label.setAttribute('label id', '(data[i].questionNumber, data[i].answerVariant)');
      label.appendChild(document.createTextNode(data[i].answerVariant[a]));
      var answer = document.createElement('input');
      answer.setAttribute('type', 'checkbox');
      label.appendChild(answer);
      question.appendChild(label);
      answers.appendChild(answer);

      for (var j = 0, max1 = answers.length; j < max1; j++) {
        if (answer [j].cheked) {
          console.log(question [i], answer[j]);
        }
      }
    }
  }

  wrapper.appendChild(questions);

  var button = document.createElement('button');
  button.classList.add('check');
  button.appendChild(document.createTextNode('Проверить мои результаты'));

  test.appendChild(button);

})();
