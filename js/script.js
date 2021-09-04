$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:true,
		slidesToShow:1,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		variablewidth:true,
		infinite:false,
		// centerMode:true,
		// fade:true,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 321,
				settings: {
					centerMode: true,
        			centerPadding: '30px',
       				 slidesToShow: 1
				}
			}
		]
	});
});

