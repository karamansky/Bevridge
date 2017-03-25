"use strict";
$(function(){

	$(document).ready(function(){

		/*navigation menu show/hide*/
		$(".phone-navigation .close").click(function(){
			$(this).parent().css("transform", "translate3d(-100%,0,0)");
		});
		$('#nav-icon1').click(function(){
			$(this).toggleClass('open');
			$(".phone-navigation").css("transform", "translate3d(0,0,0)");
		});


		/*our history click on cap - tabs*/
		$(".image-cap").click(function(){

			//get data-target attribute
			var tab_class = $(this).parent().data("target");

			//show/hide elements and addClass to clicked link
			$(this).parent().parent().find(".image-cap.back").removeClass("back").children('img').show();
			$(this).parent().parent().find(".image-cap").removeClass("back").children('p').remove();
			$(this).parent().parent().find(".history__caption").show();
			$(this).addClass("back");

			$(".content__item").hide();

			//show info to the corresponding link(cap)
			$(".content__item."+ tab_class).show();

			if($(this).hasClass("back")){
				$(this).children('img').hide();
				$(this).append($(this).next().html());
				$(this).next().hide();
			}else{
				$(this).children('img').show();
				$(this).children('p').remove();
			}
		});


		/**
		 * news and media filter
		 */
		$("#newsandmedia .filter a").click(function(){

			$("#newsandmedia .filter a").removeClass("active");
			$(this).addClass("active");

			var target = $(this).data("target");

			if(target == "all"){
				console.log("123");
				$("#newsandmedia .news__item").show();
			}else{
				$("#newsandmedia .news .news__item").hide();
				$("#newsandmedia .news .news__item." + target).show();
			}
		});

		/**
		 * activate popup windows
		 */
		$(".popup").magnificPopup({
			type: 'inline',
			preloader: false
		});
		$(document).on('click', '.close-popup', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});

		/**
		 * activate carousel
		 */
		$(".body__carousel").owlCarousel({
			items				: 1,
			itemsDesktop 			: [1920,1],
			itemsDesktopSmall	: [1199,1],
			itemsTablet				: [789,1],
			itemsMobile 			: [450,1],
			navigation	:	true,
			navigationText			: ["",""]
		});





//==========EoF==============
	});
});