const name = document.querySelector('#user-name').value.trim();
const phone = document.querySelector('#user-phone').value.trim();
const email = document.querySelector('#user-email').value.trim();

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