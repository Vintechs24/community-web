// newsletter.js

// Show the popup after 3 seconds
window.onload = function() {
    setTimeout(function() {
        document.getElementById('newsletterPopup').style.display = 'flex';
    }, 3000);  // Popup shows after 3 seconds
};

// Close the popup when the user clicks the close button
document.getElementById('closePopup').onclick = function() {
    document.getElementById('newsletterPopup').style.display = 'none';
}

// Close the popup if the user clicks outside of the modal
window.onclick = function(event) {
    if (event.target == document.getElementById('newsletterPopup')) {
        document.getElementById('newsletterPopup').style.display = 'none';
    }
}

// Simulate form submission (Fake Response)
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent actual form submission

    // Get the email input value
    const email = document.getElementById('email').value;

    // Check if the email is valid (basic validation)
    if (email) {
        // Show a success message after "submitting"
        alert(`Thank you for subscribing with the email: ${email}.`);

        // Reset the form
        document.getElementById('newsletterForm').reset();

        // Close the popup after a short delay
        setTimeout(function() {
            document.getElementById('newsletterPopup').style.display = 'none';
        }, 1500);  // Close after 1.5 seconds
    } else {
        // Show an error if email is empty
        alert('Please enter a valid email address!');
    }
});
