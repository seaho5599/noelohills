//멀티미디어 요소 로딩 전 실행
$(document).ready();
//멀티미디어 요소 로딩 완료 후 실행
window.onload = function(){
  //상단 배너 슬라이드
  new Swiper('.sw-banner', {
    loop:true,
    //fade효과(swiper demo 확인)
    effect: 'fade',
    //paginaition(siwper demo 확인,click 가능)
    pagination:{
      el: '.sw-banner-pg',
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    //touchmove 제거
    allowTouchMove: false,
  });
  //visual 슬라이드
  new Swiper('.sw-visual', {
    loop:true,
    autoplay:{
      delay:2500,
      disableOnInteraction: false,
    },
    pagination:{
      el: '.sw-visual-pg',
      clickable: true,
    },
  });
};