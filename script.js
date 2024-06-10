$(document).ready(function() {
	addEventListener('load',()=>setTimeout(()=>{

		$(".dropdownSelect").click(function(){
			$(".selecting").toggle();
		});
		$(".dropdownSelect2").click(function(){
			$(".selecting2").toggle();
		});
		$(".dropdownSelect3").click(function(){
			$(".selecting3").toggle();
		});
		$(".dropdownSelect4").click(function(){
			$(".selecting4").toggle();
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


		// $(".hide").click(function(){
		// 	var mainComment = $(this).closest(".main_comment");
		
		// 	// Теперь mainComment - это ваш родительский блок .main_comment
		// 	mainComment.find(".sub_comment_block").toggleClass("hidden");
		
		// 	// Поворот элемента с классом "hide" на 180 градусов
		// 	$(this).toggleClass("rotate180");
		
		// 	// Пересчитайте высоту и установите новую высоту для элемента с классом "line"
		// 	var sourceElements = mainComment.find(".sub_comment");
		// 	if (sourceElements.length > 0) {
		// 		var sourceHeight = sourceElements[0].clientHeight;
		
		// 		var targetElements = mainComment.find(".line");
		// 		if (targetElements.length > 0) {
		// 			targetElements[0].style.height = sourceHeight + "px";
		// 		} else {
		// 			console.error("Элементы с классом 'line' не найдены.");
		// 		}
		// 	} else {
		// 		console.error("Элементы с классом 'sub_comment' не найдены.");
		// 	}
		// });
		
		$(document).ready(function() {
			// Добавляем обработчик события клика к каждому элементу с классом .total_head
			$('.total_head').click(function() {
			  // Находим соответствующий .total_content
			  var totalContent = $(this).next('.total_content');
			  
			  // Используем toggleClass для добавления/удаления класса .hidden у найденного .total_content
			  totalContent.toggleClass('hidden');
			});
		  });


		
		// Если необходимо выполнить код после загрузки DOM, используйте также следующий код:
		$(document).ready(function() {
			// ваш код здесь
			var sourceElements = document.getElementsByClassName("sub_comment");
			var sourceHeight = sourceElements[0].clientHeight;
		
			var targetElements = document.getElementsByClassName("line");
			targetElements[0].style.height = sourceHeight + "px";
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




