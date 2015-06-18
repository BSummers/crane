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

        
});