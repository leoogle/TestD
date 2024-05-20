document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            setupNavLinks();
            loadContent('home.html');  // Carga el contenido inicial
        });
});

function setupNavLinks() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            loadContent(link.getAttribute('href'));
        });
    });
}

function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        });
}
