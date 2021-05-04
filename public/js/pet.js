
const petName = document.querySelector('#pet-name')
const birthday = document.querySelector('#pet-birthday')
const species = document.querySelector('#pet-species')
const breed = document.querySelector('#pet-breed')
const weight = document.querySelector('#pet-weight')
const color = document.querySelector('#pet-color')
const birthmark = document.querySelector('#pet-birthmark')
const petInfo = document.querySelector('#pet-info')



const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/pets/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      document.location.replace('/pet');
    } else {
      alert('Failed to update pet profile');
    }
  }
};

document
    .querySelector('.pet-profile-form')
    .addEventListener('submit', editFormHandler);


const delButtonHandler = async (event) => {
if (event.target.hasAttribute('data-id')) {
const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/pets/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/pet');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
  .querySelector('.new-pet-profile')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.pet-profile-page')
  .addEventListener('click', editButtonHandler)

document
  .querySelector('.pet-profile-page')
  .addEventListener('click', delButtonHandler);
