const dashboard = document.getElementById('dashboard');

dashboard.addEventListener('click', () => {
    document.location.replace('/dashboard');
})

const signupFormHandler = async (event) => {
    event.preventDefault();
  
  //  user inputs data for authentication.
    const name = document.querySelector('#name').value.trim();
    const street = document.querySelector('#street').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state = document.querySelector('#state').value.trim();
    const zipcode = document.querySelector('#zipcode').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    
    // console.log(name, address, phone, email, password);
  
    if (name && street && city && state && zipcode && phone && email && password) {
      const address = [street, city, state, zipcode.toString()];
      const fullAddress = address.join(' ');

      // where is this fetching? where will this be posted? Profile?
      const response = await fetch('/api/users/', {
        method: 'POST',
        body: JSON.stringify({ name: name, address: fullAddress, phone: phone, email: email, password: password }),
        headers: { 'Content-Type': 'application/json' },
      });
      //replacing sign up page. Next page? Dashboard? Menu? Pets? 
      if (response.ok) {
        document.location.replace('/menu');
      } else {
        alert('Failed to sign up.');
      }
    }
};

  document
  .getElementById('submit')
  .addEventListener('click', signupFormHandler);