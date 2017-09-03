$(document).ready(function () {
	
 $('.tooltip').each(function() {
  $(this).parent().hover(function() {
   $(this).find('.tooltip').fadeIn('fast');
    }, function() {
       $(this).find('.tooltip').fadeOut('fast');
    });
  });

    $(document).mousemove(function(e) {
    var mouseY = e.clientY,
        mouseX = e.clientX,
        tooltipHeight,
        tooltipWidth;

    $('.tooltip').each(function() {
      var $tooltip = $(this);
      tooltipHeight = $tooltip.outerHeight();
      tooltipWidth = $tooltip.width();
      $parent = $tooltip.parent();

      $tooltip.css({
        'left':mouseX,
        'top':mouseY+20
      });

      if (tooltipWidth + mouseX+ 20> windowWidth) {
       $tooltip.css({
        'left':mouseX-tooltipWidth-20
       });
      }

      if (tooltipHeight + mouseY +20 > windowHeight) {
        $tooltip.css({
        'top':mouseY-20-tooltipHeight
       });
      }
    });
 });

  $('.tool').draggable();

});
