document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const loginForm = document.getElementById('login-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const contactData = {
                name: contactForm.name.value,
                email: contactForm.email.value,
                message: contactForm.message.value
            };
            saveToLocalStorage('contactMessages', contactData);
            alert('Message sent successfully!');
            contactForm.reset();
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = loginForm.username.value;
            const password = loginForm.password.value;

            if (authenticateUser(username, password)) {
                localStorage.setItem('isLoggedIn', true);
                window.location.href = 'service-provider.html';
            } else {
                alert('Invalid username or password');
            }
        });
    }

    function saveToLocalStorage(key, data) {
        const existingData = JSON.parse(localStorage.getItem(key)) || [];
        existingData.push(data);
        localStorage.setItem(key, JSON.stringify(existingData));
    }

    function authenticateUser(username, password) {
        const user = { username: 'provider', password: 'password123' };
        return username === user.username && password === user.password;
    }
});