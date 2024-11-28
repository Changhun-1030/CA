// Event listener to ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is connected!");
    // Log a message to indicate the script is running
    
	 // Select the form element
    const form = document.querySelector("form");
    if (form) {
		 // Add a submit event listener to the form
        form.addEventListener("submit", function (event) {
            event.preventDefault();
		// Prevent the default form submission behavior

		 // Get values from the form inputs
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

			 // Check if all fields are filled
            if (name && email && message) {
                alert("Thank you for reaching out! We will get back to you soon."); // Success message
                form.reset();
				// Clear the form inputs
            } else {
                alert("Please fill out all fields."); // Error message for incomplete fields
            }
            }
        });
    } 
});

 // Function to handle city booking
    function bookCity(city) {
        const dateInput = document.getElementById(city.toLowerCase() + "Date"); // Get the input field by ID
        const selectedDate = dateInput.value; // Get the selected date

        if (selectedDate) {
            alert(`You have successfully booked ${city} for ${selectedDate}.`); // Show success message
        } else {
            alert(`Please select a date before booking ${city}.`); // Show error if no date is selected
        }
    }

    // Attach click event listeners to all booking buttons
    const bookingButtons = document.querySelectorAll(".booking-button"); // Select all buttons with the class "booking-button"
    bookingButtons.forEach(button => {
        button.addEventListener("click", function () {
            const city = this.getAttribute("data-city"); // Get the city name from the button's data attribute
            bookCity(city); // Call the booking function for the selected city
        });
    });

    // Apply Flatpickr to all date inputs
    flatpickr("input[type='date']", {
        dateFormat: "Y-m-d", // Format for saving the date (YYYY-MM-DD)
        altInput: true,      // Display a user-friendly alternative input field
        altFormat: "F j, Y", // Format for the alternative input (e.g., January 1, 2024)
    });
});

$(document).ready(function () {
    console.log("jQuery is connected!");

    let entryCount = 0; // Submission count variable

    // Real-time input field validation
    $("#name, #email, #message").on("input", function () {
        const field = $(this).attr("id");
        const value = $(this).val();
        const feedback = $(`#${field}Feedback`);

        if (!value) {
            feedback.text("This field is required.").css("color", "red");
        } else {
            feedback.text("Looks good!").css("color", "green");
        }
    });

    // Processing Form Submissions
    $("form").on("submit", function (event) {
        event.preventDefault();

        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();

        // Get current time
        const currentTime = new Date().toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });

        // Submission processing after validation
        if (name && email && message) {
            entryCount++;
            const entry = `<li class="list-group-item">
                <strong>${name}</strong> (${email}) - <em>${currentTime}</em><br>
                ${message}
            </li>`;

            $("#submitted-entries ul").prepend(entry);
            $("#entryCount").text(entryCount); // Update submission count
            $("form")[0].reset();
            $(".form-text").text(""); // Initialize Validation Message
        } else {
            alert("Please fill out all fields.");
        }
    });
});

