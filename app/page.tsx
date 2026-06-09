"use client"
import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { SiReact, SiNextdotjs, SiTypescript, SiPython, SiNodedotjs, SiTailwindcss, SiPostgresql, SiGit, SiSelenium } from "react-icons/si"
import { BsRobot } from "react-icons/bs"

const projects = [
  {
    num: "001",
    title: "Automação de Download NFS-e",
    description: "Automação com interface gráfica para baixar NFS-e do Portal Nacional para múltiplas empresas via planilha Excel.",
    tech: ["Python", "Selenium", "openpyxl"],
    href: "https://github.com/rafaelasv/baixa-nfse",
    external: true,
    category: "ia-automacao",
    thumbnail: "/images/baixa_nfse.png",
  },
  {
    num: "002",
    title: "O Bando Mágico",
    description: "Site em homenagem às calopsitas Jujuba, Theo e Yuki, com ilustrações em aquarela e gerador de nomes.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    href: "https://bando-magico.vercel.app/",
    external: true,
    category: "frontend",
    thumbnail: "/images/bandomagico.png",
  },
  {
    num: "003",
    title: "Gerador QR Code",
    description: "Projeto simples para gerar QR Codes a partir de texto ou URLs, com opções de personalização e download.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    href: "/geradorqr",
    external: false,
    category: "frontend",
    thumbnail: "/images/geradorqr.png",
  },
  {
    num: "004",
    title: "Gerador de Senhas",
    description: "Gerador de senhas seguras e personalizáveis com controle de tamanho e complexidade.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    href: "/senhas",
    external: false,
    category: "frontend",
    thumbnail: "/images/geradorsenhas.png",
  },
  {
    num: "005",
    title: "Relógio Digital",
    description: "Relógio digital interativo que exibe a hora em tempo real com suporte a fusos horários.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    href: "/relogio",
    external: false,
    category: "frontend",
    thumbnail: "/images/relogio.png",
  },
  {
    num: "006",
    title: "Scaldini Garcia Contabilidade",
    description: "Redesign completo do site institucional da Scaldini Garcia Contabilidade.",
    tech: ["Wix"],
    href: "https://www.scaldinigarcia.com.br/",
    external: true,
    category: "freelance",
    thumbnail: "/images/scaldini-screenshot.png",
  },
  {
    num: "007",
    title: "Saigom Contabilidade",
    description: "Site institucional desenvolvido para a Saigom Contabilidade.",
    tech: ["React", "JavaScript"],
    href: "https://saigom-contabilidade.vercel.app/",
    external: true,
    category: "freelance",
    thumbnail: "/images/saigom-screenshot.png",
  },
]

const cases = [
  {
    num: "001",
    title: "Infraestrutura de vendas — escola de idiomas",
    client: "Cliente: escola de idiomas online · freelance",
    problem: "Vendas e onboarding manuais: contratos por e-mail, cobranças no braço, nenhum fluxo automatizado.",
    solution: "Sistema integrado com geração e assinatura automática de contratos, pagamento recorrente e bot de WhatsApp para onboarding de alunas.",
    result: "Processo de entrada de aluna passou de manual para totalmente automatizado, do pagamento ao acesso.",
    tech: ["Python", "n8n", "Webhooks", "Asaas", "Guru", "Assiny", "WhatsApp API", "Google AppScript"],
  },
  {
    num: "002",
    title: "Sistema de conteúdo e distribuição",
    client: "Cliente: escola de idiomas online · freelance",
    problem: "Produção de conteúdo descentralizada, sem identidade visual consistente e sem infraestrutura de distribuição.",
    solution: "8 páginas de guias de conteúdo, páginas de link in bio para Instagram e TikTok, página de vendas de curso e pipeline automatizado de vídeo com marca d'água.",
    result: "Canal de distribuição completo com identidade visual unificada e automação de produção de vídeo.",
    tech: ["HTML/CSS", "JavaScript", "Google AppScript", "Automação de vídeo"],
  },
  {
    num: "003",
    title: "Automação de processos contábeis",
    client: "Cliente: escritório de contabilidade · CLT",
    problem: "Tarefas operacionais repetitivas consumindo ~1h por execução. Volume de tickets alto com perguntas recorrentes.",
    solution: "Scripts Python para automação de tarefas recorrentes, agente de IA interno para escalar atendimento, documentação e tutoriais em vídeo.",
    result: "Tempo de execução reduzido de 1h para 5 min. Redução de tickets repetitivos via documentação estruturada.",
    tech: ["Python", "Selenium", "SQL", "LLMs / Agentes de IA", "ERPs (Bling, Tiny, Upseller)"],
  },
]

const skills = [
  { icon: <SiReact />,      name: "React" },
  { icon: <SiNextdotjs />,  name: "Next.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiPython />,     name: "Python" },
  { icon: <SiNodedotjs />,  name: "Node.js" },
  { icon: <BsRobot />,      name: "IA / LLMs" },
  { icon: <SiTailwindcss />,name: "Tailwind CSS" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiGit />,        name: "Git" },
  { icon: <SiSelenium />,   name: "Automação" },
]

const FILTER_TABS = [
  { label: "Todos", value: "all" },
  { label: "Frontend", value: "frontend" },
  { label: "IA & Automação", value: "ia-automacao" },
  { label: "Freelance", value: "freelance" },
]

function CompassRose() {
  return (
    <svg className="arcane-rose" viewBox="0 0 600 600" fill="none" aria-hidden="true">
      <circle cx="300" cy="300" r="290" stroke="#C9A96E" strokeWidth="0.5" />
      <circle cx="300" cy="300" r="246" stroke="#C9A96E" strokeWidth="0.8" />
      <circle cx="300" cy="300" r="185" stroke="#C9A96E" strokeWidth="1.2" />
      <circle cx="300" cy="300" r="128" stroke="#C9A96E" strokeWidth="0.55" />
      <circle cx="300" cy="300" r="68"  stroke="#C9A96E" strokeWidth="0.55" />
      <circle cx="300" cy="300" r="20"  stroke="#C9A96E" strokeWidth="0.9" />
      <line x1="300" y1="10"  x2="300" y2="590" stroke="#C9A96E" strokeWidth="0.4" />
      <line x1="10"  y1="300" x2="590" y2="300" stroke="#C9A96E" strokeWidth="0.4" />
      <line x1="94"  y1="94"  x2="506" y2="506" stroke="#C9A96E" strokeWidth="0.25" />
      <line x1="506" y1="94"  x2="94"  y2="506" stroke="#C9A96E" strokeWidth="0.25" />
      <polygon points="300,10 306,32 300,24 294,32"    fill="#C9A96E" />
      <polygon points="300,590 306,568 300,576 294,568" fill="#C9A96E" />
      <polygon points="10,300 32,306 24,300 32,294"    fill="#C9A96E" />
      <polygon points="590,300 568,306 576,300 568,294" fill="#C9A96E" />
      <rect x="297" y="51"  width="6" height="6" transform="rotate(45,300,54)"  fill="#C9A96E" opacity="0.8" />
      <rect x="297" y="543" width="6" height="6" transform="rotate(45,300,546)" fill="#C9A96E" opacity="0.8" />
      <rect x="51"  y="297" width="6" height="6" transform="rotate(45,54,300)"  fill="#C9A96E" opacity="0.8" />
      <rect x="543" y="297" width="6" height="6" transform="rotate(45,546,300)" fill="#C9A96E" opacity="0.8" />
      <rect x="298" y="113" width="4" height="14" fill="#C9A96E" opacity="0.7" />
      <rect x="298" y="473" width="4" height="14" fill="#C9A96E" opacity="0.7" />
      <rect x="113" y="298" width="14" height="4"  fill="#C9A96E" opacity="0.7" />
      <rect x="473" y="298" width="14" height="4"  fill="#C9A96E" opacity="0.7" />
      <circle cx="169" cy="169" r="3.5" fill="#C9A96E" opacity="0.55" />
      <circle cx="431" cy="169" r="3.5" fill="#C9A96E" opacity="0.55" />
      <circle cx="169" cy="431" r="3.5" fill="#C9A96E" opacity="0.55" />
      <circle cx="431" cy="431" r="3.5" fill="#C9A96E" opacity="0.55" />
      <g transform="translate(300,300)">
        <polygon points="0,-25 3,-9  0,-11 -3,-9"  fill="#C9A96E" />
        <polygon points="0,25  3,9   0,11  -3,9"   fill="#C9A96E" />
        <polygon points="-25,0 -9,3  -11,0 -9,-3"  fill="#C9A96E" />
        <polygon points="25,0  9,3   11,0  9,-3"   fill="#C9A96E" />
        <polygon points="0,-16 2,-4 0,-3 -2,-4" fill="#C9A96E" transform="rotate(45)"  opacity="0.7" />
        <polygon points="0,-16 2,-4 0,-3 -2,-4" fill="#C9A96E" transform="rotate(135)" opacity="0.7" />
        <polygon points="0,-16 2,-4 0,-3 -2,-4" fill="#C9A96E" transform="rotate(225)" opacity="0.7" />
        <polygon points="0,-16 2,-4 0,-3 -2,-4" fill="#C9A96E" transform="rotate(315)" opacity="0.7" />
        <circle cx="0" cy="0" r="5.5" fill="#C9A96E" />
        <circle cx="0" cy="0" r="9.5" fill="none" stroke="#C9A96E" strokeWidth="0.9" />
      </g>
    </svg>
  )
}

function OrnamentalDivider() {
  return (
    <div className="divider-wrap">
      <svg viewBox="0 0 860 28" fill="none" aria-hidden="true">
        <line x1="0"   y1="14" x2="360" y2="14" stroke="#C9A96E" strokeOpacity="0.2" />
        <path d="M364 14 C372 5, 383 5, 391 14 C399 23, 410 23, 418 14" stroke="#C9A96E" strokeOpacity="0.65" strokeWidth="1.1" fill="none" />
        <circle cx="430" cy="14" r="3.5" fill="#C9A96E" opacity="0.85" />
        <path d="M442 14 C450 23, 461 23, 469 14 C477 5, 488 5, 496 14" stroke="#C9A96E" strokeOpacity="0.65" strokeWidth="1.1" fill="none" />
        <line x1="500" y1="14" x2="860" y2="14" stroke="#C9A96E" strokeOpacity="0.2" />
        <circle cx="360" cy="14" r="2" fill="#C9A96E" opacity="0.4" />
        <circle cx="500" cy="14" r="2" fill="#C9A96E" opacity="0.4" />
      </svg>
    </div>
  )
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [navScrolled, setNavScrolled]   = useState(false)
  const [owlStartled, setOwlStartled]   = useState(false)
  const [owlMsgVisible, setOwlMsgVisible] = useState(false)
  const [theme, setTheme] = useState<"dark" | "light">("dark")
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const owlRef    = useRef<HTMLDivElement>(null)
  const themeRef  = useRef(theme)
  themeRef.current = theme

  // Load saved theme
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio:theme")
      if (saved === "light") setTheme("light")
    } catch {}
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark"
      try { localStorage.setItem("portfolio:theme", next) } catch {}
      return next
    })
  }, [])

  // Nav scroll effect
  useEffect(() => {
    const handler = () => setNavScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handler, { passive: true })
    return () => window.removeEventListener("scroll", handler)
  }, [])

  // Gold particle system
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let W = 0, H = 0
    type Particle = { x: number; y: number; r: number; vy: number; vx: number; a: number; da: number }
    let particles: Particle[] = []
    let rafId: number

    function resize() {
      W = canvas!.width  = window.innerWidth
      H = canvas!.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize, { passive: true })

    function mkP(): Particle {
      const fromBottom = Math.random() < 0.4
      return {
        x:  Math.random() * W,
        y:  fromBottom ? H + 4 : Math.random() * H,
        r:  0.4 + Math.random() * 1.4,
        vy: -(0.25 + Math.random() * 0.6),
        vx: (Math.random() - 0.5) * 0.25,
        a:  0.3 + Math.random() * 0.7,
        da: 0.002 + Math.random() * 0.004,
      }
    }
    for (let i = 0; i < 95; i++) particles.push(mkP())

    function loop() {
      ctx!.clearRect(0, 0, W, H)
      particles.forEach((p, i) => {
        p.y += p.vy; p.x += p.vx; p.a -= p.da
        if (p.a <= 0) { particles[i] = mkP(); return }
        const isLight = themeRef.current === "light"
        const fillColor = isLight ? "#b07830" : "#c9a96e"
        const glowColor = isLight ? "rgba(176,120,48,0.45)" : "rgba(201,169,110,0.7)"
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.globalAlpha  = p.a * (isLight ? 0.6 : 1)
        ctx!.fillStyle    = fillColor
        ctx!.shadowBlur   = isLight ? 5 : 9
        ctx!.shadowColor  = glowColor
        ctx!.fill()
        ctx!.globalAlpha  = 1
      })
      rafId = requestAnimationFrame(loop)
    }
    loop()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  // Scroll reveal — initial load for static elements
  useEffect(() => {
    const els = document.querySelectorAll("[data-fade]")
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("fade-in"), i * 100)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Re-observe project cards after filter changes
  useEffect(() => {
    const els = document.querySelectorAll(".proj-card[data-fade]")
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("fade-in"), i * 80)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.05 })
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [activeFilter])

  // Cursor sparkle trail
  useEffect(() => {
    let lx = 0, ly = 0
    const handler = (e: MouseEvent) => {
      if (Math.hypot(e.clientX - lx, e.clientY - ly) < 14) return
      lx = e.clientX; ly = e.clientY
      const el = document.createElement("span")
      el.className   = "cursor-spark"
      el.textContent = Math.random() > 0.45 ? "✦" : "·"
      el.style.left  = lx + "px"
      el.style.top   = ly + "px"
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 680)
    }
    document.addEventListener("mousemove", handler, { passive: true })
    return () => document.removeEventListener("mousemove", handler)
  }, [])

  // Owl click — startled animation + sparkle burst + "Nevermore"
  const handleOwlClick = useCallback(() => {
    setOwlStartled(true)
    setOwlMsgVisible(true)
    setTimeout(() => setOwlStartled(false), 800)
    setTimeout(() => setOwlMsgVisible(false), 1800)

    if (!owlRef.current) return
    const r  = owlRef.current.getBoundingClientRect()
    const cx = r.left + r.width / 2
    const cy = r.top  + r.height / 2
    const syms = ["✦", "✧", "⋆", "✹", "★", "·"]
    for (let i = 0; i < 12; i++) {
      const el  = document.createElement("span")
      el.className   = "spark-burst"
      el.textContent = syms[Math.floor(Math.random() * syms.length)]
      const a = (i / 12) * Math.PI * 2
      const d = 45 + Math.random() * 65
      el.style.cssText = `left:${cx}px;top:${cy}px;font-size:${9 + Math.random() * 13}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d - 20}px`
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 950)
    }
  }, [])

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="arcane-page" data-theme={theme}>

      {/* ── NAV ──────────────────────────────── */}
      <nav className={`arcane-nav${navScrolled ? " scrolled" : ""}`}>
        <a href="#hero" className="nav-logo">R.&nbsp;Tavares</a>
        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#cases">Cases</a></li>
          <li><a href="#contato">Contato</a></li>
          <li>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Alternar tema claro/escuro">
              <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="12" cy="12" r="4.5"/>
                <line x1="12" y1="2"  x2="12" y2="5"/>
                <line x1="12" y1="19" x2="12" y2="22"/>
                <line x1="4.22"  y1="4.22"  x2="6.34"  y2="6.34"/>
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
                <line x1="2"  y1="12" x2="5"  y2="12"/>
                <line x1="19" y1="12" x2="22" y2="12"/>
                <line x1="4.22"  y1="19.78" x2="6.34"  y2="17.66"/>
                <line x1="17.66" y1="6.34"  x2="19.78" y2="4.22"/>
              </svg>
              <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            </button>
          </li>
        </ul>
      </nav>

      {/* ── HERO ─────────────────────────────── */}
      <section id="hero" className="hero-section">
        <div className="hero-glow" />
        <canvas ref={canvasRef} className="particles-canvas" />
        <CompassRose />

        <div className="hero-inner">
          <p className="hero-pre">&#10022;&ensp;Portfólio&ensp;&#10022;</p>
          <h1 className="hero-name">RAFAELA<br />TAVARES</h1>
          <p className="hero-role">Automação &amp; Desenvolvimento</p>
          <div className="hero-btns">
            <a href="#projetos" className="arcane-btn btn-fill">Ver projetos</a>
            <a href="#contato"  className="arcane-btn btn-outline">Contato</a>
          </div>
        </div>

        <div className="scroll-cue">
          <span>scroll</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5">
            <rect x="0.7" y="0.7" width="12.6" height="20.6" rx="6.3" />
            <line x1="7" y1="6" x2="7" y2="10" strokeOpacity="0.9" />
          </svg>
        </div>
      </section>

      {/* ── SOBRE ────────────────────────────── */}
      <OrnamentalDivider />
      <section id="sobre" className="section-inner">
        <p className="eyebrow" data-fade="">Sobre mim</p>
        <h2 data-fade="">A maga por trás<br />do código</h2>
        <div className="sobre-layout">
          <div style={{ position: "relative", flexShrink: 0, width: 260, alignSelf: "flex-start" }} data-fade="">
            {/* Floating gold square — behind the card in DOM order */}
            <div className="photo-deco-square" />
            {/* Glass card with arcane photo effect */}
            <div style={{
              width: 260,
              height: 260,
              background: "rgba(37, 28, 47, 0.6)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              border: "0.5px solid rgba(230, 196, 135, 0.3)",
              boxShadow: "0 0 30px rgba(157, 78, 221, 0.15)",
              borderRadius: "0.25rem",
              overflow: "hidden",
              position: "relative",
              isolation: "isolate",
            }}
              className="photo-card-hover"
            >
              <img
                src="/images/sobremim.jpg"
                alt="Rafaela Tavares"
                className="photo-blend-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                  display: "block",
                }}
              />
              {/* Inner frame overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                border: "12px solid rgba(15, 7, 25, 0.4)",
                pointerEvents: "none",
                borderRadius: "0.25rem",
              }} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", flex: 1 }}>
            <div className="sobre-card" data-fade="">
              <div className="corner corner-tl" />
              <div className="corner corner-tr" />
              <div className="corner corner-bl" />
              <div className="corner corner-br" />
              <p>Sou <span className="hl">Rafaela Tavares</span>, desenvolvedora frontend apaixonada por criar interfaces que encantam — onde cada pixel carrega intenção e cada interação conta uma história.</p>
              <p>Minha magia acontece na interseção entre <span className="hl">design e tecnologia</span>. Automatizo processos com Python, n8n e agentes de IA pela eficiência. Construo interfaces com React e Next.js pela paixão. Integro sistemas porque o negócio não espera.</p>
              <p>Baseada no Brasil. Disponível para o mundo.</p>
            </div>
            <div className="edu-grid" data-fade="">
              <div className="edu-card">
                <img src="/images/IFSULDEMINAS_logo.png" alt="IFSULDEMINAS" className="edu-logo" />
                <div>
                  <p className="edu-title">Técnica em Informática para Internet</p>
                  <p className="edu-sub">IFSULDEMINAS</p>
                </div>
              </div>
              <div className="edu-card">
                <img src="/images/uninter-logo.png" alt="UNINTER" className="edu-logo" />
                <div>
                  <p className="edu-title">Análise e Desenvolvimento de Sistemas</p>
                  <p className="edu-sub">UNINTER · Em andamento</p>
                </div>
              </div>
              <div className="edu-card">
                <img src="/images/IFSULDEMINAS_logo.png" alt="IFSULDEMINAS" className="edu-logo" />
                <div>
                  <p className="edu-title">Técnico em Desenvolvimento de Sistemas</p>
                  <p className="edu-sub">IFSULDEMINAS · Em andamento</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HABILIDADES ──────────────────────── */}
      <OrnamentalDivider />
      <section id="habilidades" className="section-inner">
        <p className="eyebrow" data-fade="">Arsenal</p>
        <h2 data-fade="">Habilidades</h2>
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.name} className="skill-card" data-fade="">
              <span className="skill-icon">{s.icon}</span>
              <span className="skill-name">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJETOS ─────────────────────────── */}
      <OrnamentalDivider />
      <section id="projetos" className="section-inner">
        <p className="eyebrow" data-fade="">Trabalhos</p>
        <h2 data-fade="">Projetos</h2>

        <div className="proj-filters" data-fade="">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`proj-filter-btn${activeFilter === tab.value ? " active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((p) => (
            <div key={p.num} className="proj-card" data-fade="">
              <div className="proj-img">
                <img src={p.thumbnail} alt={p.title} />
              </div>
              <p className="proj-num">{p.num}</p>
              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">{p.description}</p>
              <div className="tags">
                {p.tech.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="proj-links">
                {p.external ? (
                  <a href={p.href} target="_blank" rel="noopener noreferrer" className="lk">
                    Ver projeto &#8594;
                  </a>
                ) : (
                  <Link href={p.href} className="lk">
                    Ver projeto &#8594;
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CASES ───────────────────────────── */}
      <OrnamentalDivider />
      <section id="cases" className="section-inner">
        <p className="eyebrow" data-fade="">Cases</p>
        <h2 data-fade="">Automações &amp; Sistemas</h2>
        <div className="cases-grid">
          {cases.map((c) => (
            <div key={c.num} className="case-card" data-fade="">
              <p className="case-num">{c.num}</p>
              <h3 className="case-title">{c.title}</h3>
              <p className="case-client">{c.client}</p>
              <div className="case-body">
                <div>
                  <p className="case-block-label">Problema</p>
                  <p className="case-block-text">{c.problem}</p>
                </div>
                <div>
                  <p className="case-block-label">Solução</p>
                  <p className="case-block-text">{c.solution}</p>
                </div>
                <div>
                  <p className="case-block-label">Resultado</p>
                  <p className="case-block-text">{c.result}</p>
                </div>
              </div>
              <div className="tags">
                {c.tech.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTATO ──────────────────────────── */}
      <OrnamentalDivider />
      <section id="contato" className="section-inner section-center">
        <p className="eyebrow eyebrow-center" data-fade="">Contato</p>
        <h2 data-fade="">Vamos criar algo<br />extraordinário?</h2>
        <p className="contact-sub" data-fade="">Aberta para oportunidades e colaborações</p>
        <div data-fade="">
          <a href="mailto:contato@rafaelatavares.dev" className="contact-email">
            contato@rafaelatavares.dev
          </a>
        </div>
        <div className="socials" data-fade="">
          <a href="https://linkedin.com/in/rafaela-s-tavares" target="_blank" rel="noopener noreferrer" className="soc" title="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://github.com/rafaelasv" target="_blank" rel="noopener noreferrer" className="soc" title="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────── */}
      <footer className="arcane-footer">
        <p>&#10022;&ensp;Rafaela Tavares &middot; 2026 &middot; Feito com código e feitiçaria&ensp;&#10022;</p>
      </footer>

      {/* ── OWL (easter egg) ─────────────────── */}
      <div
        ref={owlRef}
        className={`owl-wrap${owlStartled ? " startled" : ""}`}
        onClick={handleOwlClick}
        aria-hidden="true"
      >
        <div className={`owl-msg${owlMsgVisible ? " show" : ""}`}>
          &#10022;&ensp;Nevermore&ensp;&#10022;
        </div>
        <svg viewBox="0 0 80 72" width="64" height="58" fill="none">
          <text className="owl-star-1" x="1"  y="16" fill="#c9a96e" fontSize="7" fontFamily="serif">&#x2726;</text>
          <text className="owl-star-2" x="69" y="10" fill="#c9a96e" fontSize="5" fontFamily="serif">&#x2726;</text>
          <text className="owl-star-3" x="74" y="52" fill="#c9a96e" fontSize="4" fontFamily="serif">&#x2726;</text>
          {/* upper left wing */}
          <path d="M40,29 C36,20 24,7 9,10 C3,13 3,24 9,31 C17,40 31,38 40,33Z"
                fill="rgba(100,40,180,0.28)" stroke="#c9a96e" strokeWidth="1.4" strokeLinejoin="round"/>
          <circle cx="20" cy="20" r="8"   fill="none" stroke="#c9a96e" strokeWidth="0.8" opacity="0.6"/>
          <circle cx="20" cy="20" r="4"   fill="none" stroke="#c9a96e" strokeWidth="0.6" opacity="0.5"/>
          <circle cx="20" cy="20" r="1.8" fill="#c9a96e" opacity="0.8"/>
          <line x1="20" y1="12" x2="20" y2="28" stroke="#c9a96e" strokeWidth="0.5" opacity="0.35"/>
          <line x1="12" y1="20" x2="28" y2="20" stroke="#c9a96e" strokeWidth="0.5" opacity="0.35"/>
          <path d="M38,31 C32,27 22,19 15,13" stroke="#c9a96e" strokeWidth="0.6" opacity="0.4" fill="none"/>
          <path d="M37,33 C30,30 22,26 17,22" stroke="#c9a96e" strokeWidth="0.5" opacity="0.28" fill="none"/>
          {/* upper right wing */}
          <path d="M40,29 C44,20 56,7 71,10 C77,13 77,24 71,31 C63,40 49,38 40,33Z"
                fill="rgba(100,40,180,0.28)" stroke="#c9a96e" strokeWidth="1.4" strokeLinejoin="round"/>
          <circle cx="60" cy="20" r="8"   fill="none" stroke="#c9a96e" strokeWidth="0.8" opacity="0.6"/>
          <circle cx="60" cy="20" r="4"   fill="none" stroke="#c9a96e" strokeWidth="0.6" opacity="0.5"/>
          <circle cx="60" cy="20" r="1.8" fill="#c9a96e" opacity="0.8"/>
          <line x1="60" y1="12" x2="60" y2="28" stroke="#c9a96e" strokeWidth="0.5" opacity="0.35"/>
          <line x1="52" y1="20" x2="68" y2="20" stroke="#c9a96e" strokeWidth="0.5" opacity="0.35"/>
          <path d="M42,31 C48,27 58,19 65,13" stroke="#c9a96e" strokeWidth="0.6" opacity="0.4" fill="none"/>
          <path d="M43,33 C50,30 58,26 63,22" stroke="#c9a96e" strokeWidth="0.5" opacity="0.28" fill="none"/>
          {/* lower left wing */}
          <path d="M40,37 C36,43 26,53 14,57 C8,59 8,65 16,63 C26,60 37,49 40,41Z"
                fill="rgba(130,50,200,0.22)" stroke="#c9a96e" strokeWidth="1.2" strokeLinejoin="round"/>
          <circle cx="24" cy="52" r="3.5" fill="none" stroke="#c9a96e" strokeWidth="0.7" opacity="0.55"/>
          <circle cx="24" cy="52" r="1.4" fill="#c9a96e" opacity="0.7"/>
          {/* lower right wing */}
          <path d="M40,37 C44,43 54,53 66,57 C72,59 72,65 64,63 C54,60 43,49 40,41Z"
                fill="rgba(130,50,200,0.22)" stroke="#c9a96e" strokeWidth="1.2" strokeLinejoin="round"/>
          <circle cx="56" cy="52" r="3.5" fill="none" stroke="#c9a96e" strokeWidth="0.7" opacity="0.55"/>
          <circle cx="56" cy="52" r="1.4" fill="#c9a96e" opacity="0.7"/>
          {/* body */}
          <ellipse cx="40" cy="37" rx="2.8" ry="15" fill="#c9a96e" opacity="0.9"/>
          <ellipse cx="40" cy="37" rx="1.5" ry="13" fill="#0f0719" opacity="0.75"/>
          <circle cx="40" cy="32" r="3" fill="#c9a96e" opacity="0.6"/>
          {/* head */}
          <circle className="owl-eye" cx="40" cy="22" r="4.5" fill="#c9a96e" opacity="0.92"/>
          <circle cx="40" cy="22" r="2.6" fill="#100820"/>
          <circle cx="40.8" cy="21" r="1" fill="white" opacity="0.9"/>
          {/* antennae */}
          <path d="M38,18 C34,13 29,8 25,4" stroke="#c9a96e" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
          <circle cx="25" cy="4" r="2.8" fill="#c9a96e" opacity="0.92"/>
          <circle cx="25" cy="4" r="1.3" fill="#9d4edd"/>
          <path d="M42,18 C46,13 51,8 55,4" stroke="#c9a96e" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
          <circle cx="55" cy="4" r="2.8" fill="#c9a96e" opacity="0.92"/>
          <circle cx="55" cy="4" r="1.3" fill="#9d4edd"/>
        </svg>
      </div>

    </div>
  )
}
