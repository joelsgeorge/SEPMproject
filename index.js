const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
const errorMsg = document.getElementById("error-msg");
const successMsg = document.getElementById("success-msg");
const btnSubmit = document.getElementById("btn-submit");

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    const usr = loginForm.usr.value;
    const pwd = loginForm.pwd.value;

    if (usr === "user123" && pwd === "pass123") {
        successMsg.classList.remove("visually-hidden");
        errorMsg.classList.add("visually-hidden");
    }
    else{
        successMsg.classList.add("visually-hidden");
        errorMsg.classList.remove("visually-hidden");
    }
})