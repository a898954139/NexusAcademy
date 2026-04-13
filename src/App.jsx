import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import SignalsPage from './pages/SignalsPage'
import CommunityPage from './pages/CommunityPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="app">
          <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/signals" element={<SignalsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
    </LanguageProvider>
  )
}

export default App
