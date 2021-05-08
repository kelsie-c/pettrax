const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
    document.location.replace('/menu');
});

const dashboard = document.querySelectorAll('#dashboard');

dashboard.forEach(dashLink => dashLink.addEventListener('click', () => {
    document.location.replace('/dashboard');
}));


const petMenu = document.getElementById('dropdownMenuButton1');

const allPets = document.querySelectorAll('.pet-choices');
let selectedPet;
allPets.forEach(pet => pet.addEventListener('click', () => {
    selectedPet = pet.innerHTML;
    petMenu.innerHTML = selectedPet;
}));

const eventMenu = document.getElementById('dropdownMenuButton2');

const allEvents = document.querySelectorAll('.event-choices');
let selectedEvent;
allEvents.forEach(eventType => eventType.addEventListener('click', () => {
    selectedEvent = eventType.innerHTML;
    eventMenu.innerHTML = selectedEvent;
}));

const submit = document.getElementById('submit');

submit.addEventListener('click', () => {
    // event.stopPropagation();
    // getAllEvents();
})

// async function getAllEvents(petId, eventType) {

//     const response = await fetch(`/api/events`, {
//         method: 'GET',
//         headers: {
//         'Content-Type': 'application/json',
//         },
//     });
//     // replace document to pets page. 
//     if (response.ok) {
//         // document.location.replace('/dashboard');
//         console.log(response);
//     } else {
//         alert('Failed to add event');
//     }
// }