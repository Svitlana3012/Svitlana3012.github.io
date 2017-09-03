'use strict';

(function () {

    'use strict';

    var input = document.getElementById('input'),
        button = document.getElementById('search'),
        picsWrapper = document.getElementById('pics-wrapper');

    button.addEventListener('click', function (e) {
        e.preventDefault();
        findImages();
    });

    function findImages() {
        var getRequest = fetch('https://pixabay.com/api/?key=6346560-9400cb359b80474d2e6838254&q=' + input.value + '&per_page=9');
        getRequest.then(function (response) {
            if (response.ok) {
                return response.json();
            }
            throw new Error('error');
        }).then(function (data) {
            console.log(data);
            //создание нужного кол-ва тегов
            var result = data.hits.map(function (item) {
                return '<img src="' + item.webformatURL + '"' + '>';
            });
            console.log('result: ', result);

            var pics = '';
            for (var i = 0; i < result.length; i++) {
                pics += result[i];
            }
            picsWrapper.innerHTML = pics;
            console.dir(pics);
        }).catch(function (error) {
            console.log('ERROR');
        });
    };
})();