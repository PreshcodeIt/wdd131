document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Basic validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Store data in localStorage
        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userMessage", message);

        // Show confirmation message
        confirmationMessage.classList.remove("hidden");

        // Clear form fields after a slight delay
        setTimeout(() => {
            form.reset(); // Properly resets all fields
            confirmationMessage.classList.add("hidden");
        }, 3000);
    });
});

// Redirect "Book an Appointment" button to the contact page
document.getElementById("bookAppointment").addEventListener("click", function() {
    window.location.href = "contact.html";
});

