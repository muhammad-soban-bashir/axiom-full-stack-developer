const form = document.getElementById("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");

const password = document.getElementById("password");
const password2= document.getElementById("password2");
function showError(input,message){
    const formControl= input.parentElement;
    formControl.className = "form-control error"
    const small = formControl.querySelector("small");
    small.textContent = message;
}
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(username.value===""){
     showError(username,"username is required");

    }
});