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
    //pegar container de fotos #images
    const container = document.querySelector("#images")
    //pegar o container para duplicar .new-image
    const fieldContainer = document.querySelectorAll(".new-upload")
    //realizar a duplicação da última imagem adicionada
    const newFieldContainer = fieldContainer[fieldContainer.length - 1].cloneNode(true)
    // verificar se o campo está vazio
    const input = newFieldContainer.children[0]
    //se sim, não adicionar ao container
    if(input.value == ""){
        return
    }
    // limpar o texto que estava no campo
    input.value = ""
    // adicionar o clone ao cotainer de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll(".new-upload")

    if(fieldsContainer.length < 2){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""
        return 
    }

    //deletar o campo
    span.parentNode.remove()
}

// selecionar sim e não
function toggleSelect(event){
    //retirar a class .active
    document.querySelectorAll(".button-select button").forEach(button => 
        button.classList.remove("active")
    )
    //botar a classe .active
    const button = event.currentTarget
    button.classList.add("active")

    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open-on-weekends"]')

    input.value = button.dataset.value
}