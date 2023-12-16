let sb=document.querySelector('#sbutton');
let log=document.querySelector('.log');
let clos=document.querySelector('#close');
let fc=document.querySelector('.fc');
let search_bar=document.querySelector('.search-bar');
let vidbtn=document.querySelectorAll('.vid-btn');

//Display Login Form
log.addEventListener('click', ()=>{
    fc.style.top='0';
});

clos.addEventListener('click',()=>{
    fc.style.top='-150%';
});


//Change video
vidbtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.vid-con .active').classList.remove('active');
        btn.classList.add('active');
        let src=btn.getAttribute('data-src');
        document.querySelector('video').src=src;
    });
    
});

//SwiperDemos
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
});