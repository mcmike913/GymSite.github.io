var imgArray = new Array(3);
var index = 0;



function cycle(){
    document.banner.src = imgArray[index].src;
    index++;
    if(index > 2)
    {
        index = 0;
    }
    setTimeout("cycle()", 2000);
    return;
}
function startup(){
    imgArray[0] = new Image;
    imgArray[0].src = "images/facilities.jpeg";
    imgArray[1] = new Image;
    imgArray[1].src = "images/facilities 2.png";
    imgArray[2] = new Image;
    imgArray[2].src = "images/treadmill.jpg";
    cycle();
    return;
}
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form
function validateForm() {
    // Retrieving the values of form elements
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var city = document.contactForm.country.value;
    var state = document.contactForm.country.value;
    var zip = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var plan = document.contactForm.country.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }

	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr = cityErr = stateErr =  zipErr = genderErr =  planErr = true;

    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email 
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile 
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate city
    if(city == "Select") {
        printError("cityErr", "Please select your city");
    } else {
        printError("cityErr", "");
        cityErr = false;
    }
    
    // Validate state
    if(state == "Select") {
        printError("stateErr", "Please select your state");
    } else {
        printError("stateErr", "");
        stateErr = false;
    }

    // Validate zip
    if (zip == "") {
        printError("zipErr", "Please enter your zipcode");
    } else {
        var regex = /^[1-9]\d{4}$/;
        if (regex.test(zip) === false) {
            printError("zipErr", "Please enter a valid 5 digit zipcode");
        } else {
            printError("zipErr", "");
            zipErr = false;
        }
    }
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    // Validate Plan
    if(plan == "") {
        printError("planErr", "Please select your plan");
    } else {
        printError("planErr", "");
        planErr = false;
    }

    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || cityErr || stateErr || zipErr || genderErr || planErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "City: " + city + "\n" +
                          "State: " + state + "\n" +
                          "Zip Code: " + zip + "\n" +
                          "Gender: " + gender + "\n"
                          "Plan: " + plan + "\n";

        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};