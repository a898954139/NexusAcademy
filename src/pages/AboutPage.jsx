import React from 'react'
import { Link } from 'react-router-dom'
import './AboutPage.css'

const AboutPage = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <div className="about-hero-content fade-in-up">
                        <h1>About Nexus Academy</h1>
                        <p className="about-subtitle">The Hub of Trading Excellence • 登峰造极，融贯财富之道</p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section">
                <div className="container container-narrow">
                    <div className="mission-vision-grid">
                        <div className="mission-card fade-in-up">
                            <h3>Our Mission</h3>
                            <p>
                                Empowering traders through quality education, professional strategies,
                                and community support to achieve sustainable trading success.
                            </p>
                        </div>
                        <div className="vision-card fade-in-up stagger-1">
                            <h3>Our Vision</h3>
                            <p>
                                To be Southeast Asia's premier trading academy - where professional
                                excellence meets family values.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder Story */}
            <section className="section founder-section">
                <div className="container">
                    <div className="founder-content">
                        <div className="founder-image fade-in-up">
                            <div className="founder-placeholder">
                                <div className="founder-icon">RC</div>
                                <div className="founder-badge">Founder & Lead Mentor</div>
                            </div>
                        </div>
                        <div className="founder-story fade-in-up stagger-1">
                            <h2>Meet Ryan Chan</h2>
                            <p className="founder-title">Founder & Lead Mentor</p>
                            <p>
                                Ryan Chan founded Nexus Academy (evolved from RSI Trading Academy) with a vision
                                to bring institutional-grade trading education to Southeast Asian traders.
                            </p>
                            <p>
                                With years of experience mastering ICT/SMC strategies and a proven track record
                                in Gold (XAUUSD), Forex, and Crypto markets, Ryan developed the proprietary
                                80% win rate system that has helped thousands of students achieve trading success.
                            </p>
                            <p>
                                Ryan's teaching philosophy centers on combining professional excellence with
                                family values - creating a supportive community where traders don't just learn
                                strategies, but develop the discipline, mindset, and risk management skills
                                needed for long-term success.
                            </p>
                            <div className="founder-credentials">
                                <div className="credential">
                                    <strong>✓</strong> 5+ Years Trading Experience
                                </div>
                                <div className="credential">
                                    <strong>✓</strong> ICT/SMC Certified Specialist
                                </div>
                                <div className="credential">
                                    <strong>✓</strong> 2,000+ Students Mentored
                                </div>
                                <div className="credential">
                                    <strong>✓</strong> Prop Firm Qualified Trader
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section values-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Core Values</h2>
                        <p>The principles that guide everything we do</p>
                    </div>
                    <div className="values-grid">
                        <div className="value-card fade-in-up">
                            <div className="value-icon">🎯</div>
                            <h3>Professional Excellence</h3>
                            <p>
                                We maintain the highest standards in education delivery, trading strategies,
                                and student support. Excellence is not just a goal - it's our standard.
                            </p>
                        </div>
                        <div className="value-card fade-in-up stagger-1">
                            <div className="value-icon">👨‍👩‍👧‍👦</div>
                            <h3>Family Values</h3>
                            <p>
                                We're not just an academy - we're the Nexus family. Every member is valued,
                                supported, and encouraged to grow at their own pace.
                            </p>
                        </div>
                        <div className="value-card fade-in-up stagger-2">
                            <div className="value-icon">💎</div>
                            <h3>Integrity & Honesty</h3>
                            <p>
                                No false promises or unrealistic guarantees. We teach real strategies with
                                honest expectations about risks, challenges, and the work required.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content text-center fade-in-up">
                        <h2>Join the Nexus Family</h2>
                        <p>
                            Experience the difference of learning in a community that truly cares
                            about your trading success and family financial security.
                        </p>
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Start Your Journey Today
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage