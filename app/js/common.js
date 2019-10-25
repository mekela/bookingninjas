$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	//menu
	$('.nav-trigger').click(function(){
		$(this).next().slideToggle('fast');
	});
	$(".thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		afterLoad: function() {
        this.title = this.title + '<a href="' + this.href + '" target="_blank">Download</a> ' ;
   		 },
		helpers	: {
			

			thumbs	: {
				width	: 100,
				height	: 100
			}, 
			buttons	: {}
		}
		
	});

	
	

	//wow
	new WOW().init();

	//menu
	$( ".navigation__button" ).click(function() {
	  $( ".navigation" ).addClass( "active");
	});
	$( ".navigation__close" ).click(function() {
	  $( ".navigation" ).removeClass( "active");
	});

	//accordeon
	$( ".faq_head" ).click(function() {
	  $(this).next('.faq_answer').slideToggle( "slow");
	  $(this).toggleClass( "active");
	});

	//floating form
	$( ".floating_form_title" ).click(function() {
	  $('.floating_form').toggleClass( "active");
	});

	//myth
	$( ".truth__btn" ).click(function() {
	  $(this).closest('.myth-truth__block').addClass( "active");
	});
	$( ".myth__btn" ).click(function() {
	  $(this).closest('.myth-truth__block').removeClass( "active");
	});

	//tabs
	$('.integration_tabs li a').click(function(event){
        event.preventDefault();
        $('.integration_tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.integration_tab').hide();
        $($(this).attr('href')).show();
    });
     $('.tour__nav a').click(function(event){
        event.preventDefault();
        $('.tour__nav a').removeClass('active');
        $(this).addClass('active');
        $('.tour__item').removeClass('active');
        $($(this).attr('href')).addClass('active');
    });
     $('.customer__nav a').click(function(e){
        event.preventDefault(); 
        $('.customer__nav li').removeClass('active');
        $(this).parent().addClass('active');
        $('.customer-top__text').removeClass('active');
        $($(this).attr('href')).addClass('active');
    });
    $('.tab a').click(function(ev){
        event.preventDefault();
        $('.tab li a').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();
        $($(this).attr('href')).show();
    });



	

	

});


//fixed
$(window).scroll(function() {    
	var scroll = $(window).scrollTop();

	if (scroll >= 100) {
		$(".header-index").addClass("fixed");
	} else {
		$(".header-index").removeClass("fixed");
	}
});