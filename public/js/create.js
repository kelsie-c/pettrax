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
    const response = await fetch(`/api/profile`, {
      method: 'POST',
      body: JSON.stringify({ name, address, phone}),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create profile');
    }
  }

  if (petName && birthday && species && breed && weight && color && birthmark && petInfo) {
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({ petname, birthday, species, breed, weight, color, birthmark, petInfo }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to complete profile');
    }
  }

}

const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/pets/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.pettrax-profile-form')
  .querySelector('.pet-profile-form')
  .addEventListener('submit', profileFormHandler);

  document
  .querySelector('.pettrax-profile-form')
  .querySelector('.pet-profile-form')
  .addEventListener('submit', editFormHandler);

// document
//   .querySelector('.pettrax-profile-form')
//   .addEventListener('click', delButtonHandler);



// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/pets/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// document
//   .querySelector('.new-profile-page')
//   .addEventListener('submit', newFormHandler);

// document
//   .querySelector('.pet-profile-page')
//   .addEventListener('click', delButtonHandler);
