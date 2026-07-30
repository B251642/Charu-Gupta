function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;

    if (name === "") {
        alert("Please enter your name");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Enter a valid email");
        return false;
    }

    if (!phone.match(phonePattern)) {
        alert("Phone number must be 10 digits");
        return false;
    }

    if (message === "") {
        alert("Please enter your message");
        return false;
    }

    // Save data to Local Storage
    localStorage.setItem("Name", name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("Message", message);

    alert("Thank You! Your message has been submitted.");

    return true;
}