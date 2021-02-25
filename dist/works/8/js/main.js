// Плавная прокуртка по якорям:

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};


new Swiper('.slider__container', {
	grabCursor: true,
	loop: true,
	spaceBetween: 24,
	slidesPerView: 4.5,
  
});

// Animation blur slider
$(document).ready(function() {	 

	var speed = 0; //скорость анимации
	var id = 0;
	
	var left_pos = {
		left: "-3%",
		top: "22%", 
		opacity: 0.5,
		width: 348, 
		height: 181
	};
	
	var center_pos = {
		left: "21%", 
		top: "0%", 
		opacity: 1, 
		width: 860, 
		height: 430,
	};
	
	var right_pos = {
		left: "81%", 
		top: "22%", 
		opacity: 0.5, 
		width: 348, 
		height: 181,
		blur : 5
	};
	
	var back_pos = {
		left: "21%", 
		top: "22%", 
		opacity: 0, 
		width: 150, 
		height: 100 
	}

	function getIdByClass() {
		$("#roundabout > div").each(function(indx){
			if ($(this).hasClass('center_pos')) {
				var idd = $(this).attr('id');
				idd = idd.split("_");
				id = parseInt(idd[1]);
				$(this).removeClass('center_pos');
			};
		});	 
	}
	
 	function MoveRight() {
 
 		getIdByClass();
 		
 		var id_next = id+1;	
		if (id_next > $("#roundabout").children().length) {
			id_next = 2;
		}
		
		var id_next_next = id_next + 1;
		if (id_next_next > $("#roundabout").children().length) {
			id_next_next = 1;
		}
		
		var id_prev = id-1;
		if (id_prev <=0) {
			id_prev = $("#roundabout").children().length;
		}
		
		//alert("id : " +id+ "; id_next : " + id_next + "; id_next_next : " + id_next_next + "; id_prev : " + id_prev);
		if ($("#roundabout").children().length <= 3) {
			$('#ind_' + id + '').css({'z-index': 1}).animate(left_pos, speed, function () {
			$('#ind_' + id + '').addClass('item_blur')	
			});
			$('#ind_' + id_next + '').css({'z-index': 2}).animate(center_pos, speed).addClass('center_pos').removeClass('item_blur');
			$('#ind_' + id_prev + '').css({'z-index': 1}).animate(right_pos, speed, function () {
			$('#ind_' + id_prev + '').addClass('item_blur')	
			});
		}
		else {

			$('#ind_' + id + '').css({'z-index': 1}).animate(left_pos, speed, function () {
			$('#ind_' + id + '').addClass('item_blur')	
			});
			$('#ind_' + id_next + '').css({'z-index': 2}).animate(center_pos, speed).addClass('center_pos').removeClass('item_blur');
			$('#ind_' + id_prev + '').css({'z-index': 0}).animate(back_pos, speed).removeClass('item_blur');
			$('#ind_' + id_next_next + '').css({'z-index': 1}).animate(right_pos, speed, function () {
			$('#ind_' + id_next_next + '').addClass('item_blur')	
			});
		}
 	}
 
	function MoveLeft() {
	
		getIdByClass();

		var id_next = id+1;	
		if (id_next > $("#roundabout").children().length) {
			id_next = 1;
		}
		var id_prev = id-1;
		if (id_prev <=0) {
			id_prev = $("#roundabout").children().length;
		}
		
		var id_prev_prev = id_prev - 1; 
		if (id_prev_prev <= 0) {
			id_prev_prev = $("#roundabout").children().length;
		}		

		if ($("#roundabout").children().length <= 3) {
			$('#ind_' + id_next + '').css({'z-index': 1}).animate(left_pos, speed, function () {
			$('#ind_' + id_next + '').addClass('item_blur')	
			});
			$('#ind_' + id_prev + '').css({'z-index': 2}).animate(center_pos, speed).addClass('center_pos').removeClass('item_blur');
			$('#ind_' + id + '').css({'z-index': 1}).animate(right_pos, speed).addClass('item_blur');
		}
		else {
			$('#ind_' + id_next + '').css({'z-index': 0}).animate(back_pos, speed).removeClass('item_blur');
			$('#ind_' + id_prev + '').css({'z-index': 2}).animate(center_pos, speed).addClass('center_pos').removeClass('item_blur');
			$('#ind_' + id_prev_prev + '').css({'z-index': 1}).animate(left_pos, speed, function () {
			$('#ind_' + id_prev_prev + '').addClass('item_blur')	
			});

			$('#ind_' + id + '').css({'z-index': 1}).animate(right_pos, speed, function () {
			$('#ind_' + id + '').addClass('item_blur')	
			});


		}
	}	
		
 	$("#right_rb").click(function(){	
		MoveRight();
	})
 
	$("#left_rb").click(function(){
		MoveLeft();
	})
 
})

setTimeout(function(){
	$('#left_rb').trigger('click');
  }, 100);













