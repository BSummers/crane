'use strict';
$(document).ready(function(){
  $('.bxslider').bxSlider();

  $('.beer').each(function() {
    $(this).tooltipster({
      position: 'right',
      content: $(".info", this).html(),
      contentAsHTML: true,
      theme: 'cranetip',
      interactive: true

    });
  });
        
});