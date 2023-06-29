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


let titulo = document.getElementById('titulo').innerHTML = "Title"

document.body.onload = addElement;

function addElement() {
    // crea un nuevo div
    // y añade contenido
    let newDiv = document.createElement("div");
    newDiv.className += "divImg"
    let newContent = document.createTextNode("Img opcional");
    newDiv.appendChild(newContent); //añade texto al div creado.

    // añade el elemento creado y su contenido al DOM
    let currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}




// Obtén el elemento contenedor donde deseas agregar las tarjetas
var cardWrapper = document.getElementById("card-wrapper");

// Datos para las tarjetas
var cardData = [
  { title: "Tarjeta 1", content: "Contenido de la tarjeta 1" },
  { title: "Tarjeta 2", content: "Contenido de la tarjeta 2" },
  { title: "Tarjeta 3", content: "Contenido de la tarjeta 3" }
];

// Itera sobre los datos de las tarjetas
for (var i = 0; i < cardData.length; i++) {
  // Crea el elemento contenedor de la tarjeta
  var cardContainer = document.createElement("div");
  cardContainer.className = "card";

  // Crea los elementos internos de la tarjeta
  var cardHeader = document.createElement("div");
  cardHeader.className = "card-header";
  cardHeader.textContent = cardData[i].title;

  var cardContent = document.createElement("div");
  cardContent.className = "card-content";
  cardContent.textContent = cardData[i].content;

  // Agrega los elementos internos a la tarjeta
  cardContainer.appendChild(cardHeader);
  cardContainer.appendChild(cardContent);

  // Agrega la tarjeta al elemento contenedor
  cardWrapper.appendChild(cardContainer);
}

