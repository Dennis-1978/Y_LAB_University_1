'use strict';

const form = document.querySelector('.form');
let { email, password } = form.elements;

async function userAuthentication(email, password) {
    try {
        // Отправляем запрос на УСЛОВНЫЙ url (http://website.com/login)
        const response = await fetch('http://website.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: email.value,
                password: password.value,
            }),
        });

        if (!response.ok) {
            throw new Error('Something went wrong...');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}

form.addEventListener('submit', event => {
    event.preventDefault();

    userAuthentication(email, password)
    .then(data => {
        if (data.token) {ht
            localStorage.setItem('token', data.token);
            console.log(data.token);
            alert('Welcome');
        } else {
            alert('Error');
        }
    });

    form.reset();
});