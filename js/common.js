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

	//wow
	new WOW().init();

	//menu
	$( ".menu_trigger" ).click(function() {
	  $( ".menu" ).slideToggle( "slow");
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

	//tabs
	$('.integration_tabs li a').click(function(event){
        event.preventDefault();
        $('.integration_tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.integration_tab').hide();
        $($(this).attr('href')).show();
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