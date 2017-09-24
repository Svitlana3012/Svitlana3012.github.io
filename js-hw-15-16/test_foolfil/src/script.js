(function () {

'use strict';

// 1) сделать елемент с типом тега
// 2) дать класс
// 3) дать опциональные аттрибуты
// 4) повесить текстовую ноду
// вернуть готовый узел

function createNode(type, cls, attributes, str) {
    let el = document.createElement(type);

    if (cls && (typeof cls === 'string')) {
        el.classList.add(cls);
    }

    if (attributes && (typeof attributes === 'object')) {
        for (let i = 0; i < attributes.length; i++) {
            el.setAttribute(attributes[i].name, attributes[i].value);
        }
    }

    if (str && (typeof str === 'string')) {
        el.appendChild(document.createTextNode(str));
    }

    return el;
}

let body = document.querySelector('body'),
    form,
    formQuestion,
    formAnswersQuantity,
    formAnswers,
    formAnswer,
    fragmentFormAnswer,
    formCorrectAnswer,
    formButton,
    dataButton,
    testQuestion,
    testAnswers,
    testAnswer,
    testCorrectAnswers,
    testCorrectAnswer,
    userTest,
    userTestValues,
    userTestArr = [],
    gotUserTest;

// !отрисовка DOM
    form = createNode('form', 'form-wrapper', null, null);
// отрисовка инпутов для вопроса, кол-ва вариантов ответов
    const createInputLayout = function() {
        formAnswersQuantity = createNode('input', 'form-answers-quantity', [{name: 'placeholder', value: 'введите КОЛИЧЕСТВО вариантов ответа'}, {name: 'id', value: 'answers-quantity'}, {name: 'onchange', value: 'createAnswersInputLayout()'}], null);
        formQuestion = createNode('input', 'form-question', [{name: 'placeholder', value: 'введите вопрос'}, {name: 'id', value: 'question'}], null);

        form.appendChild(formAnswersQuantity);
        form.appendChild(formQuestion);

        body.appendChild(form);
    };
    createInputLayout();

// добавление инпутов для вариантов ответов

    formAnswersQuantity.onchange = function createAnswersInputLayout() {
        let answers = document.getElementById('answers-quantity').value;
        formAnswers = createNode('div', 'form-answers', null, null);
        fragmentFormAnswer = document.createDocumentFragment();

        if (isNaN(answers)){
            alert('ВВЕДИТЕ ЧИСЛО');
        }
        else {
            let layout = false;
            if(!layout) {
                for (let i = 0; i < answers; i++) {
                    formAnswer = createNode('input', `answer`, [{
                        name: 'placeholder',
                        value: 'введите вариант ответа'
                    }], null);
                    formAnswer.setAttribute('id', `answer${[i]}`);
                    fragmentFormAnswer.appendChild(formAnswer);
                }
                form.appendChild(formAnswers).appendChild(fragmentFormAnswer);

                // добавление инпута правильного ответа и кнопки
                const createLayout = function () {
                    formCorrectAnswer = createNode('input', 'form-correct-answer', [{
                        name: 'placeholder',
                        value: 'введите НОМЕР ПРАВИЛЬНОГО варианта ответа'
                    }, {name: 'id', value: 'correct-answer'}], null);

                    dataButton = createNode('button', 'data-button-fulfil', null, 'ЗАПИСАТЬ ВОПРОС');
                    formButton = createNode('button', 'form-button-create', null, 'СОЗДАТЬ ТЕСТ ФОРМУ');

                    form.appendChild(formCorrectAnswer);
                    form.appendChild(dataButton);
                    form.appendChild(formButton);
                    layout = true;
                };
                createLayout();

                //о клику записывается вопрос
                dataButton.addEventListener('click', e => {
                    e.preventDefault();
                    createTestQuestion();
                    clearInputs();
                    replaceForm()
                });

                //по клику создается тест
                formButton.addEventListener('click', e => {
                    e.preventDefault();
                    createTestQuestion();
                    clearInputs();
                    replaceForm();
                    createTestLayout();
                    checkResults()
                });


            }
        }
    };

    function replaceForm(){
        form.removeChild(formAnswers);
        form.removeChild(formCorrectAnswer);
        form.removeChild(formButton);
        form.removeChild(dataButton)
    }

    function createTestQuestion() {
        //забираем значения инпутов
        const getValues = () => {
            let answers = document.getElementById('answers-quantity').value;
            testQuestion = document.getElementById('question').value;
            console.log('testQuestion', testQuestion);
            testAnswers = [];
            for (let i = 0; i < answers; i++) {
                testAnswer = document.getElementById('answer' + i).value;
                testAnswers.push(testAnswer);
            }
            console.log('testAnswers', testAnswers);

            testCorrectAnswers = [];
            testCorrectAnswer = +document.getElementById('correct-answer').value;
            testCorrectAnswers.push(testCorrectAnswer);
            console.log('testCorrectAnswers', testCorrectAnswers);
        };
        getValues();

        //конструктор
        function Question(question, answervariants, correctAnswer) {
            return {
                question,
                answervariants,
                correctAnswer
            }
        }

        userTest = new Question(testQuestion, testAnswers, testCorrectAnswers);

        userTestArr.push(userTest);
        userTestValues = Object.values(userTest);
        console.log('usertest', userTest);
        console.log('arr', userTestArr);
        console.log('arr1', userTestValues);

        localStorage.setItem('userTestArr', JSON.stringify(userTestArr));
        gotUserTest = localStorage.getItem('userTestArr');
        gotUserTest = JSON.parse(gotUserTest);
        console.log('gotUserTest', gotUserTest);
        console.log('question from UserTest', gotUserTest[0].question);
    }

    function clearInputs() {
        let input = document.querySelectorAll('input');
        console.log('input', input);
        let clear = [].map.call(input, function (a) {
            return a.value = '';
        });
    }

    const testRadio = {
        __proto__: userTest
    };
    const testCheckbox = {
        __proto__: userTest
    };

    let root,
        button,
        answers,
        answer,
        checkboxes,
        checkboxesArr = [],
        popupWindow,
        userAnswers,
        popupIsShown;

    function createTestLayout() {

        root = createNode('div', 'root', null, null);

        let body = document.querySelector('body');
        body.appendChild(root);

        //!генерирование вопросов
        let test = _.map(gotUserTest, function (item, index) {
            let question = document.createElement('ul');
            question.classList.add('question');
            question.setAttribute('id', index);
            question.innerHTML = item.question;
            root.appendChild(question);

            //!генерирование соответствующих ответов
            answers = _.map(item.answervariants, function (a, id) {
                let li = document.createElement('li');
                question.appendChild(li);
                answer = document.createElement('label');
                answer.classList.add('answer');
                answer.setAttribute('id', id);
                answer.innerHTML = a;
                li.appendChild(answer);

                checkboxes = document.createElement('input');
                checkboxes.setAttribute('type', 'checkbox');
                checkboxes.classList.add('checkboxes');
                answer.insertBefore(checkboxes, answer.firstChild);
                checkboxesArr.push(checkboxes);
            });
        });

        //! кнопка проверки
        button = document.createElement('button');
        button.appendChild(document.createTextNode('ПРОВЕРИТЬ РЕЗУЛЬТАТ'));
        root.appendChild(button);

    }


    function checkResults() {

        //!генерирование массива пользовательских вариантов ответов
        let getInputState = inputs => inputs.map(input => input.checked);

        button.addEventListener("click", () => {
            userAnswers = getInputState(checkboxesArr);
            console.log('userAnswers', userAnswers);
            result();
        });


        //!сравнение ответов
        function result() {

            //!генерирование массива правильных ответов
            // var correctAnswers = _.map(data.questions, item => _.map(item.correctAnswers, trueAnswer => trueAnswer));
            // console.log('correctAnswers', correctAnswers);

            let correctAnswers = _.map(gotUserTest, function (item) {
                return _.map(item.answervariants, function (answer, id) {
                    return _.map(item.correctAnswer, function (i) {
                        return id + 1 === i ? true : false
                    })
                })
            });

            let correctAnws = _.flattenDeep(correctAnswers);

            console.log('correctAns', correctAnws);

            makePopup();
            if (_.isEqual(userAnswers, correctAnws)) {
                popupWindow.innerHTML = ('ПОЗДРАВЛЯЮ! ВЫ ПРОШЛИ ТЕСТ!');
            }
            else {
                popupWindow.innerHTML = ('ПОПРОБУЙТЕ ЕЩЕ РАЗ');
            }
        }

        function makePopup() {
            if (!popupWindow) {
                popupWindow = document.createElement("div");
                popupWindow.classList.add('popupWindow');
                popupWindow.addEventListener('mouseover', RemovePopup, false);
            }
            root.appendChild(popupWindow);

            popupWindow.addEventListener('mouseover', clearCheckboxes, RemovePopup, true);
            popupIsShown = true;
        }
        function RemovePopup() {
            if (popupIsShown) {
                root.removeChild(popupWindow);
                root.removeEventListener('click', RemovePopup, true);
                popupIsShown = false;
            }
        }

        function clearCheckboxes() {
            let newInputState = inputs => inputs.map(input => input.checked = false);
            newInputState(checkboxesArr);
        }
    }

})();