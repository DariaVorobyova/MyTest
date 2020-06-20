var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    initialSlide: 1,
    spaceBetween: 15,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      dots:true,
    // slidesOffsetBefore:-170,
    // loop: false,
    // overflow: false,
    centeredSlides: true,
    breakpoints: { 
      375: {spaceBetween: 40,
      slidesPerView:1 }, 
      414: { spaceBetween: 50,
        slidesPerView:1 }, 
      768: { spaceBetween: 80,
        slidesPerView:1 },  
      1024: { spaceBetween: 188,
        slidesPerView:3 } ,
      1440: { spaceBetween: 288,
        slidesPerView:3}
     }
  
  });