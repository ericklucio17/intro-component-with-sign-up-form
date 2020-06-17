'use strict'

let button = document.getElementById('button');

button.addEventListener('click', function () {

    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let emailAddress = document.querySelector('#email-address').value;
    let password = document.querySelector('#password').value;

    if (firstName == null || firstName.length == 0) {

        let firstNameLabel = document.querySelector('#first-name-label');

        document.getElementById("first-name").focus();
        firstNameLabel.textContent = 'Firt Name cannot be empty';
    }
    
    if (lastName == null || lastName.length == 0) {

        let lastNameLabel = document.querySelector('#last-name-label');

        document.getElementById("last-name").focus();
        lastNameLabel.textContent = 'Last Name cannot be empty';
    }

    if (emailAddress == null || emailAddress.length == 0) {

        let emailAddressLabel = document.querySelector('#email-address-label');

        document.getElementById("email-address").focus();
        emailAddressLabel.textContent = 'Email Address cannot be empty';
    }

    if (password == null || password.length == 0) {

        let passwordLabel = document.querySelector('#password-label');

        document.getElementById("password").focus();
        passwordLabel.textContent = 'Password cannot be empty';
    }
});
