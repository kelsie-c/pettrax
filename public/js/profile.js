    const name = document.querySelector('#name').value.trim();
    const street = document.querySelector('#street').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zipcode = document.querySelector('#zipcode').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();


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