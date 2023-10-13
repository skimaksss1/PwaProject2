$(document).ready(function() {
	addEventListener('load',()=>setTimeout(()=>{

		$(".dropdownSelect").click(function(){
			$(".selecting").toggle();
		});
		
	}))
});


$(document).ready(function() {
	addEventListener('load',()=>setTimeout(()=>{

		$(".informAccordion").click(function(){
			$(this).find(".disclosure").toggle();
		


			});
			$(".informItem").click(function(){ 
				$(this).find('svg').toggleClass('rotate'); 
				$(this).find('.informName').toggleClass('greyColor'); 
				$(this).find('.informAtr svg path').toggleClass('whiteColor'); 
			});
		
	}))
});

