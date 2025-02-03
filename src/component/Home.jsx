import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleHireMeClick = () => {
        navigate('/contact'); // Change '/contact' to your desired route
    };

    return (
        <div className="home-container">
            <div className="left-part">
                <div className="title">Hello, I'M</div>
                <div className="name">AMDE</div>
                <div className="surname">HAIMANOT</div>
                <div className="role">Frontend Developer</div>
                <button className="hire-button" onClick={handleHireMeClick}>
                    Hire Me
                </button>

                <div className="logo-container">
                   <a href="https://github.com/Amde-88" className="logo" title="GitHub">
                   <img src={require('../port-images/gitt.png')} alt="GitHub" />
                   </a>
                   
                    <a href="https://www.linkedin.com/in/Amde-Haimanot" className="logo" title="LinkedIn">
                    <img className="logo" src={require('../port-images/link.png')} alt="AMDE" />
                    </a>
                    <a href="https://www.instagram.com/AmdeCassopia" className="logo" title="Instagram">
                    <img className="logo" src={require('../port-images/insta.png')} alt="AMDE" />
                    </a>
                    <a href="mailto:amdecassopia@gmail.com"  title="Email">
                    <img className="logo" src={require('../port-images/emails.png')} alt="AMDE" />
                    </a>
                </div>
            </div>
            <div className="right-part">
                <img className="profile-image" src={require('../port-images/amde.jpg')} alt="AMDE" />
            </div>
        </div>
    );
};

export default Home;