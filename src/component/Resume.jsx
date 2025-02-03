// Resume.jsx
import React from 'react';
import './Resume.css';
import developLogo from '../port-images/develop.jpg'; // Update the path as necessary
import apiLogo from '../port-images/API.png'; // Update the path as necessary

const Resume = () => {
    return (
        <>
            <div className='resume'>Resume</div>
            <div className="resume-container">
                <div className="left">
                    <h5 className="section-title">
                        <img src={developLogo} alt="Education Logo" className="logo" />
                        Education
                    </h5>
                    <div className="education-row">
                        <div className="education-details">
                            <span>Bachelor of Information Systems</span>
                            <span>2014 - 2017</span>
                            <span>Wokite University</span>
                        </div>
                    </div>

                    <h4>Contact Information</h4> {/* Changed section title for clarity */}
                    <ul>
                        <li>Phone: (+251) 907121842</li>
                        <li>Email: amdecassopia@gmail.com</li>
                        <li>LinkedIn: <a href="https://linkedin.com/in/Amde-Haimanot" target="_blank" rel="noopener noreferrer">linkedin.com/in/Amde-Haimanot</a></li>
                        <li>GitHub: <a href="https://github.com/Amde-88" target="_blank" rel="noopener noreferrer">github.com/Amde-88</a></li>
                    </ul>

                    <h4>Professional Summary</h4>
                    <p>
                        Results-driven web developer with over 5 years of experience in building responsive and user-friendly web applications. 
                        Proficient in JavaScript, React, and Node.js, with a strong focus on optimizing performance and enhancing user experience. 
                        Passionate about leveraging technology to solve real-world problems and committed to continuous learning and improvement.
                    </p>
                    <div className="interests">
                    <h4>Interests</h4>
<p>
    Passionate about web development, API design, and user experience (UX). I enjoy creating user-friendly applications that address real-world challenges. 
    In my free time, I value church and family time, which enrich my life. I'm also an avid football fan and player, enjoying both watching and playing the game. 
    I'm always eager to learn new technologies and improve my skills through online courses and projects.
</p>
        </div>
                </div>

                <div className="right">
                    <h5 className="section-title">
                        <img src={apiLogo} alt="Experience Logo" className="logo" />
                        Experience
                    </h5>
                    <div className="experience-row">
                        <div className="experience-details">
                        <span>Senior Web Developer</span>
                       <span>Devssinia Company</span> {/* Company Name */}
                       <span>2018 - Present</span> {/* Employment Dates */}
                        </div>
                    </div>
                    <p>
                        Developed and maintained web applications, collaborating with designers to implement user-friendly interfaces and optimizing performance.
                    </p>

                    <h4>Skills</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>UI/UX Design</li>
                        <li>Git</li>
                        <li>API Integration</li>
                    </ul>
                    <h4>Projects</h4>
<div className="project">
    <strong>Project Name:</strong> Cassopia-Hotel,  Amdes' Portfolio, Door-to-Door Mobile App
    <br />
    <strong>Technologies Used:</strong> React, Node.js, MongoDB, React-Native, Git, GitHub
    <br />
    <strong>Role:</strong> Frontend and Backend Developer
    <br />
    <strong>Contributions:</strong> 
    <ul>
        <li>Developed the front-end for a user-friendly booking interface.</li>
        <li>Implemented the back-end to manage bookings & accommodations.</li>
        <li>Managed the database using MongoDB for efficient data storage.</li>
        <li>Utilized Git and GitHub for version control and collaboration.</li>
    </ul>
</div>
    <h4>Certifications</h4> 
      <ul>
    <li>Certified Front-End Developer, FreeCodeCamp</li>
    <li>JavaScript Algorithms and Data Structures, FreeCodeCamp</li>
   <li>React Development Certification, Codecademy</li>
   <li>Responsive Web Design Certification, FreeCodeCamp</li>
     </ul>
              
                   
         </div>
       </div>
     </>
    );
};

export default Resume;