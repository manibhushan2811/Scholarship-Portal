$('.readMore').each(function(i) {
	$(this).on('click', function() {
		$(this).next().toggle();
	});
});