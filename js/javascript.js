document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is connected!");        
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); 
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

            if (name && email && message) {
                alert("Thank you for reaching out! We will get back to you soon.");
                form.reset();
            } else {
                alert("Please fill out all fields.");
            }
        });
    } 
});
