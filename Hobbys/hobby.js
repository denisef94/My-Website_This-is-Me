function toggleChevron(button) {
    $(button).find('span').toggleClass('glyphicon-chevron-down glyphicon-chevron-right');
}

$(function(){
	$('#button').click(function(){
		$('#nav').toggleClass('open');
	});
});