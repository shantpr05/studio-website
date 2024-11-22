import heroImage from './assets/hero_image.png';
import './home.css';
export default function loadHome(content) {
    content.innerHTML = `
        <section class="hero">
            <div class="hero-content">
                <span class="service-tag">End to End Service</span>
                <h1>Every thing to grow your business, all in one place</h1>
                <p>Share your ideas of the project, we will provide you the complete solution from research to development. By "Transforming complex challenges into elegant solutions", we assure "Where innovation meets implementation".</p>
                <button class="signup-btn">Sign Up <span>→</span></button>
            </div>
            <div class="hero-image">
                <img src="${heroImage}" alt="Technology Illustration">
            </div>
        </section>

        <section class="features">
            <div class="features-header">
                <h2>Get complete visibility and control</h2>
                <p>Clean Tech helps you collaborate more smoothly and communicate better.</p>
            </div>

            <div class="features-grid">
                <div class="feature-card">
                    <div class="icon">👥</div>
                    <h3>Customer management</h3>
                    <p>we monitor each and every progress. There will be a Regular status updates.</p>
                </div>

                <div class="feature-card">
                    <div class="icon">📅</div>
                    <h3>Scheduling</h3>
                    <p>There will be regular Client meetings scheduled. We provide Calendar Integration and Automated notifications.</p>
                </div>

                <div class="feature-card">
                    <div class="icon">🛠️</div>
                    <h3>Maintenance & Support</h3>
                    <p>We assure you 24/7 technical support. There will be regular Security updates and System monitoring.</p>
                </div>

                <div class="feature-card">
                    <div class="icon">💰</div>
                    <h3>Quotes and estimates</h3>
                    <p>We provide Clear Pricing Structure. We follow efficient Budget utilization.</p>
                </div>
            </div>

        </section>
        <section class='demo'>
            <div class="cta-section">
                <h2>Book for free meeting!</h2>
                <button class="schedule-demo">Schedule a Demo</button>
            </div>;
        </section>`

    // Add event listeners
    const signupBtn = content.querySelector('.signup-btn');
    const scheduleDemo = content.querySelector('.schedule-demo');
    
    signupBtn.addEventListener('click', () => {
        // Handle signup action
    });
    
    scheduleDemo.addEventListener('click', () => {
        // Handle demo scheduling
    });
}