'use strict';

  var ageVerify = function() {
    Cookies.set('legal', 'yes');
    $.magnificPopup.close();
  };


$(document).ready(function(){
  $('.bxslider').bxSlider();

  $('.beer').each(function() {
    $(this).tooltipster({
      position: 'right',
      content: $(".info", this).html(),
      contentAsHTML: true,
      theme: 'cranetip',
      interactive: true,
      maxWidth: '300'

    });
  });

$("#untappd .content").rss("https://untappd.com/rss/brewery/123025", {
  limit: 10,
  ssl: true,
  tokens: {
    link: function(entry, tokens){ console.log(entry); return entry.link },
    content: function(entry, tokens){ return entry.content }
  },

  layoutTemplate: '<ul class="untappd-feed">{entries}</ul>',
  entryTemplate: '<li><a href="{link}"><div>{title} {content}</div></a></li>'
}).show();


  $('.image-popup').magnificPopup({type:'image'});
  $('.gallery-popup').magnificPopup({
    type:'image',
    gallery: {
      enabled:true
    }
  });


  if (Cookies.get('legal') == "yes") {
    //legal!
  } else {
    $.magnificPopup.open({
      items: {
        src: $('<div class="age-verification white-popup"><img src="images/logo-white-crane.png"><h1>ARE YOU AT LEAST 21?</h1><a href="#" onclick="ageVerify();">Yes</a> <a href="http://www.google.com/">No</a></div>'),
        type: 'inline'
      },
      modal: true
    });
  }

        
});