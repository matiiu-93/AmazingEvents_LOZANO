import data from "./amazing.js";
//URL Params
const queryString = location.search
const params = new URLSearchParams(queryString)
const id = params.get('id')
const details = data.events.find (evDetail => evDetail._id == id)
const div = document.querySelector('#card')


/* function createDetail (dato, contenedor){ */
        div.innerHTML=`<img src="${details.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Data</h5>
                <ul>
                    <li>${details.name}</li>
                    <li>${details.date}</li>
                    <li>${details.description}</li>
                    <li>${details.category}</li>
                    <li>${details.place}</li>
                    <li>${details.capacity}</li>
                    <li>${details.assistance}</li>
                    <li>"Price: $"${details.price}</li>
                <a href="#" class="btn btn-primary">Buy package</a>
                </div>`
/* }
createDetail(details, div)  */

