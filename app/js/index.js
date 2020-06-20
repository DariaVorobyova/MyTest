var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    initialSlide: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    centeredSlides: true,
    breakpoints: { 
      375: {spaceBetween: 20,
      slidesPerView:1,
      centeredSlides: false, }, 
      440: { spaceBetween: 20,
        slidesPerView:1,
        centeredSlides: false, }, 
      768: { spaceBetween: 20,
        slidesPerView:2,
        centeredSlides: false,
       },  
      1024: { spaceBetween: 20,
        slidesPerView:3 } ,
      1400: { spaceBetween: 30,
        slidesPerView:3}
     }
  
  });

  $(document).ready(function(){
    $("#main_menu, #footer_btn").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

