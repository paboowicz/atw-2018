﻿( function($) {
  'use strict';

$(function(e) {
	
	/*-------------------------------------------------------------------------------
	  Smooth scroll to anchor
	-------------------------------------------------------------------------------*/
	var navbar=$('.js-navbar');
	var navbarAffixHeight=90
	$('.js-target-scroll').on('click', function(e) {
		var target = $(this.hash);
		if (target.length) {
			$('html,body').animate({
				scrollTop: (target.offset().top - navbarAffixHeight + 1)
			}, 1000);
			return false;
		}
	});
	$('body').scrollspy({
			offset:  navbarAffixHeight + 1
	});
	$('.navbar-nav a ').on('click', function(){
	  if($('#navigation').removeClass('shownav')) {
	  }
    });
	
	/*-------------------------------------------------------------------------------
		Navigation
	-------------------------------------------------------------------------------*/
	$('#menu-toggle-bar').on('click', function(e) {
		   $("#navigation").toggleClass("shownav");
	});
	$('#menu-toggle-close').on('click', function(e) {
		   $("#navigation").removeClass("shownav");
	});

	/*-------------------------------------------------------------------------------
	 Timer
	-------------------------------------------------------------------------------*/
 	var austDay = new Date();
	austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
	$('#defaultCountdown').countdown({until: austDay});
	$('#year').text(austDay.getFullYear());
 
 
 /*-------------------------------------------------------------------------------
 Gallery slider
-------------------------------------------------------------------*/
 
   var carousel = $("#gallery_slider");
   carousel.owlCarousel({
   items : 3,
   loop: true,
   lazyLoad : true,
   autoPlay  : 3000,
   navigation : true,
		  itemsCustom : [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 3],
			[1000, 3],
			[1200, 3],
			[1400, 3],
			[1600, 3]
		  ],
	   navigationText: [
	  "<i class='fa fa-angle-left'></i>",
	  "<i class='fa fa-angle-right'></i>"
	  ],
   afterAction: function(el){
   this
   .$owlItems
   .removeClass('active')
   this
   .$owlItems
   .eq(this.currentItem + 1)
   .addClass('active')    
	} 
	});
 /*------------------------------------------------------------------
	Gallery slider-Style 2
	-------------------------------------------------------------------*/
	$(document).ready(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto();
	  });
	
	
	/*-------------------------------------------------------------------------------
	  Tab li Add Class
	-------------------------------------------------------------------------------*/
$('.conf-close').on('click', function(e) {
	if ( $(this).hasClass('menu-down') ) {
		$(this).removeClass('menu-down');
	} else {
		$(this).addClass('menu-down');    
	}
});	
	
/*-------------------------------------------------------------------------------
  Background slider
-------------------------------------------------------------------------------*/
   
  $("#slideshow").owlCarousel({
	autoPlay : 5000,
	stopOnHover : false,
	navigation:false,
	paginationSpeed : 1000,
	goToFirstSpeed : 2000,
	singleItem : true,
	autoHeight : true,
	transitionStyle:"fadeUp"
  });
 

/*-------------------------------------------------------------------------------
	  Sponsors-Slider
	-------------------------------------------------------------------------------*/
	var owl = $("#sponsors-slider");
	owl.owlCarousel({
	  itemsCustom : [
		[0, 1],
		[450, 2],
		[550, 2],
		[767, 3],
		[991, 4],
	  ],
	  loop: true,
	  nav : true,
	  navigation : false,
	  autoPlay  : 3000
	});
 
 
 /*------------------------------------------------------------------
	Countdown
	-------------------------------------------------------------------*/
 
	var endDate = "june 17, 2017";
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div class='countdown-amount'>" + this.leadingZeros(data.days, 2) + " <span class='countdown-period'>Dni</span></div><div class='countdown-amount'>" + this.leadingZeros(data.hours, 2) + " <span class='countdown-period'>Godziny</span></div><div class='countdown-amount'>" + this.leadingZeros(data.min, 2) + " <span class='countdown-period'>Minuty</span></div><div class='countdown-amount'>" + this.leadingZeros(data.sec, 2) + " <span class='countdown-period'>Sekundy</span></div>");
	  }
	});	
  
  
  /*------------------------------------------------------------------
	back to top
	-------------------------------------------------------------------*/
 var top = $('#back-top');
	top .hide();
	 
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				top .fadeIn();
			} else {
				top .fadeOut();
			}
		});
		$('#back-top a').on('click', function(e) {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	 
 
 
 /*-------------------------------------------------------------------------------
  Google map
	-------------------------------------------------------------------------------*/
 	
	
 if ($('#js-gmap').length > 0){
		var map;
		map = new GMaps({
			el: '#js-gmap',
			lat: 49.912500,
			lng:22.819461,
			scrollwheel:false,
			zoom: 15,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});
		var image = 'assets/images/map-label89x81.png';
		var infoWindow = new google.maps.InfoWindow({
		});
		map.addMarker({
			lat: 49.912500,
			lng:22.819461,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#d3cfcf',
			infoWindow:{
				content: '<div class="map-info">Skołoszów, ul.Przemyska 37, gmina Radymno 37-550, powiat jarosławski, woj.podkarpackie przy węźle „PRZEMYŚL” autostrady A4</div>'
			}
		});
	}
 
  /*-------------------------------------------------------------------------------
  Google map Style 2
	-------------------------------------------------------------------------------*/
 	
	if ($('#js-gmap-2').length > 0){
		var map;
		map = new GMaps({
			el: '#js-gmap-2',
			lat: -23.976215,
			lng:133.769531,
			scrollwheel:false,
			zoom: 4,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});
		var image = 'assets/images/map-label.png';
		var infoWindow = new google.maps.InfoWindow({
		});
		map.addMarker({
			lat: -23.976215,
			lng:133.769531,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#d3cfcf',
			infoWindow:{
				content: '<div class="map-info">PO Box 1025MNO Collins Street<br>West Victoria 8007 Australia</div>'
			}
		});
	}
 
 
 /*-------------------------------------------------------------------------------
  Google map Style 3
	-------------------------------------------------------------------------------*/
 	
	if ($('#js-gmap-3').length > 0){
		var map;
		map = new GMaps({
			el: '#js-gmap-3',
			lat: -23.976215,
			lng:133.769531,
			scrollwheel:false,
			zoom: 4,
			zoomControl : true,
			panControl : false,
			streetViewControl : false,
			mapTypeControl: false,
			overviewMapControl: false,
			clickable: false
		});
		var image = 'assets/images/map-label.png';
		var infoWindow = new google.maps.InfoWindow({
		});
		map.addMarker({
			lat: -23.976215,
			lng:133.769531,
			icon: image,
			animation: google.maps.Animation.DROP,
			verticalAlign: 'bottom',
			horizontalAlign: 'center',
			backgroundColor: '#d3cfcf',
			infoWindow:{
				content: '<div class="map-info">PO Box 1025MNO Collins Street<br>West Victoria 8007 Australia</div>'
			}
		});
	}
 
 
 /*-------------------------------------------------------------------------------
  Ajax Form
	-------------------------------------------------------------------------------*/
 
	if ($('#js-ajax-form').length) {
		$('#js-ajax-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
				submitHandler: function(form){
					$.ajax({
						type: "POST",
						url:"mail.php",
						data: $(form).serialize(),
						success: function() {
							$('.modal').modal('hide');
							$('#success').modal('show');
						},
	
						error: function(){
							$('.modal').modal('hide');
							$('#error').modal('show');
						}
					});
				}
			});
		});
	}
/*-------------------------------------------------------------------------------
  Paypal Form
	-------------------------------------------------------------------------------*/
	
	if ($('#paypal-form').length) {
		$('#paypal-form').each(function(){
			$(this).validate({
				errorClass: 'error wobble-error',
			});
		});
	}	
 
});

})(jQuery);