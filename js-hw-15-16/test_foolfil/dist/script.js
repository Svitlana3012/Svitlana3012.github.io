'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function () {

    'use strict';

    // 1) сделать елемент с типом тега
    // 2) дать класс
    // 3) дать опциональные аттрибуты
    // 4) повесить текстовую ноду
    // вернуть готовый узел

    function createNode(type, cls, attributes, str) {
        var el = document.createElement(type);

        if (cls && typeof cls === 'string') {
            el.classList.add(cls);
        }

        if (attributes && (typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object') {
            for (var i = 0; i < attributes.length; i++) {
                el.setAttribute(attributes[i].name, attributes[i].value);
            }
        }

        if (str && typeof str === 'string') {
            el.appendChild(document.createTextNode(str));
        }

        return el;
    }

    var body = document.querySelector('body'),
        form,
        formQuestion,
        formAnswers,
        formAnswer,
        fragment,
        formCorrectAnswer,
        formButton,
        testQuestion,
        testAnswer1,
        testAnswer2,
        testAnswer3,
        testAnswer4,
        testCorrectAnswer,
        userTest,
        userTestArrey,
        userTestArr = [],
        gotUserTest;

    // отрисовка DOM
    var createInputLayout = function createInputLayout() {
        form = createNode('form', 'form-wrapper', null, null);
        formQuestion = createNode('input', 'form-question', [{ name: 'placeholder', value: 'введите вопрос' }, { name: 'id', value: 'question' }], null);
        formAnswers = createNode('div', 'form-answers', null, null);
        fragment = document.createDocumentFragment();
        for (var i = 0; i < 4; i++) {
            formAnswer = createNode('input', 'answer', [{ name: 'placeholder', value: 'введите вариант ответа' }], null);
            formAnswer.setAttribute('id', 'answer' + [i]);
            fragment.appendChild(formAnswer);
        }
        formCorrectAnswer = createNode('input', 'form-correct-answer', [{ name: 'placeholder', value: 'введите ПРАВИЛЬНЫЙ(ые) вариант(ы) ответа' }, { name: 'id', value: 'correct-answer' }], null);
        formButton = createNode('button', 'form-button-fulfil', null, 'ЗАПОЛНИТЬ ТЕСТ ФОРМУ');

        form.appendChild(formQuestion);
        form.appendChild(formAnswers).appendChild(fragment);
        form.appendChild(formCorrectAnswer);
        form.appendChild(formButton);
        body.appendChild(form);
    };
    createInputLayout();

    //по клику создается тест
    formButton.addEventListener('click', function (e) {
        e.preventDefault();
        createTest();
    });

    function createTest() {
        //забираем значения инпутов
        var getValues = function getValues() {
            testQuestion = document.getElementById('question').value;
            testAnswer1 = document.getElementById('answer0').value;
            testAnswer2 = document.getElementById('answer1').value;
            testAnswer3 = document.getElementById('answer2').value;
            testAnswer4 = document.getElementById('answer3').value;
            testCorrectAnswer = document.getElementById('correct-answer').value;
        };
        getValues();
        //конструктор
        function Test(question, answer1, answer2, answer3, answer4, correctAnswer) {
            return {
                question: question,
                answer1: answer1,
                answer2: answer2,
                answer3: answer3,
                answer4: answer4,
                correctAnswer: correctAnswer
            };
        };

        userTest = new Test(testQuestion, testAnswer1, testAnswer2, testAnswer3, testAnswer4, testCorrectAnswer);
        userTestArr.push(userTest);
        userTestArrey = Object.values(userTest);
        console.log('usertest', userTest);
        console.log('arr', userTestArr);
        console.log('arr1', userTestArrey);

        localStorage.setItem('userTestArr', JSON.stringify(userTestArr));
        gotUserTest = localStorage.getItem('userTestArr');
        gotUserTest = JSON.parse(gotUserTest);
        console.log('gotUserTest', gotUserTest);
        console.log('question from UserTest', gotUserTest[0].question);
    };

    var testRadio = {
        __proto__: userTest
    };
    var testCheckbox = {
        __proto__: userTest
    };
})();