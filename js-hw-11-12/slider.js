(function ($) {
  
  var leftUIEl = $('.carousel-arrow-left'),
    rightUIEl = $('.carousel-arrow-right'),
    elementsList = $('.carousel-list'),
    pixelsOffset = 225,
    currentValue = 0;

  var elementsCount = elementsList.find('li').length;
  var minimumOffset = -((elementsCount - 3) * pixelsOffset);
  var maximumOffset = 0;

  leftUIEl.click(function () {
    if (currentValue !== maximumOffset) {
      currentValue += 225;
      elementsList.animate({left: currentValue + 'px'}, 500);
    } else {
      currentValue = minimumOffset;
      elementsList.animate({left: currentValue + 'px'}, 500);
    }
  });

  rightUIEl.click(function () {
    if (currentValue !== maximumOffset) {
      currentValue -= 225;
      elementsList.animate({left: currentValue + 'px'}, 500);
    } else {
      currentValue = minimumOffset;
      elementsList.animate({left: currentValue + 'px'}, 500);
    }
  });

}(jQuery));
