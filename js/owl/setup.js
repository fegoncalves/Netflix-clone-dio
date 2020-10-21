$('.owl-carousel').owlCarousel({
  loop:true,  /* as imagens se repetem quando chega ao fim lateralmente */
  margin:10, /* margin entre as imagens */
  nav:true,  /* setinhas */
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})