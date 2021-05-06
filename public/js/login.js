const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('#email').valuel
    const password = document.getElementById('#current-password')
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        // alert(response.statusText);
        alert('Failed to login')
      }
    }
  };

 
  document
  .getElementById('submit')
  .addEventListener('click', loginFormHandler);
