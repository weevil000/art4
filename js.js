(function ($) {

    $('.header__burger').click(function(){
        $('.header__burger,.menu__item').toggleClass('active');
    });


    $(".portfolio__item").click(function () {	// Событие клика на маленькое изображение
        let img = $(this);	// Получаем изображение, на которое кликнули
        let src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>" + "<img src='" + src + "' class='popup_img' />" + "</div>");

        $(".popup").fadeIn(900); // Медленно выводим изображение
        $(".popup_bg").click(function () {	// Событие клика на затемненный фон
            $(".popup").fadeOut(900);	// Медленно убираем всплывающее окн
            setTimeout(function () {	// Выставляем таймер
                $(".popup").remove(); // Удаляем разметку всплывающего окна
            }, 200);
        });
    });


    $(document).ready(function(){
        $(".button").click(function(){
            let value = $(this).attr("data-filter");
            let elem = $(".portfolio__item");
            if(value === "all"){
                $(elem).show("500");
            }
            else{
                $(elem).not("."+value).hide("500");
                $(elem).filter("."+value).show("500");
            }
        });
    });
})(jQuery);



/*
const battun = document.querySelector('.header__burger')
const menuItem = document.querySelector('.menu__item')
battun.addEventListener('click',()=>{
    if (battun.classList.contains('active')){
        battun.classList.remove('active')
        menuItem.classList.remove('active')
    } else {
        battun.classList.add('active')
        menuItem.classList.add('active')
    }
})*/

