$(function(){
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true,
    });

    $('.header-btn').on('click', function(){
        $('.menu').addClass('active');
    });
    $('.close-btn').on('click', function(){
        $('.menu').removeClass('active');
    })


    const animItems = document.querySelectorAll('._anim-items');

    if (animItems.length > 0) {
        window.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            // Получаем высоту объекта
            const animItemHeight = animItem.offsetHeight;
            // Получаем позицию объекта
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            // Рассчитываем точку анимации
            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            // Точка анимации, если элемент находится за пределами высоты окна браузера:
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }
            // Анимируем элемент путем добавления соответствующего класса
            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }
            else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    };

  // Сама функция получения позиции объекта от верха и от лева страницы
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  // Регулируем задержку анимации
  setTimeout(() => {
    animOnScroll();
  }, 100);

};








});