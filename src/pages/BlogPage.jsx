import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import "./SharedPage.css";

const BlogPage = () => {
    const { t } = useLanguage()

    const articles = [
        {
            title: t({ en: 'Understanding Fair Value Gaps in ICT Trading', 'zh-cn': '理解 ICT 交易中的合理价值缺口', 'zh-tw': '理解 ICT 交易中的合理價值缺口' }),
            category: 'ICT/SMC',
            excerpt: t({ en: 'Learn how to identify and trade Fair Value Gaps for high-probability entries', 'zh-cn': '学习如何识别并交易合理价值缺口以获取高概率入场点', 'zh-tw': '學習如何識別並交易合理價值缺口以獲取高概率入場點' }),
            date: 'Dec 8, 2025'
        },
        {
            title: t({ en: 'Gold Trading Strategy for Asian Session', 'zh-cn': '针对亚洲时段的黄金交易策略', 'zh-tw': '針對亞洲時段的黃金交易策略' }),
            category: t({ en: 'Market Analysis', 'zh-cn': '市场分析', 'zh-tw': '市場分析' }),
            excerpt: t({ en: 'Optimize your XAUUSD trading during Asian timezone sessions', 'zh-cn': '在亚洲时区时段优化您的 XAUUSD 交易', 'zh-tw': '在亞洲時區時段優化您的 XAUUSD 交易' }),
            date: 'Dec 5, 2025'
        },
        {
            title: t({ en: 'Risk Management: The Foundation of Success', 'zh-cn': '风险管理：成功的基础', 'zh-tw': '風險管理：成功的基礎' }),
            category: t({ en: 'Education', 'zh-cn': '教育', 'zh-tw': '教育' }),
            excerpt: t({ en: 'Why protecting capital is more important than chasing profits', 'zh-cn': '为什么保护资金比追逐利润更重要', 'zh-tw': '為什麼保護資金比追逐利潤更重要' }),
            date: 'Dec 1, 2025'
        },
        {
            title: t({ en: 'London Kill Zone: Complete Guide', 'zh-cn': '伦敦猎杀区：完整指南', 'zh-tw': '倫敦獵殺區：完整指南' }),
            category: 'ICT/SMC',
            excerpt: t({ en: 'Master the 08:00-11:00 GMT session for institutional setups', 'zh-cn': '掌握 08:00-11:00 GMT 时段的机构交易设置', 'zh-tw': '掌握 08:00-11:00 GMT 時段的機構交易設置' }),
            date: 'Nov 28, 2025'
        }
    ]

    return (
        <div className="page">
            <section className="page-hero">
                <div className="container">
                    <div className="hero-content fade-in-up" style={{ margin: "0 auto" }}>
                        <h1>{t({ en: 'Trading Resources & Insights', 'zh-cn': '交易资源与见解', 'zh-tw': '交易資源與見解' })}</h1>
                        <p>{t({ en: 'Educational content to elevate your trading knowledge', 'zh-cn': '旨在提升您交易知识的教育内容', 'zh-tw': '旨在提升您交易知識的教育內容' })}</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="articles-grid">
                        {articles.map((article, index) => (
                            <article key={index} className="article-card fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="article-category">{article.category}</div>
                                <h3>{article.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>{article.excerpt}</p>
                                <div className="article-meta">
                                    <span className="article-date">📅 {article.date}</span>
                                    <a href="#" className="article-link">{t({ en: 'Read More →', 'zh-cn': '阅读更多 →', 'zh-tw': '閱讀更多 →' })}</a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogPage