const profileFormHandler = async (event) => {
event.preventDefault();

const name = document.querySelector('#pettrax-name').value.trim();
const address = document.querySelector('#pettrax-address').value.trim();
const phone = document.querySelector('#pettrax-phone').value.trim();

const petName = document.querySelector('#pet-name').value.trim();
const birthday = document.querySelector('#pet-birthday').value.trim();
const species = document.querySelector('#pet-species').value.trim();
const breed = document.querySelector('#pet-breed').value.trim();
const weight = document.querySelector('#pet-weight').value.trim();
const color = document.querySelector('#pet-color').value.trim();
const birthmark = document.querySelector('#pet-birthmark').value.trim();
const petInfo = document.querySelector('#pet-info').value.trim();

if (name && address && phone) {
    const response = await fetch(`/api/profiles`, {
      method: 'POST',
      body: JSON.stringify({ name, address, phone}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }


  if (name && petName && birthday && species && breed && weight && color && birthmark && petInfo) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, needed_funding, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create project');
    }
  }






}