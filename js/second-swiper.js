const second = () =>{

  const swiper = new Swiper(".secondSwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      // spaceBetween: 30,
  
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
          delay:5000,
          diabaleOnInteraction: true,
      },
  
      // slidesPerView: 3,
  
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },

        
        breakpoints: {
       
          0: {
            slidesPerView: 1,
          },
        //   576: {
        //     slidesPerView: 2,
        //   },
        //   1024: {
        //     slidesPerView: 3,
        //   },
        //   1400: {
        //     slidesPerView: 4,
        //   }
      
        }
  

    });



      const data = [
        {
          name: '',
          img: 'https://www.sv-valens.ru/wp-content/uploads/2018/01/gabbiano_1602x464.jpg'
        },
        {
          name: '',
          img: 'https://www.sv-valens.ru/wp-content/uploads/2018/01/kuznecova_1602x464.jpg'
        },
       
        {
          name: '',
          img: 'https://www.sv-valens.ru/wp-content/uploads/2018/01/sellini_1602x464.jpg'
        },
        {
          name: '',
          img: 'https://www.sv-valens.ru/wp-content/uploads/2018/01/lanesta_1602x464.jpg'
        },
        
        
      ]
    
    
    
    
    
    
    const output = document.querySelectorAll('.swiper-wrapper')[1]
    
    
     data.forEach(el => {
        const slide =document.createElement('div')
        const text = document.createElement('p')
        const image = document.createElement('img')
    
    
        slide.className= 'swiper-slide'
        text.textContent = el.name
        image.src = el.img
    
        output.append(slide)
        slide.append(text,image)
    
        
    });
    
}

second()




 
   
    