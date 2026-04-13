import React, { useState } from 'react'
import { useLanguage } from '../context/useLanguage'
import "./SharedPage.css";

const ContactPage = () => {
    const { t } = useLanguage()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: 'courses',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(t({ en: 'Thank you for your interest! We will contact you soon.', 'zh-cn': '感谢您的关注！我们将尽快联系您。', 'zh-tw': '感謝您的關注！我們將盡快聯繫您。' }))
        setFormData({ name: '', email: '', phone: '', interest: 'courses', message: '' })
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="page">
            <section className="page-hero">
                <div className="container">
                    <div className="hero-content fade-in-up" style={{ margin: "0 auto" }}>
                        <h1>{t({ en: 'Get in Touch', 'zh-cn': '与我们联系', 'zh-tw': '與我們聯繫' })}</h1>
                        <p>{t({ en: 'Start your trading journey with Nexus Academy', 'zh-cn': '与纽克斯学院一起开始您的交易之旅', 'zh-tw': '與紐克斯學院一起開始您的交易之旅' })}</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        <div className="contact-info fade-in-up">
                            <h2>{t({ en: 'Contact Information', 'zh-cn': '联系方式', 'zh-tw': '聯繫方式' })}</h2>
                            <p style={{ color: 'var(--color-text-secondary)' }}>{t({ en: "We're here to answer your questions and help you begin your trading journey.", 'zh-cn': '我们随时准备回答您的问题，助您开启交易之旅。', 'zh-tw': '我們隨時準備回答您的問題，助您開啟交易之旅。' })}</p>

                            <div className="contact-methods">
                                <div className="contact-method">
                                    <div className="method-icon">📧</div>
                                    <div>
                                        <strong>{t({ en: 'Email', 'zh-cn': '电子邮件', 'zh-tw': '電子郵件' })}</strong>
                                        <a href="mailto:contact@nexustrading.academy">contact@nexustrading.academy</a>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <div className="method-icon">📍</div>
                                    <div>
                                        <strong>{t({ en: 'Location', 'zh-cn': '位置', 'zh-tw': '位置' })}</strong>
                                        <p>{t({ en: 'Klang, Selangor, Malaysia', 'zh-cn': '雪兰莪巴生，马来西亚', 'zh-tw': '雪蘭莪巴生，馬來西亞' })}</p>
                                    </div>
                                </div>
                                <div className="contact-method">
                                    <div className="method-icon">🌐</div>
                                    <div>
                                        <strong>{t({ en: 'Service Area', 'zh-cn': '服务地区', 'zh-tw': '服務地區' })}</strong>
                                        <p>{t({ en: 'Southeast Asia', 'zh-cn': '东南亚地区', 'zh-tw': '東南亞地區' })}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-container fade-in-up stagger-1">
                            <h2>{t({ en: 'Send Us a Message', 'zh-cn': '留言给我们', 'zh-tw': '留言給我們' })}</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">{t({ en: 'Full Name *', 'zh-cn': '全名 *', 'zh-tw': '全名 *' })}</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder={t({ en: 'Your name', 'zh-cn': '您的名字', 'zh-tw': '您的名字' })}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">{t({ en: 'Email Address *', 'zh-cn': '电子邮件 *', 'zh-tw': '電子郵件 *' })}</label>
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
                                    <label htmlFor="phone">{t({ en: 'Phone Number', 'zh-cn': '电话号码', 'zh-tw': '電話號碼' })}</label>
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
                                    <label htmlFor="interest">{t({ en: "I'm Interested In", 'zh-cn': '我感兴趣的是', 'zh-tw': '我感興趣的是' })}</label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                    >
                                        <option value="courses">{t({ en: 'Course Enrollment', 'zh-cn': '课程报名', 'zh-tw': '課程報名' })}</option>
                                        <option value="signals">{t({ en: 'Trading Signals', 'zh-cn': '交易信号', 'zh-tw': '交易信號' })}</option>
                                        <option value="consultation">{t({ en: 'Free Consultation', 'zh-cn': '免费咨询', 'zh-tw': '免費諮詢' })}</option>
                                        <option value="community">{t({ en: 'Community Membership', 'zh-cn': '社区会员', 'zh-tw': '社區會員' })}</option>
                                        <option value="other">{t({ en: 'Other Inquiry', 'zh-cn': '其他询问', 'zh-tw': '其他詢問' })}</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">{t({ en: 'Message *', 'zh-cn': '信息 *', 'zh-tw': '信息 *' })}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder={t({ en: 'Tell us about your trading goals...', 'zh-cn': '告诉我们您的交易目标...', 'zh-tw': '告訴我們您的交易目標...' })}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-lg mt-4" style={{ width: '100%' }}>
                                    {t({ en: 'Send Message', 'zh-cn': '发送信息', 'zh-tw': '發送信息' })}
                                </button>

                                <p className="form-note">
                                    {t({ en: '* We typically respond within 24 hours', 'zh-cn': '* 我们通常会在 24 小时内回复', 'zh-tw': '* 我們通常會在 24 小時內回復' })}
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section faq-section">
                <div className="container container-narrow">
                    <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>{t({ en: 'Frequently Asked Questions', 'zh-cn': '常见问题', 'zh-tw': '常見問題' })}</h2>
                    <div className="faq-list">
                        <div className="faq-item fade-in-up">
                            <h4>{t({ en: 'Do I need prior trading experience?', 'zh-cn': '我需要有交易经验吗？', 'zh-tw': '我需要有交易經驗嗎？' })}</h4>
                            <p>
                                {t({ en: "No! Our Stage 1-3 foundation courses are designed for complete beginners. We'll teach you everything from scratch.", 'zh-cn': '不需要！我们的 1-3 阶段基础课程专为零基础者设计。我们将从头开始教授您一切。', 'zh-tw': '不需要！我們的 1-3 階段基礎課程專為零基礎者設計。我們將從頭開始教授您一切。' })}
                            </p>
                        </div>
                        <div className="faq-item fade-in-up stagger-1">
                            <h4>{t({ en: 'How long does it take to complete the course?', 'zh-cn': '完成课程需要多长时间？', 'zh-tw': '完成課程需要多長時間？' })}</h4>
                            <p>
                                {t({ en: 'Most students complete the core curriculum (Stages 1-7) in 2-6 months, depending on their pace and dedication.', 'zh-cn': '大多数学生在 2-6 个月内完成核心课程（阶段 1-7），具体取决于他们的进度和投入。', 'zh-tw': '大多數學生在 2-6 個月內完成核心課程（階段 1-7），具體取決於他們的進度和投入。' })}
                            </p>
                        </div>
                        <div className="faq-item fade-in-up stagger-2">
                            <h4>{t({ en: 'Can I learn while working full-time?', 'zh-cn': '我可以在全职工作的同时学习吗？', 'zh-tw': '我可以在全職工作同時學習嗎？' })}</h4>
                            <p>
                                {t({ en: 'Absolutely! Our courses are self-paced with recorded lessons, and you can learn according to your schedule.', 'zh-cn': '绝对可以！我们的课程提供录播课程，您可以按照自己的节奏和时间安排学习。', 'zh-tw': '絕對可以！我們的課程提供錄播課程，您可以按照自己的節奏和時間安排學習。' })}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage