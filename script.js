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
		
	}))
});


$(document).ready(function() {
	addEventListener('load',()=>setTimeout(()=>{
		$(".informAccordion").click(function(){
			$(this).find(".disclosure").toggle();
				$(this).find('svg').toggleClass('rotate'); 
				$(this).find('.informName').toggleClass('greyColor'); 
				$(this).find('.informAtr svg path').toggleClass('whiteColor'); 
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
