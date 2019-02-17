//Use RegEx to validate form

//Testing user input

document.getElementById("userClick").addEventListener("click", function(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    
    if(firstName === ""){
        console.log("The user did not input a first name");
    }
    
    else{
        var checkText = /^[a-zA-Z ]+$/;
        console.log(checkText.test(firstName)); 
    }
    
    if(lastName === ""){
        console.log("The user did not input a last name");
    }
    
    else{
        var checkText = /^[a-zA-Z ]+$/;
        console.log(checkText.test(lastName)); 
    }
    
    if(phone === ""){
        console.log("The user did not input a phone number");
    }
    
    else{
        var phoneNumber = /^[0-9]+$/;
        console.log(phoneNumber.test(phone)); 
    }
    
    if(email === ""){
        console.log("The user did not input a email adress");
    }
    
    else{
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        console.log(emailPattern.test(email)); 
    }
})
                                            