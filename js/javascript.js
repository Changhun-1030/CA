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
                alert("Thank you for reaching out! We'll get back to you soon.");
                form.reset();
            } else {
                alert("Please fill out all fields.");
            }
        });
    } 
});

document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("backgroundMusic");
    const button = document.getElementById("musicControlButton");

    button.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            button.textContent = "⏸ Pause: ROSE&Bruno Mars = APT";
        } else {
            music.pause();
            button.textContent = "▶ Play: ROSE&Bruno Mars = APT";
        }
    });
});

