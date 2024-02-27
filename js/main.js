$(document).ready(function () {
    $('.bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('load scroll', function () {
        $('.bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });
});
document.getElementById('registerLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('loginLink').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('registerForm').style.display = 'none';
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    // Here you would typically send a request to your server to authenticate the user
    document.getElementById('loginMessage').innerText = `Logging in with email: ${email} and password: ${password}`;
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    // Here you would typically send a request to your server to register the user
    document.getElementById('registerMessage').innerText = `Registering with username: ${username}, email: ${email}, and password: ${password}`;
});


