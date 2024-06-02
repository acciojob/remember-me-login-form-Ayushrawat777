//your JS code here. If required.
  document.addEventListener('DOMContentLoaded', () => {
      const loginForm = document.getElementById('login-form');
      const usernameInput = document.getElementById('username');
      const passwordInput = document.getElementById('password');
      const checkbox = document.getElementById('checkbox');
      const existingButton = document.getElementById('existing');

      // Check for saved user details in local storage
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');

      // Show the existing user login button if details are found
      if (savedUsername && savedPassword) {
        existingButton.style.display = 'block';
      }

      // Handle form submission
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (checkbox.checked) {
          // Save details to local storage if "Remember me" is checked
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          // Remove details from local storage if "Remember me" is unchecked
          localStorage.removeItem('username');
          localStorage.removeItem('password');
        }

        // Show alert with the logged-in username
        alert(`Logged in as ${username}`);

        // Show the existing user login button
        existingButton.style.display = 'block';
      });

      // Handle existing user login button click
      existingButton.addEventListener('click', () => {
        alert(`Logged in as ${savedUsername}`);
      });
    });