import React, { useState } from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submittedData, setSubmittedData] = useState(null); // New state for submitted data

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        const updatedSubject = `From: ${formData.name} - ${formData.subject}`;
        console.log('Updated Subject:', updatedSubject);
        
        // Set submitted data to state
        setSubmittedData(formData);
        
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className="contact-section">
            <h1 className="contact-titles">Contact</h1>
            <div className="contact-container">            
                <div className="left-partt">
                    <h2>Just Say Hello</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="subject">Your Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Send Message</button>
                    </form>

                    {/* Render submitted data if available */}
                    {submittedData && (
                        <div className="submitted-data">
                            <h3>Your Submitted Data:</h3>
                            <p><strong>Name:</strong> {submittedData.name}</p>
                            <p><strong>Email:</strong> {submittedData.email}</p>
                            <p><strong>Subject:</strong> {submittedData.subject}</p>
                            <p><strong>Message:</strong> {submittedData.message}</p>
                        </div>
                    )}
                </div>
                <div className="right-partt">
                    <h2>Contact Info</h2>
                    <p>Frontend Developer specializing in creating responsive and user-friendly web applications.</p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <span className="icon">📧</span>
                            <div>
                                <strong>Email:</strong>
                                <div>
                                    <a href="mailto:amdecassopia@gmail.com">amdecassopia@gmail.com</a>
                                </div>
                                <div>
                                    <a href="mailto:amdeh2y.com">amdeh2y.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="icon">📞</span>
                            <div>
                                <strong>Phone:</strong>
                                <div>
                                    <a href="tel:+251907121842">(+251) 907121842</a>
                                </div>
                                <div>
                                    <a href="tel:+251912374262">(+251) 912374262</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-item">
                            <span className="icon">🏠</span>
                            <div>
                                <strong>Address:</strong>
                                <div>123 Main St, City, Ethiopia</div>
                                <div>456 Another St, Addis-Ababa, Ethiopia</div>
                            </div>
                        </div>
                    </div>
                    <div className="additional-info">
                        <p>
                            🌟 Explore my portfolio and connect with me on social media! Let's collaborate and create something amazing together! 🚀
                        </p>
                    </div>
                    <div className="logo-containers">
                        <a href="https://github.com/Amde-88" className="logos" title="GitHub">
                            <img src={require('../port-images/gitt.png')} alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/Amde-Haimanot" className="logos" title="LinkedIn">
                            <img className="logo" src={require('../port-images/link.png')} alt="AMDE" />
                        </a>
                        <a href="https://www.instagram.com/AmdeCassopia" className="logos" title="Instagram">
                            <img className="logo" src={require('../port-images/insta.png')} alt="AMDE" />
                        </a>
                        <a href="mailto:amdecassopia@gmail.com" title="Email">
                            <img className="logos" src={require('../port-images/emails.png')} alt="AMDE" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;