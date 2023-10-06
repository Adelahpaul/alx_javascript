const nameEl = document.querySelector('#name');
const emailEl = document.querySelector('#email')

const form = document.querySelector('#submitForm');

function handleFormSubmit(){
    let valid = false;

    const name = nameEl.value.trim();
    const email = emailEl.value.trim();

    if (!isRequired(name) || (email)) {
        alert( 'Please fill in all required fields.');
        valid = false;
    } else {
        alert('Form submitted successfully!');
        valid = true;
    }

    return valid;   
}

const isRequired = value => value === '' ? false : true;


form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();
     let handlesubmit = handleFormSubmit();
});