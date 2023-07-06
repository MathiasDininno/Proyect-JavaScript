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

let novedad = document.getElementById("novedad").innerHTML = "Novedad"

let url = '#';

let image = new Image();
image.src = url;
document.getElementById('imgContainer').appendChild(image);


// Obtén el elemento contenedor donde deseas agregar las tarjetas
let cardWrapper = document.getElementById("card-wrapper");

// Datos para las tarjetas
let cardData = [
    { title: "Tarjeta 1", content: "Contenido de la tarjeta 1", img: "https://http2.mlstatic.com/D_Q_NP_606277-MLA46234552677_062021-AC.webp" },
    { title: "Tarjeta 2", content: "Contenido de la tarjeta 2", img: "https://http2.mlstatic.com/D_Q_NP_606277-MLA46234552677_062021-AC.webp" },
    { title: "Tarjeta 3", content: "Contenido de la tarjeta 3", img: "https://http2.mlstatic.com/D_Q_NP_606277-MLA46234552677_062021-AC.webp" },
    { title: "Tarjeta 4", content: "Contenido de la tarjeta 4", img: "https://http2.mlstatic.com/D_Q_NP_606277-MLA46234552677_062021-AC.webp" },
    { title: "Tarjeta 5", content: "Contenido de la tarjeta 5", img: "https://http2.mlstatic.com/D_Q_NP_606277-MLA46234552677_062021-AC.webp" },
    { title: "Tarjeta 6", content: "Contenido de la tarjeta 6", img: "https://http2.mlstatic.com/D_Q_NP_606277-MLA46234552677_062021-AC.webp" },
    { title: "Tarjeta 7", content: "Contenido de la tarjeta 7", img: "https://http2.mlstatic.com/D_Q_NP_606277-MLA46234552677_062021-AC.webp" }
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

    // Agrega los elementos internos a la tarjeta
    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardContent);
    cardContainer.appendChild(imgContent);

    // Agrega la tarjeta al elemento contenedor
    cardWrapper.appendChild(cardContainer);
}



let productosMixtos = document.getElementById("productosMixtos")

let productos = [
    {img: "https://http2.mlstatic.com/D_Q_NP_606277-MLA46234552677_062021-AC.webp" },
    {img: "https://http2.mlstatic.com/D_Q_NP_606277-MLA46234552677_062021-AC.webp" },
    {img: "https://http2.mlstatic.com/D_Q_NP_606277-MLA46234552677_062021-AC.webp" }
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