import React from 'react'
import { Link } from 'react-router-dom'
import './CoursesPage.css'

const CoursesPage = () => {
    const stages = [
        {
            stage: 'Stage 1',
            title: 'Financial Foundations',
            icon: '📘',
            description: 'Build your trading foundation with financial literacy, global systems, and platform mastery.',
            duration: '2-3 weeks'
        },
        {
            stage: 'Stage 2',
            title: 'Global Financial Systems',
            icon: '💼',
            description: 'Master market-moving events and institutional behavior across global markets.',
            duration: '2-3 weeks'
        },
        {
            stage: 'Stage 3',
            title: 'Trading Platforms Mastery',
            icon: '🔧',
            description: 'Achieve professional platform proficiency and fund security.',
            duration: '2-3 weeks'
        },
        {
            stage: 'Stage 4',
            title: 'Market Specialization',
            icon: '📊',
            description: 'Master Gold, Crypto, Forex, and Indices with session-specific strategies.',
            duration: '3-4 weeks'
        },
        {
            stage: 'Stage 5',
            title: 'Chart Analysis Mastery',
            icon: '📈',
            description: 'Read price action like a professional institutional trader.',
            duration: '3-4 weeks'
        },
        {
            stage: 'Stage 6',
            title: 'Technical Indicators Excellence',
            icon: '🔍',
            description: 'Spot momentum shifts and confirm moves with confidence.',
            duration: '3-4 weeks'
        },
        {
            stage: 'Stage 7',
            title: 'ICT/SMC Flagship Program',
            subtitle: 'The 80% Win Rate System',
            icon: '👑',
            description: 'Graduate with complete institutional trading system proven by verified results.',
            duration: '2-3 months',
            featured: true
        },
        {
            stage: 'Stage 8',
            title: 'Elite Development',
            subtitle: 'From Trader to Leader',
            icon: '🌟',
            description: 'Build trading business and create generational wealth.',
            duration: '1 month'
        }
    ]

    return (
        <div className="courses-page">
            {/* Hero */}
            <section className="courses-hero">
                <div className="container">
                    <div className="courses-hero-content fade-in-up">
                        <h1>Professional Trading Education</h1>
                        <p>From beginner to professional trader in 8 comprehensive stages</p>
                    </div>
                </div>
            </section>

            {/* Course Path */}
            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Your Learning Journey</h2>
                        <p>Progressive curriculum designed for sustainable trading success</p>
                    </div>
                    <div className="stages-container">
                        {stages.map((stage, index) => (
                            <div
                                key={index}
                                className={`stage-card ${stage.featured ? 'stage-card-featured' : ''} fade-in-up`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {stage.featured && <div className="stage-badge">Flagship Program</div>}
                                <div className="stage-header">
                                    <div className="stage-icon">{stage.icon}</div>
                                    <div>
                                        <div className="stage-number">{stage.stage}</div>
                                        <h3>{stage.title}</h3>
                                        {stage.subtitle && <div className="stage-subtitle">{stage.subtitle}</div>}
                                    </div>
                                </div>
                                <div className="stage-body">
                                    <div className="stage-duration">⏱ {stage.duration}</div>
                                    <p>{stage.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section timeline-section">
                <div className="container container-narrow">
                    <div className="section-header text-center">
                        <h2>Expected Learning Timeline</h2>
                        <p>Most students complete core curriculum in 2-6 months</p>
                    </div>
                    <div className="learning-timeline">
                        <div className="timeline-milestone fade-in-up">
                            <div className="milestone-month">Month 1</div>
                            <div className="milestone-content">
                                <h4>Foundation Building</h4>
                                <p>Complete Stages 1-3, achieve 5% demo profit</p>
                            </div>
                        </div>
                        <div className="timeline-milestone fade-in-up stagger-1">
                            <div className="milestone-month">Month 2</div>
                            <div className="milestone-content">
                                <h4>Market Specialization</h4>
                                <p>Complete Stages 4-5, achieve 10% live profit</p>
                            </div>
                        </div>
                        <div className="timeline-milestone fade-in-up stagger-2">
                            <div className="milestone-month">Month 3</div>
                            <div className="milestone-content">
                                <h4>Technical Mastery</h4>
                                <p>Complete Stage 6, begin prop firm challenge</p>
                            </div>
                        </div>
                        <div className="timeline-milestone fade-in-up stagger-3">
                            <div className="milestone-month">Month 4-5</div>
                            <div className="milestone-content">
                                <h4>Institutional Trading</h4>
                                <p>Complete Stage 7, pass prop firm evaluation</p>
                            </div>
                        </div>
                        <div className="timeline-milestone fade-in-up stagger-4">
                            <div className="milestone-month">Month 6</div>
                            <div className="milestone-content">
                                <h4>Professional Trader</h4>
                                <p>First withdrawal, Stage 8 consideration</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content text-center fade-in-up">
                        <h2>Ready to Begin Your Journey?</h2>
                        <p>Join thousands of traders who transformed their lives with Nexus Academy</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary btn-lg">
                                Enroll Now
                            </Link>
                            <Link to="/about" className="btn btn-outline btn-lg">
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoursesPage