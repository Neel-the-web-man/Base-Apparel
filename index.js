const inputBox = document.getElementById("input");
const inputSpanValidationElement = document.getElementById("input-span-validation-element");
const iconErrorSvg = document.getElementById("icon-error-svg");
// console.log(inputBox , inputSpanValidationElement , iconErrorSvg);
const submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,10}$/
    const str = inputBox.value.trim();
    console.log(regex, str);
    if (str === "" || str === "null") {
        iconErrorSvg.setAttribute("src", "./images/icon-error.svg");
        iconErrorSvg.classList.add("icon-error-svg");
        inputSpanValidationElement.classList.add("span-invalid-red");
        inputSpanValidationElement.innerHTML = "Please provide a valid email.";
        submit.classList.add("arw-icn-btn-bottom");
        e.preventDefault();
    }
    else {
        iconErrorSvg.removeAttribute("src", "./images/icon-error-svg");
        iconErrorSvg.classList.remove("icon-error-svg");
        inputSpanValidationElement.classList.remove("span-invalid-red");
        inputSpanValidationElement.innerHTML = "";
        submit.classList.remove("arw-icn-btn-bottom");
    }
    if (regex.test(str)) {
        iconErrorSvg.removeAttribute("src", "./images/icon-error-svg");
        iconErrorSvg.classList.remove("icon-error-svg");
        inputSpanValidationElement.classList.remove("span-invalid-red");
        inputSpanValidationElement.innerHTML = "";
        submit.classList.remove("arw-icn-btn-bottom");
    }
    else{
        iconErrorSvg.setAttribute("src", "./images/icon-error.svg");
        iconErrorSvg.classList.add("icon-error-svg");
        inputSpanValidationElement.classList.add("span-invalid-red");
        inputSpanValidationElement.innerHTML = "Please provide a valid email.";
        submit.classList.add("arw-icn-btn-bottom");
        e.preventDefault();
    }
})