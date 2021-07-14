$( document ).ready(function() {
    
	$(window).scroll(function () {
	    var scroll = $(window).scrollTop();

	    if (scroll >= 200) {
	        $("header").addClass("sticky");
	    } else {
	        $("header").removeClass("sticky");
	        
	    }
	});

	$(".hamburger").click(function () {
        $(".hamburger").toggleClass("active");
    });
	
	$(".recipes-btn").click(function() {
        $(this).parent().parent().siblings(".overlay-text").toggleClass("open");
        $(this).toggleClass('close');
    });


    $(".scroll-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });




    $('#home-banner').slick({
    	dots: true,
    	arrows:false,
		speed: 300,
		slidesToShow: 1,
		prevArrow: false,
    	nextArrow: false
    });
    
    $('#masala-slider').slick({
	    slidesToShow: 1,
  		slidesToScroll: 1,
	    arrows: false,
	    dots: false,
	    fade: true,
	    asNavFor: '#masala-tab'
	 });
    $('#masala-tab').slick({
	    slidesToShow: 4,
  		slidesToScroll: 1,
	    prevArrow: '<div class="slick-prev"><img src="img/left.svg"></div>',
    	nextArrow: '<div class="slick-next"><img src="img/right.svg"></div>',
	    arrows: true,
	    dots: false,
	    asNavFor: '#masala-slider',
  		focusOnSelect: true,
  		// centerPadding: '40px',
  		responsive: [
	    {
	      breakpoint: 991,
	      settings: {
	        slidesToShow: 3,
	        arrows: true
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1,
	        arrows: false
	      }
	    }
	    ]
	 });




    $('#foodie-slider').slick({
	    slidesToShow: 3,
  		slidesToScroll: 1,
	    prevArrow: '<div class="slick-prev"><img src="img/left.svg"></div>',
    	nextArrow: '<div class="slick-next"><img src="img/right.svg"></div>',
	    arrows: true,
	    dots: false,
	    responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 1	      }
	    }
	  ]
	  });
    $('.recipes-slider').slick({
	    slidesToShow: 3,
  		slidesToScroll: 1,
	    prevArrow: '<div class="slick-prev"><img src="img/left.svg"></div>',
    	nextArrow: '<div class="slick-next"><img src="img/right.svg"></div>',
	    arrows: true,
	    dots: false,
	  	responsive: [
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 2
		      }
		    }
	    ]
	  });

    $(".steaming .card-header .nav-tabs .nav-link").click(function() {
        $('.recipes-slider').slick('unslick'); 
        setTimeout(function(){

		 $('.recipes-slider').slick({
		    slidesToShow: 3,
	  		slidesToScroll: 1,
		    prevArrow: '<div class="slick-prev"><img src="img/left.svg"></div>',
	    	nextArrow: '<div class="slick-next"><img src="img/right.svg"></div>',
		    arrows: true,
		    dots: false,
		  	responsive: [
			    {
			      breakpoint: 991,
			      settings: {
			        slidesToShow: 2
			      }
			    }
		    ]
		  });

		 }, 200);       
    });
    if (window.matchMedia("(max-width: 767px)").matches) {
	   $('.recipes-slider').slick('unslick');
	   $(".steaming .card-header .nav-tabs .nav-link").click(function() {
	   		$('.recipes-slider').slick('unslick'); 
	        setTimeout(function(){
			 $('.recipes-slider').slick('unslick'); 
			}, 200);
	   });
	} 
    $('.follow-slider').slick({
	    slidesToShow: 4,
  		slidesToScroll: 1,
	    prevArrow: '<div class="slick-prev"><img src="img/white-left.svg"></div>',
    	nextArrow: '<div class="slick-next"><img src="img/white-right.svg"></div>',
	    arrows: true,
	    dots: false,
	    responsive: [
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 2	      }
	    }
	  ]
        // centerPadding: '10px'
	  });

    	
	    
});



