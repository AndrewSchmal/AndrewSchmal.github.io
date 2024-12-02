// // Function to load a file into an element
// function loadHTML(file, elementId) {
//     fetch(file)
//         .then((response) => {
//             if (!response.ok) throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
//             return response.text();
//         })
//         .then((html) => {
//             document.getElementById(elementId).innerHTML = html;
//         })
//         .catch((error) => console.error(error));
// }

// // Load header and footer
// window.addEventListener('DOMContentLoaded', () => {
//     loadHTML('header.html', 'header-container');
//     loadHTML('footer.html', 'footer-container');
// });
