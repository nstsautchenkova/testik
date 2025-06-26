$(window).on('load', function () {
	function anims() {
		$('.start-anim').addClass('anim');
	}
	setTimeout(anims, 1000);
});

AOS.init({
	easing: 'ease-out-back',
	duration: 1000,
	disable: function () {
		var maxWidth = 1100;
		return window.innerWidth < maxWidth;
	}
});

$(document).scroll(function () {
	var WinTop = $(window).scrollTop();
	var docHeight = $(window).height();

	$('.fadeEl').each(function () {
		var topIn = $(this).offset().top - docHeight * 0.80;
		if (WinTop > topIn) {
			$(this).addClass('anim');
		}
	});

	$('.animation').each(function () {
		var topIn = $(this).offset().top - docHeight * 0.80;
		if (WinTop > topIn) {
			$(this).addClass('start-animation');
		}
	});
});


/////////////////////////////
//       anchor           //
///////////////////////////

// При клике — плавный скролл + активный класс
$('.anchor').on('click', function () {
	let href = $(this).attr('href');
	$('.anchor').removeClass('active');
	$(this).addClass('active');

	$('html, body').animate({
		scrollTop: $(href).offset().top - 180 // учитываем фиксированную шапку
	}, {
		duration: 370,
		easing: "linear"
	});

	return false;
});

// При скролле — активный якорь у нужного пункта меню
$(window).on('scroll', function () {
	let scrollPos = $(window).scrollTop();

	$('.anchor').each(function () {
		let href = $(this).attr('href');
		let section = $(href);

		if (section.length) {
			let offsetTop = section.offset().top - 200; // запас для хедера
			let offsetBottom = offsetTop + section.outerHeight();

			if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
				$('.anchor').removeClass('active');
				$(this).addClass('active');
			}
		}
	});
});


/////////////////////////////
//      dropdown          //
///////////////////////////

$(document).ready(function () {
	function isMobile() {
		return window.innerWidth <= 768;
	}

	// Открытие/закрытие дропдауна по кнопке
	$('.dropdown__btn').on('click', function (e) {
		e.stopPropagation();

		const $dropdown = $(this).closest('.dropdown');
		const $drop = $dropdown.find('.dropdown__drop');

		if ($drop.hasClass('active')) {
			$drop.removeClass('active');
		} else {
			$('.dropdown__drop').removeClass('active');
			$drop.addClass('active');
		}
	});

	// Закрытие по кнопке .dropdown__close
	$('.dropdown__close').on('click', function () {
		$(this).closest('.dropdown__drop').removeClass('active');
	});

	// Закрытие по клику вне, только если НЕ на мобилке
	$(document).on('click', function (e) {
		if (!isMobile()) {
			if (!$(e.target).closest('.dropdown').length) {
				$('.dropdown__drop').removeClass('active');
			}
		}
	});
});




/////////////////////////////
//      vh mobile         //
///////////////////////////

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
});


//////////////////////////////////////
//      progress value full        //
////////////////////////////////////

$(document).ready(function () {
	$('.progress progress').each(function () {
		var $this = $(this);

		let progressValue = $this.val();
		let progressMax = $this.attr('max');

		$this.parent('.progress').find('.progress__val').html(progressValue);
		$this.parent('.progress').find('.progress__max').html(progressMax);

		if (progressValue < progressMax) {
			$this.parent().removeClass('progress-full');
		} else {
			$this.parent().addClass('progress-full');
		}
	})
});


////////////////////////////////
//      simple-slider        //
//////////////////////////////

var simpleSliderSwiper = new Swiper(".simple-slider .swiper", {
	spaceBetween: 30,
	centeredSlides: true,

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	navigation: {
		nextEl: ".simple-slider .swiper-button-next",
		prevEl: ".simple-slider .swiper-button-prev",
	},


	effect: "creative",
	creativeEffect: {
		prev: {
			shadow: true,
			translate: ["-120%", 0, -500],
		},
		next: {
			shadow: true,
			translate: ["120%", 0, -500],
		},
	},

	loop: true,
});


const hbSlider = new Swiper('.hb-slider .swiper-container', {
	loop: true,
	slidesPerView: 'auto',
	spaceBetween: 64,

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
});

const postsSlider = new Swiper('.posts-slider .swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 12,

	navigation: {
		nextEl: ".posts .swiper-button-next",
		prevEl: ".posts .swiper-button-prev",
	},
});

const articleSlider = new Swiper('.article-slider .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 6,

	centeredSlides: true,

	navigation: {
		nextEl: ".article-slider .swiper-button-next",
		prevEl: ".article-slider .swiper-button-prev",
	},

	loop: true,

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	breakpoints: {
		140: {
			slidesPerView: 1,
			centeredSlides: false,
		},
		768: {
			slidesPerView: 2,
			centeredSlides: false,
		},
		1024: {
			slidesPerView: 3,
			centeredSlides: true,
		},
	},
});

const loansSlider = new Swiper('.loans-slider .swiper-container', {
	slidesPerView: 'auto',
	spaceBetween: 12,

	navigation: {
		nextEl: ".loans-slider .swiper-button-next",
		prevEl: ".loans-slider .swiper-button-prev",
	},

	loop: true,

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},

	on: {
		init: function () {
			updateShadows(this);
		},
		slideChange: function () {
			updateShadows(this);
		},
		resize: function () {
			updateShadows(this);
		}
	}

});

function updateShadows(swiperInstance) {
	const $container = $(swiperInstance.el);
	$container.addClass('with-shadow');

	const isFirst = swiperInstance.isBeginning;
	const isLast = swiperInstance.isEnd;

	$container.toggleClass('shadow-start', !isFirst);
	$container.toggleClass('shadow-end', !isLast);
}


const statisticsSlider = new Swiper('.statistics-slider .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 12,

	navigation: {
		nextEl: ".statistics-slider .swiper-button-next",
		prevEl: ".statistics-slider .swiper-button-prev",
	},

	pagination: {
		el: ".statistics-slider .swiper-pagination",
	},

	loop: true,

	autoplay: {
		delay: 3500, // чуть больше времени
		disableOnInteraction: false,
	},

	on: {
		slideChangeTransitionEnd: function () {
			// Сброс видимости всех
			document.querySelectorAll('.statistics-slider__item').forEach(el => {
				el.classList.remove('visible');
			});

			// Активный слайд
			const activeSlide = document.querySelector('.statistics-slider .swiper-slide-active');
			const items = activeSlide.querySelectorAll('.statistics-slider__item');

			items.forEach((el, index) => {
				// Убираем задержку или делаем очень лёгкую
				setTimeout(() => {
					el.classList.add('visible');
				}, index * 50); // Можно поставить 0 или 50ms
			});
		}
	}
});


//////////////////////////
//      counter        //
////////////////////////

const counter = () => {
	var counterMinus = $('.counter .minus');
	var counterPlus = $('.counter .plus');

	counterMinus.click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	counterPlus.click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
}

function updateHeaderColor() {
	let scrollPos = $(window).scrollTop();

	$(".section-color").each(function () {
		let blockTop = $(this).offset().top;
		let blockHeight = $(this).outerHeight();

		if (scrollPos >= blockTop - 60 && scrollPos < blockTop + blockHeight - 60) {
			let colorValue = $(this).data("color");
			$(".header").attr("data-color", colorValue);
		}
	});
}

$(window).on("scroll", updateHeaderColor);

// Вызов при загрузке
$(document).ready(updateHeaderColor);



//////////////////////////
//      dotted         //
////////////////////////

window.onload = () => {
	const size = 7;
	const offset = 15;
	const desiredSpacing = 23;

	// Функция для создания точки
	function createDot(x, y, container) {
		const dot = document.createElement('div');
		dot.className = 'dot';
		dot.style.left = `${x}px`;
		dot.style.top = `${y}px`;
		container.appendChild(dot);
	}

	// Функция для размещения точек вдоль стороны
	function placeDotsAlongSide(startX, startY, endX, endY, container) {
		const isHorizontal = startY === endY;
		const length = isHorizontal
			? Math.abs(endX - startX)
			: Math.abs(endY - startY);

		const segments = Math.max(1, Math.round(length / desiredSpacing));
		const dx = (endX - startX) / segments;
		const dy = (endY - startY) / segments;

		// Создаем новые точки
		for (let i = 0; i <= segments; i++) {
			const x = startX + dx * i;
			const y = startY + dy * i;
			createDot(x, y, container);
		}
	}

	// Функция для обновления точек
	function updateDots() {
		document.querySelectorAll('.dotted-frame').forEach(container => {
			container.querySelectorAll('.dot').forEach(dot => dot.remove());

			const width = container.offsetWidth;
			const height = container.offsetHeight;

			const left = offset;
			const right = width - offset - size;
			const top = offset;
			const bottom = height - offset - size;

			// Размещаем точки заново
			placeDotsAlongSide(left, top, right, top, container);       // Верх
			placeDotsAlongSide(left, bottom, right, bottom, container); // Низ
			placeDotsAlongSide(left, top, left, bottom, container);     // Лево
			placeDotsAlongSide(right, top, right, bottom, container);   // Право
		});
	}

	// Инициализация точек при загрузке страницы
	updateDots();

	// Пересчитываем точки при изменении размера окна
	window.addEventListener('resize', updateDots);
};


// Аккордеон
$('.hwfaq__arrow').on('click', function () {
	var $item = $(this).closest('.hwfaq__item');

	if (!$item.hasClass('active')) {
		$('.hwfaq__item').removeClass('active');

		$item.addClass('active');
	} else {
		$item.removeClass('active');
	}
});


$(document).ready(function () {
	function groupHbItems() {
		if ($(window).width() < 1200) {
			// Проверяем, был ли уже создан контейнер
			if ($('.hb-grid__mobile-group').length === 0) {
				const items = $('.hb-grid__item').not('.hb-main');
				const wrapper = $('<div class="hb-grid__mobile-group"></div>');
				items.wrapAll(wrapper);
			}
		} else {
			// Удаляем обёртку при возвращении к десктопу
			const group = $('.hb-grid__mobile-group');
			if (group.length) {
				group.children().unwrap();
			}
		}
	}

	// Вызов при загрузке и ресайзе
	groupHbItems();
	$(window).on('resize', groupHbItems);
});

$(document).ready(function () {
	function groupFTItems() {
		if ($(window).width() < 1200) {
			// Проверяем, был ли уже создан контейнер
			if ($('.future-group').length === 0) {
				const items = $('.future-item--mob');
				const wrapper = $('<div class="future-group"></div>');
				items.wrapAll(wrapper);
			}
		} else {
			// Удаляем обёртку при возвращении к десктопу
			const group = $('.future-group');
			if (group.length) {
				group.children().unwrap();
			}
		}
	}

	groupFTItems();
	$(window).on('resize', groupFTItems);
});


$(document).ready(function () {
	$('.menu-toggle').on('click', function (e) {
		e.stopPropagation();
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
	});

	// Клик вне меню — закрыть
	$(document).on('click', function (e) {
		if (!$(e.target).closest('.menu, .menu-toggle').length) {
			$('.menu').removeClass('active');
			$('.menu-toggle').removeClass('active');
		}
	});
});


$(document).ready(function () {
	$('.admin-menu-toggle').on('click', function (e) {
		e.stopPropagation();
		$(this).toggleClass('active');
		$('.admin-menu').toggleClass('active');
	});

	// Клик вне меню — закрыть
	$(document).on('click', function (e) {
		if (!$(e.target).closest('.admin-menu, .admin-menu-toggle').length) {
			$('.admin-menu').removeClass('active');
			$('.admin-menu-toggle').removeClass('active');
		}
	});
});


$(document).on('click', '.bootstrap-select [data-toggle="dropdown"]', function (e) {
	const $formItem = $(this).closest('.form-item');

	// Убираем класс у всех
	$('.form-item.select-open').removeClass('select-open');

	// Если у текущего еще не открыт — добавляем
	if (!$formItem.hasClass('select-open')) {
		$formItem.addClass('select-open');
	} else {
		$formItem.removeClass('select-open');
	}
});


/////////////////////////////
//         RANGE          //
///////////////////////////

$(document).ready(function () {
	// Функция для инициализации слайдера
	function initRangeSlider($range, $input, rangeClass) {
		$range.ionRangeSlider({
			hide_min_max: true,
			grid: true,
			type: "single",
			min: 0,
			max: 100,
			from: 10,
			onStart: function (data) {
				$input.val(data.from + ' %');
				updatePassedPoints(rangeClass);
			},
			onChange: function (data) {
				$input.val(data.from + ' %');
				updatePassedPoints(rangeClass);
			},
		});

		// Наблюдение за изменениями позиции ползунка
		let observer = new MutationObserver(function () {
			updatePassedPoints(rangeClass);
		});

		// Убедимся, что ползунок существует, прежде чем привязать MutationObserver
		const slider = $range.find(".irs-slider.single")[0];
		if (slider) {
			observer.observe(slider, { attributes: true, attributeFilter: ["style"] });
		}
	}

	// Функция для обновления пройденных точек
	function updatePassedPoints(rangeClass) {
		let slider = $(`.${rangeClass} .irs-slider.single`);
		let sliderLeft = parseFloat(slider.css("left")); // Позиция ползунка

		$(`.${rangeClass} .irs-grid-pol`).each(function () {
			let $point = $(this);
			let pointLeft = parseFloat($point.css("left")); // Позиция точки

			if (pointLeft <= sliderLeft) {
				$point.addClass("passed");
			} else {
				$point.removeClass("passed");
			}
		});
	}

	// Инициализация слайдера
	var $range1 = $("#range--range"),
		$input1 = $("#range--input");
	initRangeSlider($range1, $input1, "rs1");
});

$(document).ready(function () {
	$('.accounts-link__btn').on('click', function () {
		const $btn = $(this);

		// Проверяем текущее значение data-status
		const currentStatus = $btn.attr('data-status');

		// Переключаем статус
		if (currentStatus === 'add') {
			$btn.attr('data-status', 'unlink');
		} else {
			$btn.attr('data-status', 'add');
		}
	});
});


function updatePadding() {
	var headerHeight = $('.header').outerHeight() + 16;
	$('.admin').css('padding-top', headerHeight);
}

$(document).ready(function () {
	updatePadding();
	$(window).on('resize', updatePadding);
});


$(document).ready(function () {
	$('.pin-input').on('input', function () {
		const $this = $(this);
		const val = $this.val();

		// Перемещаем фокус, если введено что-то
		if (val.length === 1) {
			$this.next('.pin-input').focus();
		}
	});

	// Назад — фокус на предыдущий, если удалили
	$('.pin-input').on('keydown', function (e) {
		const $this = $(this);

		if (e.key === 'Backspace' && !$this.val()) {
			$this.prev('.pin-input').focus();
		}
	});
});



const container = document.querySelector('.scroll-content');

if (container) {
	let isDown = false;
	let startX = 0;
	let scrollLeft = 0;

	container.addEventListener('mousedown', (e) => {
		isDown = true;
		container.classList.add('dragging');
		startX = e.clientX;
		scrollLeft = container.scrollLeft;
	});

	container.addEventListener('mouseup', () => {
		isDown = false;
		container.classList.remove('dragging');
	});

	container.addEventListener('mouseleave', () => {
		isDown = false;
		container.classList.remove('dragging');
	});

	container.addEventListener('mousemove', (e) => {
		if (!isDown) return;
		const dx = e.clientX - startX;
		container.scrollLeft = scrollLeft - dx;
	});
}

$(document).ready(function () {
    const $list = $('.assets__list');
    const $container = $list.closest('.acard__main');

    $list.on('scroll', function () {
        const scrollLeft = $(this).scrollLeft();
        const scrollWidth = this.scrollWidth;
        const clientWidth = $(this).outerWidth();

        if (scrollLeft + clientWidth >= scrollWidth - 1) {
            $container.addClass('list--end');
        } else {
            $container.removeClass('list--end');
        }
    });
});



function restructureLoansLayout() {
  const container = document.querySelector('.loans__row');

  // Возвращаем все .acard в основной контейнер
  const existingCols = container.querySelectorAll('.loans__col');
  existingCols.forEach(col => {
    while (col.firstChild) container.insertBefore(col.firstChild, col);
    container.removeChild(col);
  });

  // Получаем нужные блоки
  const balance = container.querySelector('.loans--balance');
  const available = container.querySelector('.loans--available-loans');
  const active = container.querySelector('.loans--active-loans');
  const calculator = container.querySelector('.loans--loan-calculator');

  if (window.innerWidth > 1200) {
    // Создаём колонки для больших экранов
    const col1 = document.createElement('div');
    col1.className = 'loans__col';
    col1.appendChild(balance);
    col1.appendChild(available);

    const col2 = document.createElement('div');
    col2.className = 'loans__col';
    col2.appendChild(active);
    col2.appendChild(calculator);

    container.appendChild(col1);
    container.appendChild(col2);

  } else {
    // Создаём колонку для маленьких экранов
    const col = document.createElement('div');
    col.className = 'loans__col';
    col.appendChild(available);
    col.appendChild(calculator);

    container.insertBefore(balance, container.firstChild);
    container.insertBefore(active, container.lastChild.nextSibling);
    container.insertBefore(col, container.lastChild.nextSibling);
  }
}

// Инициализация
window.addEventListener('DOMContentLoaded', restructureLoansLayout);
window.addEventListener('resize', restructureLoansLayout);


