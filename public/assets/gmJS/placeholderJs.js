
$('.wrap').each(function(i) {

	var $wrap = $(this),
		$active = $wrap.find('.active').first(),
		$prev = $active.prev(),
		$next = $active.next();

	if( !$prev.length ) $prev = $wrap.find('.article').last();
	if( !$next.length ) $next = $wrap.find('.article').first();

	$prev.addClass('prev');
	$next.addClass('next');
});


$('.wrap').on('mousewheel', function(event, delta, deltaX, deltaY) {

	event.preventDefault();

	// var thisUpdate = new Date();
  // lastUpdate = thisUpdate;
	// if( thisUpdate - lastUpdate < 500 ) return;

	$('.wrap').each(function() {

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

			if( !$tmp.length ) $tmp = $wrap.find('.article').last();

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

			if( !$tmp.length ) $tmp = $wrap.find('.article').first();

			$tmp
				.removeClass('prev')
				.addClass('next')
				.siblings()
				.removeClass('next');
		}
	});
});


<!--
<div class="wrap">
  <div class="article active"></div>
  <div class="article">14;</div>
  <div class="article">06;</div>
  <div class="article">0;</div>
  <div class="article">e;</div>
</div> -->
