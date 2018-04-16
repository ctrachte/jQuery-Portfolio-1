// Card flip

$("#card").flip({
  axis: 'y',
  trigger: 'click',
  autoSize:true
});

// Trigger CSS animations on scroll.
// Source: http://www.bram.us/2013/11/20/scroll-animations/

jQuery(function($) {
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        animatables = $('.animatable');
    // Unbind scroll handler if we have no animatables
    if (animatables.length === 0) {
      $(window).off('scroll', doAnimations);
    }
    // Check all animatables and animate them if necessary
		animatables.each(function(i) {
       var animatable = $(this);
			if ((animatable.offset().top + animatable.height() - 50) < offset) {
        animatable.removeClass('animatable').addClass('animated');
			}
    });
	};
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');
});

// Sticky header

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
       $('nav').addClass('fixed-header');
    }
    else {
       $('nav').removeClass('fixed-header');
    }
});

//Click to scroll to sections

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// slideshow

var images=new Array('http://placehold.it/250x150','http://placehold.it/250x150/123456','http://placehold.it/250x150/dbca98');
var nextimage=0;

doSlideshow();

function doSlideshow()
{
    if($('.slideshowimage').length!=0)
    {
        $('.slideshowimage').fadeOut(1000,function(){slideshowFadeIn();$(this).remove()});
    }
    else
    {
        slideshowFadeIn();
    }
}
function slideshowFadeIn()
{
    $('.slideshow').prepend($('<img class="slideshowimage" src="'+images[nextimage++]+'" style="display:none">').fadeIn(1000,function(){setTimeout(doSlideshow,1000);}));
    if(nextimage>=images.length)
        nextimage=0;
}
