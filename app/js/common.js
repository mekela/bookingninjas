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
	$('.navigation-dropdown__click').click(function(){
		$(this).parent().find('.navigation-dropdown').toggleClass('active');
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

	//form
	$('.landing__hero-form .button').click(function(){
		$(this).parent('.landing__hero-form').addClass('landing__hero-form-success');
	});
	$(".footer-btn-submit").click(function() {
		$.fancybox.open({ src : '#modal-thanks', type : 'inline', });
	});

	//slider
	$('.landing__slider').slick({
		dots: true
	});

	$('.feature-spotlight__slider-big').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.feature-spotlight__slider-small'
	});
	$('.feature-spotlight__slider-small').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.feature-spotlight__slider-big',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		infinite: false
	});

	
	

	//wow
	new WOW().init();

	//menu
	$( ".navigation__button" ).click(function() {
	  $( ".navigation" ).toggleClass( "active");
	  $( this ).find("i").toggleClass( "fa-times");
	  $( ".navigation__overlay" ).toggle( );
	});
	// $( ".navigation__close" ).click(function() {
	//   $( ".navigation" ).removeClass( "active");
	//   $( ".navigation__overlay" ).hide( );
	// });
	$( ".navigation__overlay" ).click(function() {
		$( ".navigation" ).removeClass( "active");
		$( ".navigation__overlay" ).hide( );
	});

	//accordeon
	$( ".faq_head" ).click(function() {
	  $(this).next('.faq_answer').slideToggle( "slow");
	  $(this).toggleClass( "active");
	});
	$( ".landing__accordion-trigger" ).click(function() {
		$(this).next().slideToggle( "slow");
		$(this).toggleClass( "active");
	  });
	  $( ".faq__trigger" ).click(function() {
		$(this).next().slideToggle( "fast");
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
	$('.resource-center__tabs-links a').click(function(event){
		event.preventDefault();
		$('.resource-center__tabs-box .col-lg-4').removeClass('active');
		$('.resource-center__tabs-links a').removeClass('active');
		$(this).addClass('active');
		$(".resource-center__tabs-box .col-lg-4").filter($(this).attr('data-href')).addClass('active'); 
	});

	//show modal
	$("body").one('mouseleave', function() {
		jQuery('.trial__not-leave-black').addClass('active');
	});
	$( ".trial__not-leave-close" ).click(function() {
	  $('.trial__not-leave').removeClass( "active");
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