function makecard(projectLink, imgsorce, number, projecttitle) {

    let cardoverlay = document.createElement("div")
    cardoverlay.className = "card-overlayer"
    if (screen.width >= 750) {
        cardoverlay.setAttribute("data-tilt-startX", "20")
        cardoverlay.setAttribute("data-tilt-startY", "-20")
        cardoverlay.setAttribute("data-tilt", null)
        cardoverlay.setAttribute("data-tilt-reset-to-start", "true")
    }

    document.getElementById("portfolio-container").append(cardoverlay)

    let card = document.createElement("div")
    card.className = "card"
    cardoverlay.append(card)

    let cardimg = document.createElement("div")
    cardimg.className = "card-img"
    card.append(cardimg)

    let cardbody = document.createElement("div")
    cardbody.className = "card-body"
    card.append(cardbody)

    let imglink = document.createElement("a")
    imglink.setAttribute("target", "_blank")
    imglink.setAttribute("href", projectLink)
    cardimg.append(imglink)

    let img = document.createElement("img")
    img.setAttribute("src", imgsorce)
    img.className = "card-img-top"
    imglink.append(img)

    let num = document.createElement("span")
    num.innerText = number;
    cardbody.append(num)

    let title = document.createElement("p")
    cardbody.append(title)


    let imglink1 = document.createElement("a")
    imglink1.setAttribute("href", projectLink)
    imglink1.setAttribute("target", "_blank")

    imglink1.innerText = projecttitle;
    title.append(imglink1)



}
makecard("https://30-days-of-projects.vercel.app", "images/30_days.png", "TOP # 1", "30 days of 30 Projects Challenge")
makecard("https://huza-resume-maker.vercel.app/Milestone-4-5/index.html", "images/resumebuilder.png", "TOP # 2", "Dynamic Resume Builder With Editing Feature ")
makecard("https://huzareadify.netlify.app", "images/readify.png", "TOP # 3", "Readify| Personal book Library")
makecard("https://huzaspotify.netlify.app", "images/spotify.png", "TOP # 4", "Halal Spotify| Spotify Clone with all features ")
makecard("https://monopolyatm.netlify.app", "images/monopoly.png", "TOP # 5", "Monopoly Bank| Manage Monopoly Board Game Bank Website  ")
makecard("https://huzatodolist.netlify.app", "images/todo.png", "TOP # 6", "Todo List App| Manage Daily Todos  ")
makecard("https://planview.netlify.app", "images/plane.png", "TOP # 7", "PLanView Estate| Responsive Housing Scheme Website ")
makecard("https://tastevibe.netlify.app", "images/tastevibe.png", "TOP # 8", "TasteVibe| Responsive Resturant Fast Food And Drinks Website ")
makecard("https://globallaw.netlify.app", "images/global law.png", "TOP # 9", "GLobal Lawyer| Responsive Lawyer Hiring Company Website ")
makecard("https://trippynow.netlify.app", "images/trppy.png", "TOP # 10", "Trippy| Responsive Travling Journey Website ")

let menu = document.querySelector(".menu")
let cross = document.querySelector(".cross")
let menubox = document.querySelector(".menu-box")
menu.addEventListener("click", (e) => {

    menubox.style.display = "flex"

})
cross.addEventListener("click", (e) => {
    menubox.style.display = "none"
})
