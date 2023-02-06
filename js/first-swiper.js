const first = () =>{
    const swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        spaceBetween: 30,
    
        // effect: 'fade',
    
        // effect: "cube",
        // grabCursor: true,
        // cubeEffect: {
        //     shadow: true,
        //     slideShadows: true,
        //     shadowOffset: 20,
        //     shadowScale: 0.94,
        // },
    
        // effect: 'flip',
        // grapCursor: true,
    
        // effect: 'cards',
        // grapCursor: true,
    
    
        autoplay: {
            delay:2500,
            diabaleOnInteraction: true,
        },
    
        slidesPerView: 3,
    
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
    
    
          breakpoints: {
       
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1400: {
              slidesPerView: 4,
            }
        
          }
    
    
      });
    
    
}


first()


