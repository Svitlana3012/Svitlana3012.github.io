(function () {
  'use strict';

  var div = document.createElement('div');
  div.classList.add('root');
  var test = document.createElement('test');
  test.appendChild(document.createTextNode('Тест по программированию'));
  div.appendChild(test);

  var data = ['...'];
  var obj = {

  }

  var questionNumber = ['Вопрос №1', 'Вопрс №2', 'Вопрос №3'];
  var questions = document.createDocumentFragment();
  for (var i=0, max=questionNumber.length; i<max; i++) {
   var question = document.createElement('ul');
   question.appendChild(document.createTextNode(questionNumber[i]));
   questions.appendChild(question);
}
  test.appendChild(questions);

  var answerVariant = ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4'];
  var answers = document.createDocumentFragment();
  for (var a=0, length=answerVariant.length; a<length; a++) {
   var answer = document.createElement('li');
   answer.appendChild(document.createTextNode(answerVariant[a]));
   answers.appendChild(answer);
}
  questions.appendChild(answers);

  // var test = {
  //   data: {
  //     title: 'Тест по какой-то теме',
  //     questions: [
  //       {
  //         title: 'Вопрос #1',
  //         answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
  //       },
  //       {
  //         title: 'Вопрос #2',
  //         answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
  //       },
  //       {
  //         title: 'Вопрос #3',
  //         answers: ['Вариант овтета 1', 'Вариант овтета 2']
  //       }
  //     ]
  //   }
  // };

})();
