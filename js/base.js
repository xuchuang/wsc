~function(){
    // top nav
    var $nav =  $('.mod-nav'),
        navY = $nav.offset().top;
    function navScrollTab(dom){
        var _scrollTop = dom.scrollTop();
        if(_scrollTop > navY){
            if(!$nav.is('.fixer')){
                $nav.addClass('fixed');
            }
        }else{
            $nav.removeClass('fixed');
        }
    }

    navScrollTab($(window));
    $(window).on('scroll', function(){
        navScrollTab($(this));
    });


    // animate
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();

    $('.navbar-toggle').on('click', function(){
        $('.mod-nav .nav').toggleClass('show');
    })
}();