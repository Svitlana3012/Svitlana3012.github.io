$ (function(){
  'use strict';

  var $tab = $('.tab'),
  $text = $('.text'),
  currentTab,
  currentText;

  $text.hide().first().show();
  $tab.first().addClass('link_active');

  $tab.on('focus', function(event){

    event.preventDefault();

    currentTab = $(this);
    $tab.removeClass('link_active');
    currentTab.addClass('link_active');

    currentText = currentTab.attr('href');
    console.log(currentText);
    $text.hide();
    $(currentText).show();
  })

});
