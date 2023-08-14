const btnSendMail = document.getElementById("mail-button");
const inputMail = document.getElementById("input-correo"); 

// ERROR
const iconError = document.getElementById("error-icon"); 
const messageError = document.getElementById("error-message"); 


btnSendMail.addEventListener("click", () => {
    let mailValidation =  inputMail.value.match(/\w+@\w+\.\w+/);
    console.log(mailValidation);
    if(mailValidation === null) {
        console.log("no es correcto")
        iconError.style.visibility = "visible";
        messageError.style.visibility = "visible";
        inputMail.classList.add("show-input-error");
    } else {
        console.log("es correcto")
        iconError.style.visibility = "hidden";
        messageError.style.visibility = "hidden";
        inputMail.classList.remove("show-input-error");
    }
});