import throttle from "lodash.throttle";


const form = document.querySelector(".feedback-form");

const DATA = JSON.parse(localStorage.getItem("feedback-form-state")) || {};

form.addEventListener("input", throttle(onInputChange), 500);
form.addEventListener("submit", onSubmitBtnClick);

function onInputChange(event) {

    if (event.currentTarget.nodeName !== "FORM") {
        return;
    }

    DATA[event.target.name] = event.target.value;

            localStorage.setItem("feedback-form-state", JSON.stringify(DATA));

            localStorage.setItem("feedback-form-state", JSON.stringify(DATA));
   
}

function autoFilling () {
    if (!localStorage.getItem("feedback-form-state")) {
        return;
    }
    document.querySelector("input").value = DATA.email;

    document.querySelector("textarea").value = DATA.message;
}
autoFilling();

function onSubmitBtnClick(event) {
    event.preventDefault();
    console.log(DATA);
    localStorage.clear();
    document.querySelector("input").value = "";

    document.querySelector("textarea").value = "";
}