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
const inputSearch = document.querySelector(".rightNav > input")
const searchBlock = document.querySelector(".search")
let searchstatus = false
const web = document.querySelector(".web")
const logo = document.querySelector("#logo")
const loopSearch = document.querySelector(".searchNav")










window.addEventListener("resize", function () {
    windowInnerWidth = window.innerWidth
    windowInnerHeight = window.innerHeight
    if (navStatus) {
        if (windowInnerWidth >= 820) {
            nav.style.left = "0%"
            nav.style.opacity = "1"
            content.style.marginLeft = 225 + (html.offsetWidth / 100) * 2 + 'px'
            leftNav.style.marginLeft = "185px"
            navShow.style.visibility = "hidden"
            content.style.filter = "blur(0)";
            header.style.filter = "blur(0)"
        } else {
            content.style.margin = "2%"
            content.style.marginTop = "50px"
            navShow.style.visibility = "hidden"
            nav.style.opacity = "1"
            content.style.filter = "blur(5px)";
            header.style.filter = "blur(5px)"
        }
    }
    else {
        if (windowInnerWidth >= 600) {
            nav.style.left = "-225px"
        }
    }
    if (windowInnerWidth < 800) {
        maxLenghtSlider = 75
        sliderHeadL = 50

    } else if (windowInnerWidth < 600) {
        sliderHeadL = 10
    }
    else if (windowInnerWidth < 400) {
        maxLenghtSlider = 50
    }

})

document.addEventListener("click", function (e) {
    const withinSearch = e.composedPath().includes(searchBlock);
    const withinSearchInput = e.composedPath().includes(inputSearch)
    const withinSearchImg = e.composedPath().includes(loopSearch)
    const withinNav = e.composedPath().includes(nav)
    const withinNavShow = e.composedPath().includes(navShow)
    if (!withinSearch && (!withinSearchInput && !withinSearchImg) && searchstatus) {
        searchBlock.style.display = "none"
        content.style.filter = "blur(0)";
        nav.style.filter = "blur(0)"
        header.style.filter = "blur(0)"
        searchstatus = false
    }
    if (!withinNav && !withinNavShow){
        nav.style.left = "-225px"
        content.style.margin = "2%"
        web.style.marginTop = "50px"
        leftNav.style.marginLeft = "20px"
        navShow.style.visibility = "visible"
        setTimeout(function () {
            nav.style.opacity = "0"
        }, 600)
        content.style.filter = "blur(0)";
        header.style.filter = "blur(0)"
        navStatus = false
    }
})
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {
        searchBlock.style.display = "none"
        content.style.filter = "blur(0)";
        nav.style.filter = "blur(0)"
        header.style.filter = "blur(0)"
    }
})
inputSearch.addEventListener("click", function () {
    searchBlock.style.display = "block";
    content.style.filter = "blur(5px)";
    nav.style.filter = "blur(5px)"
    header.style.filter = "blur(5px)"
    searchstatus = true
})
loopSearch.addEventListener("click", function () {
    searchBlock.style.display = "block";
    content.style.filter = "blur(5px)";
    nav.style.filter = "blur(5px)"
    header.style.filter = "blur(5px)"
    searchstatus = true
    console.log(23)
})
theme.addEventListener("click", function () {
    if (statusTheme) {
        html.style.backgroundColor = rootStyle.getPropertyValue("--black")
        root.style.setProperty("--font-color", "white")
        root.style.setProperty("--background-color", "#121212")
        root.style.setProperty("--color-menu", "white")
        root.style.setProperty("--a-hover", "#333333")
        root.style.setProperty("--a-active", "#202020")
        root.style.setProperty("--color-header", "black")
        theme.src = "/My-projects/img/icon/moon.png"
        logo.src = "/My-projects/img/logo/logo2.gif"
        statusTheme = false
    } else {
        html.style.backgroundColor = rootStyle.getPropertyValue("--white")
        root.style.setProperty("--font-color", "black")
        root.style.setProperty("--color-menu", "black")
        root.style.setProperty("--a-hover", "rgb(226, 226, 226)")
        root.style.setProperty("--a-active", "rgb(206, 206, 206)")
        root.style.setProperty("--background-color", "rgb(245,245,245)")
        root.style.setProperty("--color-header", "white")
        statusTheme = true
        theme.src = "/My-projects/img/icon/sun.png"
        logo.src = "/My-projects/img/logo/logo1.gif"
    }

})




navClose.addEventListener("click", function () {

    nav.style.left = "-225px"
    content.style.margin = "2%"
    web.style.marginTop = "50px"
    leftNav.style.marginLeft = "20px"
    navShow.style.visibility = "visible"
    setTimeout(function () {
        nav.style.opacity = "0"
    }, 600)
    content.style.filter = "blur(0)";
    header.style.filter = "blur(0)"
    navStatus = false

})
navShow.addEventListener("click", function () {
    if (windowInnerWidth >= 820) {
        nav.style.left = "0%";
        nav.style.opacity = "1";
        content.style.marginLeft = 225 + (body.offsetWidth / 100) * 2 + "px";
        leftNav.style.marginLeft = "185px";
        navShow.style.visibility = "hidden";
    } else {
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




