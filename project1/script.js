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

function  checkRequired(inputArray){
    inputArray.forEach(element => {
        if(element.value==='')
        showError(element,`${capital(element) } is requird`);
        else showSuccess(element);
    });

}

function capital(obj){
    return obj.id.charAt(0).toUpperCase() + obj.id.slice(1);
}
form.addEventListener("submit", function(e){
    e.preventDefault();
    checkRequired([username,email,password,password2]);

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


// const form = document.getElementById("form");
// const username = document.getElementById("username");
// const email = document.getElementById("email");
// const password = document.getElementById("password");
// const password2= document.getElementById("password2");



// function isValidEmail(Email){

//     return Email.match(
//         /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );

//     }



// function showSuccess(input){
    
// const formControl = input.parentElement;
// formControl.className= "form-control success";

// }


// function showError(input,message){
//     // console.log(input.parentElement)
   


//  const formControl = input.parentElement;
//  console.log(formControl)
//  formControl.className = "form-control error";
//  const small = document.querySelector("small");
//  console.log(small);
//  small.textContent = message;
// //  console.log(small.textContent);

// }


// function checkRequired(inputArray){
//     inputArray.forEach(function(p) {
//         if(p.value === "")
        
//             {
//                 console.log(p); 
//                 showError(p,`${p.id} is required`);
        
//         }
//         else
//             showSuccess(p);
        
//     });
// }


// form.addEventListener('submit',function(e){

//     e.preventDefault();

//     checkRequired([username,email,password,password2]);
 
// })