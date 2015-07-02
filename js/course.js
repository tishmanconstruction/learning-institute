$(window).on('load', function () {
  setTimeout(function(){
    $('.carousel').carousel('pause');
    $('.carousel-caption').hide();
    $('.active').find('.carousel-caption').slideDown( 400 );
  }, 200);
});

$('#carousel-example-generic').bind('slide.bs.carousel', function (e) {
  $('.active').find('.carousel-caption').hide();
  if ( $('.active').find('video').length ) {
    $('.active').find('video').get(0).pause();
  }
  setTimeout(function(){
    $('.active').find('.carousel-caption').hide();
    $('.active').find('.carousel-caption').slideDown( 400 );
    if ( $('.active').find('video').length ) {
      var video = $('.active').find('video');
      video.get(0).currentTime = 0;
      video.get(0).play();
      setTimeout(function() {
        var width = $('.active').width;
        console.log(width);
        var height = $('.active').height;
        video.css({left: -video.width()/2 + width/2 });
        video.css({top: -video.height()/2 + height/2 });
      }, 100);
    }
  }, 800);
});

$('.carousel-caption').hover(function() {
  $(this).slideUp( 400 );
});

$('.carousel').mouseleave(function() {
  $('.active').find('.carousel-caption').slideDown( 400 );
})

var aspectratio = 0.7;
var images = $('div.item');
$(window).on('resize', function () {
    var width = images.width();
    var height = width / aspectratio;
    images.height(height);
    if ( $('.active').find('video').length ){
      var video = $('div.item.active video');
      video.css({left: -video.width()/2 + width/2 });
      video.css({top: -video.height()/2 + height/2 });
    }
}).trigger('resize'); //on page load
