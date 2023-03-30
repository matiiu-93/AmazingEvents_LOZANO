/* //Cards
import data from './amazing.js';
*/

const element = document.getElementById("card-sec");

async function getEvents(){
    const {currentDate, events} = await fetch("/JS/amazing.json")
    .then(response => response.json())
    .then(result => {
        console.log(result);
        createCards(result.events);
        createCheckboxes (result.events);
        filterByCategory(result.events)
        textFiltering(result.events, input.value)
        input.addEventListener ('input', ()=>{
            superFilter(result.events)
        })
        
        contenedorCheck.addEventListener('change', ()=> {
            superFilter(result.events)
        })
        return result;
    })
}
getEvents() 


function createCards (array) {
    if(array.length == 0) {
        element.innerHTML = `<h2>No hay coincidencias</h2>`
        return
    }
    let eventCard = ''
    array.forEach ((event) => {
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
/*
    }).catch(err => console.error(err))
}getEvents() */




//Checkboxes
const contenedorCheck = document.getElementById('checkboxes')
const input = document.querySelector('input')


function superFilter(events) {
    let firstFilter = textFiltering (events, input.value);
    let secondFilter = filterByCategory (firstFilter)
    createCards(secondFilter)
}


function createCheckboxes(array){
    let arrayCategories = array.map(eventsA => eventsA.category) 
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

function textFiltering (array, text) {
    let filteredArray = array.filter(elemento => elemento.name.toLowerCase().includes(text.toLowerCase()))
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