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
	if ($('.branding-slider').length) {
	  applyBrandingSlider(".branding-slider");
	}
  });
  
  $(document).ready(function () {
	$(".cart-button").on("click", function() {
	  $('.mini-cart-holder').fadeIn();
	  $(".mini-cart-holder").addClass('active');
	  $(".cart-overlay").addClass('open');
	});
	$(".cross-icon").on("click", function() {
	  $('.mini-cart-holder').fadeOut(); 
	  $(".mini-cart-holder").removeClass('active');
	  $(".cart-overlay").removeClass('open');
	});
	$(".cart-overlay").on("click", function() {
	  $('.mini-cart-holder').fadeOut(); 
	  $(".mini-cart-holder").removeClass('active');
	  $(".cart-overlay").removeClass('open');
	});
	var numberOfItems = $('.categories-products-holder .categories-list-holder').length; 
	var limitPerPage = 6; // Limit of items per each page
	$('.categories-products-holder .categories-list-holder:gt(' + (limitPerPage - 1) + ')').hide();
	var totalPages = Math.round(numberOfItems / limitPerPage); // Get number of pages
	$(".pagination").append("<li class='current-page active'><a href='javascript:void(0)'>" + 1 + "</a></li>");
  
	// Loop to insert page number for each sets of items equal to page limit (e.g., limit of 4 with 20 total items = insert 5 pages)
	for (var i = 2; i <= totalPages; i++) {
	  $(".pagination").append("<li class='current-page'><a href='javascript:void(0)'>" + i + "</a></li>"); // Insert page number into pagination tabs
	}
  
	// Add next button after all the page numbers  
	$(".pagination").append("<li id='next-page'><a href='javascript:void(0)' aria-label=Next><span aria-hidden=true><i class='fas fa-arrow-right'></i></span></a></li>");
  
	// Function that displays new items based on page number that was clicked
	$(".pagination li.current-page").on("click", function() {
	  // Check if page number that was clicked on is the current page that is being displayed
	  if ($(this).hasClass('active')) {
		return false;
	  } else {
		var currentPage = $(this).index();
		$(".pagination li").removeClass('active');
		$(this).addClass('active');
		$(".categories-products-holder .categories-list-holder").hide();
		var grandTotal = limitPerPage * currentPage;
  
		// Loop through total items, selecting a new set of items based on page number
		for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
		  $(".categories-products-holder .categories-list-holder:eq(" + i + ")").show();
		}
	  }
  
	});
  
	// Function to navigate to the next page when users click on the next-page id (next page button)
	$("#next-page").on("click", function() {
	  var currentPage = $(".pagination li.active").index(); // Identify the current active page
	  // Check to make sure that navigating to the next page will not exceed the total number of pages
	  if (currentPage === totalPages) {
		return false; // Return false (i.e., cannot navigate any further, since it would exceed the maximum number of pages)
	  } else {
		currentPage++; // Increment the page by one
		$(".pagination li").removeClass('active'); // Remove the 'active' class status from the current page
		$(".categories-products-holder .categories-list-holder").hide(); // Hide all items in the pagination loop
		var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected
  
		// Loop through total items, selecting a new set of items based on page number
		for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
		  $(".categories-products-holder .categories-list-holder:eq(" + i + ")").show(); // Show items from the new page that was selected
		}
  
		$(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
	  }
	});
  
	// Function to navigate to the previous page when users click on the previous-page id (previous page button)
	$("#previous-page").on("click", function() {
	  var currentPage = $(".pagination li.active").index(); // Identify the current active page
	  // Check to make sure that users is not on page 1 and attempting to navigating to a previous page
	  if (currentPage === 1) {
		return false; // Return false (i.e., cannot navigate to a previous page because the current page is page 1)
	  } else {
		currentPage--; // Decrement page by one
		$(".pagination li").removeClass('active'); // Remove the 'activate' status class from the previous active page number
		$(".categories-products-holder .categories-list-holder").hide(); // Hide all items in the pagination loop
		var grandTotal = limitPerPage * currentPage; // Get the total number of items up to the page that was selected
  
		// Loop through total items, selecting a new set of items based on page number
		for (var i = grandTotal - limitPerPage; i < grandTotal; i++) {
		  $(".categories-products-holder .categories-list-holder:eq(" + i + ")").show(); // Show items from the new page that was selected
		}
  
		$(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
	  }
	});
  
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
	  $(".search-container").toggle();
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
	var clicks = 1; $(".plus").click(function () {
	 clicks++; 
	 $(".quantity").val(clicks);
	})
	var clicks = 1; 
	$(".minus").click(function () {
	if(clicks > 0){ 
	  clicks--; 
	  $(".quantity").val(clicks);
	}
	});
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
	  responsive: [{
		breakpoint: 768,
		settings: {
		  dots: true,
		  arrows: false,
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
  