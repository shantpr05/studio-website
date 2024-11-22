import './style.css';
console.log("Webpack is working!");
import loadHome from './home.js';
import loadProjects from './projects.js';
import loadAbout from './about.js';

const mainContent = document.getElementById('content');
const navButtons = document.querySelectorAll('.nav-btn');

// Function to remove 'active' class from all buttons
const resetActiveButtons = () => {
    navButtons.forEach((button) => button.classList.remove('active'));
};

// Event listener to handle navigation
navButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        resetActiveButtons();
        e.target.classList.add('active');
        
        const buttonId = e.target.id;
        mainContent.innerHTML = ''; // Clear previous content

        if (buttonId === 'home-btn') {
            loadHome(mainContent);
        } else if (buttonId === 'projects-btn') {
            loadProjects(mainContent);
        } else if (buttonId === 'about-btn') {
            loadAbout(mainContent);
        }
    });
});

// Load the default page (Home) on initial load
loadHome(mainContent);
document.getElementById('home-btn').classList.add('active');
