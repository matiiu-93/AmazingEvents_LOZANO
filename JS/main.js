//Cards
import data from './amazing.js';

let events = data.events

function createCards (events) {
const element = document.getElementById("card-sec");
let eventCard = ''
events.forEach ((event) => {
    eventCard += 
    `<div class="card" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <a href="./details.html" class="btn btn-primary">Details</a>
        <p>Price: $${event.price}</p>
    </div>
</div>`;
});
element.innerHTML = eventCard
}
createCards(events)
//Checkboxes
const contenedorCheck = document.getElementById('checkboxes')
const input = document.querySelector('input')

input.addEventListener ('input', () =>{
    let filteredArray = textFiltering(events, input.value);
    createCards(filteredArray)
})

contenedorCheck.addEventListener('change',() =>{
    console.log('changing');
})

createCheckboxes (events)
function createCheckboxes(array){
    let arrayCategories = array.map(events => events.category)
    console.log(arrayCategories) 
    let setCategory = new Set(arrayCategories)
    console.log(setCategory)
    let arrayChecks = Array.from(setCategory)
    console.log(arrayChecks);
    let checkbody = ''
    arrayChecks.forEach(category => {
        checkbody +=`<div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category}">
        <label class="form-check-label" for="${category}">${category}</label>
        </div>`
    })
contenedorCheck.innerHTML = checkbody
}

function textFiltering (array, text) {
    let filteredArray = array.filter (elemento => elemento.name.toLowerCase().includes(text.toLowerCase()))
    return filteredArray
}