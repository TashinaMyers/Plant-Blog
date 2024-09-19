document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');
    const blogPosts = JSON.parse(localStorage.getItem('blogposts')) || [];

    if (blogPosts.length === 0) {
        postsContainer.innerHTML = "<p>No propagations yet!</p>";
    } else {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><em>by ${post.username}</em></p>
            `;
            postsContainer.appendChild(postElement);
        });
    }
});

        // FUNCIONS THAT HANDLE DARK THEME 
    
    const toggleButton = document.getElementById('toggle-theme');
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
    }

        //  KEEPS PREVIOUS THEME IN LOCAL STORAGE SO USER DOESN'T HAVE TO CONSTANTLY CHANGE

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

        // FUNCTION BELOW RETURNS YOU TO PREVIOUS LANDING PAGE

    document.getElementById('back-button').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
