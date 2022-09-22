
const rightBtnSlider = document.querySelector(".rightBtn")
const leftBtnSlider = document.querySelector(".leftBtn")
const slider1 = document.querySelector(".slider1s")
const slider1Chiled = document.getElementsByClassName("sliderChild")
let slider1current = 0;
let slider1MoveStatus = false
const slider1s = document.querySelector(".slider1")
let currentX = 0
const sliderHead = document.querySelectorAll(".sliderHead")
const sliderText = document.querySelectorAll(".sliderText")
let maxLenghtSlider = 300
let sliderHeadL = 50
let sliderTextL = 700
const slider2 = document.querySelector(".slider2s")
const slider2s = document.querySelector(".slider2")
let currentXSlider2 = 0;
const slider2Child = document.querySelectorAll(".slider2Child")
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
if (windowInnerWidth > 1200) {
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
    let slider1Width = slider1s.offsetWidth
    let clientX1 = e.pageX;
    slider1.style.transition = "none"
    document.onmousemove = function (e) {
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
    document.ontouchmove = function (e) {
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
    document.onmousemove = function (e) {
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
let currentSlider2 = 0
slider2s.addEventListener( "touchstart",function (e) {
    e.preventDefault()
    let slider2Width = content.offsetWidth;
    currentSlider2 = 0
    let clientX = e.changedTouches[0].pageX;
    document.ontouchmove = function (e) {
        let clientX1 = e.changedTouches[0].pageX;
        currentSlider2 = clientX1 - clientX
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





const TestJson = document.querySelector("#TestJson")

fetch("main.json").then(function (response) {
    return response.json()
}).then(function (json) {
    initialize(json)
})




function initialize(json){
    console.log(454)
    for (let i = 0; i < listChilds.length; i++) {
        listChilds[i].innerHTML = `<a href = "./network/manga/${(json.titles[i].name).replace(" ", "")}.html"><img src="/img/manga/cover/${json.titles[i].url}" alt="">
                                    <div>
                                        <h2 class="listH">${maxWordsTable1(json.titles[i].name, 20)}</h2>
                                        <p class="listP">${maxWordsTable1(json.titles[i].description, 270)}</p>
                                    </div></a>`
        
    }
}



for (let i = 0; i < sliderText.length; i++) { sliderText[i].innerHTML = maxWordsTable(sliderText[i], sliderTextL) }
for (let i = 0; i < sliderHead.length; i++) { sliderHead[i].innerHTML = maxWordsTable(sliderHead[i], sliderHeadL) }
for (let i = 0; i < slider2H.length; i++) { slider2H[i].innerHTML = maxWordsTable(slider2H[i], 25) }
for (let i = 0; i < slider2P.length; i++) { slider2P[i].innerHTML = maxWordsTable(slider2P[i], 200) }
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
