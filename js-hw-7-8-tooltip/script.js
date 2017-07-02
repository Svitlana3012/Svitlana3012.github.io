$(function() {
  'use strict';

var $textInput = $('input'),
$formWrapper = $('.form-wrapper'),
$formTooltips = $('.form-tooltips'),
currentTooltip,
currentInput;

var tooltipCreate = function (id, text) {
  var tooltip = document.createElement('div');
  tooltip.classList.add('tooltip');
  tooltip.textContent = text;
  tooltip.id = id;

  return tooltip;
};

var $tooltipName = $(tooltipCreate('First-name', 'Please provide your firstname'));
var $tooltipSurname = $(tooltipCreate('Last-name', 'Please provide also your lastname'));
var $tooltipAddress = $(tooltipCreate('Address', 'Your home or work address'));

$tooltipName.hide();
$tooltipSurname.hide();
$tooltipAddress.hide();

$formWrapper.append($formTooltips);

$formTooltips.append($tooltipName, $tooltipSurname, $tooltipAddress);

$textInput.on('focus', function (event) {
  event.preventDefault();

  currentInput = $(this);

  currentTooltip = currentInput.attr('name');
  $tooltipName.hide();
  $tooltipSurname.hide();
  $tooltipAddress.hide();

  $('#' + currentTooltip).show();
  console.log($('#' + currentTooltip));
});

});
