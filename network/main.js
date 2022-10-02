const titleBodyButton = document.querySelectorAll(".titleBodyButton")
const titleBodyChild = document.querySelectorAll(".titleBodyChild")
const titleH2 = document.querySelector(".titleIhfo > h2")
const commentTextArea = document.querySelector(".TitleCommentsHead > textarea")
let commentSend = document.querySelectorAll(".Send")

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


commentSend[0].onclick = function () {
    commentContain(TitleCommentsContent, 0)
}




commentTextArea.setAttribute('style', 'height:' + (33) + 'px;overflow-y:hidden;');
commentTextArea.addEventListener("input", OnInput, false);
function OnInput() {
    this.style.height = (this.scrollHeight) + 'px';
}
function onLoad(){
    let commentsAnswer = document.querySelectorAll(".answerComm")
    for (const commentAnswer of commentsAnswer){
        commentAnswer.onclick = function(){
            if (!commentAnswer.parentNode.parentNode.childNodes[3].classList.contains("TextAnswer")){
                const div = document.createElement("div")
                const textarea = document.createElement("textarea")
                const button = document.createElement("button")
                textarea.setAttribute('style', 'height:' + (33) + 'px;overflow-y:hidden;');
                textarea.addEventListener("input", OnInput, false);
                button.innerHTML = "Send"
                button.classList.add("commentSend")
                commentSend = document.querySelectorAll(".Send")
                div.append(textarea)
                div.append(button)
                div.classList.add("TextAnswer")
                commentAnswer.parentNode.after(div)
                button.onclick = function () {
                    commentContain(commentAnswer.parentNode.parentNode, 1)
                }
                document.onclick = function (e) {
                    const withinDiv = e.composedPath().includes(div)
                    const withincommentAnswer = e.composedPath().includes(commentAnswer)
                    if (!withinDiv && !withincommentAnswer){
                        for(const textAns of document.querySelectorAll(".TextAnswer")){
                            textAns.remove()
                        }
                    }
                }
            }
            
        }
    }
}
function commentContain(where, i){
    const img = document.createElement("img")
    const div1 = document.createElement("div")
    const div2 = document.createElement("div")
    const div3 = document.createElement("div")
    const p = document.createElement("p")
    const span = document.createElement("span")
    const button1 = document.createElement("button")
    const button2 = document.createElement("button")
    const h3 = document.createElement("h3")
    const div4 = document.createElement("div")
    div1.classList.add("comment")
    span.innerHTML = `${new Date().getDate()}.${new Date().getMonth()}.${new Date().getFullYear()} / ${new Date().getHours()}:${new Date().getMinutes()}`
    button1.innerHTML = "answer"
    button1.classList.add("answerComm")
    button2.innerHTML = "complain"
    h3.innerHTML = "NAME"
    div3.classList.add("divButtons")
    div2.appendChild(img)
    div2.appendChild(h3)
    div2.appendChild(span)
    div3.appendChild(button1)
    div3.appendChild(button2)
    div1.appendChild(div2)
    div1.appendChild(p)
    div1.appendChild(div3)
    div1.appendChild(div4)
    div4.style.display = "block"
    div1.style.display = "block"
    if (!i == 0){
        p.innerHTML = where.childNodes[3].firstChild.value
        where.childNodes[3].remove()
        where.childNodes[3].prepend(div1)
    }else{
        p.innerHTML = commentTextArea.value
        commentTextArea.value = ""
        where.prepend(div1)
        div1.style.borderLeft = "1px solid transparent"
    }
    onLoad()
}

fetch("/My-projects/main.json").then(function (response) {
    return response.json()
}).then(function (json) {
    blobImgHead(json)
    blobImgBackHead(json)
})

function blobImgHead(products) {
    for (const product of products) {
        if (title.innerHTML == product.name) {
            let url = `/My-projects/img/manga/cover/${product.url}`
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
            let url = `/My-projects/img/manga/banner/${product.banner}`
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
