let photo;

// CLOUDINARY ---------------------------------------------------
const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dhx8koumu/upload/';
const CLOUDINARY_IMAGE = "https://res.cloudinary.com/dhx8koumu/image/upload/";
const CLOUDINARY_UPLOAD_PRESET = 'pyejztvw';

var imgPreview = document.getElementById('img-preview');
var fileUpload = document.getElementById('file-upload');

imgPreview.addEventListener('click', () => {
    fileUpload.click();
});

fileUpload.addEventListener('change', function(event) {
    // console.log(event);
    var file = event.target.files[0];
    // console.log(file);
    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData,
    }).then(function(res) {
        // console.log(res);
        // const format = res.data.format;
        const publicId = res.data.public_id;
        const version = res.data.version;
        // getTransformedImage(format, publicId, version);
        const newUrl = CLOUDINARY_IMAGE + "c_fill,w_125,h_125,g_auto,r_max/v" + version + "/" + publicId + ".png";
        photo = newUrl;
        imgPreview.src = newUrl;
        console.log(imgPreview);
    }).catch(function(err) {
        console.log(err);
    })
});


const petFormHandler = async (event) => {
event.preventDefault();

const name = document.getElementById('pet-name').value;
const birthday = document.getElementById('pet-birthday').value;
const speciesType = document.getElementById('pet-species').value;
const breed = document.getElementById('pet-breed').value;
const weight = document.getElementById('pet-weight').value;
const color = document.getElementById('pet-color').value;
const birthmark = document.getElementById('pet-birthmark').value;
const petInfo = document.getElementById('pet-info').value;
const userId = document.getElementById('user-id').value;
console.log(userId);

if (name && birthday && speciesType && breed && weight && color && birthmark && petInfo) {
    const response = await fetch(`/api/pets`, {
      method: 'POST',
      body: JSON.stringify({ photo: photo, name: name, birthday: birthday, speciesType: speciesType, breed: breed, weight: weight, color: color, birthmark: birthmark, petInfo: petInfo, userId: userId }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // replace document to pets page. 
    if (response.ok) {
      document.location.replace('/pets');
    } else {
      alert('Failed to add pet');
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
      document.location.replace('/pets');
    } else {
      alert('Failed to delete project');
    }
  }
};

  const savePet = document.getElementById('save-pet');
  savePet.addEventListener('click', petFormHandler);





// document
//   .getElementById('submit')
//   .addEventListener('click', petFormHandler);

  // document
  // .querySelector('.pettrax-profile-form')
  // .querySelector('.pet-profile-form')
  // .addEventListener('submit', editFormHandler);

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
