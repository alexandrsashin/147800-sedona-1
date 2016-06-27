var phone_input = document.querySelector(".feedback-form__input--phone");
var error_message = document.querySelector(".feedback-form__field-error");
var popup_success = document.querySelector(".form-popup--success");
var popup_failure = document.querySelector(".form-popup--failure");
var btn_success = popup_success.querySelector(".form-popup__btn--success");
var btn_failure = popup_failure.querySelector(".form-popup__btn--failure");

/* form.html popups */

document.addEventListener("submit", function(event) {
    var error_form = document.getElementById("phone-number").value;
    if (error_form.length === 7) {
        event.preventDefault();
        popup_success.classList.add("form-popup-show");
    }
    else {
        event.preventDefault();
        console.log(error_form.length);
        popup_failure.classList.add("form-popup-show");
    }
});

btn_success.addEventListener("click", function(event) {
    event.preventDefault();
    popup_success.classList.remove("form-popup-show");
    error_message.classList.remove("feedback-form__field-error-show");
});

btn_failure.addEventListener("click", function(event) {
    event.preventDefault();
    popup_failure.classList.remove("form-popup-show");
    error_message.classList.add("feedback-form__field-error-show");
    phone_input.focus();
});