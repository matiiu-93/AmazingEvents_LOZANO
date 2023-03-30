const highAtt = document.getElementById("highestAttendance");
const lowAtt = document.getElementById("lowestAttendance");
const largCap = document.getElementById("largerCapacity");

async function getEvents(){
    const {currentDate, events} = await fetch("/JS/amazing.json")
    .then(response => response.json())
    .then(result => { 
        console.log(result)
        
        maxCapacityEvent(result.events);
        getLowestAttendance(result.events)
        })
        return result
        
        
    }
function largerCapacityEvent(evento){
    return evento.find(event=>event.capacity === Math.max(...evento.map(event => event.capacity)))
}
function getHighestAttendance(array){
    let higherCapacityEvent = array.reduce((prevEvent, presentEvent)=>{
        return (prevEvent.capacity > presentEvent.capacity) ? prevEvent : presentEvent;
    });
    higherCapacityEvent = higherCapacityEvent.name
    return higherCapacityEvent
}
function getLowestAttendance(array){
    let lowestCapacityEvent = array.reduce((prevEvent, presentEvent)=>{
        return (prevEvent.capacity < presentEvent.capacity) ? prevEvent : presentEvent;
    });
    lowestCapacityEvent = lowestCapacityEvent.name
    return lowestCapacityEvent
}