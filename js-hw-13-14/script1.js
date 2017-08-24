(function () {
    'use strict';

    var data = {
        title: 'Тест по основам верстки',
        questions: [
            {
                title: 'С помощью какой директивы CSS можно указать разные значения стилей для одного и того же селектора в зависимости от параметров окна браузера и в зависимости от типа устройства?',
                answers: ['этого можно достичь только при помощи javascript', '@document', '@media'],
                correctAnswers: [3]
            },
            {
                title: 'Как сделать, чтобы поле формы содержало в себе текст, который бы исчезал при получении фокуса?',
                answers: ['при помощи атрибута placeholder', 'при помощи атрибута text', 'при помощи тэга placeholder'],
                correctAnswers: [1]
            },
            {
                title: 'Что такое БЭМ?',
                answers: ['блочно-элементная методология', 'блок-элемент-модификатор', 'браузер-элемент-модификатор'],
                correctAnswers: [2]
            },
            {
                title: 'С помощью какого CSS свойства можно загружать нестандартные шрифты?',
                answers: ['необходимо через запятую указать ссылки на шрифты в font-family', 'при помощи свойства @font-face', 'загружать нестандартные шрифты можно только при помощи HTML и JavaScript'],
                correctAnswers: [2]
            },
            {
                title: 'Какая разница в представлениях цветов HSL и HSLA',
                answers: ['согласно спецификации, это два варианта написания одного и того же свойства, разницы между ними нет', 'HSLA, в отличие от HSL, был добавлен в CSS 3 спецификации', 'в HSL необходимо указать цвет в RGB формате, HSLA – в проценте на колесе цветов', 'в HSLA существует четвертый параметр - прозрачность'],
                correctAnswers: [4]
            }
        ]
    };

    localStorage.setItem('test', JSON.stringify(data));

    var test = localStorage.getItem('test');
    test = JSON.parse(test);
    console.log(test);

    var root,
    button,
    answers,
    answer,
    checkboxes,
    checkboxesArr = [],
    popupWindow,
    userAnswers,
    popupIsShown;
console.log(checkboxesArr);

    (function createLayout() {

        root = document.createElement('div');
        root.classList.add('root');

        var body = document.querySelector('body');
        body.appendChild(root);

        var title = document.createElement('h2');
        title.appendChild(document.createTextNode(data.title));
        root.appendChild(title);

        //!генерирование вопросов
        var test = _.map(data.questions, function (item, index) {
            var question = document.createElement('ul');
            question.classList.add('question');
            question.setAttribute('id', index);
            question.innerHTML = item.title;
            root.appendChild(question);

            //!генерирование соответствующих ответов
            answers = _.map(item.answers, function (a, id) {
                var li = document.createElement('li');
                question.appendChild(li);
                answer = document.createElement('label');
                answer.classList.add('answer');
                answer.setAttribute('id', id);
                answer.innerHTML = a;
                li.appendChild(answer);

                checkboxes = document.createElement('input');
                checkboxes.setAttribute('type', 'checkbox');
                answer.insertBefore(checkboxes, answer.firstChild);
                checkboxesArr.push(checkboxes);
            });
        });

        //! кнопка проверки
        button = document.createElement('button');
        button.appendChild(document.createTextNode('ПРОВЕРИТЬ РЕЗУЛЬТАТ'));
        root.appendChild(button);

    })();

    //!генерирование массива пользовательских вариантов ответов
    var getInputState = inputs => inputs.map(input => input.checked);

    button.addEventListener("click", () => {
        userAnswers = getInputState(checkboxesArr);
        console.log('userAnswers', userAnswers);
        result();
    });


    //!генерирование массива правильных ответов
    // var correctAnswers = _.map(data.questions, item => _.map(item.correctAnswers, trueAnswer => trueAnswer));
    // console.log('correctAnswers', correctAnswers);

    var correctAnswers = _.map(data.questions, function(item) {
        return _.map(item.answers, function(answer, id) {
            return _.map(item.correctAnswers, function(i) {
                return id + 1 === i ? true : false
            })
        })
    });
    var correctAnws = _.flattenDeep(correctAnswers);

console.log('correctAns',correctAnws);

    //!сравнение ответов
    function result() {
        makePopup();
        if (_.isEqual(userAnswers, correctAnws)) {
            popupWindow.innerHTML = ('ПОЗДРАВЛЯЮ! ВЫ ПРОШЛИ ТЕСТ!');
        }
        else {
            popupWindow.innerHTML = ('ПОПРОБУЙТЕ ЕЩЕ РАЗ');
        };
    };

    function makePopup () {
        if (!popupWindow) {
            popupWindow = document.createElement ("div");
            popupWindow.classList.add('popupWindow');
            popupWindow.addEventListener ('mouseover', RemovePopup, false);
        }
         root.appendChild (popupWindow);

         popupWindow.addEventListener ('mouseover', clearCheckboxes, RemovePopup, true);
         popupIsShown = true;
        };

    function RemovePopup () {
        if (popupIsShown) {
            root.removeChild (popupWindow);
            root.removeEventListener ('click', RemovePopup, true);
            popupIsShown = false;
        }
    }
    function clearCheckboxes() {
        var newInputState = inputs => inputs.map(input => input.checked = false);
        newInputState(checkboxesArr);
    }

})();