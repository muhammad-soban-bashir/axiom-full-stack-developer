const form = document.getElementById("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");

const password = document.getElementById("password");
const password2= document.getElementById("password2");
 function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
 }





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
    else {
        showSuccess(username);
    }


    if(email.value===""){
        showError(email,"email is required");
   
       }
       else {
           showSuccess(email);
       }

       if(password.value===""){
        showError(password,"password is required");
   
       }
       else {
           showSuccess(password);
       }

       if(password2.value===""){
        showError(password2," confirm password is required");
   
       }
       else {
           showSuccess(password2);
       }

});


