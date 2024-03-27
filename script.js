function makecard(projectLink, imgsorce, number, projecttitle) {
    let col = document.createElement("div")
    col.className = "col-lg-4"
    document.getElementById("portfolio-container").append(col)

    let cardoverlay = document.createElement("div")
    cardoverlay.className = "card-overlayer"
    col.append(cardoverlay)

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
makecard("https://netflix.netlify.app","images/netflix.png","TOP # 1","Netflix Clone| Netflix Clone with sign in page ")
makecard("https://halal-spotify.freewebhostmost.com","images/spotify.png","TOP # 2","Halal Spotify| Spotify Clone with all features ")
makecard("https://planview.netlify.app","images/plane.png","TOP # 3","PLanView Estate| Responsive Housing Scheme Website ")
makecard("https://tastevibe.netlify.app","images/tastevibe.png","TOP # 4","TasteVibe| Responsive Resturant Fast Food And Drinks Website ")
makecard("https://globallaw.netlify.app","images/global law.png","TOP # 5","GLobal Lawyer| Responsive Lawyer Hiring Company Website ")
makecard("https://trippynow.netlify.app","images/trppy.png","TOP # 6","Trippy| Responsive Travling Journey Website ")


