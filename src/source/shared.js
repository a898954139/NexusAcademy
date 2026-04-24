/* =====================================================================
 * shared.js — Nexus Group unified Header/Footer component
 * Used by every subpage. Injects the exact same nav + footer as the
 * main homepage, plus a 5-language i18n toggle (EN / BM / ID / 简 / 繁).
 *
 * Usage (on every subpage):
 *   <link rel="preconnect" href="https://fonts.googleapis.com">
 *   <link href="...google-fonts..." rel="stylesheet">
 *   <div id="site-header"></div>
 *   <!-- page content -->
 *   <div id="site-footer"></div>
 *   <script src="shared.js" defer></script>
 *   <script>
 *     document.addEventListener('DOMContentLoaded', () =>
 *       NexusShared.init({
 *         pageI18N: {
 *           EN: { 'sub.title': '...' },
 *           BM: { 'sub.title': '...' },
 *           ...
 *         }
 *       })
 *     );
 *   </script>
 * ===================================================================== */
(function () {
  'use strict';

  // ---------- CSS for chrome (nav + footer + base variables + fonts) ----------
  const CHROME_CSS = `
  :root {
    --bg:#0a0c10; --bg-2:#0e1118; --bg-card:#10131b;
    --ink:#eceae4; --ink-dim:#8a8a83; --ink-soft:#55554f;
    --line:rgba(236,234,228,0.08); --line-2:rgba(236,234,228,0.14);
    --gold:oklch(0.80 0.13 85); --gold-dim:oklch(0.65 0.10 85); --gold-soft:oklch(0.80 0.13 85 / 0.14);
    --f-display:"Outfit", "PingFang TC", "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", "Noto Sans TC", "Noto Sans SC", sans-serif;
    --f-ui:"Plus Jakarta Sans", "PingFang TC", "PingFang SC", "Microsoft JhengHei", "Microsoft YaHei", "Noto Sans TC", "Noto Sans SC", sans-serif;
    --f-mono:"JetBrains Mono",ui-monospace,monospace;
    --pad-x:clamp(24px,6vw,96px); --maxw:1280px;
  }
  html, body { background: var(--bg); color: var(--ink); font-family: var(--f-ui); font-weight: 300; margin: 0; -webkit-font-smoothing: antialiased; }
  *, *::before, *::after { box-sizing: border-box; }
  a { color: inherit; text-decoration: none; }
  button { font-family: inherit; cursor: pointer; background: none; border: 0; color: inherit; }
  ul { list-style: none; padding: 0; margin: 0; }
  .wrap { max-width: var(--maxw); margin: 0 auto; padding: 0 var(--pad-x); }

  /* ---- NAV ---- */
  .nav { position: sticky; top: 0; z-index: 50; background: color-mix(in srgb, var(--bg) 92%, transparent); backdrop-filter: blur(10px); border-bottom: 1px solid var(--line); }
  .nav__inner { display: flex; align-items: center; justify-content: space-between; height: 88px; max-width: var(--maxw); margin: 0 auto; padding: 0 var(--pad-x); gap: 24px; }
  .brand { display: flex; align-items: center; gap: 12px; flex-shrink: 0; }
  .brand__logo { height: 64px; width: auto; display: block; }
  .nav__links { display: flex; gap: 36px; align-items: center; }
  .nav__links a, .nav__dd-trigger { font-family: var(--f-ui); font-size: 13px; letter-spacing: 0.06em; color: var(--ink); transition: color .3s; font-weight: 300; padding: 0; }
  .nav__links a:hover, .nav__dd-trigger:hover { color: var(--gold); }
  .nav__dd { position: relative; }
  .nav__dd-trigger { display: inline-flex; align-items: center; gap: 8px; }
  .nav__dd-caret { width: 7px; height: 7px; border-right: 1px solid currentColor; border-bottom: 1px solid currentColor; transform: rotate(45deg); transition: transform .25s; margin-top: -3px; }
  .nav__dd.is-open .nav__dd-caret { transform: rotate(-135deg); margin-top: 1px; }
  .nav__dd-panel {
    position: absolute; top: calc(100% + 14px); left: 0;
    min-width: 420px; background: var(--bg-2); border: 1px solid var(--line-2);
    padding: 20px; opacity: 0; pointer-events: none; transform: translateY(-8px);
    transition: all .25s; z-index: 60;
  }
  .nav__dd.is-open .nav__dd-panel { opacity: 1; pointer-events: auto; transform: none; }
  .nav__dd-eyebrow { font-family: var(--f-mono); font-size: 9.5px; letter-spacing: 0.3em; color: var(--gold); text-transform: uppercase; padding-bottom: 14px; border-bottom: 1px solid var(--line); margin-bottom: 14px; }
  .nav__dd-item { display: grid; grid-template-columns: 1fr 1.4fr; gap: 18px; padding: 12px 6px; border-bottom: 1px solid var(--line); transition: background .3s; }
  .nav__dd-item:last-of-type { border-bottom: 0; }
  .nav__dd-item:hover { background: rgba(255,255,255,0.03); }
  .nav__dd-title { font-family: var(--f-display); font-size: 15px; color: var(--ink); font-weight: 400; letter-spacing: 0.02em; }
  .nav__dd-desc { font-family: var(--f-ui); font-size: 12px; color: var(--ink-dim); line-height: 1.5; }
  .nav__dd-foot {
    display: inline-flex; align-items: center; gap: 8px;
    margin-top: 14px; padding-top: 14px; border-top: 1px solid var(--line);
    font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.22em;
    color: var(--gold-dim); text-transform: uppercase; transition: color .3s, gap .25s;
  }
  .nav__dd-foot:hover { color: var(--gold); gap: 12px; }
  .nav__right { display: flex; gap: 14px; align-items: center; }
  .nav__cta {
    display: inline-flex; align-items: center; gap: 10px;
    padding: 10px 18px; font-family: var(--f-ui); font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 500;
    color: var(--gold); border: 1px solid var(--gold-soft); background: transparent;
    transition: all .3s; height: 40px;
  }
  .nav__cta::after { content: "→"; transition: transform .25s; }
  .nav__cta:hover { background: var(--gold); color: #0a0a0a; border-color: var(--gold); }
  .nav__cta:hover::after { transform: translateX(3px); }

  /* Lang select (simple, unified) */
  .lang { position: relative; }
  .lang select {
    background: transparent; color: var(--ink-dim);
    border: 1px solid var(--line-2); padding: 7px 28px 7px 12px;
    font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.16em;
    appearance: none; -webkit-appearance: none; cursor: pointer; height: 40px;
    background-image: linear-gradient(45deg, transparent 50%, var(--ink-dim) 50%), linear-gradient(135deg, var(--ink-dim) 50%, transparent 50%);
    background-position: calc(100% - 14px) center, calc(100% - 9px) center;
    background-size: 5px 5px, 5px 5px; background-repeat: no-repeat;
  }
  .lang select:hover { color: var(--ink); }

  /* Mobile drawer */
  .nav__burger { display: none; width: 40px; height: 40px; align-items: center; justify-content: center; flex-direction: column; gap: 5px; background: transparent; border: 1px solid var(--line-2); }
  .nav__burger span { width: 18px; height: 1px; background: var(--ink); display: block; transition: all .3s; }
  .nav.is-drawer-open .nav__burger span:nth-child(1) { transform: rotate(45deg) translate(3px, 4px); }
  .nav.is-drawer-open .nav__burger span:nth-child(2) { opacity: 0; }
  .nav.is-drawer-open .nav__burger span:nth-child(3) { transform: rotate(-45deg) translate(3px, -4px); }
  .nav__drawer {
    position: fixed; inset: 88px 0 0 0; background: var(--bg);
    transform: translateY(-110%); transition: transform .35s ease;
    overflow-y: auto; z-index: 45; display: none;
  }
  .nav.is-drawer-open .nav__drawer { transform: none; }
  .nav__drawer-inner { padding: 32px var(--pad-x) 48px; display: flex; flex-direction: column; gap: 24px; min-height: 100%; }
  .nav__drawer-links { display: flex; flex-direction: column; gap: 4px; }
  .nav__drawer-links > a, .nav__drawer-acc-trigger {
    display: flex; align-items: center; justify-content: space-between;
    padding: 18px 0; border-bottom: 1px solid var(--line);
    font-family: var(--f-ui); font-size: 15px; letter-spacing: 0.04em; color: var(--ink);
    text-transform: uppercase; font-weight: 400; width: 100%; text-align: left;
  }
  .nav__drawer-acc-caret { width: 8px; height: 8px; border-right: 1px solid currentColor; border-bottom: 1px solid currentColor; transform: rotate(45deg); transition: transform .25s; }
  .nav__drawer-acc.is-open .nav__drawer-acc-caret { transform: rotate(-135deg); }
  .nav__drawer-acc-panel { max-height: 0; overflow: hidden; transition: max-height .35s; }
  .nav__drawer-acc.is-open .nav__drawer-acc-panel { max-height: 800px; }
  .nav__drawer-acc-panel a { display: block; padding: 14px 12px; border-bottom: 1px solid var(--line); }
  .nav__drawer-acc-panel a:last-child { border-bottom: 0; }
  .nav__drawer-acc-t { font-family: var(--f-display); font-size: 16px; color: var(--ink); margin-bottom: 4px; }
  .nav__drawer-acc-d { font-family: var(--f-ui); font-size: 12px; color: var(--ink-dim); line-height: 1.5; }
  .nav__drawer-foot { display: flex; flex-direction: column; gap: 18px; margin-top: auto; padding-top: 32px; border-top: 1px solid var(--line); }
  .nav__drawer-lang { display: flex; gap: 8px; flex-wrap: wrap; }
  .nav__drawer-lang button {
    padding: 10px 14px; border: 1px solid var(--line-2);
    font-family: var(--f-mono); font-size: 11px; letter-spacing: 0.16em; color: var(--ink-dim);
    transition: all .3s;
  }
  .nav__drawer-lang button.is-active { color: var(--gold); border-color: var(--gold-soft); }
  .nav__drawer-cta {
    display: inline-flex; align-items: center; justify-content: center; gap: 10px;
    padding: 16px 20px; background: var(--gold); color: #0a0a0a;
    font-family: var(--f-ui); font-size: 11.5px; letter-spacing: 0.2em; text-transform: uppercase; font-weight: 500;
  }

  @media (max-width: 960px) {
    .nav__links, .nav__right > .lang { display: none; }
    .nav__burger { display: flex; }
    .nav__drawer { display: block; }
  }
  @media (max-width: 767px) {
    .nav__inner { height: 72px; }
    .brand__logo { height: 48px; }
    .nav__drawer { inset: 72px 0 0 0; }
    .nav__cta { padding: 9px 14px; font-size: 10.5px; }
  }

  /* ---- FOOTER ---- */
  footer { position: relative; z-index: 2; padding: 96px 0 56px; border-top: 1px solid var(--line); color: var(--ink-dim); font-family: var(--f-ui); background: var(--bg); }
  .foot { display: flex; flex-direction: column; gap: 72px; }
  .foot__cta { display: flex; align-items: center; justify-content: space-between; gap: 48px; padding-bottom: 64px; border-bottom: 1px solid var(--line); flex-wrap: wrap; }
  .foot__cta-eyebrow { font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.3em; color: var(--gold); text-transform: uppercase; margin-bottom: 12px; }
  .foot__cta-heading { font-size: clamp(24px, 2.4vw, 32px); font-weight: 300; color: var(--ink); margin: 0; letter-spacing: -0.015em; }
  .foot__cta-buttons { display: flex; gap: 12px; flex-wrap: wrap; }
  .btn-gold, .btn-ghost {
    display: inline-flex; align-items: center; gap: 12px;
    padding: 16px 28px; font-family: var(--f-ui); font-size: 12px; letter-spacing: 0.2em;
    text-transform: uppercase; font-weight: 500; transition: all .3s; border: 1px solid transparent;
  }
  .btn-gold { background: var(--gold); color: #0a0a0a; }
  .btn-gold:hover { background: transparent; color: var(--gold); border-color: var(--gold); }
  .btn-ghost { background: transparent; color: var(--ink); border-color: var(--line-2); }
  .btn-ghost:hover { border-color: var(--ink); }

  .foot__grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr 1fr; gap: 64px; }
  .foot__col { display: flex; flex-direction: column; gap: 16px; align-items: flex-start; }
  .foot__brand-logo { height: 80px; width: auto; object-fit: contain; display: block; flex-shrink: 0; margin-bottom: 16px; }
  .foot__brand-desc { font-family: var(--f-ui); font-size: 14px; line-height: 1.6; color: var(--ink-dim); max-width: 32ch; margin: 0; font-weight: 300; }
  .foot__col-title { font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.3em; color: var(--gold); text-transform: uppercase; margin-bottom: 4px; }
  .foot__links { display: flex; flex-direction: column; gap: 10px; }
  .foot__links a { font-family: var(--f-ui); font-size: 14px; color: var(--ink); transition: color .3s ease, transform .3s ease; display: inline-block; font-weight: 300; }
  .foot__links a:hover { color: var(--gold); transform: translateX(2px); }

  .foot__connect { display: flex; flex-direction: column; gap: 28px; padding-top: 48px; border-top: 1px solid var(--line); }
  .foot__connect-title { font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.3em; color: var(--gold); text-transform: uppercase; }
  .foot__connect-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px; }
  .foot__connect-group { display: flex; flex-direction: column; gap: 14px; }
  .foot__connect-sublabel { font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.3em; color: var(--ink-dim); text-transform: uppercase; }

  .foot__bottom { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding-top: 40px; border-top: 1px solid var(--line); flex-wrap: wrap; }
  .foot__copy { display: flex; flex-direction: column; gap: 4px; font-family: var(--f-mono); font-size: 10px; letter-spacing: 0.2em; color: var(--ink-soft); text-transform: uppercase; }
  .foot__tagline { opacity: 0.75; }

  @media (max-width: 960px) {
    .foot__grid { grid-template-columns: 1fr 1fr; gap: 48px 40px; }
  }
  @media (max-width: 767px) {
    footer { padding: 72px 0 40px; }
    .foot { gap: 56px; }
    .foot__cta { flex-direction: column; align-items: flex-start; padding-bottom: 40px; gap: 24px; }
    .foot__cta-buttons { width: 100%; flex-direction: column; gap: 10px; }
    .foot__cta-buttons .btn-gold, .foot__cta-buttons .btn-ghost { width: 100%; justify-content: center; }
    .foot__grid { grid-template-columns: 1fr; gap: 0; }
    .foot__col { padding: 32px 0; }
    .foot__col:first-child { padding-top: 0; }
    .foot__col + .foot__col { border-top: 1px solid var(--line); }
    .foot__bottom { flex-direction: column; align-items: flex-start; gap: 20px; padding-top: 32px; }
    .foot__connect { gap: 24px; padding-top: 32px; }
    .foot__connect-grid { grid-template-columns: 1fr; gap: 0; }
    .foot__connect-group { padding: 24px 0; }
    .foot__connect-group + .foot__connect-group { border-top: 1px solid var(--line); }
    .foot__connect .foot__links { gap: 14px; }
  }
  `;

  // ---------- Nav + Footer markup (matches main Nexus Group.html) ----------
  const NAV_HTML = `
<nav class="nav">
  <div class="nav__inner">
    <a href="Nexus Group.html" class="brand" aria-label="Nexus Group">
      <img class="brand__logo" src="Nexus Logo.png" alt="Nexus" />
    </a>
    <div class="nav__links">
      <a href="Nexus Group.html#framework" data-i18n="nav.framework">Institutional Framework</a>
      <div class="nav__dd" id="eco-dd">
        <button type="button" class="nav__dd-trigger" aria-haspopup="true" aria-expanded="false">
          <span data-i18n="nav.ecosystem">Ecosystem</span>
          <span class="nav__dd-caret" aria-hidden="true"></span>
        </button>
        <div class="nav__dd-panel" role="menu">
          <div class="nav__dd-eyebrow" data-i18n="nav.eco.label">The Nexus Ecosystem</div>
          <a href="nexus-academy.html" class="nav__dd-item" role="menuitem">
            <div class="nav__dd-title" data-i18n="nav.eco.academy.t">Nexus Academy</div>
            <div class="nav__dd-desc" data-i18n-html="nav.eco.academy.d">Structured trading education built on ICT / SMC methodology</div>
          </a>
          <a href="nexus-trading-club.html" class="nav__dd-item" role="menuitem">
            <div class="nav__dd-title" data-i18n="nav.eco.club.t">Nexus Trading Club</div>
            <div class="nav__dd-desc" data-i18n-html="nav.eco.club.d">Private trader community for disciplined market participation</div>
          </a>
          <a href="nexus-lab.html" class="nav__dd-item" role="menuitem">
            <div class="nav__dd-title" data-i18n="nav.eco.lab.t">Nexus Lab</div>
            <div class="nav__dd-desc" data-i18n-html="nav.eco.lab.d">AI tools, automation, and quantitative systems</div>
          </a>
          <a href="nexus-capital.html" class="nav__dd-item" role="menuitem">
            <div class="nav__dd-title" data-i18n="nav.eco.capital.t">Nexus Capital</div>
            <div class="nav__dd-desc" data-i18n-html="nav.eco.capital.d">Professional capital stewardship and asset management division</div>
          </a>
          <a href="Nexus Group.html#ecosystem" class="nav__dd-foot">
            <span data-i18n="nav.eco.all">View Full Ecosystem</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <a href="Nexus Group.html#founder" data-i18n="nav.about">About</a>
    </div>
    <div class="nav__right">
      <div class="lang">
        <select id="lang-select" aria-label="Language">
          <option value="EN">EN</option>
          <option value="BM">BM</option>
          <option value="ID">ID</option>
          <option value="简">简</option>
          <option value="繁">繁</option>
        </select>
      </div>
      <a href="Nexus Group.html#cta" class="nav__cta" data-i18n="nav.cta"><span>Enter Nexus</span></a>
      <button class="nav__burger" type="button" aria-expanded="false" aria-controls="nav-drawer" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="nav__drawer" id="nav-drawer" aria-hidden="true">
    <div class="nav__drawer-inner">
      <div class="nav__drawer-links">
        <a href="Nexus Group.html#framework" data-i18n="nav.framework">Institutional Framework</a>
        <div class="nav__drawer-acc" data-acc>
          <button type="button" class="nav__drawer-acc-trigger" aria-expanded="false">
            <span data-i18n="nav.ecosystem">Ecosystem</span>
            <span class="nav__drawer-acc-caret" aria-hidden="true"></span>
          </button>
          <div class="nav__drawer-acc-panel">
            <a href="nexus-academy.html">
              <div class="nav__drawer-acc-t" data-i18n="nav.eco.academy.t">Nexus Academy</div>
              <div class="nav__drawer-acc-d" data-i18n-html="nav.eco.academy.d">Structured trading education built on ICT / SMC methodology</div>
            </a>
            <a href="nexus-trading-club.html">
              <div class="nav__drawer-acc-t" data-i18n="nav.eco.club.t">Nexus Trading Club</div>
              <div class="nav__drawer-acc-d" data-i18n-html="nav.eco.club.d">Private trader community for disciplined market participation</div>
            </a>
            <a href="nexus-lab.html">
              <div class="nav__drawer-acc-t" data-i18n="nav.eco.lab.t">Nexus Lab</div>
              <div class="nav__drawer-acc-d" data-i18n-html="nav.eco.lab.d">AI tools, automation, and quantitative systems</div>
            </a>
            <a href="nexus-capital.html">
              <div class="nav__drawer-acc-t" data-i18n="nav.eco.capital.t">Nexus Capital</div>
              <div class="nav__drawer-acc-d" data-i18n-html="nav.eco.capital.d">Professional capital stewardship and asset management division</div>
            </a>
          </div>
        </div>
        <a href="Nexus Group.html#founder" data-i18n="nav.about">About</a>
      </div>
      <div class="nav__drawer-foot">
        <div class="nav__drawer-lang" role="listbox" aria-label="Language">
          <button data-lang="EN" class="is-active">EN</button>
          <button data-lang="BM">BM</button>
          <button data-lang="ID">ID</button>
          <button data-lang="简">简</button>
          <button data-lang="繁">繁</button>
        </div>
        <a href="Nexus Group.html#cta" class="nav__drawer-cta" data-i18n="nav.cta">Enter Nexus</a>
      </div>
    </div>
  </div>
</nav>`;

  const FOOTER_HTML = `
<footer>
  <div class="wrap foot">
    <div class="foot__cta">
      <div class="foot__cta-text">
        <div class="foot__cta-eyebrow" data-i18n="foot.cta.eyebrow">Selective Admission</div>
        <h3 class="foot__cta-heading" data-i18n="foot.cta.heading">Enter the Nexus Ecosystem</h3>
      </div>
      <div class="foot__cta-buttons">
        <a href="Nexus Group.html#cta" class="btn-gold" data-i18n="cta.primary">Request Access</a>
        <a href="Nexus Group.html#cta" class="btn-ghost" data-i18n="cta.schedule">Schedule Call</a>
      </div>
    </div>

    <div class="foot__grid">
      <div class="foot__col foot__col--brand">
        <img class="foot__brand-logo" src="Nexus Logo.png" alt="Nexus Group" />
        <p class="foot__brand-desc" data-i18n="foot.brand.desc">A structured trading ecosystem built on clarity, system, and long-term edge.</p>
      </div>
      <div class="foot__col">
        <div class="foot__col-title" data-i18n="foot.col.eco">Ecosystem</div>
        <ul class="foot__links">
          <li><a href="nexus-academy.html" data-i18n="nav.eco.academy.t">Nexus Academy</a></li>
          <li><a href="nexus-trading-club.html" data-i18n="nav.eco.club.t">Nexus Trading Club</a></li>
          <li><a href="nexus-lab.html" data-i18n="nav.eco.lab.t">Nexus Lab</a></li>
          <li><a href="nexus-capital.html" data-i18n="foot.link.capital">Nexus Capital</a></li>
        </ul>
      </div>
      <div class="foot__col">
        <div class="foot__col-title" data-i18n="foot.col.nav">Navigation</div>
        <ul class="foot__links">
          <li><a href="Nexus Group.html#framework" data-i18n="nav.framework">Institutional Framework</a></li>
          <li><a href="Nexus Group.html#ecosystem" data-i18n="nav.ecosystem">Ecosystem</a></li>
          <li><a href="Nexus Group.html#founder" data-i18n="nav.about">About</a></li>
          <li><a href="Nexus Group.html#cta" data-i18n="foot.link.contact">Contact / Apply</a></li>
        </ul>
      </div>
      <div class="foot__col">
        <div class="foot__col-title" data-i18n="foot.col.legal">Legal</div>
        <ul class="foot__links">
          <li><a href="#" data-i18n="foot.link.privacy">Privacy Policy</a></li>
          <li><a href="#" data-i18n="foot.link.terms">Terms of Use</a></li>
          <li><a href="#" data-i18n="foot.link.risk">Risk Disclosure</a></li>
        </ul>
      </div>
    </div>

    <div class="foot__connect">
      <div class="foot__connect-title" data-i18n="foot.connect.title">Connect</div>
      <div class="foot__connect-grid">
        <div class="foot__connect-group">
          <div class="foot__connect-sublabel">TradingView</div>
          <ul class="foot__links">
            <li><a href="https://cn.tradingview.com/u/mynexusacademy/" target="_blank" rel="noopener" data-i18n="foot.connect.tv.cn">Chinese</a></li>
            <li><a href="https://tradingview.com/u/mynexusacademy/" target="_blank" rel="noopener" data-i18n="foot.connect.tv.global">Global</a></li>
          </ul>
        </div>
        <div class="foot__connect-group">
          <div class="foot__connect-sublabel">Telegram</div>
          <ul class="foot__links">
            <li><a href="https://t.me/mynexusacademy" target="_blank" rel="noopener" data-i18n="foot.connect.tg.forex">Forex</a></li>
            <li><a href="https://t.me/mynexusacademycrypto" target="_blank" rel="noopener" data-i18n="foot.connect.tg.crypto">Crypto</a></li>
          </ul>
        </div>
        <div class="foot__connect-group">
          <div class="foot__connect-sublabel" data-i18n="foot.connect.group.social">Social</div>
          <ul class="foot__links">
            <li><a href="https://www.youtube.com/@ryanlivetrading/" target="_blank" rel="noopener">YouTube</a></li>
            <li><a href="https://www.facebook.com/nexusacademytrading" target="_blank" rel="noopener">Facebook</a></li>
            <li><a href="https://www.instagram.com/mynexusacademy/" target="_blank" rel="noopener">Instagram</a></li>
            <li><a href="https://x.com/mynexusacademy" target="_blank" rel="noopener">X</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="foot__bottom">
      <div class="foot__copy">
        <div data-i18n="foot.copy">© 2026 Nexus Group</div>
        <div class="foot__tagline" data-i18n="foot.tagline">Built for institutional-grade trader development</div>
      </div>
    </div>
  </div>
</footer>`;

  // ---------- Shared i18n dict (nav + footer + shared CTA) ----------
  const SHARED_I18N = {
    EN: {
      'nav.framework': 'Institutional Framework',
      'nav.ecosystem': 'Ecosystem',
      'nav.about': 'About',
      'nav.cta': 'Enter Nexus',
      'nav.eco.label': 'The Nexus Ecosystem',
      'nav.eco.academy.t': 'Nexus Academy',
      'nav.eco.academy.d': 'Structured trading education built on ICT / SMC methodology',
      'nav.eco.club.t': 'Nexus Trading Club',
      'nav.eco.club.d': 'Private trader community for disciplined market participation',
      'nav.eco.lab.t': 'Nexus Lab',
      'nav.eco.lab.d': 'AI tools, automation, and quantitative systems',
      'nav.eco.capital.t': 'Nexus Capital',
      'nav.eco.capital.d': 'Professional capital stewardship<br>and asset management division',
      'nav.eco.all': 'View Full Ecosystem',
      'cta.primary': 'Request Access',
      'cta.schedule': 'Schedule Call',
      'foot.cta.eyebrow': 'Selective Admission',
      'foot.cta.heading': 'Enter the Nexus Ecosystem',
      'foot.brand.desc': 'A structured trading ecosystem built on clarity, system, and long-term edge.',
      'foot.col.eco': 'Ecosystem',
      'foot.col.nav': 'Navigation',
      'foot.col.legal': 'Legal',
      'foot.link.capital': 'Nexus Capital',
      'foot.link.contact': 'Contact / Apply',
      'foot.link.privacy': 'Privacy Policy',
      'foot.link.terms': 'Terms of Use',
      'foot.link.risk': 'Risk Disclosure',
      'foot.connect.title': 'Connect',
      'foot.connect.group.social': 'Social',
      'foot.connect.tv.cn': 'Chinese',
      'foot.connect.tv.global': 'Global',
      'foot.connect.tg.forex': 'Forex',
      'foot.connect.tg.crypto': 'Crypto',
      'foot.copy': '© 2026 Nexus Group',
      'foot.tagline': 'Built for institutional-grade trader development',
    },
    BM: {
      'nav.framework': 'Rangka Kerja Institusi',
      'nav.ecosystem': 'Ekosistem',
      'nav.about': 'Tentang',
      'nav.cta': 'Masuk Nexus',
      'nav.eco.label': 'Ekosistem Nexus',
      'nav.eco.academy.t': 'Nexus Academy',
      'nav.eco.academy.d': 'Pendidikan perdagangan berstruktur atas metodologi ICT / SMC',
      'nav.eco.club.t': 'Kelab Trading Nexus',
      'nav.eco.club.d': 'Komuniti pedagang peribadi untuk penyertaan pasaran berdisiplin',
      'nav.eco.lab.t': 'Makmal Nexus',
      'nav.eco.lab.d': 'Alatan AI, automasi, dan sistem kuantitatif',
      'nav.eco.capital.t': 'Nexus Capital',
      'nav.eco.capital.d': 'Bahagian pengurusan modal<br>dan aset profesional',
      'nav.eco.all': 'Lihat Ekosistem Penuh',
      'cta.primary': 'Mohon Akses',
      'cta.schedule': 'Jadualkan Panggilan',
      'foot.cta.eyebrow': 'Kemasukan Terpilih',
      'foot.cta.heading': 'Masuk ke Ekosistem Nexus',
      'foot.brand.desc': 'Ekosistem trading berstruktur atas dasar kejelasan, sistem, dan kelebihan jangka panjang.',
      'foot.col.eco': 'Ekosistem',
      'foot.col.nav': 'Navigasi',
      'foot.col.legal': 'Perundangan',
      'foot.link.capital': 'Nexus Capital',
      'foot.link.contact': 'Hubungi / Mohon',
      'foot.link.privacy': 'Dasar Privasi',
      'foot.link.terms': 'Syarat Penggunaan',
      'foot.link.risk': 'Pendedahan Risiko',
      'foot.connect.title': 'Hubung',
      'foot.connect.group.social': 'Sosial',
      'foot.connect.tv.cn': 'Cina',
      'foot.connect.tv.global': 'Global',
      'foot.connect.tg.forex': 'Forex',
      'foot.connect.tg.crypto': 'Kripto',
      'foot.copy': '© 2026 Nexus Group',
      'foot.tagline': 'Dibina untuk pembangunan trader bertaraf institusi',
    },
    ID: {
      'nav.framework': 'Kerangka Institusional',
      'nav.ecosystem': 'Ekosistem',
      'nav.about': 'Tentang',
      'nav.cta': 'Masuk Nexus',
      'nav.eco.label': 'Ekosistem Nexus',
      'nav.eco.academy.t': 'Akademi Nexus',
      'nav.eco.academy.d': 'Edukasi trading terstruktur berbasis metodologi ICT / SMC',
      'nav.eco.club.t': 'Klub Trading Nexus',
      'nav.eco.club.d': 'Komunitas trader privat untuk partisipasi pasar yang disiplin',
      'nav.eco.lab.t': 'Lab Nexus',
      'nav.eco.lab.d': 'Tools AI, otomasi, dan sistem kuantitatif',
      'nav.eco.capital.t': 'Nexus Capital',
      'nav.eco.capital.d': 'Divisi pengelolaan modal<br>dan aset profesional',
      'nav.eco.all': 'Lihat Ekosistem Lengkap',
      'cta.primary': 'Ajukan Akses',
      'cta.schedule': 'Jadwalkan Panggilan',
      'foot.cta.eyebrow': 'Akses Selektif',
      'foot.cta.heading': 'Masuk ke Ekosistem Nexus',
      'foot.brand.desc': 'Ekosistem trading terstruktur berdasarkan kejelasan, sistem, dan keunggulan jangka panjang.',
      'foot.col.eco': 'Ekosistem',
      'foot.col.nav': 'Navigasi',
      'foot.col.legal': 'Legalitas',
      'foot.link.capital': 'Nexus Capital',
      'foot.link.contact': 'Kontak / Ajukan',
      'foot.link.privacy': 'Kebijakan Privasi',
      'foot.link.terms': 'Ketentuan Penggunaan',
      'foot.link.risk': 'Pernyataan Risiko',
      'foot.connect.title': 'Terhubung',
      'foot.connect.group.social': 'Sosial',
      'foot.connect.tv.cn': 'Cina',
      'foot.connect.tv.global': 'Global',
      'foot.connect.tg.forex': 'Forex',
      'foot.connect.tg.crypto': 'Kripto',
      'foot.copy': '© 2026 Nexus Group',
      'foot.tagline': 'Dibangun untuk pengembangan trader bertaraf institusional',
    },
    '简': {
      'nav.framework': '机构交易体系',
      'nav.ecosystem': '生态体系',
      'nav.about': '关于我们',
      'nav.cta': '进入纽克斯',
      'nav.eco.label': '纽克斯生态',
      'nav.eco.academy.t': '纽克斯商学院',
      'nav.eco.academy.d': '基于 ICT / SMC 方法的结构化交易教育',
      'nav.eco.club.t': '纽克斯俱乐部',
      'nav.eco.club.d': '为纪律化市场参与打造的私密交易者社群',
      'nav.eco.lab.t': '纽克斯实验室',
      'nav.eco.lab.d': 'AI 工具、自动化与量化系统',
      'nav.eco.capital.t': '纽克斯资本',
      'nav.eco.capital.d': '专业资本管理与资产配置板块',
      'nav.eco.all': '查看完整生态',
      'cta.primary': '申请访问',
      'cta.schedule': '预约通话',
      'foot.cta.eyebrow': '筛选准入',
      'foot.cta.heading': '进入纽克斯生态体系',
      'foot.brand.desc': '以清晰度、系统与长期优势构建的结构化交易生态',
      'foot.col.eco': '生态板块',
      'foot.col.nav': '导航',
      'foot.col.legal': '法律',
      'foot.link.capital': '纽克斯资本',
      'foot.link.contact': '联系 / 申请',
      'foot.link.privacy': '隐私政策',
      'foot.link.terms': '使用条款',
      'foot.link.risk': '风险披露',
      'foot.connect.title': '连接',
      'foot.connect.group.social': '社交媒体',
      'foot.connect.tv.cn': '中文',
      'foot.connect.tv.global': '全球',
      'foot.connect.tg.forex': '外汇',
      'foot.connect.tg.crypto': '加密货币',
      'foot.copy': '© 2026 纽克斯集团',
      'foot.tagline': '为机构级交易者发展而打造',
    },
    '繁': {
      'nav.framework': '機構交易體系',
      'nav.ecosystem': '生態體系',
      'nav.about': '關於我們',
      'nav.cta': '進入紐克斯',
      'nav.eco.label': '紐克斯生態',
      'nav.eco.academy.t': '紐克斯商學院',
      'nav.eco.academy.d': '基於 ICT / SMC 方法的結構化交易教育',
      'nav.eco.club.t': '紐克斯俱樂部',
      'nav.eco.club.d': '為紀律化市場參與打造的私密交易者社群',
      'nav.eco.lab.t': '紐克斯實驗室',
      'nav.eco.lab.d': 'AI 工具、自動化與量化系統',
      'nav.eco.capital.t': '紐克斯資本',
      'nav.eco.capital.d': '專業資本管理與資產配置板塊',
      'nav.eco.all': '查看完整生態',
      'cta.primary': '申請訪問',
      'cta.schedule': '預約通話',
      'foot.cta.eyebrow': '篩選准入',
      'foot.cta.heading': '進入紐克斯生態體系',
      'foot.brand.desc': '以清晰度、系統與長期優勢建構的結構化交易生態',
      'foot.col.eco': '生態板塊',
      'foot.col.nav': '導航',
      'foot.col.legal': '法律',
      'foot.link.capital': '紐克斯資本',
      'foot.link.contact': '聯繫 / 申請',
      'foot.link.privacy': '隱私政策',
      'foot.link.terms': '使用條款',
      'foot.link.risk': '風險披露',
      'foot.connect.title': '連接',
      'foot.connect.group.social': '社交媒體',
      'foot.connect.tv.cn': '中文',
      'foot.connect.tv.global': '全球',
      'foot.connect.tg.forex': '外匯',
      'foot.connect.tg.crypto': '加密貨幣',
      'foot.copy': '© 2026 紐克斯集團',
      'foot.tagline': '為機構級交易者發展而打造',
    },
  };

  // ---------- Init helper ----------
  function injectStyles() {
    const s = document.createElement('style');
    s.setAttribute('data-nexus-shared', 'chrome');
    s.textContent = CHROME_CSS;
    // Insert BEFORE existing page styles so page styles can override if needed.
    const firstStyle = document.head.querySelector('style, link[rel="stylesheet"]');
    if (firstStyle) document.head.insertBefore(s, firstStyle);
    else document.head.appendChild(s);
  }

  function injectChrome() {
    const header = document.getElementById('site-header');
    if (header) header.outerHTML = NAV_HTML;
    const footer = document.getElementById('site-footer');
    if (footer) footer.outerHTML = FOOTER_HTML;
  }

  function mergeDicts(pageI18N) {
    const merged = {};
    ['EN', 'BM', 'ID', '简', '繁'].forEach(lang => {
      merged[lang] = Object.assign({}, SHARED_I18N[lang], (pageI18N && pageI18N[lang]) || {});
    });
    return merged;
  }

  function makeApplyLang(dict) {
    return function applyLang(lang) {
      const d = dict[lang] || dict.EN;
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (d[k] != null) el.textContent = d[k];
      });
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const k = el.getAttribute('data-i18n-html');
        if (d[k] != null) el.innerHTML = d[k];
      });
      document.documentElement.setAttribute('lang',
        lang === '简' ? 'zh-Hans' : lang === '繁' ? 'zh-Hant' :
        lang === 'BM' ? 'ms' : lang === 'ID' ? 'id' : 'en');
      try { localStorage.setItem('nexus.lang', lang); } catch (e) {}

      // Reflect state on selectors
      const sel = document.getElementById('lang-select');
      if (sel) sel.value = lang;
      document.querySelectorAll('.nav__drawer-lang button').forEach(b => {
        b.classList.toggle('is-active', b.getAttribute('data-lang') === lang);
      });
    };
  }

  function wireBehaviors(applyLang) {
    // Desktop dropdown hover/click
    const dd = document.getElementById('eco-dd');
    if (dd) {
      const trigger = dd.querySelector('.nav__dd-trigger');
      let closeTimer;
      const open = () => { clearTimeout(closeTimer); dd.classList.add('is-open'); trigger.setAttribute('aria-expanded', 'true'); };
      const close = () => { dd.classList.remove('is-open'); trigger.setAttribute('aria-expanded', 'false'); };
      const closeSoon = () => { closeTimer = setTimeout(close, 180); };
      dd.addEventListener('mouseenter', open);
      dd.addEventListener('mouseleave', closeSoon);
      trigger.addEventListener('click', (e) => { e.stopPropagation(); dd.classList.contains('is-open') ? close() : open(); });
      document.addEventListener('click', (e) => { if (!dd.contains(e.target)) close(); });
    }

    // Mobile burger
    const nav = document.querySelector('.nav');
    const burger = nav && nav.querySelector('.nav__burger');
    if (burger && nav) {
      burger.addEventListener('click', () => {
        const open = nav.classList.toggle('is-drawer-open');
        burger.setAttribute('aria-expanded', String(open));
      });
      // Close drawer on link click inside it
      nav.querySelectorAll('.nav__drawer a').forEach(a => {
        a.addEventListener('click', () => nav.classList.remove('is-drawer-open'));
      });
    }

    // Mobile drawer accordion
    document.querySelectorAll('.nav__drawer-acc').forEach(acc => {
      const trigger = acc.querySelector('.nav__drawer-acc-trigger');
      if (!trigger) return;
      trigger.addEventListener('click', () => {
        const open = acc.classList.toggle('is-open');
        trigger.setAttribute('aria-expanded', String(open));
      });
    });

    // Language selector (desktop)
    const sel = document.getElementById('lang-select');
    if (sel) sel.addEventListener('change', (e) => applyLang(e.target.value));

    // Language buttons (mobile drawer)
    document.querySelectorAll('.nav__drawer-lang button').forEach(b => {
      b.addEventListener('click', () => applyLang(b.getAttribute('data-lang')));
    });
  }

  function init(options) {
    options = options || {};
    const pageI18N = options.pageI18N || {};

    injectStyles();
    injectChrome();

    const dict = mergeDicts(pageI18N);
    const applyLang = makeApplyLang(dict);

    wireBehaviors(applyLang);

    // Resolve initial language
    let stored = null;
    try { stored = localStorage.getItem('nexus.lang'); } catch (e) {}
    const initial = (stored && dict[stored]) ? stored : 'EN';
    applyLang(initial);
  }

  window.NexusShared = { init: init, I18N: SHARED_I18N };
})();
