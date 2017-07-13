jQuery(document).ready(function() {
    jQuery(".tabs-menu a").click(function(event) {
        event.preventDefault();
        jQuery(this).parent().addClass("current");
        jQuery(this).parent().siblings().removeClass("current");
        var tab = jQuery(this).attr("href");
        jQuery(".tab-content").not(tab).css("display", "none");
        jQuery(tab).fadeIn();
    });
    jQuery(".navigation .mobile-menu").click(function(){
    	jQuery(".navigation ul").slideToggle('fast');
    });
});
jQuery(document).ready(function(){
    jQuery('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      asNavFor: '.slider-nav'
    });
    jQuery('.slider-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      arrows: true,
      focusOnSelect: true,
      vertical: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            vertical: false,
            slidesToShow: 2
          }
        }
      ]
    });
});