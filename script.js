function handleSubmit(event) {
    event.preventDefault();

    const userName = document.querySelector('#name').value;
    const userSurname = document.querySelector('#surname').value;
    const userEmail = document.querySelector('#email').value;
    const userPassword = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

    console.log('handle submit',  userName, userSurname, userEmail, userPassword, confirmPassword);

    // Username and Surname
    const nameRegex = /^[A-Za-z]+$/;

    if (userName === "" || !userName.match(nameRegex)) {
        // alert("Your first name should only contain alphabetic characters.");
        document.getElementById("nameError").textContent = "Your first name should only contain alphabetic characters.";
        document.getElementById("name").value = "";
        document.getElementById("name").focus();
        console.log('username', userName);
        return false;
    }

    if (userSurname === "" || !userSurname.match(nameRegex)) {
        // alert("Your surname should only contain alphabetic characters.");
        document.getElementById("surname").focus();
        document.getElementById("surnameError").textContent = "Your surename should only contain alphabetic characters.";document.getElementById("surname").placeholder = "Your surname should only contain alphabetic characters.";
        console.log('surname', userSurname);
        return false;
    }

    // Email
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (userEmail === "" || !userEmail.match(emailRegex)) {
        // alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        console.log('email', userEmail);
        return false;
    }

    // Password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

    if (userPassword === "" || !userPassword.match(passwordRegex)) {
        // alert("Your password should contain at least one lowercase letter, one uppercase letter, one number, one special character, and be a minimum length of 8 characters long.");
        document.getElementById("password").focus();
        document.getElementById("passwordError").textContent = "Your password should contain at least one lowercase letter, one uppercase letter, one number, one special character, and be a minimum length of 8 characters long.";
        return false;
    }

    if (confirmPassword !== userPassword) {
        // alert("Password and Confirm Password fields do not match.");
        document.getElementById("confirmPassword").focus();
        document.getElementById("confirmPasswordError").textContent = "Password and Confirm Password fields do not match.";

        return false;
    }

    window.location.href = "confirmation.html";

    return true;

}

const registrationForm = document.querySelector('#registrationForm');
registrationForm.addEventListener('submit', handleSubmit);



