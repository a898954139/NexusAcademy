import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import './AboutPage.css'
import '../styles/global.css'
import './SharedPage.css'

const AboutPage = () => {
    const { t } = useLanguage()

    return (
        <div className="about-page">
            <section className="page-hero">
                <div className="container">
                    <div className="hero-content fade-in-up" style={{ margin: "0 auto" }}>
                        <h1>{t({ en: 'About Nexus Academy', 'zh-cn': '关于纽克斯学院', 'zh-tw': '關於紐克斯學院' })}</h1>
                        <p>{t({ en: 'The Hub of Trading Excellence', 'zh-cn': '登峰造极，融贯财富之道', 'zh-tw': '登峰造極，融貫財富之道' })}</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container-narrow">
                    <div className="insights-preview-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-xl)' }}>
                        <div className="glass-card fade-in-up p-xl" style={{ padding: 'var(--spacing-xl)' }}>
                            <h3 style={{ color: 'var(--color-gold)' }}>{t({ en: 'Our Mission', 'zh-cn': '我们的使命', 'zh-tw': '我們的使命' })}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
                                {t({
                                    en: 'Empowering traders through quality education, professional strategies, and community support to achieve sustainable trading success.',
                                    'zh-cn': '通过优质的教育、专业的策略和社区支持，赋能交易者实现可持续的交易成功。',
                                    'zh-tw': '透過優質的教育、專業的策略和社區支持，賦能交易者實現可持續的交易成功。'
                                })}
                            </p>
                        </div>
                        <div className="glass-card fade-in-up stagger-1 p-xl" style={{ padding: 'var(--spacing-xl)' }}>
                            <h3 style={{ color: 'var(--color-gold)' }}>{t({ en: 'Our Vision', 'zh-cn': '我们的愿景', 'zh-tw': '我們的願景' })}</h3>
                            <p style={{ color: 'var(--color-text-secondary)', marginTop: '1rem' }}>
                                {t({
                                    en: "To be Southeast Asia's premier trading academy - where professional excellence meets family values.",
                                    'zh-cn': '成为东南亚顶尖的交易学院——让专业卓越与家庭价值观在此交汇。',
                                    'zh-tw': '成為東南亞頂尖的交易學院——讓專業卓越與家庭價值觀在此交匯。'
                                })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="content-box">
                        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '3rem', alignItems: 'center' }}>
                            <div className="founder-image fade-in-up" autoFocus>
                                <div style={{ background: 'var(--gradient-gold)', width: '100%', aspectRatio: '1', borderRadius: 'var(--radius-lg)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--color-bg-dark)' }}>
                                    <h2 style={{ color: 'var(--color-bg-dark)', marginBottom: 0 }}>RC</h2>
                                    <p style={{ fontWeight: 600, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{t({ en: 'Founder', 'zh-cn': '创始人', 'zh-tw': '創始人' })}</p>
                                </div>
                            </div>
                            <div className="founder-story fade-in-up stagger-1">
                                <h2>{t({ en: 'Meet Ryan Chan', 'zh-cn': '认识 Ryan Chan', 'zh-tw': '認識 Ryan Chan' })}</h2>
                                <p style={{ color: 'var(--color-gold-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 600 }}>
                                    {t({ en: 'Founder & Lead Mentor', 'zh-cn': '创始人兼首席导师', 'zh-tw': '創始人兼首席導師' })}
                                </p>
                                <div style={{ color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <p>{t({
                                        en: 'Ryan Chan founded Nexus Academy with a vision to bring institutional-grade trading education to Southeast Asian traders.',
                                        'zh-cn': 'Ryan Chan 创立了纽克斯学院（Nexus Academy），致力于将机构级交易教育带给东南亚的交易者。',
                                        'zh-tw': 'Ryan Chan 創立了紐克斯學院（Nexus Academy），致力於將機構級交易教育帶給東南亞的交易者。'
                                    })}</p>
                                    <p>{t({
                                        en: 'With years of experience mastering ICT/SMC strategies and a proven track record, Ryan developed the proprietary high-probability system that has helped thousands of students achieve trading success.',
                                        'zh-cn': '凭借多年精通 ICT/SMC 策略的经验和可靠的业绩记录，Ryan 开发了独家高胜率系统，已帮助数千名学生取得交易成功。',
                                        'zh-tw': '憑藉多年精通 ICT/SMC 策略的經驗和可靠的業績記錄，Ryan 開發了獨家高勝率系統，已幫助數千名學生取得交易成功。'
                                    })}</p>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '2rem' }}>
                                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(195,163,67,0.1)' }}>
                                        <span style={{ color: 'var(--color-gold)' }}>✓</span> {t({ en: '5+ Years Trading', 'zh-cn': '五年以上交易经验', 'zh-tw': '五年以上交易經驗' })}
                                    </div>
                                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(195,163,67,0.1)' }}>
                                        <span style={{ color: 'var(--color-gold)' }}>✓</span> {t({ en: 'ICT/SMC Specialist', 'zh-cn': 'ICT/SMC 专家', 'zh-tw': 'ICT/SMC 專家' })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="cta-box fade-in-up">
                        <h2>{t({ en: 'Join the Nexus Family', 'zh-cn': '加入纽克斯大家庭', 'zh-tw': '加入紐克斯大家庭' })}</h2>
                        <p>{t({
                            en: 'Experience the difference of learning in a community that truly cares about your trading success and family financial security.',
                            'zh-cn': '在一个真正关心您的交易成功和家庭财务安全的社区中，体验与众不同的学习之旅。',
                            'zh-tw': '在一個真正關心您的交易成功和家庭財務安全的社區中，體驗與眾不同的學習之旅。'
                        })}</p>
                        <Link to="/contact" className="btn btn-primary btn-lg mt-4" style={{ marginTop: '1.5rem', display: 'inline-block' }}>
                            {t({ en: 'Start Your Journey Today', 'zh-cn': '立即开始您的旅程', 'zh-tw': '立即開始您的旅程' })}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutPage