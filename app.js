const btnPrint = document.querySelector('button')
const prints = document.querySelector('#resultPrints')


btnPrint.addEventListener('click', () => {
    prints.innerHTML = ''
    for(let i=0; i<10; i++){
         let newLi = document.createElement('li')
        newLi.innerText = `${i+1}. I am awesome!`
        prints.appendChild(newLi)
    }
})
