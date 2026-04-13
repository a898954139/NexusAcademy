import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import './HomePage.css'
import heroBg from '../assets/hero_gold_black.png'
import heroTexture from '../assets/hero_texture.png'

const HomePage = () => {
    const { t } = useLanguage()

    const stats = [
        {
            number: '2,000+',
            label: t({ en: 'Active Traders', 'zh-cn': '活跃交易员', 'zh-tw': '活躍交易員' }),
            trend: t({ en: '+12% this month', 'zh-cn': '本月 +12%', 'zh-tw': '本月 +12%' })
        },
        {
            number: t({ en: '3-Step', 'zh-cn': '三步骤', 'zh-tw': '三步驟' }),
            label: t({ en: 'Framework', 'zh-cn': '交易框架', 'zh-tw': '交易框架' }),
            trend: t({ en: 'Structure, Liquidity, Execution', 'zh-cn': '结构、流动性、执行', 'zh-tw': '結構、流動性、執行' })
        },
        {
            number: '24/7',
            label: t({ en: 'Mentorship', 'zh-cn': '导师辅导', 'zh-tw': '導師輔導' }),
            trend: t({ en: 'Global Community', 'zh-cn': '全球社区', 'zh-tw': '全球社區' })
        }
    ]

    const methodologies = [
        {
            step: '01',
            title: t({ en: 'Market Structure & Context', 'zh-cn': '市场结构与背景', 'zh-tw': '市場結構與背景' }),
            desc: t({ en: 'Escape the noise. We teach you how to map the true intent of the market using institutional framing.', 'zh-cn': '摆脱噪音。我们教您如何用机构框架映射市场的真实意图。', 'zh-tw': '擺脫噪音。我們教您如何用機構框架映射市場的真實意圖。' })
        },
        {
            step: '02',
            title: t({ en: 'Liquidity Engineering', 'zh-cn': '流动性工程', 'zh-tw': '流動性工程' }),
            desc: t({ en: 'Understand why setups fail. Focus on where stops reside and how smart money engineers liquidity.', 'zh-cn': '理解交易设置失败的原因。专注于止损所在位置以及聪明资金如何操控流动性。', 'zh-tw': '理解交易設置失敗的原因。專注於止損所在位置以及聰明資金如何操控流動性。' })
        },
        {
            step: '03',
            title: t({ en: 'Disciplined Execution', 'zh-cn': '纪律性执行', 'zh-tw': '紀律性執行' }),
            desc: t({ en: 'No more forced trades. Execute only when context, liquidity, and time align perfectly.', 'zh-cn': '不再强行交易。仅在背景、流动性和时间完美对齐时才执行。', 'zh-tw': '不再強行交易。僅在背景、流動性和時間完美對齊時才執行。' })
        }
    ]

    const communityHighlights = [
        {
            title: t({ en: 'Weekly Outlook & Review', 'zh-cn': '每周展望与复盘', 'zh-tw': '每週展望與復盤' }),
            desc: t({ en: 'Start the week with a clear macro bias. End it with rigorous trade reviews.', 'zh-cn': '以清晰的宏观偏向开始每周，以严格的交易复盘结束每周。', 'zh-tw': '以清晰的宏觀偏向開始每週，以嚴格的交易復盤結束每週。' })
        },
        {
            title: t({ en: 'Real-Time Mentorship', 'zh-cn': '实时导师辅导', 'zh-tw': '即時導師輔導' }),
            desc: t({ en: 'Not a signal group. A collaborative hub to validate ideas and improve precision.', 'zh-cn': '不是信号群组，而是一个协作中心，用于验证想法并提高精度。', 'zh-tw': '不是信號群組，而是一個協作中心，用於驗證想法並提高精度。' })
        },
        {
            title: t({ en: 'Live Trading Sessions', 'zh-cn': '实盘直播', 'zh-tw': '實盤直播' }),
            desc: t({ en: 'Watch the framework applied in real-time. Learn the psychology of patience.', 'zh-cn': '观看框架实时应用。学习耐心交易的心理学。', 'zh-tw': '觀看框架實時應用。學習耐心交易的心理學。' })
        }
    ]

    const recentInsights = [
        {
            title: t({ en: 'The Anatomy of a High-Probability Setup', 'zh-cn': '高概率交易设置的剖析', 'zh-tw': '高概率交易設置的剖析' }),
            tag: t({ en: 'Methodology', 'zh-cn': '方法论', 'zh-tw': '方法論' })
        },
        {
            title: t({ en: 'Navigating Q3 Gold Volatility', 'zh-cn': '驾驭第三季度黄金波动', 'zh-tw': '駕馭第三季度黃金波動' }),
            tag: t({ en: 'Market Update', 'zh-cn': '市场更新', 'zh-tw': '市場更新' })
        },
        {
            title: t({ en: 'Why 90% of SMC Traders Still Fail', 'zh-cn': '为什么 90% 的 SMC 交易者仍然失败', 'zh-tw': '為什麼 90% 的 SMC 交易者仍然失敗' }),
            tag: t({ en: 'Mindset', 'zh-cn': '交易心态', 'zh-tw': '交易心態' })
        }
    ]

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
                        <div className="hero-badge">{t({ en: 'A New Paradigm in Trading Education', 'zh-cn': '交易教育的全新范式', 'zh-tw': '交易教育的全新範式' })}</div>
                        <h1 className="hero-title">
                            {t({ en: 'From Market Noise to', 'zh-cn': '从市场噪音到', 'zh-tw': '從市場噪音到' })}
                            <br /><span className="text-gradient">{t({ en: 'Systematic Clarity', 'zh-cn': '系统性清晰', 'zh-tw': '系統性清晰' })}</span>
                        </h1>
                        <p className="hero-subtitle">{t({ en: 'Calm authority. Proven methodology. Long-term edge.', 'zh-cn': '沉稳权威。经过验证的方法论。长期优势。', 'zh-tw': '沉穩權威。經過驗證的方法論。長期優勢。' })}</p>
                        <p className="hero-description">
                            {t({ en: 'Nexus Academy is not a signal group. We are a premier institution dedicated to transforming scattered information into an elegant, repeatable framework for market execution.', 'zh-cn': '纽克斯学院不是信号群组。我们是一所顶尖机构，致力于将零散信息转化为优雅、可复制的市场执行框架。', 'zh-tw': '紐克斯學院不是信號群組。我們是一所頂尖機構，致力於將零散信息轉化為優雅、可複製的市場執行框架。' })}
                        </p>
                        <div className="hero-cta">
                            <Link to="/community" className="btn btn-primary btn-lg">
                                {t({ en: 'Join The Community', 'zh-cn': '加入社区', 'zh-tw': '加入社區' })}
                            </Link>
                            <Link to="/blog" className="btn btn-secondary btn-lg">
                                {t({ en: 'Read Insights', 'zh-cn': '阅读洞察', 'zh-tw': '閱讀洞察' })}
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
                            {t({
                                en: '"Nexus gave me the one thing I needed most: a filtering system to say no to mediocre setups. It\'s quiet, professional, and devastatingly effective."',
                                'zh-cn': '"纽克斯给了我最需要的东西：一个筛选系统，让我对平庸的设置说不。它安静、专业且效果显著。"',
                                'zh-tw': '"紐克斯給了我最需要的東西：一個篩選系統，讓我對平庸的設置說不。它安靜、專業且效果顯著。"'
                            })}
                        </blockquote>
                        <div className="quote-author">— A. L., {t({ en: 'Prop Firm Funded Trader', 'zh-cn': '自营公司资助交易员', 'zh-tw': '自營公司資助交易員' })}</div>
                    </div>
                </div>
            </section>

            {/* Audience Fit Section */}
            <section className="audience-section section-lg">
                <div className="container">
                    <div className="section-header text-center fade-in-up">
                        <h2>{t({ en: 'Is Nexus For You?', 'zh-cn': '纽克斯适合您吗？', 'zh-tw': '紐克斯適合您嗎？' })}</h2>
                        <p>{t({ en: 'We filter for seriousness. This ecosystem thrives on professional discipline.', 'zh-cn': '我们筛选认真的人。这个生态系统以专业纪律为核心。', 'zh-tw': '我們篩選認真的人。這個生態系統以專業紀律為核心。' })}</p>
                    </div>
                    <div className="audience-grid fade-in-up">
                        <div className="audience-card audience-yes">
                            <h3><span className="icon">✓</span> {t({ en: 'This is for you if...', 'zh-cn': '适合您，如果…', 'zh-tw': '適合您，如果…' })}</h3>
                            <ul>
                                <li>{t({ en: 'You have market experience but lack a consistent framework.', 'zh-cn': '您有市场经验但缺乏一致的框架。', 'zh-tw': '您有市場經驗但缺乏一致的框架。' })}</li>
                                <li>{t({ en: 'You are tired of emotional, reactive trading.', 'zh-cn': '您厌倦了情绪化、被动的交易。', 'zh-tw': '您厭倦了情緒化、被動的交易。' })}</li>
                                <li>{t({ en: 'You want to understand the why behind price movements.', 'zh-cn': '您想了解价格运动背后的原因。', 'zh-tw': '您想了解價格運動背後的原因。' })}</li>
                                <li>{t({ en: 'You value long-term skill over short-term gratification.', 'zh-cn': '您重视长期技能而非短期利益。', 'zh-tw': '您重視長期技能而非短期利益。' })}</li>
                            </ul>
                        </div>
                        <div className="audience-card audience-no">
                            <h3><span className="icon">✗</span> {t({ en: 'This is NOT for you if...', 'zh-cn': '不适合您，如果…', 'zh-tw': '不適合您，如果…' })}</h3>
                            <ul>
                                <li>{t({ en: 'You are just looking for signals to copy blindly.', 'zh-cn': '您只是在寻找盲目跟随的信号。', 'zh-tw': '您只是在尋找盲目跟隨的信號。' })}</li>
                                <li>{t({ en: 'You want to get rich quick without putting in screen time.', 'zh-cn': '您想不花时间就快速致富。', 'zh-tw': '您想不花時間就快速致富。' })}</li>
                                <li>{t({ en: 'You refuse to keep a trading journal.', 'zh-cn': '您拒绝记录交易日记。', 'zh-tw': '您拒絕記錄交易日記。' })}</li>
                                <li>{t({ en: 'You let ego dictate your risk management.', 'zh-cn': '您让自我主导您的风险管理。', 'zh-tw': '您讓自我主導您的風險管理。' })}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Methodology Preview Section */}
            <section className="methodology-section section-lg">
                <div className="container container-narrow">
                    <div className="section-header fade-in-up">
                        <div className="eyebrow">{t({ en: 'Our Framework', 'zh-cn': '我们的框架', 'zh-tw': '我們的框架' })}</div>
                        <h2>{t({ en: 'The Logic of Liquidity', 'zh-cn': '流动性的逻辑', 'zh-tw': '流動性的邏輯' })}</h2>
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
                            <h2>{t({ en: 'An Ecosystem\nof Excellence', 'zh-cn': '卓越的生态系统', 'zh-tw': '卓越的生態系統' }).split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</h2>
                            <p className="lead-text" style={{ color: "var(--color-text-secondary)", marginBottom: "2rem" }}>
                                {t({ en: "Join a community where quality of execution is valued over quantity of trades. We don't scream at charts; we patiently wait for setups to align with our edge.", 'zh-cn': '加入一个重视执行质量而非交易数量的社区。我们不对图表大喊大叫；我们耐心等待设置与我们的优势对齐。', 'zh-tw': '加入一個重視執行質量而非交易數量的社區。我們不對圖表大喊大叫；我們耐心等待設置與我們的優勢對齊。' })}
                            </p>
                            
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
                                   <div className="mockup-title">{t({ en: 'Nexus Weekly Outlook', 'zh-cn': '纽克斯每周展望', 'zh-tw': '紐克斯每週展望' })}</div>
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
                     <div className="eyebrow fade-in-up">{t({ en: 'Latest Insights', 'zh-cn': '最新洞察', 'zh-tw': '最新洞察' })}</div>
                     <h2 className="fade-in-up delay-1">{t({ en: 'Sharpen Your Edge', 'zh-cn': '磨砺您的优势', 'zh-tw': '磨礪您的優勢' })}</h2>
                     
                     <div className="insights-preview-grid fade-in-up delay-2">
                         {recentInsights.map((insight, i) => (
                             <div key={i} className="insight-mini-card">
                                 <span className="badge badge-outline">{insight.tag}</span>
                                 <h4 className="mt-sm">{insight.title}</h4>
                                 <span className="read-more">{t({ en: 'Read Article →', 'zh-cn': '阅读文章 →', 'zh-tw': '閱讀文章 →' })}</span>
                             </div>
                         ))}
                     </div>

                     <div className="final-cta-box fade-in-up delay-3 mt-xl">
                         <h2>{t({ en: 'Ready to evolve?', 'zh-cn': '准备好进化了吗？', 'zh-tw': '準備好進化了嗎？' })}</h2>
                         <p>{t({ en: 'Elevate your market perspective today.', 'zh-cn': '立即提升您的市场视角。', 'zh-tw': '立即提升您的市場視角。' })}</p>
                         <div className="hero-cta justify-center mt-md" style={{ justifyContent: 'center' }}>
                             <Link to="/community" className="btn btn-primary btn-lg">{t({ en: 'Apply for Membership', 'zh-cn': '申请会员资格', 'zh-tw': '申請會員資格' })}</Link>
                             <Link to="/blog" className="btn btn-outline btn-lg">{t({ en: 'Explore Framework', 'zh-cn': '探索框架', 'zh-tw': '探索框架' })}</Link>
                         </div>
                     </div>
                 </div>
            </section>
        </div>
    )
}

export default HomePage
