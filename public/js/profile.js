const name = document.querySelector('#pettrax-name').value.trim();
const address = document.querySelector('#pettrax-address').value.trim();
const phone = document.querySelector('#pettrax-phone').value.trim();


const editButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/pets/${id}`, {
        method: 'PUT',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to update profile');
      }
    }
  };