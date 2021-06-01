$(document).ready(function () {
	var hotelSLider = new Swiper(".hotel-slider", {
		// Optional parameters
		loop: true,

		// Navigation arrows
		navigation: {
			nextEl: ".hotel-slider__button--next",
			prevEl: ".hotel-slider__button--prev",
		},
	});

	var reviewsSlider = new Swiper(".reviews-slider", {
		// Optional parameters
		loop: true,
		autoHeight: true,

		// Navigation arrows
		navigation: {
			nextEl: ".reviews-slider__button--next",
			prevEl: ".reviews-slider__button--prev",
		},
	});
	var menuButton = document.querySelector(".menu-button");
	menuButton.addEventListener("click", function () {
		document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
	});

	var modalButton = $("[data-toggle=modal]");
	var closeModalButton = $(".modal__close");
	modalButton.on('click', openModal);
	closeModalButton.on('click', closeModal);

	function openModal() {
		var targetModal = $(this).attr("data-href");
		$(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
		$(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
	}
	function closeModal(event) {
		event.preventDefault(event);
		var	modalOverlay = $('.modal__overlay');
		var	modalDialog = $('.modal__dialog');
		modalOverlay.removeClass('modal__overlay--visible');
		modalDialog.removeClass('modal__dialog--visible');
	}

	// Обработка форм
	$(".form").each(function () {
		$(this).validate({
		errorClass: "invalid",
		messages: {
			name: {
				required: "Please Specify your name",
				minlength: "Your name musn't be shorter than 2 symbol",
			},
			email: {
				required: "Please enter your email",
				email: "Your email ought to be this format name@domain.com",
			},
			phone: {
				required: "Your number is required",
			},
      email: {
        required: "We need your email to contact you",
        email: "Mail format: name@domain.com"
      }
		},
	});

	});
	AOS.init();
	
	$(document).ready(function () {
		$('.phone').mask("+7 (999) 999-99-99");
	})

});
