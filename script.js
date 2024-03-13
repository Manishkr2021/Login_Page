document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginLink = document.querySelector('.message a');

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    });

    signupLink.addEventListener('click', function (e) {
        e.preventDefault();
        signupForm.style.display = 'block';
        loginForm.style.display = 'none';
    });
});
