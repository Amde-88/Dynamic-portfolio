import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submittedData, setSubmittedData] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError(null);

        try {
            const response = await fetch('http://localhost:5000/api/Contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            const data = await response.json();
            console.log('Form submitted successfully:', data);
            
            // Set submitted data to state
            setSubmittedData(formData);
            
            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitError('Failed to submit form. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
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
                        <button type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {submitError && <p className="error-message">{submitError}</p>}
                    </form>

                    {submittedData && (
                        <div className="submitted-data">
                            <h3>Thank you for your message!</h3>
                            <p>We'll get back to you soon.</p>
                            <p><strong>Name:</strong> {submittedData.name}</p>
                            <p><strong>Email:</strong> {submittedData.email}</p>
                        </div>
                    )}
                </div>
                {/* Rest of your component remains the same */}
                {/* ... */}
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2025 Amde. Frontend Developer All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Contact;