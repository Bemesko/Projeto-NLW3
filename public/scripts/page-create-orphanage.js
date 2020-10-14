//create map
const map = L.map('mapid').setView([-26.9159725,-49.0773227, 16], 13);

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

let marker;

//create and add marker
map.on("click", (event) => {
    const latitude = event.latlng.lat
    const longitude = event.latlng.lng

    document.querySelector("[name=lat]").value = latitude
    document.querySelector("[name=lng]").value = longitude

    // remove icon
    // execução de função dentro de comparação lógica???
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([latitude, longitude], { icon}).addTo(map)
})

// adicionar o campo de fotos
function addPhotoField(){
    console.log("sagwert")
    //pegar container de fotos
    
}