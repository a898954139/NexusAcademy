import React, { useState } from 'react'
import "./SharedPage.css";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'courses',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you for your interest! We will contact you soon.')
        setFormData({ name: '', email: '', phone: '', interest: 'courses', message: '' })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="page">
            <section className="page-hero">
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p>Start your trading journey with Nexus Academy</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <p>We're here to answer your questions and help you begin your trading journey.</p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="method-icon">📧</div>
                                    <div>
                                        <strong>Email</strong>
                                        <a href="mailto:contact@nexustrading.academy">contact@nexustrading.academy</a>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <div className="method-icon">📍</div>
                                    <div>
                                        <strong>Location</strong>
                                        <p>Klang, Selangor, Malaysia</p>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <div className="method-icon">🌐</div>
                                    <div>
                                        <strong>Service Area</strong>
                                        <p>Southeast Asia</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container">
                            <h2>Send Us a Message</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your name"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+60 12 345 6789"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="interest">I'm Interested In</label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                    >
                                        <option value="courses">Course Enrollment</option>
                                        <option value="signals">Trading Signals</option>
                                        <option value="consultation">Free Consultation</option>
                                        <option value="community">Community Membership</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder="Tell us about your trading goals..."
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                    Send Message
                                </button>

                                <p className="form-note">
                                    * We typically respond within 24 hours
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section faq-section">
                <div className="container container-narrow">
                    <h2 className="text-center">Frequently Asked Questions</h2>
                    <div className="faq-list">
                        <div className="faq-item">
                            <h4>Do I need prior trading experience?</h4>
                            <p>
                                No! Our Stage 1-3 foundation courses are designed for complete beginners.
                                We'll teach you everything from scratch.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>How long does it take to complete the course?</h4>
                            <p>
                                Most students complete the core curriculum (Stages 1-7) in 2-6 months,
                                depending on their pace and dedication.
                            </p>
                        </div>
                        <div className="faq-item">
                            <h4>Can I learn while working full-time?</h4>
                            <p>
                                Absolutely! Our courses are self-paced with recorded lessons, and you can learn
                                according to your schedule.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage