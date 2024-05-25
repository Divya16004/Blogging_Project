import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa'; // Import icons from Font Awesome

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p>Email: info@example.com</p>
                    <p>Phone: +1234567890</p>
                </div>
                <div className="about-us">
                    <h3>About Us</h3>
                    <p>Welcome to Explore Era!
                        At Explore Era, we believe that every journey is an opportunity for discovery, connection, and growth. Our passion for travel fuels our desire to share unique experiences, hidden gems, and insightful tips to inspire your next adventure.</p>
                </div>
                <div className="social-icons">
                    <a href="https://www.instagram.com"><FaInstagram /></a>
                    <a href="https://www.youtube.com"><FaYoutube /></a>
                    <a href="https://www.facebook.com"><FaFacebook /></a>
                </div>
                <div className='footer_copyright'><p>&copy; 2024 EXPLORE ERA</p></div>
                
            </div>
        </footer>
    );
}

export default Footer;
