const toggleButton = document.getElementById('toggle-theme');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Light Mode';
}

toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const blogForm = document.getElementById('blog-form');
    const errorMessage = document.getElementById('error-message');

blogForm.addEventListener('submit', event => {
        event.preventDefault();
    if (!validateForm()) {
        showErrorMessage ("please fill out all required fiels.");
        return;
    }
    // Show loading indicator
    showLoadingIndicator();

    // Handle form submission
    submitFormData(new FormData(blogForm))
        .then(response => {
            // Handle successful submission
            showSuccessMessage("Blog post submitted successfully!");
        })
        .catch(error => {
            // Handle submission error
            showErrorMessage("Error submitting blog post: " + error.message);
        })
        .finally(() => {
            // Hide loading indicator
            hideLoadingIndicator();
        });
});

// Example validation function
function validateForm() {
    // Implement your validation logic here
    return true; // or false based on validation
};
});