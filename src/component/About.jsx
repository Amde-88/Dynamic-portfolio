import React from 'react';
import './About.css';
import './Skills.css';
import AmdeResume from '../assets/Amde-Resume.pdf'; // Correct import path

const About = () => {
    const handleDownloadCV = () => {
        // Method 1: Using the imported file
        window.open(AmdeResume, '_blank');
        
        // OR Method 2: Trigger download
        const link = document.createElement('a');
        link.href = AmdeResume;
        link.download = 'Amde-Haimanot-Resume.pdf'; // Better filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // About data
    const aboutData = {
        birthday: 'September 21, 2003',
        phone: '(+251) 907121842',
        email: 'amdecassopia@gmail.com',
        from: 'Addis Ababa, Ethiopia',
        freelance: 'Available for projects',
        linkedIn: 'https://www.linkedin.com/in/Amde-Haimanot/',
        gitHub: 'https://github.com/Amde-88',
    };

    return (
        <div className="about-container">
            <div className="left-parts">
                <img className="about-image" src={require('../port-images/cassop.jpg')} alt="Amde Haimanot" />
            </div>
            <div className="right-parts">
                <div className="titles">About Me</div>
                <div className="greeting">Hi There! I'M Amde Haimanot</div>
                <div className="roles">Frontend Developer</div>
                <div className="description">
                    Welcome to my portfolio! I'm Amde Haimanot,  passionate Frontend Developer with a strong focus on creating dynamic and user-friendly web applications. With a background in Information Systems from Wokite University and a keen eye for web development, I specialize in transforming ideas into beautifully functional experiences.
                </div>
                
                <div className="info-container">
                    <div className="info-labels">
                        <p><strong>Birthday:</strong></p>
                        <p><strong>Phone:</strong></p>
                        <p><strong>Email:</strong></p>
                        <p><strong>From:</strong></p>
                        <p><strong>Freelance:</strong></p>
                        <p><strong>LinkedIn:</strong></p>
                        <p><strong>GitHub:</strong></p>
                    </div>
                    <div className="info-descriptions">
                        <p>{aboutData.birthday}</p>
                        <p>{aboutData.phone}</p>
                        <p><a href={`mailto:${aboutData.email}`}>{aboutData.email}</a></p>
                        <p>{aboutData.from}</p>
                        <p>{aboutData.freelance}</p>
                        <p><a href={aboutData.linkedIn} target="_blank" rel="noopener noreferrer">Amde-Haimanot</a></p>
                        <p><a href={aboutData.gitHub} target="_blank" rel="noopener noreferrer">Amde-88</a></p>
                    </div>
                </div>
                
                <button className="cv-button" onClick={handleDownloadCV}>
                    Download CV
                </button>
            </div>
            
            {/* Services Section */}
            <div className="services">
                <div className="services-title">SERVICES</div>
                <div className="services-container">
                    {[
                        {
                            logo: require('../port-images/respons.png'),
                            title: 'Responsive Web Design',
                            description: 'Responsive Web Design (RWD) ensures web applications render well on a variety of devices and screen sizes by utilizing fluid grids, flexible images, and media queries.'
                        },
                        {
                            logo: require('../port-images/SPA.webp'),
                            title: 'Single Page Applications',
                            description: 'A Single Page Application (SPA) loads a single HTML page and dynamically updates content as the user interacts with the app, often using frameworks like React or Angular.'
                        },
                        {
                            logo: require('../port-images/UI.png'),
                            title: 'UI/UX Design',
                            description: 'UI/UX Design focuses on creating user-friendly, visually appealing interfaces, ensuring the application is intuitive, efficient, and enjoyable to use.'
                        }
                    ].map((service, index) => (
                        <div className="service-container" key={index}>
                            <img 
                                src={service.logo} 
                                alt={`${service.title} Logo`} 
                                className="service-logo" 
                            />
                            <div className="service-title">{service.title}</div>
                            <div className="service-description">{service.description}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <Skills />
        </div>
    );
};

const Skills = () => {
    const skillsData = [
        { name: 'Responsive Design', level: 81 },
        { name: 'React', level: 95 },
        { name: 'Mobile Development', level: 72 },
        { name: 'UX/UI Design', level: 88 },
        { name: 'Git', level: 92 },
        { name: 'API integration', level: 77 },
    ];

    return (
        <div className="skills-container">
            <h2>Skills</h2>
            <h3>I possess a comprehensive set of skills relevant to my role as a Frontend Developer, covering all essential areas of expertise.</h3>
            <p>As a Frontend Developer, I specialize in Javascript to create dynamic, interactive web applications. My experience with MongoDB allows for efficient data management and storage. I leverage React for building user interfaces and utilize Git and GitHub for effective version control and collaboration. Additionally, I focus on API integration and responsive design to ensure seamless user experiences across devices, though my primary focus is on web development rather than mobile apps.</p>
            <div className="skills-list">
                {skillsData.map((skill, index) => (
                    <div className="skill-item" key={index}>
                        <div className="skill-name">
                            {skill.name}
                            <div className="skill-number">Level: {skill.level}%</div>
                        </div>
                        <div className="skill-bar">
                            <div
                                className="skill-progress"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;