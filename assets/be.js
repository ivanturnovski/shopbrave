$(window).on('load', function () {
	$('.loader-holder').fadeOut("slow");
	if ($('.banner-holder').length) {
	  applyBannerSlider(".banner-holder");
	}
	if ($('.products-holder').length) {
	  applyProductsSlider(".products-holder");
	}
	if ($('.solutions-slider').length) {
	  applySolutionsSlider(".solutions-slider");
	}
	if ($('.products-solutions-slider').length) {
	  applyProductSolutionsSlider(".products-solutions-slider");
	}
	if ($('.new-launches-holder').length) {
	  applyNewLaunchesSlider(".new-launches-holder");
	}
	if ($('.blogs-holder').length) {
	  applyBlogsSlider(".blogs-holder");
	}
	if ($('.categories-holder').length) {
	  applyCategoriesSlider(".categories-holder");
	}
	if ($('.products-image-holder').length) {
	  applyProductsImageSlider(".products-image-holder");
	}
	if ($('.certificates-slider-holder').length) {
	  applyCertificatesSlider(".certificates-slider-holder");
	}
	if ($('.recent-products-slider').length) {
	  applyRecentSlider(".recent-products-slider");
	}
	if ($('.categories-products-holder').length) {
	  applyCategoriesProductSlider(".categories-products-holder");
	}
	if ($('.branding-slider').length) {
	  applyBrandingSlider(".branding-slider");
	}
  });
  
  $(document).ready(function () {
	// faq js
	var acc = document.getElementsByClassName("accordion");
	var i;
	for (i = 0; i < acc.length; i++) {
	  acc[i].addEventListener("click", function () {
		this.classList.toggle("active");
		var answer = this.nextElementSibling;
		if (answer.style.display === "block") {
		  answer.style.display = "none";
		} else {
		  answer.style.display = "block";
		}
	  });
	}
	// show on click
	$(".search-icon").click(function () {
	  $(".products-search").addClass("onclick-function");
	  $(".desktop-search").toggle();
	  $(".mobile-search").toggle();
	})
	// show more
	$(".read-more").click(function () {
	  $(".more").toggle();
	  var more = $(".read-more-btn").text().trim();
	  if (more === "Read More") {
		$('.read-more-btn').text("Read less");
	  }
	  else {
		$('.read-more-btn').text("Read More");
	  }
	});
	// active class js
	var header = document.getElementById("sizes");
	var btns = header.getElementsByClassName("size-quantity");
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	  });
	}
  
	// increment number
	var clicks = 0; $(".plus").click(function () { clicks++; $('.quantity').html(clicks); })
	var clicks = 0; $(".minus").click(function () { clicks--; $('.quantity').html(clicks); });
  });
  
  //stars rating
  jQuery(function ($) {
	var count = $('.rating-stars').data('defaultValue');
	$('.rating-stars > span').slice(0, count).addClass("rated");
	var count = $('.rating-stars-product').data('defaultValue');
	$('.rating-stars-product > span').slice(0, count).addClass("rated")
	var count = $('.rating-stars-reviews').data('defaultValue');
	$('.rating-stars-reviews > span').slice(0, count).addClass("rated")
	var count = $('.rating-stars-reviews-form').data('defaultValue');
	$('.rating-stars-reviews-form > span').slice(0, count).addClass("rated")
  
  })
  applyBannerSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: true,
	  infinite: true,
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  arrows: false,
	  autoplay: true,
	  autoplayspeed: 2000,
	  responsive: [{
		breakpoint: 768,
		settings: {
		  dots: false,
		}
	  }]
	});
  }
  applyProductsSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: false,
	  infinite: true,
	  slidesToScroll: 1,
	  slidesToShow: 3,
	  arrows: true,
	  autoplay: true,
	  speed: 2000,
	  responsive: [{
		breakpoint: 768,
		settings: {
		  slidesToShow: 1,
		  dots: true,
		  arrows: false,
		}
	  }]
	});
  }
  applySolutionsSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: true,
	  infinite: true,
	  slidesPerRow: 3,
	  rows: 2,
	  arrows: false,
	  autoplay: true,
	  speed: 2000,
	});
  }
  applyProductSolutionsSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: false,
	  infinite: true,
	  slidesToScroll: 3,
	  slidesToShow: 4,
	  arrows: true,
	  autoplay: true,
	  speed: 2000,
	});
  }
  applyNewLaunchesSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: true,
	  infinite: true,
	  slidesToScroll: 3,
	  slidesToShow: 3,
	  arrows: false,
	  autoplay: true,
	  speed: 2000,
	  responsive: [{
		breakpoint: 768,
		settings: {
		  slidesToShow: 2,
		}
	  }]
	});
  }
  applyBlogsSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: false,
	  infinite: true,
	  slidesToScroll: 1,
	  slidesToShow: 2,
	  arrows: true,
	  autoplay: true,
	  speed: 2000,
	  responsive: [{
		breakpoint: 768,
		settings: {
		  dots: true,
		  arrows: false,
		}
	  }]
	});
  }
  applyCategoriesSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: false,
	  infinite: true,
	  slidesToScroll: 1,
	  slidesToShow: 4,
	  arrows: false,
	  autoplay: true,
	  speed: 2000,
	  responsive: [{
		breakpoint: 480,
		settings: {
		  slidesToShow: 3,
		}
	  }]
	});
  }
  applyProductsImageSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: true,
	  infinite: true,
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  arrows: false,
	  autoplay: true,
	  speed: 2000,
	});
  }
  applyCertificatesSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: true,
	  infinite: true,
	  slidesToScroll: 4,
	  slidesToShow: 4,
	  arrows: false,
	  autoplay: true,
	  speed: 2000,
	});
  }
  applyRecentSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: false,
	  infinite: true,
	  slidesToScroll: 1,
	  slidesToShow: 3,
	  arrows: true,
	  autoplay: true,
	  speed: 2000,
	});
  }
  applyCategoriesProductSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: false,
	  infinite: true,
	  slidesToScroll: 1,
	  slidesPerRow: 3,
	  rows: 2,
	  arrows: true,
	  autoplay: true,
	  speed: 2000,
	  responsive: [{
		breakpoint: 768,
		settings: {
		  slidesPerRow: 2,
		  rows: 2,
		}
	  }]
	});
  }
  applyBrandingSlider = function (containerSelector) {
	$(containerSelector).slick({
	  dots: true,
	  infinite: true,
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  arrows: false,
	  autoplay: true,
	  speed: 2000,
	  responsive: [
		{
		  breakpoint: 9999,
		  settings: "unslick"
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToScroll: 1,
			slidesToShow: 1,
			infinite: true,
			dots: false,
			dots: true,
		  }
		}
	  ]
	});
  }
  