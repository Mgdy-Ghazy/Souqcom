// Initialize side-bar

var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    DynamicBullests: true,
    clickable: true
  },
  autoplay:{
    delay:2500,
  }
});
  
// Initialize sale_slide

var swiper = new Swiper(".sale_sec", {
  pagination: {
    el: ".swiper-pagination",
    DynamicBullests: true,
    clickable: true
  },
  slidesPerView: 5,
  spaceBetween: 15,
  autoplay:{
    delay:2500,
  },
  navigation:{
    nextEl:".swiper-button-next", 
    prevEl:".swiper-button-prev"  
  },
  loop: true,
});