import React, { useEffect, useMemo, useRef } from 'react'
import { HashRouter, Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import groupHtml from './source/Nexus Group.html?raw'
import academyHtml from './source/nexus-academy.html?raw'
import tradingClubHtml from './source/nexus-trading-club.html?raw'
import labHtml from './source/nexus-lab.html?raw'
import capitalHtml from './source/nexus-capital.html?raw'
import sharedJs from './source/shared.js?raw'
import BackgroundPaperShaders from './components/ui/background-paper-shaders'
import './App.css'
const pages = {
  group: groupHtml,
  academy: academyHtml,
  tradingClub: tradingClubHtml,
  lab: labHtml,
  capital: capitalHtml
}

const routeLinks = {
  'Nexus Group.html': '#/',
  'Nexus Group.html#framework': '#/#framework',
  'Nexus Group.html#ecosystem': '#/#ecosystem',
  'Nexus Group.html#philosophy': '#/#philosophy',
  'Nexus Group.html#founder': '#/#founder',
  'Nexus Group.html#cta': '#/#cta',
  'nexus-academy.html': '#/academy',
  'nexus-trading-club.html': '#/trading-club',
  'nexus-lab.html': '#/lab',
  'nexus-capital.html': '#/capital'
}

const legacyRoutes = {
  '/about': { pageKey: 'group', anchor: 'philosophy' },
  '/courses': { pageKey: 'academy' },
  '/community': { pageKey: 'tradingClub' },
  '/contact': { pageKey: 'group', anchor: 'cta' },
  '/signals': { pageKey: 'group' },
  '/blog': { pageKey: 'group' }
}

function extractBody(html) {
  return html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html
}

function stripScripts(markup) {
  return markup.replace(/<script\b[\s\S]*?<\/script>/gi, '')
}

function translateStaticLinks(markup) {
  return Object.entries(routeLinks).reduce((next, [from, to]) => {
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    return next.replace(new RegExp(`href=["']${escaped}["']`, 'g'), `href="${to}"`)
  }, markup)
}

function getPageMarkup(html, pageKey) {
  let markup = translateStaticLinks(stripScripts(extractBody(html)))
  if (pageKey === 'group') {
    markup = markup.replace(/(<section[^>]+class="[^"]*sec-founder[^"]*"(?![^>]*id=))/i, '$1 id="founder"')
  }
  return markup
}

function cleanupSourceHead() {
  document.querySelectorAll('[data-nexus-react-source]').forEach(node => node.remove())
  document.querySelectorAll('style[data-nexus-shared="chrome"]').forEach(node => node.remove())
}

function syncHead(html) {
  cleanupSourceHead()
  const parsed = new DOMParser().parseFromString(html, 'text/html')
  parsed.head.querySelectorAll('link[rel="preconnect"], link[rel="stylesheet"]')
    .forEach(link => {
      const next = document.createElement('link')
      Array.from(link.attributes).forEach(attr => next.setAttribute(attr.name, attr.value))
      next.setAttribute('data-nexus-react-source', 'head-link')
      document.head.appendChild(next)
    })
  parsed.head.querySelectorAll('style')
    .forEach(style => {
      const next = document.createElement('style')
      next.setAttribute('data-nexus-react-source', 'page-style')
      next.textContent = style.textContent
      document.head.appendChild(next)
    })
  const compatibilityStyle = document.createElement('style')
  compatibilityStyle.setAttribute('data-nexus-react-source', 'compatibility-style')
  compatibilityStyle.textContent = `
    a.btn-gold, a.btn-gold:visited { color: #0a0a0a; }
    a.btn-ghost, a.btn-ghost:visited { color: var(--ink); }
  `
  document.head.appendChild(compatibilityStyle)
  const title = parsed.querySelector('title')?.textContent
  if (title) document.title = title
}

function createReadyDocument() {
  return new Proxy(document, {
    get(target, prop) {
      if (prop === 'addEventListener') {
        return (type, callback, options) => {
          if (type === 'DOMContentLoaded' && typeof callback === 'function') {
            callback()
            return undefined
          }
          return target.addEventListener(type, callback, options)
        }
      }
      const value = target[prop]
      return typeof value === 'function' ? value.bind(target) : value
    }
  })
}

function executeSourceScripts(html) {
  const parsed = new DOMParser().parseFromString(html, 'text/html')
  const readyDocument = createReadyDocument()
  parsed.querySelectorAll('script').forEach(script => {
    const src = script.getAttribute('src')
    if (src && src.endsWith('shared.js')) {
      Function(`${sharedJs}\n//# sourceURL=nexus-shared-source.js`)()
      return
    }
    const code = script.textContent?.trim()
    if (!code) return
    Function('document', `${code}\n//# sourceURL=nexus-inline-source.js`)(readyDocument)
  })
}

function scrollToSourceAnchor(anchor) {
  if (!anchor) return
  const id = anchor.replace(/^#/, '')
  const target = document.getElementById(id) || (id === 'founder' ? document.getElementById('philosophy') : null)
  if (target) {
    window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }))
  }
}

function SourcePage({ pageKey, initialAnchor }) {
  const rootRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()
  const html = pages[pageKey]
  const markup = useMemo(() => getPageMarkup(html, pageKey), [html, pageKey])

  useEffect(() => {
    syncHead(html)
    window.scrollTo(0, 0)
    executeSourceScripts(html)
    const pendingAnchor = sessionStorage.getItem('nexus.pendingAnchor')
    if (pendingAnchor) sessionStorage.removeItem('nexus.pendingAnchor')
    scrollToSourceAnchor(pendingAnchor || initialAnchor || location.hash)
    return () => {
      cleanupSourceHead()
    }
  }, [html, initialAnchor, location.hash])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const onClick = event => {
      const link = event.target.closest('a[href]')
      if (!link || !root.contains(link)) return
      const href = link.getAttribute('href') || ''

      if (routeLinks[href]) {
        event.preventDefault()
        window.location.hash = routeLinks[href].slice(1)
        return
      }

      if (href.startsWith('#') && !href.startsWith('#/')) {
        event.preventDefault()
        const anchor = href.slice(1)
        if (pageKey === 'group') {
          scrollToSourceAnchor(anchor)
          return
        }
        sessionStorage.setItem('nexus.pendingAnchor', anchor)
        navigate('/')
      }
    }

    root.addEventListener('click', onClick)
    return () => root.removeEventListener('click', onClick)
  }, [navigate, pageKey])

  return (
    <>
      <BackgroundPaperShaders />
      <div className="nexus-source-content" ref={rootRef} dangerouslySetInnerHTML={{ __html: markup }} />
    </>
  )
}

function LegacySourcePage({ route }) {
  const target = legacyRoutes[route] || { pageKey: 'group' }
  return <SourcePage pageKey={target.pageKey} initialAnchor={target.anchor} />
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<SourcePage pageKey="group" />} />
        <Route path="/academy" element={<SourcePage pageKey="academy" />} />
        <Route path="/trading-club" element={<SourcePage pageKey="tradingClub" />} />
        <Route path="/lab" element={<SourcePage pageKey="lab" />} />
        <Route path="/capital" element={<SourcePage pageKey="capital" />} />
        {Object.keys(legacyRoutes).map(route => (
          <Route key={route} path={route} element={<LegacySourcePage route={route} />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default App
