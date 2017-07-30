// (function() {
  'use strict';

  var tmpl = _.template(document.getElementById('galery-template').innerHTML);

  var galeryItems = tmpl({
    data: [
    {
      title: 'Audi TT RS Coupe',
      content: './img/galery_lodash/Audi TT RS Coupe.png'
    },
    {
      title: 'Audi 80',
      content: './img/galery_lodash/audi_80.jpg'
    },
    {
      title: 'Audi A3',
      content: './img/galery_lodash/audi_a3.png'
    },
    {
      title: 'Audi A6',
      content: './img/galery_lodash/audi_a6.png'
    },
    {
      title: 'Audi A7',
      content: './img/galery_lodash/audi_a7.png'
    },
    {
      title: 'Audi Q3',
      content: './img/galery_lodash/audi_q3.png'
    },
    {
      title: 'Audi Q7',
      content: './img/galery_lodash/audi_q7.png'
    },
    {
      title: 'Audi',
      content: './img/galery_lodash/audi.jpg'
    }
  ]});
  console.log(galeryItems);

  document.write(galeryItems);

// })();
