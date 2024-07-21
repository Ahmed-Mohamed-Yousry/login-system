var nameUser = document.getElementById('NameUser');
var EmailUser = document.getElementById('EmailUser');
var PassUser = document.getElementById('PassUser');
var SignIn = document.getElementById('SignIn');
var loginSystem = document.querySelector('.loginSystem');
var SignYOU = document.getElementById('SignYOU');
var SmartloginSystem = document.querySelector('.SmartloginSystem');
var exists = document.getElementById('exists');
var Welcome = document.getElementById('userName');
var userContainer = [];

if(SignIn){
    SignIn.addEventListener('click', function(){
        loginSystem.classList.replace("d-flex" , "d-none");
        SmartloginSystem.classList.replace("d-none" , "d-flex");
    })
}
if(SignYOU){
    SignYOU.addEventListener('click', function(){
        SmartloginSystem.classList.replace("d-flex" , "d-none");
        loginSystem.classList.replace("d-none" , "d-flex")
    })
}

if (localStorage.getItem('logSystem') == null) {
    userContainer = [];
}
else {
    userContainer = JSON.parse(localStorage.getItem('logSystem'));
}


function Empty() {
    if (nameUser.value == "" || EmailUser.value == "" || PassUser.value == "") {
        return false
    } else {
        return true
    }
}

function EmailExist() {
    for (var i = 0; i < userContainer.length; i++) {
        if (userContainer[i].email.toLowerCase() == EmailUser.value.toLowerCase()) {
            return false
        }
    }
}


function signUp() {
    if (Empty() == false) {
        document.getElementById('exists').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    var info = {
        name :  nameUser.value,
        email : EmailUser.value,
        password : PassUser.value,
    }
    if (userContainer.length == 0) {
        userContainer.push(info);
        localStorage.setItem('logSystem', JSON.stringify(userContainer))
        document.getElementById('exists').innerHTML = '<span class="text-success m-3">Success</span>'
        // clearall()
        return true
    }
    if (EmailExist() == false) {
        document.getElementById('exists').innerHTML = '<span class="text-danger m-3">email already exists</span>'
        // clearall()
    } else {
        userContainer.push(info)
        localStorage.setItem('logSystem', JSON.stringify(userContainer))
        document.getElementById('exists').innerHTML = '<span class="text-success m-3">Success</span>'
        // clearall()
    }


}
    function clearall() {
        nameUser.value = null
        EmailUser.value = null
        PassUser.value = null
    }
    var username = localStorage.getItem('username')
if(username){
    var home= ''
    home+=` Welcome ${username} `
    if(Welcome){
        Welcome.innerHTML= home;

    }
} 
    var secEmail = document.getElementById('secEmail');
    var secPass = document.getElementById('secPass');
    var inputsisrequired = document.getElementById('inputsisrequired');
    var incorrect = document.getElementById('incorrect');

    function LoginEmpty() {
        if (secPass.value == "" || secEmail.value == "") {
            return false
        } else {
            return true
        }
    }

    function LoginUser(){
    if (LoginEmpty() == false) {
        inputsisrequired.classList.replace("d-none" , "d-flex");
        incorrect.classList.replace("d-flex" , "d-none" );
        return false
    }
    var email = secEmail.value ;
    var password = secPass.value ;
    for( var i=0 ; i < userContainer.length ; i++){
         if(userContainer[i].email.toLowerCase() === email.toLowerCase() && userContainer[i].password.toLowerCase() === password.toLowerCase()){
            incorrect.classList.replace("d-flex" , "d-none");
            localStorage.setItem('username', userContainer[i].name);
            window.location.href = 'home.html';
    
        }
        else {
            incorrect.classList.replace("d-none" , "d-flex");
            inputsisrequired.classList.replace("d-flex" , "d-none");
        }
    
    }
}




var logout = document.getElementById('logout');
var userPage = document.querySelector('.userPage');
if(logout){
    logout.addEventListener('click' , function(){
        window.location.href = 'index.html';
        // console.log('cdsv');
        
    })
}
