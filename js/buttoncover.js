// const img=document.createElement('img')
const wrap = document.querySelector('.wrapDiv')
// img.src = "./images/dress.jpg"
// wrap.className = 'wrap activeShow'




const buttonCover = document.querySelector('.button_cover')
buttonCover.addEventListener('click',()=>{
    // wrap.classList.toggle('activeShow')
    // buttonCover.textContent = wrap.classList.contains('activeShow')
    // ? 'Узнать цену' : 'Закрыть'

    // buttonCover.append(img)
    wrap.classList.toggle('wrapDiv')
})


