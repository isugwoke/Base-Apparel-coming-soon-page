form = document.forms['subscribe-frm'];
const emailField = form.email;
const errorDisplay = document.querySelector('small');

let formValidationFailed = false;


form.addEventListener("submit", event => {
    let email = emailField.value.trim();
    validateEmail(email);
});

emailField.addEventListener("input", function(){
    let email = this.value;
    if(formValidationFailed){
        validateEmail(email);
    }
});

function isValid(email){
    var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    return re.test(email);
}

function validateEmail(email){
    if (!isValid(email)){
        form.classList.add('error');
        event.preventDefault();
        errorDisplay.style.display = "block";
        formValidationFailed = true
    }

    else{
        form.classList.remove('error');
        errorDisplay.style.display = "none";

    }

}