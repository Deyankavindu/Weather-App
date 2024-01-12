function showPart(part) {
    const loginCard = document.querySelector('.login');
    const signupCard = document.querySelector('.signup');

    if (part === 'login') {
        loginCard.style.display = 'block';
        signupCard.style.display = 'none';
    } else if (part === 'signup') {
        loginCard.style.display = 'none';
        signupCard.style.display = 'block';
    }
}

// Initial setup (show login by default)
showPart('login');

function attemptLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve stored user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('user_data')) || {};

    // Check if the entered username and password match the stored data
    if (username === storedUserData.username && password === storedUserData.password) {
        document.getElementById('error-message').textContent = '';
        alert('Login successful!');
        // Add your logic to redirect or perform other actions after successful login
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password.';
    }
}

function attemptSignup() {
    const signupUsername = document.getElementById('signup-username').value;
    const signupEmail = document.getElementById('signup-email').value;
    const signupPassword = document.getElementById('signup-password').value;

    // Store user data in local storage
    localStorage.setItem('user_data', JSON.stringify({
        username: signupUsername,
        email: signupEmail,
        password: signupPassword
    }));

    document.getElementById('signup-error-message').textContent = '';
    alert('Signup successful! Logging in...');

    // Automatically attempt login using signup data
    document.getElementById('username').value = signupUsername;
    document.getElementById('password').value = signupPassword;

    // Call the attemptLogin function to log in
    attemptLogin();
}
