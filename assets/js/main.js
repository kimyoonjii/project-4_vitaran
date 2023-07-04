$(function(){


$(window).scroll(function(){ //윈도우 스크롤
  curr = $(this).scrollTop();//내현재스크롤
  if(curr >= 20){ //만약에 내 curr가 20보다 크거나 같으면
      $('.header').addClass('on')
  }else{
      $('.header').removeClass('on')

  }
})

//header
$('.menu-list .menu-item').hover(function(){
  //올렸을때
  $(this).find('.sub-menu').addClass('on')
},function(){
  //땟을때
  $('.sub-menu').removeClass('on')
})



//사이드메뉴
$('.hamburge-btn').click(function(e){
  e.preventDefault();

  $('.side-menu').addClass('on')
  $('.side-menu-bg').addClass('on')
  $('body').addClass('hidden')
})

//사이드메뉴 닫기
$(document).click(function(e){
  
  if ($(e.target).hasClass('side-menu-bg')) {
    $('.side-menu').removeClass('on');
    $('.side-menu-bg').removeClass('on');
    $('body').removeClass('hidden');
  }
})


//사이드메뉴에 메뉴 열기
$('.side-nav').click(function(e){
  e.preventDefault();

  if ($(this).hasClass('on')) { //내가 클릭을 하려고 하는데 on이 있냐~ 또클릭
    $(this).removeClass('on').siblings('.sub').slideUp(); //on이 있으면 닫아라
  } else { //첫클릭
    $('.side-nav').removeClass('on').siblings('.sub').slideUp(); // 전체 다 닫고 내가 선택한거 열어주세요~ 닫고 열고 
    $(this).addClass('on').siblings('.sub').slideDown();
  }
})



//sc-visual slide
mainSlide = new Swiper('.main-slide',{
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 1500, // 시간 설정
    disableOnInteraction: false, // false-스와이프 후 자동 재생
  },
  loop : false,  
  pagination: {
    el:".pagination"
  }
})

//products-slide
mainSlide = new Swiper('.products-slide',{
  slidesPerView:'3',
  spaceBetween:20,  
  navigation:{
    nextEl:".sc-products .next",
    prevEl:".sc-products .prev"
},
pagination: {
  el: ".sc-products .pagination",
  type: "progressbar",
}
})

//recommend-slide
mainSlide = new Swiper('.recommend-slide',{
  slidesPerView:'4',
  spaceBetween:20,  
  navigation:{
    nextEl:".sc-recommend .next",
    prevEl:".sc-recommend .prev"
},
pagination: {
  el: ".sc-recommend .pagination",
  type: "progressbar",
}
})

//top
$('.top-bnt').click(function(){
  window.scrollTo({top:0,behavior:"smooth"})
})

//family-site
$('.group-family-site').click(function(e){
  e.preventDefault();

  $('.group-family-site .family-box').stop().slideToggle();
})


// sc-intro 효과
tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:".intro-wrapper",
    start:"0% 80%",
    end:"100% 50%",
    // markers:true,
    toggleActions:"play pause resume reset" //도달하면 재실행
  },
})

tl1
.addLabel('a')
.from('.group-text-box .left-tit',{ xPercent:-10,opacity:0 },'a')
.from('.group-text-box .right-tit',{ xPercent:10,opacity:0 },'a')
.to('.sc-intro .more-btn',{ yPercent:-170},'a')


//sc-products 효과
tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:".products-wrapper",
    start:"0% 80%",
    end:"100% 50%",
    // markers:true,
    toggleActions:"play pause resume reset" 
  },
})

tl2
.addLabel('a')
.from('.sc-products .group-title',{ xPercent:-15,opacity:0 },'a')
.from('.sc-products .group-slide',{ xPercent:15,opacity:0 },'a')
.from('.sc-products .more-btn',{ xPercent:-15},'a')



//sc-story 효과
tl3 =gsap.timeline({
  scrollTrigger:{
    trigger:".sc-story",
    start:"0% 80%",
    end:"100% 50%",
    // markers:true,
    toggleActions:"play pause resume reset" 
  },
})

tl3
.addLabel('a')
.from('.sc-story .headline',{ yPercent:50,opacity:0 },'a')
.from('.sc-story .story-list',{ yPercent:10,opacity:0 },'a')

//sc-recommend 효과
tl4 =gsap.timeline({
  scrollTrigger:{
    trigger:".sc-recommend",
    start:"0% 80%",
    end:"100% 50%",
    // markers:true,
    toggleActions:"play pause resume reset" 
  },
})

tl4
.addLabel('a')
.from('.sc-recommend .headline',{ yPercent:50,opacity:0 },'a')
.from('.sc-recommend .recommend-slide',{ yPercent:10,opacity:0 },'a')

//sc-recommend 효과
gsap.from('.sc-event .event-wrapper',{
  scrollTrigger:{
    trigger:".sc-event",
    start:"0% 80%",
    end:"100% 50%",
    // markers:true,
    toggleActions:"play pause resume reset" 
  },
  yPercent:20,
  opacity:0
})







})//지우지마세요



