const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (authenticateUser(username, password)) {
        localStorage.setItem('isLoggedIn', true);
        window.location.href = 'homepage.html';
    } else {
        alert('Invalid username or password');
    }
});

function authenticateUser(username, password) {
    const user = { username: 'provider', password: 'password123' };
    return username === user.username && password === user.password;
}