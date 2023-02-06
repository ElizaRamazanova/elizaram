const data = [
    {
        title: 'Виды свадебного платья',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`,
        img: 'https://svadba-spank.ru/i/fasony-svadebnyh-platev.jpg'
    },
    {
        title: 'Виды свадебного платья',
        text: `Marvel counts among its characters such well-known superheroes as Spider-Man, Iron Man, Captain America, Thor, Doctor Strange, Hulk, Wolverine, and Captain Marvel, as well as popular superhero teams such as the Avengers, the X-Men, the Fantastic Four, and the Guardians of the Galaxy. Its stable of well-known supervillains includes the likes of Doctor Doom, Magneto, Ultron, Thanos, Green Goblin, Galactus, Loki, and Kingpin. Most of Marvel's fictional characters operate in a single reality known as the Marvel Universe, with most locations mirroring real-life places; many major characters are based in New York City.[4] Additionally, Marvel has published several licensed properties from other companies.
         This includes Star Wars comics twice from 1977 to 1986 and again since 2015.`,
         img: 'https://svadba-spank.ru/i/fasony-svadebnyh-platev.jpg'
         ,
    },
    {
        title: 'Виды свадебного платья',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`,
        img: 'https://svadba-spank.ru/i/fasony-svadebnyh-platev.jpg'
    },
    {
        title: 'Виды свадебного платья',
        text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`,
        img: 'https://svadba-spank.ru/i/fasony-svadebnyh-platev.jpg'
    },

]

const outputA = document.querySelector('.accordion')

data.forEach(el=> {
     const wrap= document.createElement('div')
     const name = document.createElement('div')
     const text = document.createElement('p')
     const image =  document.createElement('img')
     const content = document.createElement('div')
     const textContent= document.createElement('p')
     const imageA = document.createElement('img')
    


     wrap.className='accordion__wrap'
     name.className='accordion__name'
     content.className='accordion__content'
     image.className='plus'
     imageA.className = 'img'

     text.textContent = el.title
     textContent.textContent = el.text
     image.src ="./images/greater-than-sign-icon-9.png" 
     imageA.src = el.img






    outputA.append(wrap)
    wrap.append(name,content)
    name.append(text,image)
    content.append(textContent,imageA)
  
    
})



const accordionWrap = document.querySelectorAll('.accordion__wrap')

for (let i = 0; i < accordionWrap.length; i++) {
    accordionWrap[i].addEventListener('click', () => {
        accordionWrap.forEach((el, index) => {
            if (i===index){
            el.classList.toggle('accordion__active')
        }else {
            el.classList.remove('accordion__active')
        }

        })
    })
}









