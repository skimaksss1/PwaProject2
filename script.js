$(document).ready(function() {
	addEventListener('load',()=>setTimeout(()=>{

		$(".dropdownSelect").click(function(){
			$(".selecting").toggle();
		});
		$(".dropdownSelect2").click(function(){
			$(".selecting2").toggle();
		});
		$(".termsName").click(function(){
			$(".termsCard").toggle();
		});
		$(".whatIsIt").click(function(){
			$(this).find(".whatIsItCard").toggle();
		});
		$(".courseQuantity").click(function(){
			$(".courseQuantityCard").toggle();
		});
		
		$(".activeLangBtn").click(function(){
			$(".lang ul").toggle();
		});
		
		$(".lang ul li").click(function(){
			$(".lang ul").toggle();
		});
		$(".informItem").click(function(){
			$(this).siblings(".disclosure").toggle();
			$(this).find('svg').toggleClass('rotate'); 
			$(this).find('.informName').toggleClass('greyColor'); 
			$(this).find('.informAtr svg path').toggleClass('whiteColor'); 
			$(this).find('.fill_cc1 path').toggleClass('yellow_color'); 
			$(this).find('img').css('yellow_color'); 
		});
		$(".diclosureCard").click(function(){
			$(this).siblings(".diclosure_card").toggle();
			$(this).find('img').toggleClass('rotate90'); 
		});
		
	}))
});

	
$("body").on('click', '.eyeBtnOpen', function() {
	$(this).toggleClass("eyeBtnClose");
	var input = $(".iconRightInput");
	if (input.attr("type") === "password") {
	  input.attr("type", "text");
	} else {
	  input.attr("type", "password");
	}
  
});


