// Carousel plugin
$(function() {
  'use strict';

    $('.jcarousel').jcarousel({
        animation: 'slow'
    })
    .jcarouselAutoscroll({
    interval: 3000,
    target: '+=1',
    autostart: true
});

    $('.jcarousel').jcarousel({
    animation: {
        duration: 800,
        easing:   'linear',
        complete: function() {
        }
    }
  });

  $('.jcarousel').jcarouselAutoscroll({
    target: '+=3'
});

  $('.jcarousel').jcarousel('scroll', target);

  $('.jcarousel').jcarousel('scroll', '+=2');

  $('.jcarousel-prev').jcarouselControl({
    target: '-=1',
    carousel: carousel
});

$('.jcarousel-next').jcarouselControl({
    target: '+=1',
    carousel: carousel
});

$('.jcarousel-pagination').jcarouselPagination({
    item: function(page) {
        return '<a href="#' + page + '">' + page + '</a>';
    }
});

});

//selectbox
$(function(){
  'use strict';
  $("#default-usage-select").selectbox();
  $("select").selectbox();
});
