$(function() {
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
            var offset = thisItem.offset();
            offset.left -= 20;
            offset.top -= 20;
            $('html, body').animate({
                scrollTop: offset.top,
                scrollLeft: offset.left
            }, 800);
        },500);
    });
    $(".three-r-nav").on('touch click', function(){
        var title = ".chev-hld."+$(this).attr('title');
        $(title).trigger('click');

    })
});