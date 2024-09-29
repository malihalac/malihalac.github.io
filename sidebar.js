// sidebar.js

// Load the sidebar.html content into the placeholder div
document.addEventListener("DOMContentLoaded", function () {
    fetch('sidebar.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
        })
        .catch(error => console.error('There was a problem loading the sidebar:', error));
});