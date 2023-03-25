//Cards
import data from './amazing.js';

let events = data.events
const element = document.getElementById("card-sec");

function createCards (events) {
    if(events.length == 0) {
        element.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`
        return
    }
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

input.addEventListener('input', () => {
    let filteredArray = textFiltering(events, input.value)
    createCards(filteredArray)
})
contenedorCheck.addEventListener('change', () => {
    let filteredArray = filterByCategory(events)
    createCards(filteredArray)
})
input.addEventListener ('input', superFilter)

contenedorCheck.addEventListener('change', superFilter)

function superFilter() {
    let firstFilter = textFiltering (events, input.value);
    let secondFilter = filterByCategory (firstFilter)
    createCards(secondFilter)
}

createCheckboxes (events)

function createCheckboxes(array){
    let arrayCategories = array.map(events => events.category) 
    let setCategory = new Set(arrayCategories)
    let arrayChecks = Array.from(setCategory)
    let checkbody = ''
    arrayChecks.forEach(category => {
        checkbody +=`<div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="${category}" value="${category.toLowerCase()}">
        <label class="form-check-label" for="${category}">${category}</label>
        </div>`
    })
contenedorCheck.innerHTML = checkbody
}
createCheckboxes(events)


function textFiltering (array, text) {
    let filteredArray = array.filter (elemento => elemento.name.toLowerCase().includes(text.toLowerCase()))
    return filteredArray
}

function filterByCategory(array) {
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkboxes)
    let arrayChecks = Array.from(checkboxes)
    let arrayCheckChecked = arrayChecks.filter(check=> check.checked)
    let arrayCheckCheckedValues = arrayCheckChecked.map(checkChecked=> checkChecked.value)
    let filteredArray = array.filter(elemento => arrayCheckCheckedValues.includes(elemento.category.toLowerCase()))
    console.log(filteredArray);
    if(filteredArray.length > 0) {
        return filteredArray
    } 
    return array
}



