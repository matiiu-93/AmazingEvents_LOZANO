import data from './amazing.js';
let events = data.events
const element = document.getElementById("card-sec");
let tarjetasPast = '';

events.forEach ((event) => {
    if (event.date > data.currentDate) {
    tarjetasPast += `<div class="card" style="width: 18rem;">
    <img src="${event.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <a href="./details.html" class="btn btn-primary">Details</a>
        <p>Price: $${event.price}</p>
    </div>
</div>`
    }
})
element.innerHTML = tarjetasPast