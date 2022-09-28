const titleBodyButton = document.querySelectorAll(".titleBodyButton")
const titleBodyChild = document.querySelectorAll(".titleBodyChild")
const titleH2 = document.querySelector(".titleIhfo > h2")
const commentTextArea = document.querySelector(".TitleCommentsHead > textarea")
const commentSend = document.querySelector(".TitleCommentsHead > button")
const TitleCommentsContent = document.querySelector(".TitleCommentsContent")
const titleHeadImg = document.querySelector(".headTitle > img")
const titleInfo = document.querySelector(".titleIhfo")
const titleInfoH2 = document.querySelector(".titleIhfo > h2")
const title = document.querySelector("title")
const backImage = document.querySelector(".backImage")
const descriptionTitle = document.querySelector(".descriptionTitle > p")
const scoreT = document.querySelector("#scoreT")
const chaptersT = document.querySelector("#chaptersT")
const browseT = document.querySelector("#browseT")
const statusT = document.querySelector("#statusT")









commentTextArea.setAttribute('style', 'height:' + (33) + 'px;overflow-y:hidden;');
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
fetch("/My-projects/firstProject/main.json").then(function (response) {
    return response.json()
}).then(function (json) {
    blobImgHead(json)
    blobImgBackHead(json)
})

function blobImgHead(products) {
    for (const product of products) {
        if (title.innerHTML == product.name) {
            let url = `/My-projects/firstProject/img/manga/cover/${product.url}`
            fetch(url).then(function (response) {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                } else {
                    response.blob().then(function (blob) {
                        showBlobImg(blob, product)
                    })
                }

            })
        }
    }
}
function showBlobImg(blob, product) {
    const urlObject = URL.createObjectURL(blob)
    titleHeadImg.src = urlObject
}
function blobImgBackHead(products) {
    for (const product of products) {
        if (title.innerHTML == product.name) {
            let url = `/My-projects/firstProject/img/manga/banner/${product.banner}`
            fetch(url).then(function (response) {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`)
                } else {
                    response.blob().then(function (blob) {
                        showBlobImgBack(blob, product)
                    })
                }

            })
        }
    }
}
function showBlobImgBack(blob, product) {
    const urlObject = URL.createObjectURL(blob)
    backImage.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${urlObject})`
    backImage.style.backgroundSize = "cover";
    backImage.style.backgroundPosition = "0% 25%"
    descriptionTitle.innerHTML = product.description
    scoreT.innerHTML = product.score;
    browseT.innerHTML = product.browse;
    chaptersT.innerHTML = product.chapters;
    statusT.innerHTML = product.status
    titleInfoH2.innerHTML = product.name
    titleInfoH2.title = product.name
}
titleBodyChild[1].style.display = "none"; titleBodyButton[1].classList.remove("active")
titleBodyChild[2].style.display = "none"; titleBodyButton[2].classList.remove("active")
for (let i = 0; i < 3; i++) {
    titleBodyButton[i].onclick = function () {
        for (let t = 0; t < 3; t++) { titleBodyChild[t].style.display = "none"; titleBodyButton[t].classList.remove("active") }
        titleBodyChild[i].style.display = "block"
        titleBodyButton[i].classList.add("active")
    }
}
titleH2.innerHTML = maxWordsTable(titleH2, 38)
function maxWordsTable(text, n) {
    let textP = text.innerHTML
    if (textP.length > n) {
        textP = textP.substring(0, n) + "...";
    }
    return textP;
}
