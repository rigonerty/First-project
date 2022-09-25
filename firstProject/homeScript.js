

const rightBtnSlider = document.querySelector(".rightBtn")
const leftBtnSlider = document.querySelector(".leftBtn")
const slider1 = document.querySelector(".slider1s")
let slider1current = 0;
let slider1MoveStatus = false
const slider1s = document.querySelector(".slider1")
let currentX = 0
const sliderHead = document.querySelectorAll(".sliderHead")
const sliderText = document.querySelectorAll(".sliderText")
let maxLenghtSlider = 300
let sliderHeadL = 50
let sliderTextL = 700
const slider1Chiled = []
const slider2 = document.querySelector(".slider2s")
const slider2s = document.querySelector(".slider2")
let currentXSlider2 = 0;
const slider2Child = []
const slider2H = document.querySelectorAll(".slider2H")
const slider2P = document.querySelectorAll(".slider2P")
const listH = document.querySelectorAll(".listH")
const listP = document.querySelectorAll(".listP")
const listChilds = document.querySelectorAll(".listChild")
windowInnerWidth = window.innerWidth
windowInnerHeight = window.innerHeight



if (windowInnerWidth < 400) {
    maxLenghtSlider = 50
}
if (windowInnerWidth < 600) {
    sliderHeadL = 10
}
if (windowInnerWidth < 800) {
    maxLenghtSlider = 75
}
if (windowInnerWidth > 1325) {
    sliderTextL = 1200
}
if (windowInnerWidth > 1530) {
    sliderTextL = 1000
}
if (windowInnerWidth > 2500) {
    sliderTextL = 2000
}












rightBtnSlider.addEventListener("click",function () {
    if(slider1Chiled.length - 1 > slider1current){
        slider1current++
        slider1.style.transform = "translate(-" + slider1current * 100  + "%)"

    }else{
        slider1current = 0
        slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
    }
})
leftBtnSlider.addEventListener("click", function () {
    if ( slider1current > 0) {
        slider1current--
        slider1.style.transform = "translate(" + -slider1current * 100 + "%)"

    } else {
        slider1current = slider1Chiled.length - 1;
        slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
    }
})

slider1s.onmousedown = function (e) {
    const a = document.querySelectorAll(".sliderChild > a")
    for (let i = 0; i < a.length; i++) {
        a[i].onclick = function () { return true }
    }
    let slider1Width = slider1s.offsetWidth
    let clientX1 = e.pageX;
    slider1.style.transition = "none"
    currentX = 0
    document.onmousemove = function (e) {
        for (let i = 0; i < a.length; i++) {
            a[i].onclick = function (){ return false}
        }
        let clientX2 = e.pageX;
        currentX = clientX2 - clientX1
        
        slider1.style.transform = "translate(" + (-slider1current * slider1Width + currentX) + "px)"
    }
    document.onmouseup = function () {
        document.onmousemove = null;
        slider1s.onmouseup = null;
        document.onmouseup = null;
        if (currentX < maxLenghtSlider && currentX > -maxLenghtSlider){
            slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
        } else if (currentX < -maxLenghtSlider){
            if (slider1Chiled.length - 1 > slider1current) {
                slider1current++
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"

            } else {
                slider1current = 0
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
            }
        }else{
            if (slider1current > 0) {
                slider1current--
                slider1.style.transform = "translate(" + -slider1current * 100 + "%)"

            } else {
                slider1current = slider1Chiled.length - 1;
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
            }
        }
        slider1.style.transition = ".6s"
    }
     
}
slider1s.addEventListener("touchstart", function(e){
    e.preventDefault()
    let slider1Width = slider1s.offsetWidth
    let clientX1 = e.changedTouches[0].pageX;
    slider1.style.transition = "none"
    currentX = 0
    const a = document.querySelectorAll(".sliderChild > a")
    for (let i = 0; i < a.length; i++) {
        a[i].onclick = function () { return true }
    }
    document.ontouchmove = function (e) {
        for (let i = 0; i < a.length; i++) { a[i].onclick = function () { return false } }
        let clientX2 = e.changedTouches[0].pageX;
        currentX = clientX2 - clientX1
        slider1.style.transform = "translate(" + (-slider1current * slider1Width + currentX) + "px)"
    }
    document.ontouchend = function () {

        document.ontouchmove = null
        slider1s.ontouchend = null
        document.ontouchend = null
        if (currentX < maxLenghtSlider && currentX > -maxLenghtSlider) {
            slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
        } else if (currentX < -maxLenghtSlider) {
            if (slider1Chiled.length - 1 > slider1current) {
                slider1current++
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"

            } else {
                slider1current = 0
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
            }
        } else {
            if (slider1current > 0) {
                slider1current--
                slider1.style.transform = "translate(" + -slider1current * 100 + "%)"

            } else {
                slider1current = slider1Chiled.length - 1;
                slider1.style.transform = "translate(-" + slider1current * 100 + "%)"
            }
        }
        slider1.style.transition = ".6s"
    }
})
    

slider1.ondragstart = function () {
    return false;
};
slider1s.ondragstart = function () {
    return false;
};
// document.ondragstart = function () {
//     return false;
// }






slider2s.onmousedown = function (e) {
    let slider2Width = content.offsetWidth;
    let currentSlider2 = 0
    let clientX = e.pageX;
    const a = document.querySelectorAll(".slider2Child > a")
    for (let i = 0; i < a.length; i++) {
        a[i].onclick = function () { return true }
    }
    document.onmousemove = function (e) {
        for (let i = 0; i < a.length; i++) {
            a[i].onclick = function () { return false }
        }
        let clientX1 = e.pageX;
        currentSlider2 = clientX1 - clientX
        if (currentSlider2 + currentXSlider2 > 0) {
            currentSlider2 = 0
            currentXSlider2 = 0
        }
        if (-(420 * slider2Child.length - slider2Width) > currentXSlider2 + currentSlider2){
            slider2.style.transform = "translate(-" + (420 * slider2Child.length - slider2Width + 2) + "px)"
        }else{
            slider2.style.transform = "translate(" + (currentSlider2 + currentXSlider2) + "px)"
        }
        
    }
    document.onmouseup = function () {
        currentXSlider2 = currentXSlider2 + currentSlider2
        document.onmousemove = null;
        slider2s.onmouseup = null;
        document.onmouseup = null;
    }
}
slider2.ondragstart = function () {
    return false;
};
slider2s.ondragstart = function () {
    return false;
};
let currentSlider2 = 0
slider2s.addEventListener( "touchstart",function (e) {
    e.preventDefault()
    let slider2Width = content.offsetWidth;
    currentSlider2 = 0
    let clientX = e.changedTouches[0].pageX;
    const a = document.querySelectorAll(".slider2Child > a")
    for (let i = 0; i < a.length; i++) {
        a[i].onclick = function () { return true }
    }
    document.ontouchmove = function (e) {
        let clientX1 = e.changedTouches[0].pageX;
        currentSlider2 = clientX1 - clientX
        for (let i = 0; i < a.length; i++) { a[i].onclick = function () { return false } }
        if (currentSlider2 + currentXSlider2 > 0) {
            currentSlider2 = 0
            currentXSlider2 = 0
        }
        if (-(420 * slider2Child.length - slider2Width) > currentXSlider2 + currentSlider2) {
            slider2.style.transform = "translate(-" + (420 * slider2Child.length - slider2Width + 2) + "px)"
        } else {
            slider2.style.transform = "translate(" + (currentSlider2 + currentXSlider2) + "px)"
        }

    }
    document.ontouchend =  function () {
        document.ontouchmove = null
        slider1s.ontouchend = null
        document.ontouchend  = null
        currentXSlider2 = currentSlider2 + currentXSlider2
        
    }
})





// const TestJson = document.querySelector("#TestJson")

fetch("main.json").then(function (response) {
    return response.json()
}).then(function (json) {
    blobImgList(json)
    blobImgSlider1(json)
    blobImgSlider2(json)
})




let leftCountList = 0;
const rightList = document.querySelector(".topListRight")
const leftList = document.querySelector(".topListLeft")
function ShowList(blob,product){
    const urlObject = URL.createObjectURL(blob)
    const image = document.createElement("img")
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const divChild = document.createElement("div");
    const a = document.createElement("a");
    h2.classList.add("listH");
    p.classList.add("listP");
    divChild.classList.add("listChild");
    image.src = urlObject;
    image.alt = product.name
    h2.innerHTML = maxWordsTable1(product.name, 25)
    p.innerHTML = maxWordsTable1(product.description, 250)
    div.appendChild(h2)
    div.appendChild(p)
    a.appendChild(image)
    a.appendChild(div)
    a.href = `/network/manga/${product.name.replace(" ","")}.html`
    divChild.appendChild(a)
    if (leftCountList < 5){
        leftList.appendChild(divChild)
        leftCountList++
    }else{
        rightList.appendChild(divChild)
    }
}
function blobImgList(products) {
    for(const product of products){
        const url = `/img/manga/cover/${product.url}`
        fetch(url).then(function (response) {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`)
            } else {
                return response.blob()
            }
        }).then(function (blob) {
            ShowList(blob, product)
        })
    }
    
        
}
function blobImgSlider1(products) {
    for (const product of products) {
        const url = `/img/manga/banner/${product.banner}`
        fetch(url).then(function (response) {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`)
                
            } else {
                response.blob().then(function (blob) {
                ShowSlider1(blob, product)
                })
            }
        })
    }
}

function ShowSlider1(blob, product){
    const urlObject = URL.createObjectURL(blob)
    const image = document.createElement("img")
    const divImg = document.createElement("div")
    const divText = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const divChild = document.createElement("div");
    const a = document.createElement("a");
    
    image.src = urlObject
    image.alt = product.name
    h2.innerHTML = maxWordsTable1(product.name, sliderHeadL)
    p.innerHTML = maxWordsTable1(product.description, sliderTextL)
    a.href = `/My-projects/firstProject/network/manga/${product.name.replace(" ","")}.html`
    divImg.appendChild(image)
    h2.classList.add("sliderHead")
    p.classList.add("sliderText")
    divChild.classList.add("sliderChild")
    divImg.classList.add("sliderImg")
    divText.classList.add("sliderP")
    divText.appendChild(h2)
    divText.appendChild(p)
    a.appendChild(divImg)
    a.appendChild(divText)
    divChild.appendChild(a)
    slider1.appendChild(divChild)
    slider1Chiled.push(1)
}
function blobImgSlider2(products){
    for(const product of products){
        const url = `/My-projects/firstProject/img/manga/cover/${product.url}`
        fetch(url).then(function (response) {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`)
            } else {
                return response.blob()
            }
        }).then(function (blob) {
            ShowSlider2(blob, product)
        })
    }
}
function  ShowSlider2(blob, product) {
    const urlObject = URL.createObjectURL(blob)
    const image = document.createElement("img")
    const div = document.createElement("div")
    const h2 = document.createElement("h2")
    const p = document.createElement("p")
    const divChild = document.createElement("div");
    const a = document.createElement("a");
    divChild.classList.add("slider2Child")
    div.classList.add("slider2Text")
    h2.classList.add("slider2H")
    p.classList.add("slider2P")
    h2.innerHTML = maxWordsTable1(product.name, 25)
    p.innerHTML = maxWordsTable1(product.description, 200)
    a.href = `/My-projects/firstProject/network/manga/${product.name.replace(" ", "")}.html`
    image.src = urlObject
    div.appendChild(h2)
    div.appendChild(p)
    a.appendChild(image)
    a.appendChild(div)
    divChild.appendChild(a)
    slider2.appendChild(divChild)
    slider2Child.push(1)
}




function maxWordsTable(text, n) {
    let textP = text.innerHTML
    if (textP.length > n) {
        textP = textP.substring(0, n) + "...";
    }
    return textP;
}
function maxWordsTable1(text, n) {
    let textP = text
    if (textP.length > n) {
        textP = textP.substring(0, n) + "...";
    }
    return textP;
}


