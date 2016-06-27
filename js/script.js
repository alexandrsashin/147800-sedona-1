var menu_mobile = document.querySelector(".main-nav__toggle");
var cross_mobile = document.querySelector(".main-nav__item-cross");

var error_form = document.getElementById("phone-number").value;
var phone_input = document.querySelector(".feedback-form__input--phone");
var error_message = document.querySelector(".feedback-form__field-error");
var popup_success = document.querySelector(".form-popup--success");
var popup_failure = document.querySelector(".form-popup--failure");
var btn_success = popup_success.querySelector(".form-popup__btn--success");
var btn_failure = popup_failure.querySelector(".form-popup__btn--failure");

/* mobile-menu */



/* form.html popups */

document.addEventListener("submit", function(event) {
    if (error_form.length > 4) {
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

/* var link = document.querySelector(".application-title");
var form = document.querySelector(".application");
var arrival = form.querySelector("[name=arrival-date]");
var departure = form.querySelector("[name=departure-date]");


link.addEventListener("click", function(event) {
    if (form.classList.contains("application-show")) {
        event.preventDefault();
        form.classList.remove("application-show");
    } else {
	    event.preventDefault();
        form.classList.add("application-show");
        arrival.focus();
    }
});

form.addEventListener("submit", function(event) {
    if (!arrival.value || !departure.value) {
    	event.preventDefault();
        console.log("Нужно ввести дату заезда и выезда"); 
    } 
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
    	if (form.classList.contains("application-show")) {
            form.classList.remove("application-show");
        }
    }
}); */