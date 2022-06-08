const form = document.getElementById("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");

const password = document.getElementById("password");
const password2= document.getElementById("password2");



function isValidEmail(Email){

    return Email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );


}
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
form.addEventListener("submit", function(e){
    e.preventDefault();
    if(username.value ===""){
     showError(username,"username is required");

    }
    else {
        showSuccess(username);
    }


    if(email.value===""){
        showError(email,"email is required");
   
       }
    else if(!isValidEmail(email.value)){
        showError(email,"email is invalid")
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



// const form = document.getElementById("form");
// const username = document.querySelector("#username");
// const email = document.querySelector("#email");

// const password = document.getElementById("password");
// const password2= document.getElementById("password2");

// function showSuccess(input){
// const formControl = input.parentElement;
// formControl.className= "form-control success";

// }
// function showError(input,message){
//  const formControl = input.parentElement;
//  formControl.className = "form-control error"
//  const small = document.querySelector("small");
//  small.innerText = message;

// }


// form.addEventListener("submit",(e)=>{

// e.preventDefault();

// if(username.value===""){
//  showError(username,"username is requird");
 
// }else{
//     showSuccess(username);
// }


// if(email.value===""){
//     showError(email,"email is requird");
    
//    }else{showSuccess(email);}


// if(password.value===""){
//     showError(password,"password is requird");
    
//    }
// else{showSuccess(password);}



// if(password2.value===""){
//     showError(password2," confirm password is requird");
    
//    }else{showSuccess(password2);}


// })