//URL de API
const API_URL = 'https://api.thedogapi.com/v1/images/search?limit=1';

//Clave API
const API_KEY = 'live_zRY6pBUhbCnWPzWXH3qj7mq9DeeIULRXynwH8619UuuF0z2NyB8qKHjcjHQoPEJy';

//Consigue la información desde el API y la mueve al HTML
function displayDog() {
  //Se hace un fetch con la API key
  fetch(API_URL, { headers: { 'X-API-KEY': API_KEY } })
    .then(response => response.json())
    .then(data => {
      const dog = data[0];
      //Puse esto porque a veces regresaba un valor no definido
      if (!dog.breeds || dog.breeds.length === 0) {
        displayDog();
        return;
      }
      //Valores del API
      const breedName = dog.breeds[0].name;
      const breedLifeSpan = dog.breeds[0].life_span;
      const breedWeight = dog.breeds[0].weight.metric;
      const breedHeight = dog.breeds[0].height.metric;
      //Se ponen los valores en el HTML
      document.getElementById('dog-image').src = dog.url;
      document.getElementById('dog-name').textContent = breedName;
      document.getElementById('dog-info').textContent = `${breedLifeSpan} de vida, peso: ${breedWeight}kg, altura: ${breedHeight}cm`;
    })
    .catch(error => console.error(error));
}

//Llama displayDog cuando la página se carga
document.addEventListener('DOMContentLoaded', displayDog);

//Función para cargar display dog, para el boton
function reloadDog() {
  displayDog();
}

//Le agrega la funcion de reloadDog al boton
document.getElementById('reload-button').addEventListener('click', reloadDog);

//Función para cambiar el color con jQuery
$(document).ready(function() {
  $("#jquery-button").click(function() {
    $(".card-header-custom").css("background-color", "red");
  });
});
