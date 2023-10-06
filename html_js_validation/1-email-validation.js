var emaileror = document.getElementById('error')

function validateEmail(){

    var email = document.getElementById('email').value;
    if (email.length == 0){
        emaileror.innerHTML = "Email must be entered";
        return false;
    }
    if(!email.match(/^[A-Za-z]\_.\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)){
        emaileror.innerHTML= "Please enter a valid email address";
        return false;
    }
    return true;   
    form.addEventListener('submit', function (e) {
        // prevent the form from submitting
        e.preventDefault();
        // let checkEmail = validateEmail();
    });
    }
   
    