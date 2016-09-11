// Affix-like hack
$(window).on('scroll', function(event) {
  var windowWidth = $(window).width();
  if (windowWidth >= 1000) {
    var scrollValue = $(window).scrollTop();
    if (scrollValue > 350) {
      $('#sidebar-wrapper').css('top', scrollValue - 350); 
    } else {
      $('#sidebar-wrapper').css('top', 0); 
    }
  }
});

// Request to say-hello API
$().ready(function (){
  $.getJSON( "https://spondbob.github.io/say-hello/api/en/hello.json", function( data ) {
    var index = Math.floor((Math.random() * data.length));
    $( "#greeting-message" ).html( data[index] + "," ).css("color", "").fadeIn(3000);
  });
});