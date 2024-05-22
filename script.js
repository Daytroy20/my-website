function showlogin(){
document.getElementById("login-container").style.display="block";
document.getElementById("register-container").style.display="none";

}
function showregister(){
document.getElementById("login-container").style.display="none";
document.getElementById("register-container").style.display="block";


}
function login(){
    const first_name=document.getElementById("first").value;
    const second_name=document.getElementById("last").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
console.log("login:",first_name,second_name,email,password);

}
function register(){

    const first_name=document.getElementById("first").value;
    const second_name=document.getElementById("last").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const gender=document.getElementById("gender").value;
const age=document.getElementById("age").value;
console.log("login:",first_name,second_name,email,password,gender,age);

}
showlogin();