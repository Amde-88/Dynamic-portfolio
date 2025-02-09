import React from 'react';
import './Review.css'; // Import the CSS styles

// Sample reviews data with feedback and rating
const reviews = [
  {
    reviewer: 'Sami',
    feedback: 'As a Frontend Developer, I was highly impressed by the interface and functionality of the Cassopia Hotel website. The attention to detail in the design truly reflects the quality I strive for in my own projects.',
    rating: 5,
    date: '2023-10-01',
    tags: ['Exceptional Design', 'User-Friendly', 'Attention to Detail'],
  },
  {
    reviewer: 'Alazar',
    feedback: 'The modern amenities showcased in the Cassopia Hotel website exemplify excellent web development practices. It’s inspiring to see how user experience is prioritized, something I aim to achieve in my own work.',
    rating: 4,
    date: '2023-09-20',
    tags: ['Modern Design', 'User Experience', 'Quality Development'],
  },
  {
    reviewer: 'Fikir',
    feedback: 'Collaborating on projects like the door-to-door service delivery application has been a rewarding experience. It’s great to see how effective teamwork can lead to innovative solutions, much like the seamless experience provided by the Cassopia Hotel website.',
    rating: 4,
    date: '2023-08-15',
    tags: ['Team Collaboration', 'Innovative Solutions', 'User-Centric'],
  },
];

const Review = () => {
  return (
    <div className="reviews">
      <h2>Reviews</h2>

      {/* Introduction about yourself */}
      <div className="introduction">
        <p>
          I am a Frontend Developer specializing in web development with expertise in React, Bootstrap, JavaScript, and other frontend technologies. I have worked on various projects, including the fully functional website for Cassopia Hotel and my personal portfolio. I graduated with a degree in Information Systems and collaborated with friends on a door-to-door service delivery mobile application, utilizing Git for version control and collaboration.
        </p>
      </div>

      <div className="review-cards">
        {reviews.map((review, index) => (
          <div className="review-card" key={index}>
            <h4>{review.reviewer} <span>({review.date})</span></h4>
            <div className="feedback">
              <p>{review.feedback}</p>
              <div className="rating">
                {'★'.repeat(review.rating)} {/* Display stars based on rating */}
              </div>
            </div>
            <div className="tags">
              {review.tags.map((tag, i) => (
                <span className="tag" key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Images placed outside the review-cards section */}
      <div className="image">
        <img className="about-images" src={require('../port-images/sami-ct.jpg')} alt="review" style={{ width: '100px', height: '77px' }} />
        <img className="about-images" src={require('../port-images/carsystem.jpg')} alt="review" style={{ width: '100px', height: '77px' }} />
        <img className="about-images" src={require('../port-images/cassop.jpg')} alt="review" style={{ width: '100px', height: '77px' }} />
      </div>

      <div className="text-row">
        <div className="text-item">
          <div>Samuel Ketema</div>
          <div>Frontend Developer</div>
        </div>
        <div className="text-item">
          <div>Alazar Asrat</div>
          <div>Executive Director</div>
        </div>
        <div className="text-item">
          <div>Fikir Haimanot</div>
          <div>Product Manager</div>
        </div>
      </div>
    </div>
  );
};

export default Review;