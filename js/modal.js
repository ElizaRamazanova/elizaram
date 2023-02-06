// poluchit knopku
const modalButton = document.querySelector('.modalButton')
const modal = document.querySelector('.modal')
const backdropModal = document.querySelector('.modalBackdrop')
const krestik = document.querySelector('.modalCloseButton')
const apply = document.querySelector('.modalApplyButton')
const thankYou = document.querySelector('.thankYou')
const modalContent = document.querySelector('.modalContent')

const form = document.querySelector('form')
const chekInp = document.querySelector('.checkInp')
const checkInput = document.querySelector('.checkInput')



let time

modalButton.addEventListener('click', () => {
    backdropModal.classList.add('modalBackdropActive')
    modal.classList.add('modalActive')
    thankYou.innerHTML = ''
    modalContent.classList.remove('hideContent')
})


const removeModalClasses = () => {
    if (time) {
        clearTimeout(time)
    }
    backdropModal.classList.remove('modalBackdropActive')
    modal.classList.remove('modalActive')

}

backdropModal.addEventListener('click', removeModalClasses)

krestik.addEventListener('click', removeModalClasses)

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})



const bot = {
    TOKEN:'5926869884:AAFT226lWaZOFLr7LNpNJdGsDh7fslEcw0s',
    chatID:'-837613840&'
}



form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(chekInp.value && checkInput.value.trim()){
    const telegramMessage = `sms: ${chekInp.value} nomer:${checkInput.value}`
    const TELEGRAM_API = `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${telegramMessage}`
    fetch(TELEGRAM_API)
    .then(response => {
        if (response.ok) {
                modalContent.classList.add('hideContent')

            thankYou.innerHTML = ` 
            <h2>Спасибо!</h2>
            <p>Мы свяжемся с Вами</p>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828710.png" alt="" srcset="">
            
            `
        }
    }, error => {
        modalContent.classList.add('hideContent')
        thankYou.innerHTML =  `
        <h2>${error}</h2>
        <p>Повторите попытку позже</p>
        <img src="https://banner2.cleanpng.com/20171202/76f/red-cross-mark-png-file-5a2245bd7d68f5.1453718115121955175137.jpg" alt="" srcset="">


        `
      
    })
}else {
    alert('Not validated')
}
    time = setTimeout(removeModalClasses, 3000)
    console.log(time);
})






// let name = 'ulan'
// name = 'Scary'
// setTimeout

// setTimeout(() => alert('HELLO'), 5000)

// const hide = document.querySelector('.hide')

// const modalAlert = (first, second, third) => {
//     alert('Hello' + first + second + third)
// }

// const timeOut = setTimeout(modalAlert, 3000, 'world', 'is', 'great')

// hide.addEventListener('click', () => {
//     clearTimeout(timeOut)
// })


// setTimeout