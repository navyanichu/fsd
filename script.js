


function loginvalidate()
{
    var lemail= document.getElementById("defaultLoginFormEmail");
    var e1 = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var pwd = document.getElementById("defaultLoginFormPassword");
    var error = document.getElementById("error");
    
    if(lemail.value.trim() == ""){
        alert("Enter your credentials");
        return false;
    }
    if(e1.test(lemail.value)){
        error.innerText = "Welcome back!"
    } 
    else{
        alert("Invalid Email!");
        return false;
        
    }
    if(pwd.value.trim()== ""){
        alert("Enter your password!");
        return false;
    }
    else{
    return true;
    }
}    
function signvalidate()
{
    var username = document.getElementById("defaultRegisterFormFirstName");
    var email    = document.getElementById("defaultRegisterFormEmail");
    var pass     = document.getElementById("defaultRegisterFormPassword");
    var phone    = document.getElementById("defaultRegisterPhonePassword");
    var e1 = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var p1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var ps1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    
    if(username.value.trim() == ""){
        alert("Username cannot be blank!"); 
        return false;
    }

    if(email.value.trim() == ""){
        alert("Email cannot be blank!");
        return false;
    }

    if(e1.test(email.value)){
        emailv.innerText = "Valid Email";
        emailv.style.color = "green";
    } else {
        alert("Invalid Email!");
        return false;
    }

    if(pass.value.trim() == ""){
        alert("Please enter a password");
        return false;
    }

    if(ps1.test(pass.value)){

        if(pass.value.length <= "3"){
            pwd.innerText = "weak";
            pwd.style.color = "red";
            return true;
        }
        else if(pass.value.length <= "6"){
            pwd.innerText = "medium";
            pwd.style.color = "orange";
            return true;
        }
        else if(pass.value.length <= "8"){
            pwd.innerText = "strong";
            pwd.style.color = "green";
            return true;
        }

    
     else{
            alert("Invalid password");
            return false;
        }
            
    }

    if(phone.value.trim() == ""){
        alert("Phone number cannot be blank");
        return false;
    } 


    if(p1.test(phone.value)){
        phonv.innerText = "Valid Phone number";
        phonv.style.color = "yellow";

    }else{
        alert("Enter a valid phone number!")
        return false;
    }
    return true;


}