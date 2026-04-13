import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()
    const { t } = useLanguage()

    return (
        <footer className="footer">
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        {/* Company Info */}
                        <div className="footer-col">
                            <div className="footer-logo">
                                <div className="logo-icon">N</div>
                                <div className="logo-text">
                                    <span className="logo-primary">NEXUS</span>
                                    <span className="logo-secondary">ACADEMY</span>
                                </div>
                            </div>
                            <p className="footer-tagline">
                                {t({ 
                                    en: 'The Hub of Trading Excellence',
                                    'zh-cn': '精湛交易的枢纽',
                                    'zh-tw': '精湛交易的樞紐'
                                })}<br />
                                <span className="footer-tagline-cn">
                                    {t({
                                        en: 'Mastering the art of wealth',
                                        'zh-cn': '登峰造极，融贯财富之道',
                                        'zh-tw': '登峰造極，融貫財富之道'
                                    })}
                                </span>
                            </p>
                            <p className="footer-description">
                                {t({
                                    en: 'Empowering traders through quality education, professional strategies, and community support to achieve sustainable trading success.',
                                    'zh-cn': '通过优质的教育、专业的策略和社区支持，赋能交易者实现可持续的交易成功。',
                                    'zh-tw': '透過優質的教育、專業的策略和社區支持，賦能交易者實現可持續的交易成功。'
                                })}
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-col">
                            <h4 className="footer-title">{t({ en: 'Quick Links', 'zh-cn': '快速链接', 'zh-tw': '快速連結' })}</h4>
                            <ul className="footer-links">
                                <li><Link to="/">{t({ en: 'Home', 'zh-cn': '首页', 'zh-tw': '首頁' })}</Link></li>
                                <li><Link to="/about">{t({ en: 'About Us', 'zh-cn': '关于我们', 'zh-tw': '關於我們' })}</Link></li>
                                <li><Link to="/courses">{t({ en: 'Courses', 'zh-cn': '课程', 'zh-tw': '課程' })}</Link></li>
                                <li><Link to="/signals">{t({ en: 'Trading Signals', 'zh-cn': '交易信号', 'zh-tw': '交易信號' })}</Link></li>
                                <li><Link to="/community">{t({ en: 'Community', 'zh-cn': '社区', 'zh-tw': '社區' })}</Link></li>
                            </ul>
                        </div>

                        {/* Courses */}
                        <div className="footer-col">
                            <h4 className="footer-title">{t({ en: 'Our Courses', 'zh-cn': '我们的课程', 'zh-tw': '我們的課程' })}</h4>
                            <ul className="footer-links">
                                <li><Link to="/courses">{t({ en: 'Foundation (Stage 1-3)', 'zh-cn': '基础 (1-3阶段)', 'zh-tw': '基礎 (1-3階段)' })}</Link></li>
                                <li><Link to="/courses">{t({ en: 'Specialization (Stage 4-6)', 'zh-cn': '专业 (4-6阶段)', 'zh-tw': '專業 (4-6階段)' })}</Link></li>
                                <li><Link to="/courses">{t({ en: 'ICT/SMC System (Stage 7)', 'zh-cn': 'ICT/SMC系统 (7阶段)', 'zh-tw': 'ICT/SMC系統 (7階段)' })}</Link></li>
                                <li><Link to="/courses">{t({ en: 'Elite Development (Stage 8)', 'zh-cn': '精英发展 (8阶段)', 'zh-tw': '精英發展 (8階段)' })}</Link></li>
                                <li><Link to="/courses">{t({ en: 'Premium Packages', 'zh-cn': '高级套餐', 'zh-tw': '高級套餐' })}</Link></li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div className="footer-col">
                            <h4 className="footer-title">{t({ en: 'Contact Us', 'zh-cn': '联系我们', 'zh-tw': '聯繫我們' })}</h4>
                            <ul className="footer-contact">
                                <li>
                                    <span className="contact-icon">📧</span>
                                    <a href="mailto:contact@nexustrading.academy">
                                        contact@nexustrading.academy
                                    </a>
                                </li>
                                <li>
                                    <span className="contact-icon">📍</span>
                                    <span>{t({ en: 'Klang, Selangor, Malaysia', 'zh-cn': '马来西亚雪兰莪州巴生', 'zh-tw': '馬來西亞雪蘭莪州巴生' })}</span>
                                </li>
                                <li>
                                    <span className="contact-icon">🌐</span>
                                    <span>{t({ en: 'Southeast Asia', 'zh-cn': '东南亚地区', 'zh-tw': '東南亞地區' })}</span>
                                </li>
                            </ul>
                            <div className="footer-social">
                                <a href="#" aria-label="Telegram" className="social-link">TG</a>
                                <a href="#" aria-label="WhatsApp" className="social-link">WA</a>
                                <a href="#" aria-label="Instagram" className="social-link">IG</a>
                                <a href="#" aria-label="YouTube" className="social-link">YT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p className="footer-copyright">
                            © {currentYear} Nexus Academy. {t({ en: 'All rights reserved.', 'zh-cn': '保留所有权利。', 'zh-tw': '保留所有權利。' })}
                        </p>
                        <div className="footer-legal">
                            <Link to="/privacy">{t({ en: 'Privacy Policy', 'zh-cn': '隐私政策', 'zh-tw': '隱私政策' })}</Link>
                            <Link to="/terms">{t({ en: 'Terms of Service', 'zh-cn': '服务条款', 'zh-tw': '服務條款' })}</Link>
                            <Link to="/disclaimer">{t({ en: 'Risk Disclaimer', 'zh-cn': '风险免责声明', 'zh-tw': '風險免責聲明' })}</Link>
                        </div>
                    </div>
                    <div className="footer-disclaimer">
                        <p>
                            <strong>{t({ en: 'Risk Warning:', 'zh-cn': '风险警告：', 'zh-tw': '風險警告：' })}</strong> {t({
                                en: 'Trading involves substantial risk of loss. Past performance does not guarantee future results. Only trade with money you can afford to lose.',
                                'zh-cn': '交易涉及重大亏损风险。过往业绩不保证未来结果。请只使用您能承受损失的资金进行交易。',
                                'zh-tw': '交易涉及重大虧損風險。過往業績不保證未來結果。請只使用您能承受損失的資金進行交易。'
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer