import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/useLanguage'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const { language, setLanguage, t } = useLanguage()
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { path: '/', label: { en: 'Home', 'zh-cn': '首页', 'zh-tw': '首頁' } },
        { path: '/about', label: { en: 'About', 'zh-cn': '关于我们', 'zh-tw': '關於我們' } },
        { path: '/courses', label: { en: 'Courses', 'zh-cn': '课程', 'zh-tw': '課程' } },
        { path: '/signals', label: { en: 'Signals', 'zh-cn': '信号', 'zh-tw': '信號' } },
        { path: '/community', label: { en: 'Community', 'zh-cn': '社区', 'zh-tw': '社區' } },
        { path: '/blog', label: { en: 'Resources', 'zh-cn': '资源', 'zh-tw': '資源' } },
        { path: '/contact', label: { en: 'Contact', 'zh-cn': '联系', 'zh-tw': '聯繫' } }
    ]

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }



    return (
        <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
            <div className="container">
                <nav className="nav">
                    <Link to="/" className="logo" onClick={closeMobileMenu}>
                        <div className="logo-icon">N</div>
                        <div className="logo-text">
                            <span className="logo-primary">NEXUS</span>
                            <span className="logo-secondary">ACADEMY</span>
                        </div>
                    </Link>

                    <div className={`nav-links ${isMobileMenuOpen ? 'nav-links-open' : ''}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'nav-link-active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                {t(link.label)}
                            </Link>
                        ))}
                    </div>

                    <div className="nav-actions">
                        <div className="lang-dropdown-wrapper">
                            <select
                                className="language-select"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                aria-label="Select language"
                            >
                                <option value="en">EN</option>
                                <option value="zh-cn">简体中文</option>
                                <option value="zh-tw">繁體中文</option>
                            </select>
                            <span className="lang-arrow">▾</span>
                        </div>

                        <Link to="/contact" className="btn btn-primary btn-sm" onClick={closeMobileMenu}>
                            {t({ en: 'Start Journey', 'zh-cn': '开始旅程', 'zh-tw': '開始旅程' })}
                        </Link>

                        <button
                            className={`mobile-menu-btn ${isMobileMenuOpen ? 'mobile-menu-btn-open' : ''}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
