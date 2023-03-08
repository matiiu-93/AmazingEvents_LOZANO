import data from './amazing.js';
let events = data.events
const element = document.getElementById("card-sec");
let tarjetasPast = ''

for (let _event of events) {
    if (events.date.includes (2021) ){
    tarjetasPast += `<div class="card" style="width: 18rem;">
    <img src="${_event.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${_event.name}</h5>
        <p class="card-text">${_event.description}</p>
        <a href="./details.html" class="btn btn-primary">Details</a>
        <p>${_event.price}</p>
    </div>
</div>
    `}
}
element.innerHTML = tarjetasPast