document.addEventListener("click", (event)=>{ console.log("You just clicked on == ", event.target) } )
// "listen to TheDom"
let showTheForm = false;

const API_DATABASE_URL = "http://127.0.0.1:3000/destinations"
    console.log("This is the Destination URL - In (index.js) -->", API_DATABASE_URL)

document.addEventListener("DOMContentLoaded", function(){ /* */ console.log("We, Are, Live")})


const destinationFormContainer = document.querySelector(".container");

//debug below
const buttonToShowUsTheForm = document.querySelector("#new-destination-btn");

buttonToShowUsTheForm.addEventListener("click", () => {
    showTheForm = !showTheForm;
    if (showTheForm) {
        destinationFormContainer.style.display = "block";
    } else {
        destinationFormContainer.style.display = "none";
    }
    });

// fetch(API_DATABASE_URL).then(response => response.json())
// .then(fetchedArray => {console.log(fetchedArray);
//     renderAllDestinations(fetchedArray)
// })

API.fetchAllOurDestinations()