// Show the popup after 3 seconds
window.onload = function() {
    setTimeout(function() {
        const popup = document.getElementById('newsletterPopup');
        popup.style.display = 'flex';  // Show the popup
    }, 3000);  // Show after 3 seconds
};

// Close the popup when the user clicks the close button
document.getElementById('closePopup').onclick = function() {
    const popup = document.getElementById('newsletterPopup');
    popup.style.animation = 'fadeOut 0.5s ease';  // Fade-out effect
    setTimeout(function() {
        popup.style.display = 'none';  // Hide after animation
    }, 500);  // Wait for animation to finish before hiding
}

// Close the popup if the user clicks outside the modal
window.onclick = function(event) {
    if (event.target == document.getElementById('newsletterPopup')) {
        const popup = document.getElementById('newsletterPopup');
        popup.style.animation = 'fadeOut 0.5s ease';  // Fade-out effect
        setTimeout(function() {
            popup.style.display = 'none';  // Hide after animation
        }, 500);  // Wait for animation to finish before hiding
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
            const popup = document.getElementById('newsletterPopup');
            popup.style.animation = 'fadeOut 0.5s ease';  // Fade-out effect
            setTimeout(function() {
                popup.style.display = 'none';  // Hide after animation
            }, 500);
        }, 1500);  // Close after 1.5 seconds
    } else {
        // Show an error if email is empty
        alert('Please enter a valid email address!');
    }
});
