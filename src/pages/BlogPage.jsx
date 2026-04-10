import React from 'react'
import { Link } from 'react-router-dom'
import "./SharedPage.css";

const BlogPage = () => {
    const articles = [
        {
            title: 'Understanding Fair Value Gaps in ICT Trading',
            category: 'ICT/SMC',
            excerpt: 'Learn how to identify and trade Fair Value Gaps for high-probability entries',
            date: 'Dec 8, 2025'
        },
        {
            title: 'Gold Trading Strategy for Asian Session',
            category: 'Market Analysis',
            excerpt: 'Optimize your XAUUSD trading during Asian timezone sessions',
            date: 'Dec 5, 2025'
        },
        {
            title: 'Risk Management: The Foundation of Success',
            category: 'Education',
            excerpt: 'Why protecting capital is more important than chasing profits',
            date: 'Dec 1, 2025'
        },
        {
            title: 'London Kill Zone: Complete Guide',
            category: 'ICT/SMC',
            excerpt: 'Master the 08:00-11:00 GMT session for institutional setups',
            date: 'Nov 28, 2025'
        }
    ]

    return (
        <div className="page">
            <section className="page-hero">
                <div className="container">
                    <h1>Trading Resources & Insights</h1>
                    <p>Educational content to elevate your trading knowledge</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="articles-grid">
                        {articles.map((article, index) => (
                            <article key={index} className="article-card">
                                <div className="article-category">{article.category}</div>
                                <h3>{article.title}</h3>
                                <p>{article.excerpt}</p>
                                <div className="article-meta">
                                    <span className="article-date">📅 {article.date}</span>
                                    <a href="#" className="article-link">Read More →</a>
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