const nav = document.querySelector("nav")
const navClose = document.querySelector(".navClose")
const navShow = document.querySelector(".navShow")
const header = document.querySelector("header")
const body = document.querySelector("body")
const root = document.querySelector(":root")
const html = document.querySelector("html")
const theme = document.querySelector(".theme")
const rootStyle = getComputedStyle(root)
let statusTheme = true
const leftNav = document.querySelector(".leftNav")
let windowInnerWidth = window.innerWidth
let windowInnerHeight = window.innerHeight
let navStatus = false
const content = document.querySelector(".content")
const listH = document.querySelectorAll(".listH")
const listP = document.querySelectorAll(".listP")
const listChilds = document.querySelectorAll(".listChild")
const inputSearch = document.querySelector(".rightNav > input")
const searchBlock = document.querySelector(".search")
let searchstatus = false
const web = document.querySelector(".web")

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

if (windowInnerWidth < 400){
    maxLenghtSlider = 50
}
if (windowInnerWidth < 600) {
    sliderHeadL = 10
}
if (windowInnerWidth < 800){
    maxLenghtSlider = 75
}
if (windowInnerWidth > 1200){
    sliderTextL = 1200
}
if (windowInnerWidth > 1530) {
    sliderTextL = 1000
}
if (windowInnerWidth > 2500) {
    sliderTextL = 2000
}
window.addEventListener("resize", function () {
    windowInnerWidth = window.innerWidth
    windowInnerHeight = window.innerHeight
    if(navStatus){
        if(windowInnerWidth >= 820){
            nav.style.left = "0%"
            nav.style.opacity = "1"
            web.style.marginLeft = 200 + (html.offsetWidth / 100) * 2 + 'px' 
            leftNav.style.marginLeft = "160px"
            navShow.style.visibility = "hidden"
            content.style.filter = "blur(0)";
            header.style.filter = "blur(0)"
        }else{
            web.style.margin = "2%"
            web.style.marginTop = "50px"
            navShow.style.visibility = "hidden"
            nav.style.opacity = "1"
            content.style.filter = "blur(5px)";
            header.style.filter = "blur(5px)"
        }
    }
    else{
        if (windowInnerWidth >= 600) {
            nav.style.left = "-200px"
        }
    }
    if (windowInnerWidth < 800){
        maxLenghtSlider = 75
        sliderHeadL = 50
        
    } else if (windowInnerWidth < 600){
        sliderHeadL = 10
    }
    else if (windowInnerWidth < 400){
        maxLenghtSlider = 50
    }
    
})




for (let i = 0; i < sliderText.length; i++) { sliderText[i].innerHTML = maxWordsTable(sliderText[i], sliderTextL) }
for (let i = 0; i < sliderHead.length; i++) { sliderHead[i].innerHTML = maxWordsTable(sliderHead[i], sliderHeadL) }
for (let i = 0; i < listH.length; i++) { listH[i].innerHTML = maxWordsTable(listH[i], 20) }
for (let i = 0; i < listP.length; i++) { listP[i].innerHTML = maxWordsTable(listP[i], 270) }
for (let i = 0; i < slider2H.length; i++) { slider2H[i].innerHTML = maxWordsTable(slider2H[i], 25) }
for (let i = 0; i < slider2P.length; i++) { slider2P[i].innerHTML = maxWordsTable(slider2P[i], 200) }
function maxWordsTable(text, n) {
    let textP = text.innerHTML
    if (textP.length > n) {
        textP = textP.substring(0, n) + "...";
    }
    return textP;
}






document.addEventListener("click", function (e) {
    const withinSearch = e.composedPath().includes(searchBlock);
    const withinSearchInput = e.composedPath().includes(inputSearch)
    if (!withinSearch && !withinSearchInput && searchstatus){
        searchBlock.style.display = "none"
        content.style.filter = "blur(0)";
        nav.style.filter = "blur(0)"
        header.style.filter = "blur(0)"
        searchstatus = false
    }
})
document.addEventListener("keydown", function (e) {
    if(e.keyCode == 27){
        searchBlock.style.display = "none"
        content.style.filter = "blur(0)";
        nav.style.filter = "blur(0)"
        header.style.filter = "blur(0)"
    }
})
inputSearch.addEventListener( "click", function () {
    searchBlock.style.display = "block";
    content.style.filter = "blur(5px)";
    nav.style.filter = "blur(5px)"
    header.style.filter = "blur(5px)"
    searchstatus = true 
})
theme.addEventListener("click", function () {
    if(statusTheme){
        html.style.backgroundColor = rootStyle.getPropertyValue("--black")
        root.style.setProperty("--font-color", "white")
        root.style.setProperty("--background-color", "#121212")
        root.style.setProperty("--color-menu", "white")
        root.style.setProperty("--a-hover", "#333333")
        root.style.setProperty("--a-active", "#202020")
        root.style.setProperty("--color-header", "black")
        theme.src = "img/icon/moon.png"
        statusTheme = false
    }else{
        html.style.backgroundColor = rootStyle.getPropertyValue("--white")
        root.style.setProperty("--font-color", "black")
        root.style.setProperty("--color-menu", "black")
        root.style.setProperty("--a-hover", "rgb(226, 226, 226)")
        root.style.setProperty("--a-active", "rgb(206, 206, 206)")
        root.style.setProperty("--background-color", "rgb(245,245,245)")
        root.style.setProperty("--color-header", "white")
        statusTheme = true
        theme.src = "img/icon/sun.png"
    }
    
})




navClose.addEventListener("click", function () {
    
        nav.style.left = "-200px"
        content.style.margin = "2%"
        web.style.marginTop = "50px"
        leftNav.style.marginLeft="20px"
        navShow.style.visibility = "visible"
        setTimeout(function () {
            nav.style.opacity = "0"
        },600)
        content.style.filter = "blur(0)";
        header.style.filter = "blur(0)"
    navStatus = false
    
})
navShow.addEventListener("click", function () {
    if (windowInnerWidth >= 820) {
        nav.style.left = "0%";
        nav.style.opacity = "1";
        content.style.marginLeft = 200 + (body.offsetWidth/100)*2 + "px" ;
        leftNav.style.marginLeft = "160px";
        navShow.style.visibility = "hidden";
    }else{
        nav.style.left = "0%";
        content.style.margin = "2%";
        web.style.marginTop = 50 + "px";
        navShow.style.visibility = "hidden";
        nav.style.opacity = "1";
        content.style.filter = "blur(5px)";
        header.style.filter = "blur(5px)"
    }
    navStatus = true
})




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
        listChilds[i].innerHTML = `<img src="/img/manga/cover/${json.titles[i].url}" alt="">
                                    <div>
                                        <h2 class="listH">${json.titles[i].name}</h2>
                                        <p class="listP">${json.titles[i].description}</p>
                                    </div>`
        
    }
}