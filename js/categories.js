
const dataAlt = [

    {
        name: 'Nina Kimoli 2023',
        img: 'https://www.sv-valens.ru/wp-content/uploads/2022/11/Hadley_1-400x650.jpg',
        price: '800$',
        category: 'Nina Kimoli 2023'
    },
    {
        name: 'Jozi 2023',
        img: 'https://www.sv-valens.ru/wp-content/uploads/2022/11/Halle_1-400x650.jpg',
        price: '950$',
        category: 'Jozi 2023'
    },
    {
        name: 'Kira Nova 2023',
        img: 'https://www.sv-valens.ru/wp-content/uploads/2022/11/Hadrinn_1-400x650.jpg',
        price: '950$',
        category: 'Kira Nova 2023'
    },
    {
        name: 'Nina Kimoli 2023',
        img: 'https://www.sv-valens.ru/wp-content/uploads/2022/11/Haven_2-800x1118.jpg',
        price: '1200$',
        category: 'Nina Kimoli 2023'
    },
    {
        name: 'Queen 2023',
        img: 'https://www.sv-valens.ru/wp-content/uploads/2020/06/Idony-19329_1-400x650.jpg',
        price: '900$',
        category: 'Queen 2023'
    },
    {
        name: 'Jozi 2023',
        img: 'https://www.sv-valens.ru/wp-content/uploads/2018/04/Jackie-17305-400x650.jpg',
        price: '1500$',
        category: 'Jozi 2023'
    },
    {
        name: '',
        img: 'https://www.sv-valens.ru/wp-content/uploads/2018/04/Jacquelyn-17311_6-800x1267.jpg',
        price: '1000$',
        category: 'Kira Nova 2023'
    },
    {
        name: 'Nina Kimoli 2023',
        img: 'https://www.sv-valens.ru/wp-content/uploads/2019/04/Nadia-18288-1_1-400x650.jpg',
        price: '2000$',
        category: 'Nina Kimoli 2023'
    },
    {
        name: 'Queen 2023',
        img: 'https://www.sv-valens.ru/wp-content/uploads/2019/04/Nancy-18299_1-400x650.jpg',
        price: '950$',
        category: 'Queen 2023'
    },
]



const output = document.querySelector('.output')

const categoriesRender = (data) => {

    output.innerHTML = ''

    console.log(data);
    data.forEach(el => {
        const image = document.createElement('img')
        const title = document.createElement('h2')
        const price = document.createElement('p')
        const category = document.createElement('p')
        const button = document.createElement('button')

        const wrap = document.createElement('div')

        image.src = el.img
        title.textContent = el.name
        category.textContent = el.category
        price.textContent = el.price
        button.textContent = 'Узнать цену'

        category.className = 'show'
        price.className = 'show'
        wrap.className = 'wrap activeShow'
        button.className = 'buttonShow'

        button.addEventListener('click', () => {
            wrap.classList.toggle('activeShow')

            button.textContent = wrap.classList.contains('activeShow')
                ? 'Узнать цену' : 'Закрыть'
        })

        wrap.append(image, title, button, category, price)
        output.append(wrap)
    })

}
categoriesRender(dataAlt)




const renderButtons = () => {
    const categoryItems = ['Все', 'Queen 2023', 'Nina Kimoli 2023', 'Jozi 2023','Nina Kimoli 2023']
    const buttonWrap = document.querySelector('.categories__choise')

    categoryItems.forEach(el => {
        console.log(el);
        const button = document.createElement('button')
        button.className = 'btns'
        button.textContent = el
        console.log(button);

        button.addEventListener('click', () => {

            if (el === 'Все') {
                categoriesRender(dataAlt)
            } else {
                const result = dataAlt.filter(item => {
                    return item.category === el
                })
                categoriesRender(result)
            }
        })

        buttonWrap.append(button)
    })

}
renderButtons()


const searchItems = () => {
    const input = document.querySelector('#search')
    const form = document.querySelector('#form')


    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const filteredItems = dataAlt.filter(el => {
            return el.name.toLowerCase().includes(input.value.toLowerCase())
        })

        if (filteredItems.length > 0) {
            categoriesRender(filteredItems)
        } else {
            output.textContent = 'Такой категории нет'
        }


    })

}
searchItems()

// console.log(btns);






