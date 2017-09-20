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
        form = void 0,
        formQuestion = void 0,
        formAnswersQuantity = void 0,
        formAnswers = void 0,
        formAnswer = void 0,
        fragmentFormAnswer = void 0,
        formCorrectAnswer = void 0,
        formButton = void 0,
        testQuestion = void 0,
        fragmentTestAnswer = void 0,
        testAnswer = void 0,
        testAnswer2 = void 0,
        testAnswer3 = void 0,
        testAnswer4 = void 0,
        testCorrectAnswer = void 0,
        userTest = void 0,
        userTestArray = void 0,
        userTestArr = [],
        gotUserTest = void 0;

    // !отрисовка DOM
    // отрисовка инпутов для вопроса, кол-ва вариантов ответов
    var createInputLayout = function createInputLayout() {
        form = createNode('form', 'form-wrapper', null, null);
        formQuestion = createNode('input', 'form-question', [{ name: 'placeholder', value: 'введите вопрос' }, { name: 'id', value: 'question' }], null);
        formAnswersQuantity = createNode('input', 'form-answers-quantity', [{ name: 'placeholder', value: 'введите КОЛИЧЕСТВО вариантов ответа' }, { name: 'id', value: 'answers-quantity' }, { name: 'onchange', value: 'createAnswersInputLayout()' }], null);

        form.appendChild(formQuestion);
        form.appendChild(formAnswersQuantity);

        body.appendChild(form);
    };
    createInputLayout();

    // добавление инпутов для вариантов ответов

    formAnswersQuantity.onchange = function createAnswersInputLayout() {
        var answers = document.getElementById('answers-quantity').value;
        formAnswers = createNode('div', 'form-answers', null, null);
        fragmentFormAnswer = document.createDocumentFragment();

        if (isNaN(answers)) {
            alert('ВВЕДИТЕ ЧИСЛО');
        } else {
            var layout = false;
            if (!layout) {
                for (var i = 0; i < answers; i++) {
                    formAnswer = createNode('input', 'answer', [{
                        name: 'placeholder',
                        value: 'введите вариант ответа'
                    }], null);
                    formAnswer.setAttribute('id', 'answer' + [i]);
                    fragmentFormAnswer.appendChild(formAnswer);
                }
                form.appendChild(formAnswers).appendChild(fragmentFormAnswer);

                // добавление инпута правильного ответа и кнопки
                var createLayout = function createLayout() {
                    formCorrectAnswer = createNode('input', 'form-correct-answer', [{
                        name: 'placeholder',
                        value: 'введите НОМЕР ПРАВИЛЬНОГО варианта ответа'
                    }, { name: 'id', value: 'correct-answer' }], null);
                    formButton = createNode('button', 'form-button-fulfil', null, 'ЗАПОЛНИТЬ ТЕСТ ФОРМУ');
                    form.appendChild(formCorrectAnswer);
                    form.appendChild(formButton);
                    layout = true;
                };
                createLayout();
            }
        }
    };

    //по клику создается тест
    formButton.addEventListener('click', function (e) {
        e.preventDefault();
        createTest();
    });

    function createTest() {
        //забираем значения инпутов
        var getValues = function getValues() {
            var answers = document.getElementById('answers-quantity').value;
            testQuestion = document.getElementById('question').value;
            console.log('testQuestion', testQuestion);
            // fragmentTestAnswer = document.createDocumentFragment();
            // for (let i = 0; i < answers; i++) {
            //     testAnswer = fragmentFormAnswer.getElementById('answer').value;
            //     fragmentTestAnswer.appendChild(testAnswer);
            // }
            // console.log('fragmentTestAnswer', fragmentTestAnswer);

            testAnswer2 = document.getElementById('answer1').value;
            testAnswer3 = document.getElementById('answer2').value;
            testAnswer4 = document.getElementById('answer3').value;
            testCorrectAnswer = document.getElementById('correct-answer').value;
        };
        getValues();
        //
        // //конструктор
        // function Test(question, answer1, answer2, answer3, answer4, correctAnswer) {
        //     return {
        //         question,
        //         answer1,
        //         answer2,
        //         answer3,
        //         answer4,
        //         correctAnswer
        //     }
        // };
        //
        // userTest = new Test(testQuestion, testAnswer1, testAnswer2, testAnswer3, testAnswer4, testCorrectAnswer);
        // userTestArr.push(userTest);
        // userTestArray = Object.values(userTest);
        // console.log('usertest', userTest);
        // console.log('arr', userTestArr);
        // console.log('arr1', userTestArrey);
        //
        // localStorage.setItem('userTestArr', JSON.stringify(userTestArr));
        // gotUserTest = localStorage.getItem('userTestArr');
        // gotUserTest = JSON.parse(gotUserTest);
        // console.log('gotUserTest', gotUserTest);
        // console.log('question from UserTest', gotUserTest[0].question);
    };

    var testRadio = {
        __proto__: userTest
    };
    var testCheckbox = {
        __proto__: userTest
    };
})();