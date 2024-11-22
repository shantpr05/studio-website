import project1Image from './assets/calculator_image.png';
import project2Image from './assets/etch-a-sketch.png';
import project3Image from './assets/tictactoe_img.png';
import project4Image from './assets/library.png';
import './projects.css';
export default function loadProjects(content) {
  content.innerHTML = `
      <section class="portfolio">
          <h1>Our Portfolio</h1>
          <p class="subtitle">We provide the Perfect Solution to your business growth</p>
          
          <div class="projects-grid">
              <div class="project-card">
                  <a href="https://sigstus985.github.io/Calculator/" target="_blank">
                      <img src="${project1Image}" alt="Calculator">
                      <h3>Calculator</h3>
                  </a>
                  <p>This project is a simple yet functional calculator built using HTML, CSS, and JavaScript. The calculator performs basic arithmetic operations such as addition, subtraction, multiplication, and division. It is designed with a clean, user-friendly interface to provide a smooth and intuitive experience for users.</p>
              </div>

              <div class="project-card">
                  <a href="https://shantpr05.github.io/Etch-a-Sketch/" target="_blank">
                      <img src="${project2Image}" alt="Etch-a-Sketch">
                      <h3>Etch-a-Sketch</h3>
                  </a>
                  <p>The Etch-a-Sketch Web App is an engaging browser-based drawing tool that combines the nostalgia of a sketchpad with modern DOM manipulation techniques. This project was designed to strengthen JavaScript, CSS, and HTML skills by creating an interactive grid-based canvas where users can "draw" with their mouse.</p>
              </div>

              <div class="project-card">
                  <a href="https://swarna1204.github.io/Tic-Tac-Toe-project/" target="_blank">
                      <img src="${project3Image}" alt="Tic Tac Toe">
                      <h3>Tic Tac Toe</h3>
                  </a>
                  <p>This project is a browser-based Tic Tac Toe game created as part of a JavaScript course. The goal was to implement key programming concepts such as modular code structure, object-oriented design, DOM manipulation, and event handling.</p>
              </div>

              <div class="project-card">
                  <a href="https://swarna1204.github.io/Library-project/" target="_blank">
                      <img src="${project4Image}" alt="Library">
                      <h3>Library</h3>
                  </a>
                  <p>The Library App is a simple book management application built using JavaScript. This project extends the "Book" example into a functional library interface, allowing users to add, display, update, and remove books dynamically.</p>
              </div>
          </div>

          <div class="contact-form">
              <div class="form-header">
                  <h2>Got a project in mind?</h2>
                  <p>Please write to us.</p>
              </div>
              <form>
                  <input type="text" placeholder="Your name" required>
                  <input type="email" placeholder="Your email" required>
                  <textarea placeholder="Your Message" required></textarea>
                  <button type="submit">Send Message <span>→</span></button>
              </form>
          </div>
      </section>`;

  // Add event listeners for project cards and form
  const form = content.querySelector('form');
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Handle form submission
  });
}