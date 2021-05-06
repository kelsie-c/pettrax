const dashboard = document.getElementById('dashboard');
const profile = document.getElementById('profile');
const pets = document.getElementById('pets');
const groups = document.getElementById('groups');
const logs = document.getElementById('logs');
const contacts = document.getElementById('contacts');

dashboard.addEventListener('click', () => {
    document.location.replace('/dashboard');
});

profile.addEventListener('click', () => {
    document.location.replace('/profile');
});

pets.addEventListener('click', () => {
    document.location.replace('/pets');
});

groups.addEventListener('click', () => {
    document.location.replace('/groups');
});

logs.addEventListener('click', () => {
    document.location.replace('/logs');
});

contacts.addEventListener('click', () => {
    document.location.replace('/contacts');
});