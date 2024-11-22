// Import images
import member1Image from './assets/shanthi.jpeg';
import member2Image from './assets/sixten.png';
import member3Image from './assets/swarna09.png';
import './about.css';
export default function loadAbout(content) {
    content.innerHTML = `
        <section class="about">
            <h1>About us</h1>
            <p class="team-intro">Here we present "Our Visionary Team" We're a diverse group of tech enthusiasts, problem solvers, and creative minds working together to deliver exceptional software solutions.</p>
            
            <div class="team-grid">
                <div class="team-card">
                    <img src="${member1Image}" alt="Team Member" width="150" height="150">
                    <div class="member-info">
                        <h3>Shanthi Priya Parvatham</h3>
                        <span class="role">Assistant Professor | Aspiring Front-End Developer</span>
                        <p>Shanthi is a passionate and versatile professional with a unique blend of experience and skills. With 4 years as an Assistant Professor in an engineering college, she has been instrumental in mentoring future engineers and fostering a love for learning. Her dedication to growth and innovation led her to pursue a Front-End Development course at Hyper Island. Her background in engineering and her growing expertise in front-end technologies make her a valuable asset, capable of blending technical knowledge with creative problem-solving. She also loves spending time with her kids, whose energy and imagination inspire her every day.</p>
                        <div class="connect">
                            <h4>Connect with Shanthi:</h4>
                            <div class="social-links">
                                <a href="https://linkedin.com/in/shanthipriyaparvatham/" target="_blank" class="social-link">
                                    <i class="fab fa-linkedin"></i> LinkedIn
                                </a>
                                <a href="mailto:shanthi.parvatham@hyperisland.se" class="social-link">
                                    <i class="fas fa-envelope"></i> Email
                                </a>
                                <a href="tel:+46734730394" class="social-link">
                                    <i class="fas fa-phone"></i> Phone
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="team-card">
                    <img src="${member2Image}" alt="Team Member" width="150" height="150">
                    <div class="member-info">
                        <h3>Sixten Lovén Turdén</h3>
                        <span class="role">Assistant Professor | Aspiring Front-End Developer</span>
                        <p>Sixten is a dynamic and passionate front-end developer with a knack for tackling challenges and creating innovative, user-friendly websites. Although his major in gymnasium was social science, his growing fascination with computers and applications led him to pursue a Front-End Development course at Hyper Island. As the "young champ" of our team, Sixten brings fresh ideas to every project. He thrives on crafting fun and engaging user experiences. When he's not coding, he enjoys playing games, with his favorite being Darkest Dungeon. He also cherishes spending time with his family, maintaining a great work-life balance.</p>
                        <div class="connect">
                            <h4>Connect with Sixten:</h4>
                            <div class="social-links">
                                <a href="https://www.linkedin.com/se/sixten-turden-09r85c9a/" target="_blank" class="social-link">
                                    <i class="fab fa-linkedin"></i> LinkedIn
                                </a>
                                <a href="mailto:sixten.turden@hyperisland.se" class="social-link">
                                    <i class="fas fa-envelope"></i> Email
                                </a>
                                <a href="tel:+46734730300" class="social-link">
                                    <i class="fas fa-phone"></i> Phone
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="team-card">
                    <img src="${member3Image}" alt="Team Member" width="250" height="250">
                    <div class="member-info">
                        <h3>Swarna Lekha Kanakaraj </h3>
                        <span class="role">UX/UI Designer | Aspiring Front-End Developer</span>
                        <p>With 3 years of experience as a UX/UI Designer, Swarna Lekha has a strong foundation in creating intuitive and visually appealing user interfaces. She is currently pursuing a Front-End Development course at Hyper Island to expand her skills and transition into a full-stack front-end developer role. Swarna is passionate about continuous learning and is excited to integrate her design expertise with development skills to build seamless and engaging user experiences. Outside of work, she enjoys socializing and spending time with friends. Known for her enthusiastic personality, Swarna is always open to new ideas and discussions.</p>
                        <div class="connect">
                            <h4>Connect with Swarna:</h4>
                            <div class="social-links">
                                <a href="https://www.linkedin.com/in/swarna-lekha-05a82a9a/" target="_blank" class="social-link">
                                    <i class="fab fa-linkedin"></i> LinkedIn
                                </a>
                                <a href="mailto:swarnalekhaswarna95@gmail.com" class="social-link">
                                    <i class="fas fa-envelope"></i> Email
                                </a>
                                <a href="tel:+46734730394" class="social-link">
                                    <i class="fas fa-phone"></i> Phone
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Similar team cards for other members -->
            </div>
        </section>`;

    // Add event listeners for social links
    const socialLinks = content.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.href.startsWith('mailto:') || link.href.startsWith('tel:')) return;
            e.preventDefault();
            window.open(link.href, '_blank');
        });
    });
}