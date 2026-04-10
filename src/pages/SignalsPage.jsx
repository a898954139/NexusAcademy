import React from 'react'
import { Link } from 'react-router-dom'
import "./SharedPage.css";

const SignalsPage = () => {
    return (
        <div className="page">
            <section className="page-hero">
                <div className="container">
                    <h1>Trading Signals Service</h1>
                    <p>Professional signal delivery with transparent track record</p>
                </div>
            </section>

            <section className="section">
                <div className="container container-narrow">
                    <div className="content-box">
                        <h2>How Our Signals Work</h2>
                        <p>
                            Our signal service provides real-time trade alerts based on ICT/SMC methodology,
                            targeting London and New York kill zones for maximum probability setups.
                        </p>

                        <div className="signal-features">
                            <div className="feature-item">
                                <div className="feature-icon">📍</div>
                                <div>
                                    <h3>Precise Entry Points</h3>
                                    <p>Fair Value Gaps and Order Blocks for optimal entries</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">🎯</div>
                                <div>
                                    <h3>Clear Risk Management</h3>
                                    <p>Defined stop loss and take profit levels</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">⏰</div>
                                <div>
                                    <h3>Kill Zone Timing</h3>
                                    <p>Signals during high-probability London/NY sessions</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <div className="feature-icon">📊</div>
                                <div>
                                    <h3>Transparent Results</h3>
                                    <p>Honest track record with verified performance</p>
                                </div>
                            </div>
                        </div>

                        <div className="warning-box">
                            <h4>⚠️ Risk Warning</h4>
                            <p>
                                Trading involves substantial risk of loss. Signals are for educational purposes
                                and do not guarantee profits. Past performance does not indicate future results.
                                Only trade with money you can afford to lose.
                            </p>
                        </div>

                        <div className="cta-box">
                            <h3>Interested in Our Signal Service?</h3>
                            <p>Contact us for pricing and subscription details</p>
                            <Link to="/contact" className="btn btn-primary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignalsPage