const accordionn = () =>{
    const accordionn = document.querySelectorAll('.accordion__wrapp')


        accordionn.forEach(el=>{
            el.addEventListener('click',()=>{
                el.classList.toggle('accordion__active')
             })
        })
        }
accordionn()