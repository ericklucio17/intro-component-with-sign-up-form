'use strict'

let button = document.getElementById('button');

button.addEventListener('click', function () {

    let firstName = document.querySelector('#first-name');
    let lastName = document.querySelector('#last-name');
    let emailAddress = document.querySelector('#email-address');
    let password = document.querySelector('#password');

    let firstNameValue = document.querySelector('#first-name').value;
    let lastNameValue = document.querySelector('#last-name').value;
    let emailAddressValue = document.querySelector('#email-address').value;
    let passwordValue = document.querySelector('#password').value;

    let firstNameLabel = document.querySelector('#first-name-label');
    let lastNameLabel = document.querySelector('#last-name-label');
    let emailAddressLabel = document.querySelector('#email-address-label');
    let passwordLabel = document.querySelector('#password-label');

    if (firstNameValue == null || firstNameValue.length == 0) {

        firstNameLabel.style.display = 'inline';
        firstNameLabel.textContent = 'First Name cannot be empty';
        firstName.style.outlineColor = "#FF7A7A";
        firstName.focus();
    }
    
    if (lastNameValue == null || lastNameValue.length == 0) {

        lastNameLabel.style.display = 'inline';
        lastNameLabel.textContent = 'Last Name cannot be empty';
        lastName.style.outlineColor = "#FF7A7A";
        lastName.focus();
    }

    if (emailAddressValue == null || emailAddressValue.length == 0) {

        emailAddressLabel.style.display = 'inline';
        emailAddressLabel.textContent = 'Email Address cannot be empty';
        emailAddress.style.outlineColor = "#FF7A7A";
        emailAddress.focus();
    }

    if (passwordValue == null || passwordValue.length == 0) {

        passwordLabel.style.display = 'inline';
        passwordLabel.textContent = 'Password cannot be empty';
        password.style.outlineColor = "#FF7A7A";
        password.focus();
    }

    if (firstNameValue != "" && lastNameValue != "" && emailAddressValue != "" && passwordValue != "") {

        firstName.value = "";
        lastName.value = "";
        emailAddress.value = "";
        password.value = "";

        firstNameLabel.style.display = 'none';
        lastNameLabel.style.display = 'none';
        emailAddressLabel.style.display = 'none';
        passwordLabel.style.display = 'none';
    }
});
