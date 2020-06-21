var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  initialSlide: 1,
  spaceBetween: 15,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  centeredSlides: false,
  breakpoints: { 
    375: {
    spaceBetween: 0,
    slidesPerView:1,
    centeredSlides: false, }, 
    440: { spaceBetween: 0,
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
  $(".main_menu, .footer_btn").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
});

function parallax(event){
  this.querySelectorAll('#animatedImg').forEach(images => {
    let speed = images.getAttribute("data-speed") * 0.01;
    let distanceX = (screen.width / 2 - event.clientX) * speed;
    let distanceY = (screen.height / 2 - event.clientY) * speed;
    images.style.transform = `translate(${distanceX}px, ${distanceY}px)`;
  });
}

  
document.addEventListener('mousemove', parallax);


  let overlay = document.getElementById('overlay');
  let formPopup = document.getElementById('formPopup');
  
  document.getElementById('orderBtn').onclick = function (){
    overlay.classList.add('open');
    formPopup.classList.add('open');
 };
 document.getElementById('closeForm').onclick = function (){
  overlay.classList.remove('open');
  formPopup.classList.remove('open');
}




