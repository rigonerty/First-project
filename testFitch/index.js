const poems = document.querySelector("#poems")
const poemArea = document.querySelector("#poemArea")

updatePoems(poems.value)
poems.onchange = function () {
    let poemValue = poems.value;
    updatePoems(poemValue)
} 
function updatePoems(value){
    let request = new XMLHttpRequest();
    let url = value + ".txt"
    request.open('GET', url)
    request.responseText = "text"
    request.onload = function(){
        poemArea.textContent = request.response
    }
    request.send()
}