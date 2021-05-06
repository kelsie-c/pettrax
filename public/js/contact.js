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


  if (iceName && iceAddress && icePhone && iceRelationship && iceInstructions) {
    const response = await fetch(`/api/ice`, {
      method: 'POST',
      body: JSON.stringify({ name, address, phone }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/ice');
    } else {
      alert('Failed ');
    }
  }


  if (vetName && vetAddress && vetPhone) {
    const response = await fetch(`/api/contact`, {
      method: 'POST',
      body: JSON.stringify({ name, address, phone }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/vet');
    } else {
      alert('Failed ');
    }
  }


}

const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/ice/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      document.location.replace('/ice');
    } else {
      alert('Failed to update emergency contact info');
    }
  }
};


const editButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/vet/${id}`, {
      method: 'PUT',
    });

    if (response.ok) {
      document.location.replace('/vet');
    } else {
      alert('Failed to update vet info');
    }
  }
};


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/ices/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/ice');
    } else {
      alert('Failed to delete emergency contact info');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/vets/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/vet');
    } else {
      alert('Failed to delete vet info');
    }
  }
};


document
  .querySelector('ice-contact-form')
  .addEventListener('click', delButtonHandler);





document
  .querySelector('.ice-contact-form')
  .addEventListener('submit', editFormHandler);



document
  .querySelector('.ice-contact-form')
  .addEventListener('submit', contactFormHandler);
