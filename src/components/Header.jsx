import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [language, setLanguage] = useState('EN')
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { path: '/', label: 'Home', labelCN: '首页' },
        { path: '/about', label: 'About', labelCN: '关于我们' },
        { path: '/courses', label: 'Courses', labelCN: '课程' },
        { path: '/signals', label: 'Signals', labelCN: '信号' },
        { path: '/community', label: 'Community', labelCN: '社区' },
        { path: '/blog', label: 'Resources', labelCN: '资源' },
        { path: '/contact', label: 'Contact', labelCN: '联系' }
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
                                {language === 'EN' ? link.label : link.labelCN}
                            </Link>
                        ))}
                    </div>

                    <div className="nav-actions">
                        <button
                            className="language-toggle"
                            onClick={() => setLanguage(language === 'EN' ? 'CN' : 'EN')}
                            aria-label="Toggle language"
                        >
                            {language === 'EN' ? '中文' : 'EN'}
                        </button>

                        <Link to="/contact" className="btn btn-primary btn-sm" onClick={closeMobileMenu}>
                            {language === 'EN' ? 'Start Journey' : '开始旅程'}
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
