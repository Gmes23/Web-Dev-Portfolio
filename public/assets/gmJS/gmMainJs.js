
$('.gmMain2').each(function(i) {

	var $wrap = $(this),
		$active = $wrap.find('.gmshow').first(),
		$prev = $active.prev(),
		$next = $active.next();

	if( !$prev.length ) $prev = $wrap.find('.gmshow').last();
	if( !$next.length ) $next = $wrap.find('.gmshow').first();

	$prev.addClass('prev');
	$next.addClass('next');
});


$('.gmMain2').on('mousewheel', function(event, delta, deltaX, deltaY) {

	event.preventDefault();


	$('.gmMain2').each(function() {

		var $wrap = $(this),
			$active = $wrap.find('.active'),
			$prev = $wrap.find('.prev'),
			$next = $wrap.find('.next'),

			$tmp;

		//go back
		if( deltaY === 1) {

			$active
				.removeClass('active')
				.addClass('next')
				.siblings()
				.removeClass('next');

			$tmp = $prev
				.removeClass('prev')
				.addClass('active')
				.prev();

			if( !$tmp.length ) $tmp = $wrap.find('.gmshow').last();

			$tmp
				.removeClass('next')
				.addClass('prev')
				.siblings()
				.removeClass('prev');

		} else {

			$active
				.removeClass('active')
				.addClass('prev')
				.siblings()
				.removeClass('prev');

			$tmp = $next
				.removeClass('next')
				.addClass('active')
				.next();

			if( !$tmp.length ) $tmp = $wrap.find('.gmshow').first();

			$tmp
				.removeClass('prev')
				.addClass('next')
				.siblings()
				.removeClass('next');
		}
	});
});


$('a').click(function(event) {

event.preventDefault();
newLocation = this.href

  $('body').fadeOut(500,newpage);


});

function newpage() {

window.location = newLocation;

}


$(function() {
  $('.gmSelectHov1').hover(function() {
		$('#testman').removeClass().addClass('gmPortHov1');
  });
	return;
});

$(function() {
  $('.gmSelectHov2').hover(function() {

		$('#testman').removeClass().addClass('gmPortHov2');
  });
});

$(function() {
  $('.gmSelectHov3').hover(function() {
		$('#testman').removeClass().addClass('gmPortHov3');
  });
});
$(function() {
  $('.gmSelectHov4').hover(function() {
		$('#testman').removeClass().addClass('gmPortHov4');
  });
});
$(function() {
  $('.gmSelectHov5').hover(function() {
		$('#testman').removeClass().addClass('gmPortHov5');
  });
});
