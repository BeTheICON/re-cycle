const bookingName = document.querySelector("#booking-name");
const nameError = document.querySelector("#nameError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const bookingEmail = document.querySelector("#booking-email");
const bookingEmailError = document.querySelector("#booking-emailError");
const bookingDate = document.querySelector("#date");
const dateError = document.querySelector("#dateError");
const selectTourDropdown = document.querySelector("#select-tour-dropdown");
const selectTourDropdownError = document.querySelector("#selectTourError");
const guide = document.querySelector("#guide");
const noGuide = document.querySelector("#no-guide");
const guideError = document.querySelector("#guideError");
const comment = document.querySelector("#comment");
const commentError = document.querySelector("#commentError");
const button = document.querySelector("#booking-button");
const bookingForm = document.querySelector("#booking-form");
const successMessage = document.querySelector("#successMessage");
const validationErrorMessage = document.querySelector("#validationErrorMessage");
const formNoteHide = document.querySelector("#form-note-hide");


function validateBookingForm(e) {
    e.preventDefault();

    if (checkLength(bookingName.value,4)===true){
        nameError.style.display = "none";
    }else{
        nameError.style.display = "block";
    }
    if (checkLength(address.value,9)===true){
        addressError.style.display = "none";
    }else{
        addressError.style.display = "block";
    }
    if(validateBookingFormEmail(bookingEmail.value)===true) {
            bookingEmailError.style.display = "none";
    }else{
            bookingEmailError.style.display = "block";
    }
    if(validateBookingDate(bookingDate.value)===true) {
        dateError.style.display = "none";
    }else{
        dateError.style.display = "block";
    }
    if((guide.checked === true) || (noGuide.checked === true)){
        guideError.style.display = "none";
    }else if((guide.checked ===false) && (noGuide.checked === false)) {
        guideError.style.display = "block";
    }
    if((selectTourDropdown.value==="select") === false){
        selectTourDropdownError.style.display = "none";
    }else {
        selectTourDropdownError.style.display = "block";
    }
     if(checkLength(comment.value,250)===false){
        commentError.style.display = "none";
    }else{
        commentError.style.display = "block";
    }

checkIfValidationIsTrue();

}

bookingForm.addEventListener("submit", validateBookingForm);



function checkIfValidationIsTrue() {
    if((checkLength(bookingName.value,4)) && (checkLength(address.value,9)) && (validateBookingFormEmail(bookingEmail.value)) && (validateBookingDate(bookingDate.value)) && ((guide.checked === true) || (noGuide.checked === true)) && (checkLength(comment.value,250)===false)){
        formNoteHide.style.display = "none";
        successMessage.innerHTML = `<div class="successMessage">Success&#33; <br>Your booking has been sent&#44; and we&#39;ll get back to you shortly&#46; with your booking-confirmation</div>`;
        bookingForm.reset();
    }else{
        formNoteHide.style.display = "none";
        validationErrorMessage.innerHTML = `<div class="validationErrorMessage">We&#39;re sorry, but some of the form&#45;fields don&#39;t seem to be filled out correctly&#46;<br>Please check and update the marked fields before you submit the form again&#46;</div>`;
    }
}

function validateBookingFormEmail(bookingEmail) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(bookingEmail);
    return patternMatches;
}

function validateBookingDate(bookingDate){
    const regExDate = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
    const patternMatchesDate = regExDate.test(bookingDate);
    return patternMatchesDate;
}

function checkLength(value, len){
    if(value.trim().length > len){
        return true;
    }else{
        return false;
    }
}