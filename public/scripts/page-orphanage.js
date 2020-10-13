const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//create map
const map = L.map('mapid', options).setView([-26.9159725,-49.0773227, 16], 13);

//create and add tile layer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
}
)

//create and add marker
L.marker([-26.9159725,-49.0773227], {icon}).addTo(map)

//Image gallery

function selectImage(event){
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {button.classList.remove("active")})

    /*
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")
    }
    */

    // selecionar imagem clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")

    // atualizar o container de imagem
    imageContainer.src = image.src

    // adicionar de volta a classe .active para button
    buttons.classList.add("active")
}