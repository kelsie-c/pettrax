const dashboard = document.querySelectorAll('#dashboard');
const profile = document.getElementById('profile');
const pets = document.getElementById('pets');
const logs = document.getElementById('logs');

dashboard.forEach(dashLink => dashLink.addEventListener('click', () => {
    document.location.replace('/dashboard');
}));
// dashboard.addEventListener('click', () => {
//     document.location.replace('/dashboard');
// });

profile.addEventListener('click', () => {
    document.location.replace('/profile');
});

pets.addEventListener('click', () => {
    document.location.replace('/pets');
});

logs.addEventListener('click', () => {
    document.location.replace('/logs');
});
