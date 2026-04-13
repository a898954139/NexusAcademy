import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import './CoursesPage.css'
import './SharedPage.css'

const CoursesPage = () => {
    const { t } = useLanguage()

    const stages = [
        {
            stage: t({ en: 'Stage 1', 'zh-cn': '阶段 1', 'zh-tw': '階段 1' }),
            title: t({ en: 'Financial Foundations', 'zh-cn': '财务基础', 'zh-tw': '財務基礎' }),
            icon: '📘',
            description: t({ en: 'Build your trading foundation with financial literacy, global systems, and platform mastery.', 'zh-cn': '通过金融素养、全球系统和平台精通建立您的交易基础。', 'zh-tw': '透過金融素養、全球系統和平台精通建立您的交易基礎。' }),
            duration: t({ en: '2-3 weeks', 'zh-cn': '2-3周', 'zh-tw': '2-3週' })
        },
        {
            stage: t({ en: 'Stage 2', 'zh-cn': '阶段 2', 'zh-tw': '階段 2' }),
            title: t({ en: 'Global Financial Systems', 'zh-cn': '全球金融系统', 'zh-tw': '全球金融系統' }),
            icon: '💼',
            description: t({ en: 'Master market-moving events and institutional behavior across global markets.', 'zh-cn': '掌握全球市场中推动市场的事件和机构行为。', 'zh-tw': '掌握全球市場中推動市場的事件和機構行為。' }),
            duration: t({ en: '2-3 weeks', 'zh-cn': '2-3周', 'zh-tw': '2-3週' })
        },
        {
            stage: t({ en: 'Stage 3', 'zh-cn': '阶段 3', 'zh-tw': '階段 3' }),
            title: t({ en: 'Trading Platforms Mastery', 'zh-cn': '交易平台精通', 'zh-tw': '交易平台精通' }),
            icon: '🔧',
            description: t({ en: 'Achieve professional platform proficiency and fund security.', 'zh-cn': '实现专业平台熟练度和资金安全。', 'zh-tw': '實現專業平台熟練度和資金安全。' }),
            duration: t({ en: '2-3 weeks', 'zh-cn': '2-3周', 'zh-tw': '2-3週' })
        },
        {
            stage: t({ en: 'Stage 4', 'zh-cn': '阶段 4', 'zh-tw': '階段 4' }),
            title: t({ en: 'Market Specialization', 'zh-cn': '市场专业化', 'zh-tw': '市場專業化' }),
            icon: '📊',
            description: t({ en: 'Master Gold, Crypto, Forex, and Indices with session-specific strategies.', 'zh-cn': '掌握黄金、加密货币、外汇和指数的特定交易时段策略。', 'zh-tw': '掌握黃金、加密貨幣、外匯和指數的特定交易時段策略。' }),
            duration: t({ en: '3-4 weeks', 'zh-cn': '3-4周', 'zh-tw': '3-4週' })
        },
        {
            stage: t({ en: 'Stage 5', 'zh-cn': '阶段 5', 'zh-tw': '階段 5' }),
            title: t({ en: 'Chart Analysis Mastery', 'zh-cn': '图表分析精通', 'zh-tw': '圖表分析精通' }),
            icon: '📈',
            description: t({ en: 'Read price action like a professional institutional trader.', 'zh-cn': '像专业机构交易员一样解读价格行为。', 'zh-tw': '像專業機構交易員一樣解讀價格行為。' }),
            duration: t({ en: '3-4 weeks', 'zh-cn': '3-4周', 'zh-tw': '3-4週' })
        },
        {
            stage: t({ en: 'Stage 6', 'zh-cn': '阶段 6', 'zh-tw': '階段 6' }),
            title: t({ en: 'Technical Indicators Excellence', 'zh-cn': '技术指标卓越', 'zh-tw': '技術指標卓越' }),
            icon: '🔍',
            description: t({ en: 'Spot momentum shifts and confirm moves with confidence.', 'zh-cn': '发现动量转变并充满信心地确认行情。', 'zh-tw': '發現動量轉變並充滿信心地確認行情。' }),
            duration: t({ en: '3-4 weeks', 'zh-cn': '3-4周', 'zh-tw': '3-4週' })
        },
        {
            stage: t({ en: 'Stage 7', 'zh-cn': '阶段 7', 'zh-tw': '階段 7' }),
            title: t({ en: 'ICT/SMC Flagship Program', 'zh-cn': 'ICT/SMC 旗舰课程', 'zh-tw': 'ICT/SMC 旗艦課程' }),
            subtitle: t({ en: 'The 80% Win Rate System', 'zh-cn': '80% 胜率系统', 'zh-tw': '80% 勝率系統' }),
            icon: '👑',
            description: t({ en: 'Graduate with complete institutional trading system proven by verified results.', 'zh-cn': '以经过验证的完整机构交易系统毕业。', 'zh-tw': '以經過驗證的完整機構交易系統畢業。' }),
            duration: t({ en: '2-3 months', 'zh-cn': '2-3个月', 'zh-tw': '2-3個月' }),
            featured: true
        },
        {
            stage: t({ en: 'Stage 8', 'zh-cn': '阶段 8', 'zh-tw': '階段 8' }),
            title: t({ en: 'Elite Development', 'zh-cn': '精英发展', 'zh-tw': '精英發展' }),
            subtitle: t({ en: 'From Trader to Leader', 'zh-cn': '从交易者到领导者', 'zh-tw': '從交易者到領導者' }),
            icon: '🌟',
            description: t({ en: 'Build trading business and create generational wealth.', 'zh-cn': '建立交易业务并创造世代财富。', 'zh-tw': '建立交易業務並創造世代財富。' }),
            duration: t({ en: '1 month', 'zh-cn': '1个月', 'zh-tw': '1個月' })
        }
    ]

    return (
        <div className="courses-page">
            <section className="page-hero">
                <div className="container">
                    <div className="hero-content fade-in-up" style={{ margin: "0 auto" }}>
                        <h1>{t({ en: 'Professional Trading Education', 'zh-cn': '专业交易教育', 'zh-tw': '專業交易教育' })}</h1>
                        <p>{t({ en: 'From beginner to professional trader in 8 comprehensive stages', 'zh-cn': '通过 8 个综合阶段，从初学者成为专业交易员', 'zh-tw': '透過 8 個綜合階段，從初學者成為專業交易員' })}</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: "var(--spacing-xl)" }}>
                        <h2>{t({ en: 'Your Learning Journey', 'zh-cn': '您的学习之旅', 'zh-tw': '您的學習之旅' })}</h2>
                        <p style={{ color: "var(--color-text-secondary)" }}>{t({ en: 'Progressive curriculum designed for sustainable trading success', 'zh-cn': '为实现可持续交易成功而设计的循序渐进课程', 'zh-tw': '為實現可持續交易成功而設計的循序漸進課程' })}</p>
                    </div>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
                        {stages.map((stage, index) => (
                            <div key={index} className="glass-card fade-in-up" style={{ padding: 'var(--spacing-lg)', border: stage.featured ? '1px solid var(--color-gold)' : '1px solid rgba(255,255,255,0.05)', position: 'relative' }}>
                                {stage.featured && <div className="article-category" style={{ position: 'absolute', top: '-12px', right: '20px', background: 'var(--color-bg-dark)' }}>{t({ en: 'Flagship Program', 'zh-cn': '旗舰课程', 'zh-tw': '旗艦課程' })}</div>}
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <div style={{ fontSize: '2rem' }}>{stage.icon}</div>
                                    <div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stage.stage}</div>
                                        <h3 style={{ margin: '0.25rem 0', fontSize: '1.2rem' }}>{stage.title}</h3>
                                        {stage.subtitle && <p style={{ fontSize: '0.85rem', color: 'var(--color-gold-light)', margin: 0 }}>{stage.subtitle}</p>}
                                    </div>
                                </div>
                                <div>
                                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', marginBottom: '1rem' }}>{stage.description}</p>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        <span>⏱</span> {stage.duration}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: "rgba(0,0,0,0.2)" }}>
                <div className="container container-narrow">
                    <div className="text-center" style={{ marginBottom: "var(--spacing-xl)" }}>
                        <h2>{t({ en: 'Expected Learning Timeline', 'zh-cn': '预期学习时间表', 'zh-tw': '預期學習時間表' })}</h2>
                        <p style={{ color: "var(--color-text-secondary)" }}>{t({ en: 'Most students complete core curriculum in 2-6 months', 'zh-cn': '大多数学生在 2-6 个月内完成核心课程', 'zh-tw': '大多數學生在 2-6 個月內完成核心課程' })}</p>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                        {[
                            { m: t({ en: 'Month 1', 'zh-cn': '第 1 个月', 'zh-tw': '第 1 個月' }), t: t({ en: 'Foundation Building', 'zh-cn': '建立基础', 'zh-tw': '建立基礎' }), d: t({ en: 'Complete Stages 1-3, achieve 5% demo profit', 'zh-cn': '完成阶段 1-3，实现 5% 的模拟盈利', 'zh-tw': '完成階段 1-3，實現 5% 的模擬盈利' })},
                            { m: t({ en: 'Month 2', 'zh-cn': '第 2 个月', 'zh-tw': '第 2 個月' }), t: t({ en: 'Market Specialization', 'zh-cn': '市场专业化', 'zh-tw': '市場專業化' }), d: t({ en: 'Complete Stages 4-5, achieve 10% live profit', 'zh-cn': '完成阶段 4-5，实现 10% 的真实盈利', 'zh-tw': '完成階段 4-5，實現 10% 的真實盈利' })},
                            { m: t({ en: 'Month 3', 'zh-cn': '第 3 个月', 'zh-tw': '第 3 個月' }), t: t({ en: 'Technical Mastery', 'zh-cn': '技术掌控', 'zh-tw': '技術掌控' }), d: t({ en: 'Complete Stage 6, begin prop firm challenge', 'zh-cn': '完成阶段 6，开始自营交易公司挑战', 'zh-tw': '完成階段 6，開始自營交易公司挑戰' })},
                            { m: t({ en: 'Month 4-5', 'zh-cn': '第 4-5 个月', 'zh-tw': '第 4-5 個月' }), t: t({ en: 'Institutional Trading', 'zh-cn': '机构交易', 'zh-tw': '機構交易' }), d: t({ en: 'Complete Stage 7, pass prop firm evaluation', 'zh-cn': '完成阶段 7，通过自营公司评估', 'zh-tw': '完成階段 7，通過自營公司評估' })},
                            { m: t({ en: 'Month 6', 'zh-cn': '第 6 个月', 'zh-tw': '第 6 個月' }), t: t({ en: 'Professional Trader', 'zh-cn': '专业交易员', 'zh-tw': '專業交易員' }), d: t({ en: 'First withdrawal, Stage 8 consideration', 'zh-cn': '首次出金，考虑阶段 8 发展', 'zh-tw': '首次出金，考慮階段 8 發展' })}
                        ].map((m, i) => (
                             <div key={i} className="glass-card fade-in-up" style={{ display: 'flex', gap: '2rem', padding: '1.5rem', alignItems: 'center' }}>
                                <div style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', color: 'var(--color-gold)', width: '120px', flexShrink: 0 }}>{m.m}</div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>{m.t}</h4>
                                    <p style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>{m.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <div className="cta-box fade-in-up">
                        <h2>{t({ en: 'Ready to Begin Your Journey?', 'zh-cn': '准备好开始您的旅程了吗？', 'zh-tw': '準備好開始您的旅程了嗎？' })}</h2>
                        <p>{t({ en: 'Join thousands of traders who transformed their lives with Nexus Academy', 'zh-cn': '加入数以千计的交易者，在纽克斯学院改变人生', 'zh-tw': '加入數以千計的交易者，在紐克斯學院改變人生' })}</p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
                            <Link to="/contact" className="btn btn-primary">
                                {t({ en: 'Enroll Now', 'zh-cn': '立刻报名', 'zh-tw': '立刻報名' })}
                            </Link>
                            <Link to="/about" className="btn btn-outline" style={{ border: '1px solid var(--color-surface-lighter)' }}>
                                {t({ en: 'Learn More About Us', 'zh-cn': '了解更多', 'zh-tw': '了解更多' })}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CoursesPage