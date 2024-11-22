// JavaScript to handle "View All Events" functionality
document.getElementById('viewMoreBtn').addEventListener('click', function() {
    var extraEvents = document.getElementById('extraEvents');
    var button = document.getElementById('viewMoreBtn');

    // Toggle visibility of extra events
    if (extraEvents.style.display === 'none') {
        extraEvents.style.display = 'block';
        button.innerText = 'View Less Events';  // Change button text
    } else {
        extraEvents.style.display = 'none';
        button.innerText = 'View All Events';  // Change button text back
    }
});
