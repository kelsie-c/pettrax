const contactFormHandler = async (event) => {
    event.preventDefault();


const vetName = document.querySelector('#vet-name').value.trim();
const vetAddress = document.querySelector('#vet-address').value.trim();
const vetPhone = document.querySelector('#vet-phone').value.trim();


const iceName = document.querySelector('#ice-name').value.trim();
const iceAddress = document.querySelector('#ice-address').value.trim();
const icePhone = document.querySelector('#ice-phone').value.trim();
const iceRelationship = document.querySelector('#ice-relationship').value.trim();
const iceInstructions = document.querySelector('#instructions').value.trim();

    if (vetName && vetAddress && vetPhone) {
        const response = await fetch(`/api/contact`, {
          method: 'POST',
          body: JSON.stringify({ name, address, phone}),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed ');
        }
      }

      if (iceName && iceAddress && icePhone && iceRelationship && iceInstructions) {
        const response = await fetch(`/api/contact`, {
          method: 'POST',
          body: JSON.stringify({ name, address, phone}),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed ');
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
      document.location.replace('/pet');
    } else {
      alert('Failed to delete project');
    }
  }
};

document
    .querySelector('.vet-contact-form')
    .querySelector('.ice-contact-form')
    .addEventListener('submit', editFormHandler);





document
  .querySelector('.vet-contact-form')
  .querySelector('.ice-contact-form')
  .addEventListener('submit', contactFormHandler);
