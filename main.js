// Слайдеры
$(document).ready(function(){
  $(document).ready(function(){
    $('.slider').slick({
      autoplaySpeed: 1500,
      arrows: false,
      pauseOnHover: false,
    });
  
    // Добавление обработчиков событий для начала и остановки слайдера при наведении мыши
    $('.slider').on('mouseenter', function(){
      $(this).slick('slickPlay');
    }).on('mouseleave', function(){
      $(this).slick('slickPause');
    });
  });

  $('.travelers__slider').slick({
    pauseOnHover: false,
    nextArrow: '<button class="arrow-right"><img src="main/travelers/arrow-right.svg" alt=""></button>',
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
}); 

// Карта
let locationBtn = document.querySelector('.catalog-btn');
let map = document.querySelector('.iframe');
locationBtn.addEventListener('click', function() {
  map.classList.toggle('hidden');
});

let catalogItems = document.querySelectorAll('.catalog__box-item');
let loadmoreNormalBtns = document.querySelectorAll('.loadmore--normal');
let loadmoreNormalFirst = loadmoreNormalBtns[0];
let loadmoreNormalSecond = loadmoreNormalBtns[1];
let loadmoreMobileBtns = document.querySelectorAll('.loadmore--mobile');
let loadmoreMobileFirst = loadmoreMobileBtns[0];
let loadmoreMobileSecond = loadmoreMobileBtns[1];
let loadmoreMobileThird = loadmoreMobileBtns[2];
let loadmoreMobileFourth = loadmoreMobileBtns[3];

// Кнопка "Показать ещё" для 1280px
loadmoreNormalFirst.addEventListener('click', function(){
  catalogItems.forEach((item) => {
    for (let i = 6; i <= 17; i++) {
      catalogItems[i].classList.remove('hidden');
      window.dispatchEvent(new Event('resize'));
      loadmoreNormalFirst.classList.add('hidden');
    }
  })
});

