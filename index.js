/*function carnet(edad) {
    if (edad >= 18) {
        console.log('Puede conducir')
    } else {
        console.log('No puedes conducir')
    }
}

carnet(60)*/

/*function nota(numers) {
    do {
        if (numers < 3) {
            console.log('Muy deficiente')
            break
        }else if(numers < 5){
            console.log('Insulficiente')
            break
        }else if(numers < 6){
            console.log('Suficiente')
            break
        }else if(numers < 7){
            console.log('Bien')
            break
        }else if(numers < 9){
            console.log('Notable')
            break
        }else if(numers <= 10){
            console.log('Sobresaliente')
            break
        }
        else{
            console.log('Ingresar nota valida')
            break
        }
        
    } while (numers != undefined);
}

nota(0)*/

//Login

function login() {
    
    let usuario = document.getElementById('usuario').value
    let contraseña = document.getElementById('contraseña').value

    if (usuario == "Juan" && contraseña=='1234') {
        window.location="index.html"
    } else {
        alert("Datos incorrectos")
    }
}


let novedad = document.getElementById("novedad").innerHTML = "Novedades"

let url = 'https://www.timberline.com.ar/themes/leo_bicmart/assets/img/modules/appagebuilder/images/Instagram-empeza-a-seguirnos!.png';

let image = new Image();
image.src = url;
document.getElementById('imgContainer').appendChild(image);


// Obtén el elemento contenedor donde deseas agregar las tarjetas
let cardWrapper = document.getElementById("card-wrapper");

// Datos para las tarjetas
let cardData = [
    { title: "Tarjeta 1", content: "Contenido de la tarjeta 1", img: "https://www.payper.com/sites/default/files/PAYPER%20Catalogue%20Comida_para_Mascotas%20ES%202007.jpg", valor: "$1700" },
    { title: "Tarjeta 2", content: "Contenido de la tarjeta 2", img: "https://www.payper.com/sites/default/files/PAYPER%20Catalogue%20Comida_para_Mascotas%20ES%202007.jpg", valor: "$1700" },
    { title: "Tarjeta 3", content: "Contenido de la tarjeta 3", img: "https://www.payper.com/sites/default/files/PAYPER%20Catalogue%20Comida_para_Mascotas%20ES%202007.jpg", valor: "$1700" },
    { title: "Tarjeta 4", content: "Contenido de la tarjeta 4", img: "https://www.payper.com/sites/default/files/PAYPER%20Catalogue%20Comida_para_Mascotas%20ES%202007.jpg", valor: "$1700" },
    { title: "Tarjeta 5", content: "Contenido de la tarjeta 5", img: "https://www.payper.com/sites/default/files/PAYPER%20Catalogue%20Comida_para_Mascotas%20ES%202007.jpg", valor: "$1700" },
    { title: "Tarjeta 6", content: "Contenido de la tarjeta 6", img: "https://www.payper.com/sites/default/files/PAYPER%20Catalogue%20Comida_para_Mascotas%20ES%202007.jpg", valor: "$1700" },
    { title: "Tarjeta 7", content: "Contenido de la tarjeta 7", img: "https://www.payper.com/sites/default/files/PAYPER%20Catalogue%20Comida_para_Mascotas%20ES%202007.jpg", valor: "$1700" }
];

// Itera sobre los datos de las tarjetas
for (let i = 0; i < cardData.length; i++) {
    // Crea el elemento contenedor de la tarjeta
    let cardContainer = document.createElement("div");
    cardContainer.className = "card";

    // Crea los elementos internos de la tarjeta
    let cardHeader = document.createElement("div");
    cardHeader.className = "card-header";
    cardHeader.textContent = cardData[i].title;

    let cardContent = document.createElement("div");
    cardContent.className = "card-content";
    cardContent.textContent = cardData[i].content;

    let imgContent = document.createElement("img");
    imgContent.className = "img-content";
    imgContent.src = cardData[i].img;

    let cardPrecio = document.createElement("div");
    cardPrecio.className = "card-footer";
    cardPrecio.textContent = cardData[i].valor;

    // Agrega los elementos internos a la tarjeta
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardContent);
    cardContainer.appendChild(imgContent);
    cardContainer.appendChild(cardPrecio);

    // Agrega la tarjeta al elemento contenedor
    cardWrapper.appendChild(cardContainer);
}



let productosMixtos = document.getElementById("productosMixtos")

let productos = [
    {img: "https://www.payper.com/sites/default/files/PAYPER%20Catalogue%20Comida_para_Mascotas%20ES%202007.jpg" },
    {img: "https://www.payper.com/sites/default/files/PAYPER%20Catalogue%20Comida_para_Mascotas%20ES%202007.jpg" },
    {img: "https://www.payper.com/sites/default/files/PAYPER%20Catalogue%20Comida_para_Mascotas%20ES%202007.jpg" }
];

for (let i = 0; i < productos.length; i++) {

    let product = document.createElement("div");
    product.className = "productos";

    let imgContent = document.createElement("img");
    imgContent.className = "img-content";
    imgContent.src = productos[i].img;
    

    product.appendChild(imgContent)

    productosMixtos.appendChild(product);
}