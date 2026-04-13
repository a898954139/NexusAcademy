import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import "./SharedPage.css";

const SignalsPage = () => {
    const { t } = useLanguage()

    return (
        <div className="page">
            <section className="page-hero">
                <div className="container">
                    <div className="hero-content fade-in-up" style={{ margin: "0 auto" }}>
                        <h1>{t({ en: 'Trading Signals Service', 'zh-cn': '交易信号服务', 'zh-tw': '交易信號服務' })}</h1>
                        <p>{t({ en: 'Professional signal delivery with transparent track record', 'zh-cn': '专业的信号发布，记录透明可查', 'zh-tw': '專業的信號發布，記錄透明可查' })}</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container container-narrow">
                    <div className="content-box fade-in-up" style={{ background: 'transparent', boxShadow: 'none', border: 'none', padding: 0 }}>
                        <div className="glass-card" style={{ padding: 'var(--spacing-2xl)' }}>
                            <h2 style={{ color: 'var(--color-text-primary)' }}>{t({ en: 'How Our Signals Work', 'zh-cn': '我们的信号如何运作', 'zh-tw': '我們的信號如何運作' })}</h2>
                            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>
                                {t({ 
                                    en: 'Our signal service provides real-time trade alerts based on ICT/SMC methodology, targeting London and New York kill zones for maximum probability setups.',
                                    'zh-cn': '我们的信号服务基于 ICT/SMC 方法提供实时交易警报，针对伦敦和纽约行情猎杀区以获取最大胜率的交易设置。',
                                    'zh-tw': '我們的信號服務基於 ICT/SMC 方法提供實時交易警報，針對倫敦和紐約行情獵殺區以獲取最大勝率的交易設置。'
                                })}
                            </p>

                            <div className="signal-features" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', margin: '0 0 2rem 0' }}>
                                <div className="feature-item">
                                    <div className="feature-icon">📍</div>
                                    <div>
                                        <h3>{t({ en: 'Precise Entry Points', 'zh-cn': '精准的入场点', 'zh-tw': '精準的入場點' })}</h3>
                                        <p>{t({ en: 'Fair Value Gaps and Order Blocks for optimal entries', 'zh-cn': '合理价值缺口与订单块用于最佳入场', 'zh-tw': '合理價值缺口與訂單塊用於最佳入場' })}</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">🎯</div>
                                    <div>
                                        <h3>{t({ en: 'Clear Risk Management', 'zh-cn': '清晰的风控管理', 'zh-tw': '清晰的風控管理' })}</h3>
                                        <p>{t({ en: 'Defined stop loss and take profit levels', 'zh-cn': '明确的止损和止盈水平', 'zh-tw': '明確的止損和止盈水平' })}</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">⏰</div>
                                    <div>
                                        <h3>{t({ en: 'Kill Zone Timing', 'zh-cn': '猎杀区时机', 'zh-tw': '獵殺區時機' })}</h3>
                                        <p>{t({ en: 'Signals during high-probability London/NY sessions', 'zh-cn': '在高概率的伦敦/纽约交易时段提供信号', 'zh-tw': '在高概率的倫敦/紐約交易時段提供信號' })}</p>
                                    </div>
                                </div>
                                <div className="feature-item">
                                    <div className="feature-icon">📊</div>
                                    <div>
                                        <h3>{t({ en: 'Transparent Results', 'zh-cn': '结果透明', 'zh-tw': '結果透明' })}</h3>
                                        <p>{t({ en: 'Honest track record with verified performance', 'zh-cn': '经过验证的诚实业绩记录', 'zh-tw': '經過驗證的誠實業績記錄' })}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="warning-box">
                                <h4>{t({ en: '⚠️ Risk Warning', 'zh-cn': '⚠️ 风险警告', 'zh-tw': '⚠️ 風險警告' })}</h4>
                                <p>
                                    {t({
                                        en: 'Trading involves substantial risk of loss. Signals are for educational purposes and do not guarantee profits. Past performance does not indicate future results. Only trade with money you can afford to lose.',
                                        'zh-cn': '交易涉及极大风险。信号仅作教育用途，不保证盈利。过往表现不代表未来结果。请使用闲置资金进行交易。',
                                        'zh-tw': '交易涉及極大風險。信號僅作教育用途，不保證盈利。過往表現不代表未來結果。請使用閒置資金進行交易。'
                                    })}
                                </p>
                            </div>

                            <div className="cta-box">
                                <h3>{t({ en: 'Interested in Our Signal Service?', 'zh-cn': '对我们的信号服务感兴趣？', 'zh-tw': '對我們的信號服務感興趣？' })}</h3>
                                <p>{t({ en: 'Contact us for pricing and subscription details', 'zh-cn': '联系我们获取价格和订阅详情', 'zh-tw': '聯繫我們獲取價格和訂閱詳情' })}</p>
                                <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem', display: 'inline-block' }}>
                                    {t({ en: 'Contact Us', 'zh-cn': '联系我们', 'zh-tw': '聯繫我們' })}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignalsPage