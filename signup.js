// Function to handle signup
function handleSignup() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
  
    // Add validation checks and error handling for the inputs
  
    const user = {
      firstName,
      lastName,
      email,
      password,
    };
  
    // Check if the user already exists in local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      console.error('User already exists with this email');
      alert('User already exists with this email');
     
      return;
    }
  
    // Save the user to local storage
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  
    // Redirect the user to the login page after signup
    window.location.href = 'login.html';
  }
  
  document.getElementById('signupButton').addEventListener('click', handleSignup);
  