import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
import heroBg from '../assets/hero_gold_black.png'
import heroTexture from '../assets/hero_texture.png'

// Hoist static data completely outside component to avoid re-creation on every render
const stats = [
    { number: '2,000+', label: 'Active Traders', trend: '+12% this month' },
    { number: '3-Step', label: 'Framework', trend: 'Structure, Liquidity, Execution' },
    { number: '24/7', label: 'Mentorship', trend: 'Global Community' }
]

const methodologies = [
    {
        step: '01',
        title: 'Market Structure & Context',
        desc: 'Escape the noise. We teach you how to map the true intent of the market using institutional framing.'
    },
    {
        step: '02',
        title: 'Liquidity Engineering',
        desc: 'Understand why setups fail. Focus on where stops reside and how smart money engineers liquidity.'
    },
    {
        step: '03',
        title: 'Disciplined Execution',
        desc: 'No more forced trades. Execute only when context, liquidity, and time align perfectly.'
    }
]

const communityHighlights = [
    {
        title: 'Weekly Outlook & Review',
        desc: 'Start the week with a clear macro bias. End it with rigorous trade reviews.'
    },
    {
        title: 'Real-Time Mentorship',
        desc: 'Not a signal group. A collaborative hub to validate ideas and improve precision.'
    },
    {
        title: 'Live Trading Sessions',
        desc: 'Watch the framework applied in real-time. Learn the psychology of patience.'
    }
]

const recentInsights = [
    { title: 'The Anatomy of a High-Probability Setup', tag: 'Methodology' },
    { title: 'Navigating Q3 Gold Volatility', tag: 'Market Update' },
    { title: 'Why 90% of SMC Traders Still Fail', tag: 'Mindset' }
]

const HomePage = () => {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-background" style={{ backgroundImage: `url(${heroBg})` }}>
                    <div className="hero-texture" style={{ backgroundImage: `url(${heroTexture})` }}></div>
                </div>
                <div className="hero-gradient-overlay"></div>
                <div className="container" style={{ zIndex: 2, position: 'relative' }}>
                    <div className="hero-content fade-in-up">
                        <div className="hero-badge">A New Paradigm in Trading Education</div>
                        <h1 className="hero-title">
                            From Market Noise to
                            <br /><span className="text-gradient">Systematic Clarity</span>
                        </h1>
                        <p className="hero-subtitle">Calm authority. Proven methodology. Long-term edge.</p>
                        <p className="hero-description">
                            Nexus Academy is not a signal group. We are a premier institution dedicated to transforming scattered information into an elegant, repeatable framework for market execution.
                        </p>
                        <div className="hero-cta">
                            <Link to="/community" className="btn btn-primary btn-lg">
                                Join The Community
                            </Link>
                            <Link to="/blog" className="btn btn-secondary btn-lg">
                                Read Insights
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof & Trust Section */}
            <section className="trust-section">
                <div className="container">
                    <div className="trust-grid">
                        {stats.map((stat, i) => (
                            <div key={i} className="trust-card fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                                <div className="trust-number text-gradient">{stat.number}</div>
                                <div className="trust-label">{stat.label}</div>
                                <div className="trust-trend">{stat.trend}</div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="testimonial-feature fade-in-up">
                        <blockquote className="editorial-quote">
                            "Nexus gave me the one thing I needed most: a filtering system to say no to mediocre setups. It’s quiet, professional, and devastatingly effective."
                        </blockquote>
                        <div className="quote-author">— A. L., Prop Firm Funded Trader</div>
                    </div>
                </div>
            </section>

            {/* Audience Fit Section */}
            <section className="audience-section section-lg">
                <div className="container">
                    <div className="section-header text-center fade-in-up">
                        <h2>Is Nexus For You?</h2>
                        <p>We filter for seriousness. This ecosystem thrives on professional discipline.</p>
                    </div>
                    <div className="audience-grid fade-in-up">
                        <div className="audience-card audience-yes">
                            <h3><span className="icon">✓</span> This is for you if...</h3>
                            <ul>
                                <li>You have market experience but lack a consistent framework.</li>
                                <li>You are tired of emotional, reactive trading.</li>
                                <li>You want to understand the why behind price movements.</li>
                                <li>You value long-term skill over short-term gratification.</li>
                            </ul>
                        </div>
                        <div className="audience-card audience-no">
                            <h3><span className="icon">✗</span> This is NOT for you if...</h3>
                            <ul>
                                <li>You are just looking for signals to copy blindly.</li>
                                <li>You want to get rich quick without putting in screen time.</li>
                                <li>You refuse to keep a trading journal.</li>
                                <li>You let ego dictate your risk management.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Preview Section */}
            <section className="methodology-section section-lg">
                <div className="container container-narrow">
                    <div className="section-header fade-in-up">
                        <div className="eyebrow">Our Framework</div>
                        <h2>The Logic of Liquidity</h2>
                    </div>
                    <div className="methodology-flow">
                        {methodologies.map((item, i) => (
                            <div key={i} className="method-step fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                                <div className="method-number">{item.step}</div>
                                <div className="method-content">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Community Section */}
            <section className="community-preview-section section-lg">
                <div className="container">
                    <div className="grid grid-2 align-items-center">
                        <div className="community-text fade-in-up">
                            <h2>An Ecosystem<br />of Excellence</h2>
                            <p className="lead-text" style={{ color: "var(--color-text-secondary)", marginBottom: "2rem" }}>Join a community where quality of execution is valued over quantity of trades. We don't scream at charts; we patiently wait for setups to align with our edge.</p>
                            
                            <div className="community-list">
                                {communityHighlights.map((hl, i) => (
                                    <div key={i} className="community-list-item mb-lg">
                                        <h4 style={{ color: "var(--color-gold-light)", marginBottom: "0.25rem" }}>{hl.title}</h4>
                                        <p style={{ color: "var(--color-text-secondary)" }}>{hl.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="community-visual fade-in-up delay-2">
                           <div className="glass-card mockup-card">
                               <div className="mockup-header">
                                   <div className="mockup-dots"><span></span><span></span><span></span></div>
                                   <div className="mockup-title">Nexus Weekly Outlook</div>
                               </div>
                               <div className="mockup-body">
                                   <div className="mockup-line w-80"></div>
                                   <div className="mockup-line w-60"></div>
                                   <div className="mockup-chart"></div>
                                   <div className="mockup-line w-90 mt-sm"></div>
                                   <div className="mockup-line w-40"></div>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Preview & CTA Footer */}
            <section className="content-cta-section section-lg text-center">
                 <div className="container">
                     <div className="eyebrow fade-in-up">Latest Insights</div>
                     <h2 className="fade-in-up delay-1">Sharpen Your Edge</h2>
                     
                     <div className="insights-preview-grid fade-in-up delay-2">
                         {recentInsights.map((insight, i) => (
                             <div key={i} className="insight-mini-card">
                                 <span className="badge badge-outline">{insight.tag}</span>
                                 <h4 className="mt-sm">{insight.title}</h4>
                                 <span className="read-more">Read Article &rarr;</span>
                             </div>
                         ))}
                     </div>

                     <div className="final-cta-box fade-in-up delay-3 mt-xl">
                         <h2>Ready to evolve?</h2>
                         <p>Elevate your market perspective today.</p>
                         <div className="hero-cta justify-center mt-md" style={{ justifyContent: 'center' }}>
                             <Link to="/community" className="btn btn-primary btn-lg">Apply for Membership</Link>
                             <Link to="/blog" className="btn btn-outline btn-lg">Explore Framework</Link>
                         </div>
                     </div>
                 </div>
            </section>
        </div>
    )
}

export default HomePage
