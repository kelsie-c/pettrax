const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/menu');
      } else {
        // alert(response.statusText);
        alert('Failed to login')
      }
    }
  };

 
  document
  .getElementById('submit')
  .addEventListener('click', loginFormHandler);

  const signUp = document.getElementById('signUp');
  signUp.addEventListener('click', () => {
      document.location.replace('/signup');
  });