
const NameTitle = document.querySelector(".Name")
const title = document.querySelector("title")
NameTitle.innerHTML = `<a href="../../${title.innerHTML.replaceAll(" ", "")}.html">${title.innerHTML}</a>`
const chapterContent = document.querySelector(".ChapterContent")
const setting = document.querySelector(".setting") 
let arrayChapter = []
let chapterContentImg = document.querySelectorAll(".ChapterContent > img")
const settingBlock = document.querySelector(".settingBlock")
const settingWidth = document.querySelector("#settingWidth")
const settingWidthNumber = document.querySelector("#settingWidthNumber")
let Json;
const settingNameTitle = document.querySelector("#settingNameTitle")
const settingNameChapter = document.querySelector("#settingNameChapter")
const settingNumberPage = document.querySelector("#settingNumberPage")
const styleReading = document.querySelector(".styleReading")
const settingChapterCount = document.querySelector("#settingChapterCount")
const closeSetting = document.querySelector("#closeSetting")
const ButtonsChapterContent = document.querySelector("#ButtonsChapterContent")
const ButtonsChapterContentR = document.querySelector("#ButtonsChapterContentR")
const ButtonsChapterContentL = document.querySelector("#ButtonsChapterContentL")
const settingNumberPageCount = document.querySelector("#settingNumberPageCount")
let countStyleReading = 0
let countStyleImg = 0
const settingNumberPageDiv = document.querySelector('#settingNumberPageDiv')
const settingNumberPageDivDiv = document.querySelector('#settingNumberPageDiv > div')
ButtonsChapterContent.style.display = "none"
const settingChapterCountUl = document.querySelector("#settingChapterCountUl")
const settingChapterCountDiv = document.querySelector("#settingChapterCountDiv")
let settingNumberPageCountLi = document.querySelectorAll("#settingNumberPageCount > li")
fetch("/My-projects/main.json").then(function (response) {
    if(!response.ok){
        throw new Error(`HTTP error: ${response.status}`)
    }else{
        response.json().then(function (json) {
            chapterLoader(json)
            Json = json
            for (const product of Json) {
                if (product.name == title.innerHTML) {
                    Json = product;
                    settingNameTitle.innerHTML = Json.name
                    if (Json.listChapters[0].name == "THIS IS PAGE DON'T EXIST!!"){
                        for (let i = 1; i < Json.listChapters.length; i++ ){
                            const li = document.createElement("li");
                            const a = document.createElement("a");
                            a.innerHTML = "Ch." + Json.listChapters[i].number
                            a.href = `../Chapter${Json.listChapters[i].number}/Chapter${Json.listChapters[i].number}.html`
                            li.append(a)
                            settingChapterCountUl.append(li)
                    }}
                    else{
                        for (let i = 0; i < Json.listChapters.length; i++ ){
                            const li = document.createElement("li");
                            const a = document.createElement("a");
                            a.innerHTML = "Ch." + Json.listChapters[i].number
                            a.href = `../Chapter${Json.listChapters[i].number}/Chapter${Json.listChapters[i].number}.html`
                            li.append(a)
                            settingChapterCountUl.append(li)
                    }
                    }
                    settingNameChapter.innerHTML = Json.listChapters[Href(document.location.href).replaceAll(".html", "").replaceAll("Chapter", "")].name
                    settingChapterCount.innerHTML = "Ch." + Json.listChapters[Href(document.location.href).replaceAll(".html", "").replaceAll("Chapter", "")].number
                    
                }
            }
        })
    }
    
})

//3 = 4 - x; 

let CountScrollPage = 0
let arrayCount = []
window.addEventListener("scroll", function(){
    if (countStyleReading == 0){
        arrayCount = []
        for (const img of chapterContentImg) {
            arrayCount.push(img.getBoundingClientRect().top)
            if (img.getBoundingClientRect().top < 0){
                arrayCount.pop(img.getBoundingClientRect().top)
            }
        }
        settingNumberPage.innerHTML = `${chapterContentImg.length - arrayCount.length}/${chapterContentImg.length}`
    }
    
})


settingWidth.max = html.offsetWidth - (html.offsetWidth / 100) * 4
settingWidth.value = html.offsetWidth - (html.offsetWidth / 100) * 4
settingWidthNumber.innerHTML = settingWidth.value
settingWidth.addEventListener("input", function () {
    settingWidthNumber.innerHTML = settingWidth.value
    for (const img of chapterContentImg) {
        img.style.width = settingWidth.value + "px"
    }
})



function chapterLoader(products){
    for(const product of products){
        if(product.name == title.innerHTML){
            for (let i = 0; i < product.listChapters[Href(document.location.href).replaceAll(".html", "").replaceAll("Chapter", "")].count; i++){
                arrayChapter.push((fetch(`/My-projects/network/manga/${product.name.replaceAll(" ", "")}/Vol1/${Href(document.location.href).replaceAll(".html", "")}/${(i + 1).toString().padStart(3,"0")}.jpg`).then(function (response){
                        if(!response.ok){
                            
                            throw new Error(`HTTP error: ${response.status}`)
                        }
                        else{return response.blob()}
                }).then(function (blob) {
                    return blob
                })))
                
            }
            Promise.allSettled(arrayChapter).then(function(results){
                for(const result of results){
                    const urlObject = URL.createObjectURL(result.value)
                    const img = document.createElement("img");
                    img.src = urlObject;
                    chapterContent.append(img)
                    chapterContentImg = document.querySelectorAll(".ChapterContent > img")
                    img.style.width = html.offsetWidth - (html.offsetWidth / 100) * 4 + "px"
                    settingNumberPage.innerHTML = `0/${chapterContentImg.length}`
                }
                for (let i = 0; i < chapterContentImg.length; i++) {
                    const li = document.createElement("li")
                    li.innerHTML = i + 1
                    settingNumberPageCount.append(li)
                }
                settingNumberPageCountLi = document.querySelectorAll("#settingNumberPageCount > li")
                settingNumberPageCountLi.forEach((t,l) =>{
                    t.addEventListener("click", function () {
                        settingNumberPage.innerHTML = `${l + 1}/${chapterContentImg.length}`
                        countStyleImg = l
                        if (countStyleReading == 1) {
                            countStyleImg = l
                            chapterContentImg.forEach((x, y) => {
                                if (y == countStyleImg) {
                                    x.style.display = "block"
                                } else {
                                    x.style.display = "none"
                                }
                                window.scrollTo(0, 0)
                            })
                        }else{
                            window.scrollTo(0,0)
                            window.scrollTo(0, chapterContentImg[l].getBoundingClientRect().y + 1)
                        }
                    })
                })

            }).then(function(){
                
            })
        }
    }
}






function Href(href){
    let currentHref = href.split("/")
    return currentHref[currentHref.length - 1]
}


setting.style.background = "url(/My-projects/img/icon/Orion_setting.svg)"
setting.style.backgroundSize = "25px 25px"
setting.style.backgroundRepeat = "no-repeat"
setting.style.backgroundPosition = "center"



window.addEventListener("resize", function () {
    settingWidth.max = html.offsetWidth - (html.offsetWidth / 100) * 4
})

theme.addEventListener("click", function () {
    if (statusTheme) {
        setting.style.background = "url(/My-projects/img/icon/Orion_setting.svg)";
        setting.style.backgroundSize = "25px 25px"
        setting.style.backgroundRepeat = "no-repeat"
        setting.style.backgroundPosition = "center"
        styleReading.style.filter = "invert(0)"
        closeSetting.style.filter = "invert(0)"
        closeSetting.style.bordeColor = "var(--red)"
        closeSetting.onmousemove = function () {
            closeSetting.style.borderColor = "rgb(185,0,0)"
        }
        closeSetting.onmouseout = function () {
            closeSetting.style.borderColor = "transparent"
        }
        root.style.setProperty("--backOnBack", "rgb(221,221,221)")
        root.style.setProperty("--a-hoverB", "rgb(199, 199, 199)")
        root.style.setProperty("--a-activeB", "rgb(175, 175, 175)")
    } else {
        setting.style.background = "url(/My-projects/img/icon/Orion_settingWhite.svg)";
        setting.style.backgroundSize = "25px 25px"
        setting.style.backgroundRepeat = "no-repeat"
        setting.style.backgroundPosition = "center"
        styleReading.style.filter = "invert(100%)"
        closeSetting.style.filter = "invert(1)"
        closeSetting.onmousemove = function(){
            closeSetting.style.borderColor = "#46ffff"
        }
        closeSetting.onmouseout = function () {
            closeSetting.style.borderColor = "transparent"
        }
        root.style.setProperty("--backOnBack", "rgb(26,26,26)")
        root.style.setProperty("--a-hoverB", "rgb(22,22,22)")
        root.style.setProperty("--a-activeB", "rgb(12,12,12)")
    }

})



document.addEventListener("click", function (e) {
    const withinSearch = e.composedPath().includes(searchBlock);
    const withinSearchInput = e.composedPath().includes(inputSearch)
    const withinSearchImg = e.composedPath().includes(loopSearch)
    const withinSettingBlock = e.composedPath().includes(settingBlock)
    const withinSetting = e.composedPath().includes(setting)
    const withinSettingNumberPageDivDiv = e.composedPath().includes(settingNumberPageDivDiv)
    const wthinSettingChapterCount = e.composedPath().includes(settingChapterCount)
    if (!withinSearch && (!withinSearchInput && !withinSearchImg) && searchstatus) {
        settingBlock.style.position = "fixed"
        settingBlock.style.display = "block"
        settingBlock.style.top = "0px"
        settingBlock.style.height = "500px"
    }
    if(!withinSettingBlock && !withinSetting){
        settingBlock.style.right = "-250px"
    }
    if(!withinSettingNumberPageDivDiv){
        settingNumberPageDiv.style.height = "46px"
        settingNumberPageDivDivStatus = true
        settingNumberPageDivDiv.classList.remove("rotate")
    } if (!wthinSettingChapterCount){
        settingChapterCountDiv.style.height = "40px"
        settingChapterCountStatus = true
        settingChapterCount.classList.remove("rotate")
    }
})
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {
        settingBlock.style.position = "fixed"

    }
})

closeSetting.addEventListener("click", function(){
    settingBlock.style.right = "-250px"
})
setting.addEventListener("click", function(){
    settingBlock.style.right = "0"
})


styleReading.addEventListener("click", function(){
    countStyleReading++
    if (countStyleReading > 1) {
        countStyleReading = 0
    }
    styleReading.style.width = "100%"
    styleReading.style.height = "41px"
    if(countStyleReading == 0){
        styleReading.style.width = "100%"
        styleReading.style.height = "48px"
        chapterContentImg.forEach((x, y) => {    
            x.style.display = "block" 
            
        })
        window.scrollTo(0, 0)
        window.scrollTo(0, chapterContentImg[countStyleImg].getBoundingClientRect().y + 1)
        ButtonsChapterContent.style.display = "none"
    }
    if (countStyleReading == 1) {
        chapterContentImg.forEach((x,y)=>{
            if (y == countStyleImg) {
                x.style.display = "block"
            }else{
                x.style.display = "none"
            }
        })
        ButtonsChapterContent.style.display = "flex"
    }
    styleReading.style.background = `url(/My-projects/img/icon/styleReading${countStyleReading}.png)`
    styleReading.style.backgroundSize =  "contain";
    styleReading.style.backgroundRepeat =  "no-repeat";
    styleReading.style.backgroundPosition = "center";
})

ButtonsChapterContentL.addEventListener("click", function(){
    countStyleImg--
    if (countStyleImg < 0){
        countStyleImg = 0
    }
    chapterContentImg.forEach((x, y) => {
        if (y == countStyleImg) {
            x.style.display = "block"
        } else {
            x.style.display = "none"
        }
    })
    window.scrollTo(0,0)
    settingNumberPage.innerHTML = `${countStyleImg}/${chapterContentImg.length}`
    
})
ButtonsChapterContentR.addEventListener("click", function () {
    countStyleImg++
    if (countStyleImg > chapterContentImg.length) {
        countStyleImg = chapterContentImg.length
    }
    chapterContentImg.forEach((x, y) => {
        if (y == countStyleImg) {
            x.style.display = "block"
        } else {
            x.style.display = "none"
        }
    })
    window.scrollTo(0, 0)
    settingNumberPage.innerHTML = `${countStyleImg + 1}/${chapterContentImg.length}`
})

navClose.addEventListener("click", function () {
    settingWidth.max = html.offsetWidth - (html.offsetWidth / 100) * 4
    

})
navShow.addEventListener("click", function () {
    for( const img of chapterContentImg){
        console.log(html.offsetWidth - (html.offsetWidth / 100) * 4)
        if (img.offsetWidth + 200 > html.offsetWidth - (html.offsetWidth / 100) * 4){
            img.style.width = img.offsetWidth- 230 + "px" 
            settingWidth.max = html.offsetWidth - (html.offsetWidth / 100) * 4 - 230
        }
        else{
            img.style.width = img.offsetWidth + "px"
        }
    }
    
})
let settingNumberPageDivDivStatus = true
settingNumberPageDivDiv.addEventListener("click", function(){
    if(settingNumberPageDivDivStatus){
        settingNumberPageDiv.style.height = `${4 * 28 + 8 + 45}px`
        settingNumberPageDivDivStatus = false
        settingNumberPageDivDiv.classList.add("rotate")
        
    }else{
        settingNumberPageDiv.style.height = "46px"
        settingNumberPageDivDivStatus = true
        settingNumberPageDivDiv.classList.remove("rotate")
    }
})
let settingChapterCountStatus = true
settingChapterCount.addEventListener("click", function () {
    if (settingChapterCountStatus) {
        settingChapterCountDiv.style.height = `${4*32 + 41}px`
        settingChapterCountStatus = false
        settingChapterCount.classList.add("rotate")
    } else {
        settingChapterCountDiv.style.height = "40px"
        settingChapterCountStatus = true
        settingChapterCount.classList.remove("rotate")
    }
})
