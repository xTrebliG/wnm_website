$(function() {
    $(document).on('touch click', '.navbar a', function(event){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 250
        }, 500);
    });
	var offset = 300,
		offset_opacity = 1200,
		scroll_top_duration = 700,
		$back_to_top = $('.cd-top');
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});
    $('.chev-hld').on('touch click', function(){
        $('.chev-hld').removeClass('active');
        $('.collapse').collapse('hide');
        var theChev = $(this);
        $('.collapse').on('shown.bs.collapse', function () {
            $('.chev-hld').removeClass('active');
            theChev.addClass('active');
        });
        var thisItem = $(this);
        setTimeout( function(){
            var offsetChev = thisItem.offset();
            offsetChev.left -= 20;
            offsetChev.top -= 250;
            $('html, body').animate({
                scrollTop: offsetChev.top,
                scrollLeft: offsetChev.left
            }, 800);
        },500);
    });
    $(".three-r-nav").on('touch click', function(){
        var title = ".chev-hld."+$(this).attr('title');
        $(title).trigger('click');

    })
    $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
            $('.initial-brand').addClass('inactive-brand');
            $('.navbar').addClass('shrink');
            $('.secondary-brand').removeClass('inactive-brand');
        } else {
            $('.secondary-brand').addClass('inactive-brand');
            $('.navbar').removeClass('shrink');
            $('.initial-brand').removeClass('inactive-brand');
        }
    });
});