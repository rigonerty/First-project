let nav = document.querySelector("nav")
let navClose = document.querySelector(".navClose")
let navShow = document.querySelector(".navShow")
let body = document.querySelector("body")
let root = document.querySelector(":root")
let html = document.querySelector("html")
let theme = document.querySelector(".theme")
let rootStyle = getComputedStyle(root)
let statusTheme = true
let leftNav = document.querySelector(".leftNav")
let windowInnerWidth = window.innerWidth
let windowInnerHeight = window.innerHeight
let navStatus = false
let content = document.querySelector(".content")
let listH = document.querySelectorAll(".listH")
let listP = document.querySelectorAll(".listP")


let rightBtnSlider = document.querySelector(".rightBtn")
let leftBtnSlider = document.querySelector(".leftBtn")
let slider1 = document.querySelector(".slider1s")
let slider1Chiled = document.getElementsByClassName("sliderChild")
let slider1current = 0;
let slider1MoveStatus = false
let slider1s = document.querySelector(".slider1")
let currentX = 0
let sliderHead = document.querySelectorAll(".sliderHead")
let sliderText = document.querySelectorAll(".sliderText")
let maxLenghtSlider = 300

let slider2 = document.querySelector(".slider2s")
let slider2s = document.querySelector(".slider2")
let currentXSlider2 = 0
let slider2Child = document.querySelectorAll(".slider2Child")
let slider2H = document.querySelectorAll(".slider2H")
let slider2P = document.querySelectorAll(".slider2P")



window.addEventListener("resize", function () {
    windowInnerWidth = window.innerWidth
    windowInnerHeight = window.innerHeight
    
    if(navStatus){
        if(windowInnerWidth >= 820){
            nav.style.left = "0%"
            nav.style.opacity = "1"
            body.style.marginLeft = 200 + (html.offsetWidth / 100) * 2 + 'px' 
            leftNav.style.marginLeft = "160px"
            navShow.style.visibility = "hidden"
        }else{
            body.style.margin = "2%"
            body.style.marginTop = "50px"
            navShow.style.visibility = "hidden"
            nav.style.opacity = "1"
        }
    }
    else{
        if (windowInnerWidth >= 600) {
            nav.style.left = "-200px"
        }
    }
    if (windowInnerWidth < 800){
        maxLenghtSlider = 50
    }
    else if (windowInnerWidth < 400){
        maxLenghtSlider = 50
    }
    
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
        theme.src = "/img/icon/moon.png"
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
        theme.src = "/img/icon/sun.png"
    }
    
})




navClose.addEventListener("click", function () {
    
        nav.style.left = "-200px"
        body.style.margin = "2%"
        body.style.marginTop = "50px"
        leftNav.style.marginLeft="20px"
        navShow.style.visibility = "visible"
        setTimeout(function () {
            nav.style.opacity = "0"
        },600)
    
    navStatus = false
    
})
navShow.addEventListener("click", function () {
    if (windowInnerWidth >= 820) {
        nav.style.left = "0%"
        nav.style.opacity = "1"
        body.style.marginLeft = 200 + (html.offsetWidth/100)*2 + "px" 
        leftNav.style.marginLeft = "160px"
        navShow.style.visibility = "hidden"
    }else{
        nav.style.left = "0%"
        body.style.margin = "2%"
        body.style.marginTop = 50 + "px"
        navShow.style.visibility = "hidden"
        nav.style.opacity = "1"
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
    document.addEventListener( "touchmove",function (e) {
        let clientX2 = e.changedTouches[0].pageX;
        currentX = clientX2 - clientX1
        slider1.style.transform = "translate(" + (-slider1current * slider1Width + currentX) + "px)"
    })
    document.addEventListener("touchend", function () {

        document.addEventListener("touchmove", function(){return null})
        slider1s.addEventListener("touchend", function () { return null })
        document.addEventListener("touchend", function () { return null })
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
    })
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


for (let i = 0; i < sliderText.length; i++) {sliderText[i].innerHTML = maxWordsTable(sliderText[i], 700)}
for (let i = 0; i < sliderHead.length; i++) { sliderHead[i].innerHTML = maxWordsTable(sliderHead[i], 50) }
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


slider2s.onmousedown = function (e) {
    let slider2Width = body.offsetWidth;
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

slider2s.addEventListener( "touchstart",function (e) {
    e.preventDefault()
    let slider2Width = body.offsetWidth;
    let currentSlider2 = 0
    let clientX = e.changedTouches[0].pageX;
    document.addEventListener( "touchmove",function (e) {
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

    })
    document.addEventListener( "touchend", function () {
        currentXSlider2 = currentXSlider2 + currentSlider2
        
    })
})