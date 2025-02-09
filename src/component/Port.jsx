// src/component/Port.jsx
import React from 'react';
import './Port.css'; // Ensure you import the CSS file
import Review from './Review'; // Import the Review component

// Sample projects data with class names for backgrounds
const projects = [
  {
    title: 'Cassopia Hotel',
    description: 'A luxurious hotel booking system for easy reservations.',
    url: 'https://github.com/Amde-88/Cassopia-hotel',
    className: 'cassopia',
  },
  {
    title: 'Car System',
    description: 'A complete car management system for tracking and managing vehicle and maintenance.',
    url: 'https://github.com/Amde-88/Cassopia-website',
    className: 'car-system', // Class for background
  },
  {
    title: 'Door-to-Door Delivery App',
    description: 'Connects users with experienced service providers through a guarantee of quality and reliability.',
    url: 'https://github.com/Amde-88/hotel-website',
    className: 'door-to-door', // Class for background
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Showcase your skills, projects, and resume.',
    url: 'https://github.com/Amde-88/Amde-Portfolio',
    className: 'portfolio-bg', // Class for background
  },
  {
    title: 'Task Management App',
    description: 'Manage and track tasks with user authentication.',
    url: 'https://github.com/Amde-88/hotel-website',
    className: 'task', // Class for background
  },
  {
    title: 'API Integration',
    description: 'Integrating various APIs for enhanced functionality.',
    url: 'https://github.com/Amde-88/hotel-website',
    className: 'api-integration',
  },
];

// Sample blogs data
const blogs = [
  {
    image: 'https://example.com/designveloper.jpg',
    title: 'Designveloper',
    description: 'Insights into web development trends and technologies.',
    date: '2023-02-01',
    author: 'Designveloper Team',
    link: 'https://designveloper.com',
  },
  {
    image: 'https://example.com/smashing-magazine.jpg',
    title: 'Smashing Magazine',
    description: 'High-quality articles on web development and design best practices.',
    date: '2023-01-15',
    author: 'Smashing Magazine',
    link: 'https://smashingmagazine.com',
  },
  {
    image: 'https://example.com/css-tricks.jpg',
    title: 'CSS-Tricks',
    description: 'Practical tips and tutorials for frontend technologies.',
    date: '2023-01-20',
    author: 'Chris Coyier',
    link: 'https://css-tricks.com',
  },
  {
    image: 'https://example.com/freecodecamp.jpg',
    title: 'freeCodeCamp',
    description: 'A platform offering coding education and a wealth of articles.',
    date: '2023-01-25',
    author: 'freeCodeCamp Team',
    link: 'https://www.freecodecamp.org/news/',
  },
  {
    image: 'https://example.com/devto.jpg',
    title: 'Dev.to',
    description: 'Community-driven articles on various programming topics.',
    date: '2023-01-30',
    author: 'Dev.to Community',
    link: 'https://dev.to',
  },
 
  {
    image: 'https://example.com/hackernoon.jpg',
    title: 'Hacker Noon',
    description: 'Tech publication featuring articles on industry trends.',
    date: '2023-01-05',
    author: 'Hacker Noon Team',
    link: 'https://hackernoon.com',
  },
];

const Port = () => {
  return (
    <div className="portfolio">
      <h2>PORTFOLIO</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className={`project-card ${project.className}`} key={index}>
            <div className="overlay">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="link">+</a>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2>BLOGS</h2>
      <div className="blogs">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
           {/* <img src={blog.image} alt={blog.title} className="blog-image" />*/}
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <p className="blog-date">Published on: {blog.date}</p>
            <p className="blog-author">By: {blog.author}</p>
            <a href={blog.link} className="read-more">Read More</a>
          </div>
        ))}
      </div>

      <Review /> {/* Include the Review component */}
    </div>
  );
};

export default Port;