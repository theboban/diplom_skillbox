
// Меню мобильное

$(function(){
	$('#header-menu__button_mobile')
	.click(function(){
		var mobMenu = $('#header-menu__mobile');
		if(mobMenu.is(':hidden')) {
			mobMenu.slideToggle();
			mobMenu.animate({
				width: '100%'
				
			});
		}
		else {
			mobMenu.slideToggle();
			mobMenu.animate({
				width: '0'
				
			});
		}
	});
});

// Всплывающее окно в формой

$(function(){
	$('.call, .call__header__mobile').click(function(){
		$('#popup-back').show();
	});

	$('#close-button').click(function(){
		$('#popup-back').hide();
	});
});

// Скроллинг для кнопок с data-scroll атрибутом

$(document).ready(function(){
    $('.more-button, .conteiner-button__button_price').click( function(){
	var scroll_el = $(this).data('scroll');
	if (scroll_el && $(scroll_el).length != 0) {
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700);
	}
	return false;
    });
});

// Плавный скроллинг к якорям (для меню и ссылок)

$(function(){
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		if ($(_href).length != 0) {
			$("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 700);
		}
		return false;
	});
});

// Слайдер

jQuery(document).ready(function(){
  jQuery('.bxslider').bxSlider({
  	preloadImages: 'visible',
  	minSlides: 3,
  	maxSlides: 3
  });
});

