const name = document.querySelector('#user-name').value;
const phone = document.querySelector('#user-phone').value;
const email = document.querySelector('#user-email').value;

const dashboard = document.getElementById('dashboard');

dashboard.addEventListener('click', () => {
    document.location.replace('/dashboard');
})

const editButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to update profile');
      }
    }
  };