import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-col">
                            <div className="footer-logo">
                                <div className="logo-icon">N</div>
                                <div className="logo-text">
                                    <span className="logo-primary">NEXUS</span>
                                    <span className="logo-secondary">ACADEMY</span>
                                </div>
                            </div>
                            <p className="footer-tagline">
                                The Hub of Trading Excellence<br />
                                <span className="footer-tagline-cn">登峰造极，融贯财富之道</span>
                            </p>
                            <p className="footer-description">
                                Empowering traders through quality education, professional strategies,
                                and community support to achieve sustainable trading success.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h4 className="footer-title">Quick Links</h4>
                            <ul className="footer-links">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/courses">Courses</Link></li>
                                <li><Link to="/signals">Trading Signals</Link></li>
                                <li><Link to="/community">Community</Link></li>
                            </ul>
                        </div>

                        {/* Courses */}
                        <div className="footer-col">
                            <h4 className="footer-title">Our Courses</h4>
                            <ul className="footer-links">
                                <li><Link to="/courses">Foundation (Stage 1-3)</Link></li>
                                <li><Link to="/courses">Specialization (Stage 4-6)</Link></li>
                                <li><Link to="/courses">ICT/SMC System (Stage 7)</Link></li>
                                <li><Link to="/courses">Elite Development (Stage 8)</Link></li>
                                <li><Link to="/courses">Premium Packages</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-col">
                            <h4 className="footer-title">Contact Us</h4>
                            <ul className="footer-contact">
                                <li>
                                    <span className="contact-icon">📧</span>
                                    <a href="mailto:contact@nexustrading.academy">
                                        contact@nexustrading.academy
                                    </a>
                                </li>
                                <li>
                                    <span className="contact-icon">📍</span>
                                    <span>Klang, Selangor, Malaysia</span>
                                </li>
                                <li>
                                    <span className="contact-icon">🌐</span>
                                    <span>Southeast Asia</span>
                                </li>
                            </ul>
                            <div className="footer-social">
                                <a href="#" aria-label="Telegram" className="social-link">TG</a>
                                <a href="#" aria-label="WhatsApp" className="social-link">WA</a>
                                <a href="#" aria-label="Instagram" className="social-link">IG</a>
                                <a href="#" aria-label="YouTube" className="social-link">YT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="footer-copyright">
                            © {currentYear} Nexus Academy. All rights reserved.
                        </p>
                        <div className="footer-legal">
                            <Link to="/privacy">Privacy Policy</Link>
                            <Link to="/terms">Terms of Service</Link>
                            <Link to="/disclaimer">Risk Disclaimer</Link>
                        </div>
                    </div>
                    <div className="footer-disclaimer">
                        <p>
                            <strong>Risk Warning:</strong> Trading involves substantial risk of loss.
                            Past performance does not guarantee future results. Only trade with money you can afford to lose.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer