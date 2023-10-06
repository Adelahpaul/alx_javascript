const passwordEl = document.querySelector('#password');

const form = document.querySelector('#passwordForm');



const validatePassword = () => {
    let valid = false;
    const min = 8;

    const password = passwordEl.value.trim();

    if (!isRequired(password)) {
        showError(passwordEl, 'Password cannot be blank.');
    } else if (!isPasswordSecure(password)) {
        showError(passwordEl, 'Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)');
    } else {
        showSuccess(passwordEl);
        valid = true;
    }

    return valid;
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*\])(?=.{8,})");
    return re.test(password);
};

const isRequired = value => value === '' ? false : true;
const isEqual = (length, min) => length < min ? false : true;


const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message]  const error = formField.querySelector('p');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field elem]ent
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error messag
    const error = formField.querySelector('p');
    error.textContent = '';
}


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isUsernameValid = 
        isPasswordValid = checkPassword();
        

    let isFormValid = 
        isPasswordValid ;
       
    // submit to the server if the form is valid
    if (isFormValid) {

    }
});

