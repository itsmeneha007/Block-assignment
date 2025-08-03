const ul = document.querySelector('#item-list')
const button = document.querySelector('#add-button')

button.addEventListener('click', ()=>{
    const currentCount = ul.children.length

    const newList = document.createElement('li')
    newList.textContent = `Item ${currentCount + 1}`

    if((currentCount + 1)% 2 === 1){
        newList.style.fontWeight = 'bold'
        newList.style.color = 'blue'
    }else{
        newList.style.fontStyle = 'italic'
        newList.style.color = 'red'
    }
    ul.appendChild(newList)
    })   
