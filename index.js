const modeEl = document.getElementById('mode')
const submitBtn = document.getElementById('submit-btn')
const colorShowEl = document.getElementById('color-show')


submitBtn.addEventListener('click', ()=>{
    let schemeArray = []
    let color = document.getElementById('color-picker').value.substr(1,6)
    console.log(color)
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&count=5&mode=${modeEl.value}`)
    .then(res=>res.json())
    .then(data=>{
        let placeHolderArray = data.colors
        for(let item of placeHolderArray){
            schemeArray.push(item.hex.value)
        }
        renderColors(schemeArray)
    })
})

function renderColors(scheme){
   let innerHtml = ''
    for(item of scheme){
        innerHtml += `
        <div id="color-main-div">
            <div id="colorEl" style="background-color:${item};"></div>
            <p>${item}</p>
        </div>
        `
    }
    colorShowEl.innerHTML = innerHtml
}





// console.log(data.colors[1].hex.value)