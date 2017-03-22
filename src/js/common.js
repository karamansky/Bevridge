"use strict";
$(function(){

	$(document).ready(function(){
		$(".phone-navigation .close").click(function(){
			$(this).parent().css("transform", "translate3d(-100%,0,0)");
		});

		$('#nav-icon1').click(function(){
			$(this).toggleClass('open');
			$(".phone-navigation").css("transform", "translate3d(0,0,0)");
		});





//==========EoF==============
	});
});