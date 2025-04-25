import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = ({ onHireMeClick }) => {
    const [text, setText] = useState('');
    const words = [
        "Frontend-Developer",
        "MERN-stack-Developer",
        "Software-Engineer",
    ];

    useEffect(() => {
        const displayWord = async (word) => {
            return new Promise((resolve) => {
                setText(word); // Set the word immediately
                setTimeout(() => {
                    resolve();
                }, 2000); // Show word for 2 seconds
            });
        };

        const removeWord = () => {
            return new Promise((resolve) => {
                const letterInterval = setInterval(() => {
                    if (text.length > 0) {
                        setText((prev) => prev.slice(0, -1));
                    } else {
                        clearInterval(letterInterval);
                        resolve();
                    }
                }, 700); // Adjust timing for letter removal
            });
        };

        const cycleWords = async () => {
            while (true) {
                for (let i = 0; i < words.length; i++) {
                    await displayWord(words[i]);
                    await removeWord();
                }
            }
        };

        cycleWords();

        // Clean up on unmount
        return () => {
            setText('');
        };
    }, []);

    return (
        <div className="home-container">
            <div className="left-part">
                <div className="title">Hello, I'M</div>
                <div className="name">AMDE</div>
                <div className="surname">HAIMANOT</div>
                <div className="role">
                    
                    <span className="bold">{text}</span>
                </div>
                <button className="hire-button" onClick={onHireMeClick}>
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
                    <a href="mailto:amdecassopia@gmail.com" title="Email">
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