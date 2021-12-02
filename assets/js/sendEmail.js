function sendMail(contactForm) {
    emailjs.send("gmail", "template_i3671bf", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })

        .then(
            function () {
                document.getElementById("contact-form").reset();
            })

        .then(
            function (response) {
                console.log("SUCCESS", response);
                emailSuccess();
            },
            function (error) {

                console.log("FAILED", error);
            }
        );
    return false;

}

// This sweet alert function will pop up when user message sent succesfully.

function emailSuccess() {
    swal({
        title: "Great!",
        text: "Your message has been sent successfully!",
        icon: "success",
        button: "ok!",
    });
}

function validateName() {

    var name = document.getElementById('fullname').value;

    if (name.length <= 5) {

        producePrompt('Name is required', 'name-error', 'red');
        return false;

    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

        producePrompt('Full Name required', 'name-error', 'red');
        return false;

    }

    producePrompt('Valid', 'name-error', 'green');
    return true;

}

function validateEmail() {

    var email = document.getElementById('emailaddress').value;

    if (email.length == 0) {

        producePrompt('Email is required', 'email-error', 'red');
        return false;

    }

    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

        producePrompt('Email Invalid', 'email-error', 'red');
        return false;

    } else
        producePrompt('Valid', 'email-error', 'green');
    return true;

}

function validateMessage() {
    var message = document.getElementById('message').value;
    var required = 20;
    var left = required - message.length;

    if (left > 0) {
        producePrompt(left + ' more characters required', 'message-error', 'red');
        return false;
    }

    producePrompt('Valid', 'message-error', 'green');
    return true;

}

function validateForm() {
    if (!validateName() || !validateEmail() || !validateMessage()) {
        jsShow('submit-error');
        producePrompt('Please fix errors to submit.', 'submit-error', 'red');
        setTimeout(function () {
            jsHide('submit-error');
        }, 2000);
    } else {

    }
}

function jsShow(id) {
    document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
    document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;


}