import React from 'react'
import { Link } from 'react-router-dom'
import "./SharedPage.css";

const CommunityPage = () => {
    return (
        <div className="page">
            <section className="page-hero">
                <div className="container">
                    <h1>The Nexus Family</h1>
                    <p>Where professional traders support each other's growth</p>
                </div>
            </section>

            <section className="section">
                <div className="container container-narrow">
                    <div className="content-box">
                        <h2>Welcome to Our Community</h2>
                        <p>
                            At Nexus Academy, we're more than just a trading school - we're a family.
                            Our community-first approach ensures every member has the support network
                            needed for long-term trading success.
                        </p>

                        <h3>Community Values</h3>
                        <div className="values-list">
                            <div className="value-item">
                                <strong>👨‍👩‍👧‍👦 Family-First</strong>
                                <p>We treat each member as part of the Nexus family</p>
                            </div>
                            <div className="value-item">
                                <strong>🤝 Mutual Support</strong>
                                <p>Experienced traders mentor newcomers</p>
                            </div>
                            <div className="value-item">
                                <strong>📚 Continuous Learning</strong>
                                <p>Regular webinars, market analysis, and strategy sessions</p>
                            </div>
                            <div className="value-item">
                                <strong>🎯 Accountability</strong>
                                <p>Trading journals, progress tracking, and peer feedback</p>
                            </div>
                        </div>

                        <h3>Member Benefits</h3>
                        <ul className="benefits-list">
                            <li>✓ 24/7 Community Chat Access</li>
                            <li>✓ Weekly Live Market Analysis</li>
                            <li>✓ Monthly Trading Challenges</li>
                            <li>✓ Peer Mentorship Program</li>
                            <li>✓ Exclusive Events & Webinars</li>
                            <li>✓ Lifetime Learning Resources</li>
                        </ul>

                        <div className="cta-box">
                            <h3>Join the Nexus Family</h3>
                            <p>Become part of Southeast Asia's premier trading community</p>
                            <Link to="/contact" className="btn btn-primary">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CommunityPage