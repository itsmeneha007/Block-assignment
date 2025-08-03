const colorInput = document.getElementById('color-input')
const textInput = document.getElementById('text-input')
const bgButton = document.getElementById('bg-button')
const textButton = document.getElementById('text-button')
const outputDiv = document.getElementById('output-div')

function isValidColor(color){
    const testElement = document.createElement('div')
    testElement.style.color = color
    return testElement.style.color !== ""
}

bgButton.addEventListener('click', ()=>{
    const color = colorInput.value.trim()
    if(isValidColor(color)){
        outputDiv.style.backgroundColor = color
    }else{
        alert('Invalid color name')
    }
})

textButton.addEventListener('click', ()=>{
    const newText = textInput.value.trim()

    if(newText === ""){
        alert('Please enter some text')
    }else{
        outputDiv.textContent = newText
    }
})