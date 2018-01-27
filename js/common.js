$(document).ready(function() {
	//fancybox
	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
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

	
	//bxslider
	$('.product_slider_item').bxSlider({
	  pagerCustom: '.product_slider_nav'
	});
	$('.customer-screenshot ul').bxSlider({
		
	});

	//wow
	new WOW().init();

	//menu
	$( ".menu_trigger" ).click(function() {
	  $( ".mobile-menu" ).toggleClass( "active");
	  $( ".mobile-menu__block" ).toggleClass( "active");
	});
	$( ".mobile-menu" ).click(function() {
	  $( ".mobile-menu" ).toggleClass( "active");
	  $( ".mobile-menu__block" ).toggleClass( "active");
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


	

});

//noui
var slider = document.getElementById('slider');

noUiSlider.create(slider, {
	start: [0, 15],
	connect: true,
	tooltips: true,
	range: {
		'min': 0,
		'max': 20,
	},
	format: wNumb({
		decimals: 0
	})
});


var softSlider = document.getElementById('soft');

	noUiSlider.create(softSlider, {
	start: [0, 10],
	connect: true,
	range: {
		'min': 0,
		'max': 14,
	}
	});
	var softSlider = document.getElementById('soft2');

	noUiSlider.create(softSlider, {
	start: [0, 10],
	connect: true,
	range: {
		'min': 0,
		'max': 14,
	}
	});
	var softSlider = document.getElementById('soft3');

	noUiSlider.create(softSlider, {
	start: [0, 10],
	connect: true,
	range: {
		'min': 0,
		'max': 14,
	}
	});
	var softSlider = document.getElementById('soft4');

	noUiSlider.create(softSlider, {
	start: [0, 10],
	connect: true,
	range: {
		'min': 0,
		'max': 14,
	}
	});
