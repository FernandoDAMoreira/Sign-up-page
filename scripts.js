function toggleTheme(checkbox) {
    const root = document.documentElement;
    root.className = checkbox.checked ? "dark" : "ligth";
}

function validateForm() {
    const inputName = document.getElementById("first-name")
    const inputEmail = document.getElementById("email")
    const inputPassword = document.getElementById("password")
    const inputPasswordConf = document.getElementById("confirm-password")
    const errorParagraph = document.getElementById("password-error")
    inputPassword.classList.remove("invalid");
    inputPasswordConf.classList.remove("invalid");
    let errorMessage = "";

    if( !(inputName.checkValidity() 
        && inputEmail.checkValidity()
        && inputPassword.checkValidity()
        && inputPasswordConf.checkValidity())) {
        return;
    }

    if(inputPassword.value.length < 8) {
        inputPassword.classList.add("invalid");
        errorMessage = "Password must have 8 characters min.";
    }
    else if(inputPassword.value !== inputPasswordConf.value) {
        inputPasswordConf.classList.add("invalid");
        errorMessage = "Passwords do not match";
    }
    
    errorParagraph.innerHTML = errorMessage;
    return errorMessage.length === 0;
}