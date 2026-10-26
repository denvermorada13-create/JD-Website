function welcomeMessage() {
    document.getElementById("welcome").innerHTML =
        "Welcome to my personal website!";
}

const allElements = document.querySelector('body');


function darkMode() {
    allElements.classList.toggle("dark");
}

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var formMessage = document.getElementById("formMessage");

    if (name == "" || email == "" || message == "") {
        formMessage.innerHTML = "Please complete all the fields.";
        return false;
    } else {
        formMessage.innerHTML = "Your message was sent successfully!";
        return false;
    }
}
