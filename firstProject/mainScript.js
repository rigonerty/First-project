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
const titleBodyButton = document.querySelectorAll(".titleBodyButton")
const titleBodyChild = document.querySelectorAll(".titleBodyChild")
const titleH2 = document.querySelector(".titleIhfo > h2")
const commentTextArea = document.querySelector(".TitleCommentsHead > textarea")
const commentSend = document.querySelector(".TitleCommentsHead > button")
const TitleCommentsContent = document.querySelector(".TitleCommentsContent")












commentTextArea.setAttribute('style', 'height:' + (commentTextArea.scrollHeight) + 'px;overflow-y:hidden;');
commentTextArea.addEventListener("input", OnInput, false);
function OnInput() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}
commentSend.onclick = function () {
    const img = document.createElement("img")
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const p = document.createElement("p")
    const span = document.createElement("span")
    const button1 = document.createElement("button")
    const button2 = document.createElement("button")
    const h3 = document.createElement("h3")
    div1.classList.add("comment")
    span.innerHTML = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} / ${new Date().getHours()}:${new Date().getMinutes()}`
    button1.innerHTML = "answer"
    button2.innerHTML = "complain"
    p.innerHTML = commentTextArea.value
    commentTextArea.value = ""
    h3.innerHTML = "NAME"
    div2.appendChild(img)
    div2.appendChild(h3)
    div2.appendChild(span)
    div3.appendChild(button1)
    div3.appendChild(button2)
    div1.appendChild(div2)
    div1.appendChild(p)
    div1.appendChild(div3)
    TitleCommentsContent.prepend(div1)
}










window.addEventListener("resize", function () {
    windowInnerWidth = window.innerWidth
    windowInnerHeight = window.innerHeight
    if (navStatus) {
        if (windowInnerWidth >= 820) {
            nav.style.left = "0%"
            nav.style.opacity = "1"
            content.style.marginLeft = 200 + (html.offsetWidth / 100) * 2 + 'px'
            leftNav.style.marginLeft = "160px"
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
            nav.style.left = "-200px"
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
    if (!withinSearch && !withinSearchInput && searchstatus) {
        searchBlock.style.display = "none"
        content.style.filter = "blur(0)";
        nav.style.filter = "blur(0)"
        header.style.filter = "blur(0)"
        searchstatus = false
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
theme.addEventListener("click", function () {
    if (statusTheme) {
        html.style.backgroundColor = rootStyle.getPropertyValue("--black")
        root.style.setProperty("--font-color", "white")
        root.style.setProperty("--background-color", "#121212")
        root.style.setProperty("--color-menu", "white")
        root.style.setProperty("--a-hover", "#333333")
        root.style.setProperty("--a-active", "#202020")
        root.style.setProperty("--color-header", "black")
        theme.src = "/My-projects/firstProject/img/icon/moon.png"
        logo.src = "/My-projects/firstProject/img/logo/logo2.gif"
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
        theme.src = "/My-projects/firstProject/img/icon/sun.png"
        logo.src = "/My-projects/firstProject/img/logo/logo1.gif"
    }

})




navClose.addEventListener("click", function () {

    nav.style.left = "-200px"
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
        content.style.marginLeft = 200 + (body.offsetWidth / 100) * 2 + "px";
        leftNav.style.marginLeft = "160px";
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

titleBodyChild[1].style.display = "none"; titleBodyButton[1].classList.remove("active")
titleBodyChild[2].style.display = "none"; titleBodyButton[2].classList.remove("active")
for(let i = 0; i < 3; i++){
    titleBodyButton[i].onclick = function () {
        for (let t = 0; t < 3; t++) { titleBodyChild[t].style.display = "none"; titleBodyButton[t].classList.remove("active") }
        titleBodyChild[i].style.display = "block" 
        titleBodyButton[i].classList.add("active")
    }
}
console.log(titleH2)
titleH2.innerHTML = maxWordsTable(titleH2, 38)
function maxWordsTable(text, n) {
    let textP = text.innerHTML
    if (textP.length > n) {
        textP = textP.substring(0, n) + "...";
    }
    return textP;
}

