import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import "./SharedPage.css";

const CommunityPage = () => {
    const { t } = useLanguage()

    return (
        <div className="page">
            <section className="page-hero">
                <div className="container">
                    <div className="hero-content fade-in-up" style={{ margin: "0 auto" }}>
                        <h1>{t({ en: 'The Nexus Family', 'zh-cn': '纽克斯社区家庭', 'zh-tw': '紐克斯社區家庭' })}</h1>
                        <p>{t({ en: "Where professional traders support each other's growth", 'zh-cn': '专业交易员互相支持共同成长的地方', 'zh-tw': '專業交易員互相支持共同成長的地方' })}</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container-narrow">
                    <div className="content-box fade-in-up" style={{ background: 'transparent', boxShadow: 'none', border: 'none', padding: 0 }}>
                        <div className="glass-card" style={{ padding: 'var(--spacing-2xl)' }}>
                            <h2 style={{ color: 'var(--color-text-primary)' }}>{t({ en: 'Welcome to Our Community', 'zh-cn': '欢迎来到我们的社区', 'zh-tw': '歡迎來到我們的社區' })}</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                                {t({ 
                                    en: "At Nexus Academy, we're more than just a trading school - we're a family. Our community-first approach ensures every member has the support network needed for long-term trading success.",
                                    'zh-cn': '在纽克斯学院，我们不仅仅是一所交易学校——我们是一个大家庭。我们社区为先的方法确保每位成员都能获得长期交易成功所需的支持网络。',
                                    'zh-tw': '在紐克斯學院，我們不僅僅是一所交易學校——我們是一個大家庭。我們社區為先的方法確保每位成員都能獲得長期交易成功所需的支持網絡。'
                                })}
                            </p>

                            <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
                                {t({ en: 'Community Values', 'zh-cn': '社区价值观', 'zh-tw': '社區價值觀' })}
                            </h3>
                            <div className="values-list" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '0 0 2rem 0' }}>
                                <div className="value-item" style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                                    <strong style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}>👨‍👩‍👧‍👦 {t({ en: 'Family-First', 'zh-cn': '家庭优先', 'zh-tw': '家庭優先' })}</strong>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{t({ en: 'We treat each member as part of the Nexus family', 'zh-cn': '我们将每位成员视为纽克斯家族的一部分', 'zh-tw': '我們將每位成員視為紐克斯家族的一部分' })}</p>
                                </div>
                                <div className="value-item" style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                                    <strong style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}>🤝 {t({ en: 'Mutual Support', 'zh-cn': '互助支持', 'zh-tw': '互助支持' })}</strong>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{t({ en: 'Experienced traders mentor newcomers', 'zh-cn': '经验丰富的交易者指导新手', 'zh-tw': '經驗豐富的交易者指導新手' })}</p>
                                </div>
                                <div className="value-item" style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                                    <strong style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}>📚 {t({ en: 'Continuous Learning', 'zh-cn': '持续学习', 'zh-tw': '持續學習' })}</strong>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{t({ en: 'Regular webinars, market analysis, and strategy sessions', 'zh-cn': '定期网络研讨会、市场分析和策略会议', 'zh-tw': '定期網絡研討會、市場分析和策略會議' })}</p>
                                </div>
                                <div className="value-item" style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                                    <strong style={{ color: 'var(--color-gold)', display: 'block', marginBottom: '0.5rem' }}>🎯 {t({ en: 'Accountability', 'zh-cn': '责任感', 'zh-tw': '責任感' })}</strong>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{t({ en: 'Trading journals, progress tracking, and peer feedback', 'zh-cn': '交易日记、进度跟踪及同行反馈', 'zh-tw': '交易日記、進度跟蹤及同行反饋' })}</p>
                                </div>
                            </div>

                            <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '0.5rem', marginBottom: '1.5rem', color: 'var(--color-text-primary)' }}>
                                {t({ en: 'Member Benefits', 'zh-cn': '会员福利', 'zh-tw': '會員福利' })}
                            </h3>
                            <ul className="benefits-list" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0 }}>
                                {[
                                    t({ en: '24/7 Community Chat Access', 'zh-cn': '每天 24 小时社区探讨', 'zh-tw': '每日 24 小時社區探討' }),
                                    t({ en: 'Weekly Live Market Analysis', 'zh-cn': '每周实时市场分析', 'zh-tw': '每週實時市場分析' }),
                                    t({ en: 'Monthly Trading Challenges', 'zh-cn': '每月交易挑战', 'zh-tw': '每月交易挑戰' }),
                                    t({ en: 'Peer Mentorship Program', 'zh-cn': '同行导师计划', 'zh-tw': '同行導師計劃' }),
                                    t({ en: 'Exclusive Events & Webinars', 'zh-cn': '独家活动与在线研讨会', 'zh-tw': '獨家活動與在線研討會' }),
                                    t({ en: 'Lifetime Learning Resources', 'zh-cn': '终身学习资源', 'zh-tw': '終身學習資源' })
                                ].map((benefit, i) => (
                                    <li key={i} style={{ background: 'rgba(255,255,255,0.02)', padding: '1rem', border: '1px solid rgba(195,163,67,0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--color-text-secondary)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span style={{ color: 'var(--color-gold)' }}>✓</span> {benefit}
                                    </li>
                                ))}
                            </ul>

                            <div className="cta-box">
                                <h3>{t({ en: 'Join the Nexus Family', 'zh-cn': '加入纽克斯大家庭', 'zh-tw': '加入紐克斯大家庭' })}</h3>
                                <p>{t({ en: "Become part of Southeast Asia's premier trading community", 'zh-cn': '成为东南亚顶尖交易社区的一员', 'zh-tw': '成為東南亞頂尖交易社區的一員' })}</p>
                                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                                    {t({ en: 'Get Started', 'zh-cn': '立即开始', 'zh-tw': '立即開始' })}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CommunityPage