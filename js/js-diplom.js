
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

// Скроллинг 

$(document).ready(function(){
    $('.more-button, .conteiner-button__button_price').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

// Плавный сколлинг

$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
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

