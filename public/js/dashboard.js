const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    document.location.replace('/menu');
});

// get all pet cards
const allPets = document.querySelectorAll('.pet-card');
let petId;
allPets.forEach(pet => pet.addEventListener('click', () => {
    petId = pet.firstChild.nextElementSibling.defaultValue;
}));

// get all events (pee, poo, food)
const allEvents = document.querySelectorAll('.event-icon');
let eventId;
allEvents.forEach(action => action.addEventListener('click', () => {
    eventId = action.nextSibling.nextSibling.innerHTML;
}));

// get button
const submit = document.getElementById('submit');
// set event listener to submit petId, event & time
submit.addEventListener('click', (event) => {
    event.preventDefault();
    const time = document.getElementById("time").value;
    // console.log(time);
    const today = new Date();
    // console.log(today);
    const month = today.getUTCMonth() + 1;
    const day = today.getDate();
    const year = today.getFullYear();

    const sendDate = year + " " + month + " " + day + " " + time;
    console.log(sendDate);

    createNewEvent(petId, eventId, sendDate);
})
// send petId, event & time to event POST route

async function createNewEvent(petId, eventType, time) {

    const response = await fetch(`/api/events`, {
        method: 'POST',
        body: JSON.stringify({ petId: petId, eventType: eventType, time: time }),
        headers: {
        'Content-Type': 'application/json',
        },
    });
    // replace document to pets page. 
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to add pet');
    }
}