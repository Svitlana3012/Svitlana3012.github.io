$(function() {
  'use strict';

var $textInput = $('input'),
$formButton = $('.form-button');

var tooltipCreate = function (text) {
  var tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.style.display = 'none';
  tooltip.textContent = text;

  return tooltip;
};

for (var i = 0; i < $textInput.length; i++) {
    $textInput[i].after(tooltipCreate('Please provide your ' + $textInput[i].name));
    }

    $textInput.on('focusin', function() {
        $(this).next().show();
    });
    $textInput.on('focusout', function() {
        $(this).next().hide();
    });

$formButton.on('click', function(event) {
  event.preventDefault();

  for (var i = 0; i < $textInput.length; i++) {
      $textInput[i].next().show();
    }
});

});
