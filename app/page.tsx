"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

const projects = [
  {
    num: "001",
    kind: "Full Stack · IA & Automação",
    title: "Plataforma de recrutamento com triagem por IA",
    description: "Portal de vagas completo (Next.js, 3 perfis de acesso) + agente conversacional no WhatsApp que triagem candidatos automaticamente com DeepSeek + extração de 18 campos curriculares sem intervenção humana.",
    tech: ["Next.js", "PostgreSQL", "n8n", "DeepSeek", "Redis"],
    href: "/cases#case-06",
    external: false,
    thumbnail: "/images/hub-escola.png",
  },
  {
    num: "002",
    kind: "Automação · Python",
    title: "Automação de Download de NFS-e",
    description: "Ferramenta com interface gráfica que baixa NFS-e do Portal Nacional para múltiplas empresas a partir de uma planilha — substituindo um processo manual de horas por alguns cliques.",
    tech: ["Python", "Selenium", "openpyxl"],
    href: "https://github.com/rafaelasv/baixa-nfse",
    external: true,
    thumbnail: "/images/baixa_nfse.png",
  },
  {
    num: "003",
    kind: "Freelance · Web",
    title: "Scaldini Garcia Contabilidade",
    description: "Redesign completo do site institucional, com foco em transmitir credibilidade e facilitar o contato com o escritório.",
    tech: ["Wix"],
    href: "https://www.scaldinigarcia.com.br/",
    external: true,
    thumbnail: "/images/scaldini-screenshot.png",
  },
  {
    num: "004",
    kind: "Freelance · React",
    title: "Saigom Contabilidade",
    description: "Site institucional desenvolvido para a Saigom Contabilidade com design limpo e navegação direta.",
    tech: ["React", "JavaScript"],
    href: "https://saigom-contabilidade.vercel.app/",
    external: true,
    thumbnail: "/images/saigom-screenshot.png",
  },
  {
    num: "005",
    kind: "Frontend · React",
    title: "O Bando Mágico",
    description: "Site interativo em homenagem às calopsitas Jujuba, Theo e Yuki, com ilustrações em aquarela e um gerador de nomes. Um projeto pessoal pra explorar microinterações e identidade visual.",
    tech: ["React", "Next.js", "Tailwind"],
    href: "https://bando-magico.vercel.app/",
    external: true,
    thumbnail: "/images/bandomagico.png",
  },
  {
    num: "006",
    kind: "Frontend · React",
    title: "Gerador de QR Code",
    description: "App para gerar QR Codes a partir de texto ou URLs, com personalização e download. Foco em uma experiência rápida, acessível e sem fricção.",
    tech: ["React", "Next.js", "Tailwind"],
    href: "/geradorqr",
    external: false,
    thumbnail: "/images/geradorqr.png",
  },
  {
    num: "007",
    kind: "Frontend · React",
    title: "Gerador de Senhas",
    description: "Gerador de senhas seguras com controle de tamanho e complexidade. Foco em usabilidade e feedback visual imediato.",
    tech: ["React", "Next.js", "Tailwind"],
    href: "/senhas",
    external: false,
    thumbnail: "/images/geradorsenhas.png",
  },
  {
    num: "008",
    kind: "Frontend · React",
    title: "Relógio Digital",
    description: "Relógio digital interativo com suporte a fusos horários e formato 12h/24h.",
    tech: ["React", "Next.js", "Tailwind"],
    href: "/relogio",
    external: false,
    thumbnail: "/images/relogio.png",
  },
]

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false)

  // Nav scroll + progress bar
  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 24)
      const h = document.documentElement
      const max = h.scrollHeight - h.clientHeight
      const prog = document.getElementById("progress")
      if (prog) prog.style.width = (max > 0 ? (h.scrollTop / max * 100) : 0) + "%"
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".portfolio-page .fade")
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("in"), i * 80)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="portfolio-page">
      <div className="progress" id="progress" />

      {/* NAV */}
      <nav id="nav" className={navScrolled ? "scrolled" : ""}>
        <div className="wrap">
          <a href="#hero" className="logo">
            rafaela<i style={{ color: "var(--accent)" }}>.tavares</i>
          </a>
          <div className="nav-right">
            <ul className="nav-links">
              <li><a href="#sobre">sobre</a></li>
              <li><a href="#stack">stack</a></li>
              <li><a href="#projetos">projetos</a></li>
              <li><Link href="/cases">cases</Link></li>
              <li><a href="#contato">contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="postmark"><span className="mono">23 . 07 . 26</span><span className="mono">PORTFÓLIO PROOF</span></div>
        <div className="sticker" style={{ top: "96px", right: "64px", width: "120px", transform: "rotate(-8deg)" }}>
          <img src="/stickers/sticker-sparkles.png" alt="" />
        </div>
        <div className="sticker" style={{ bottom: "16px", left: "70px", width: "96px", transform: "rotate(6deg)" }}>
          <img src="/stickers/sticker-star.png" alt="" />
        </div>
        <div className="wrap">
          <div className="hero-grid">
            <div className="hero-left">
              <h1 className="headline">
                Interfaces que <i>encantam</i> e automações que economizam <i>horas</i>.
              </h1>
              <p className="hero-sub">
                Desenvolvedora frontend com foco em produto. Construo experiências limpas em React e Next.js — e automatizo o trabalho repetitivo com Python.
              </p>
              <div className="btns">
                <a href="#projetos" className="btn btn-fill">
                  ver projetos <span className="arr">→</span>
                </a>
                <a href="#contato" className="btn">falar comigo</a>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-disco">
                <img src="/stickers/disco-ball.png" alt="globo de espelhos" />
              </div>
              <div className="ticket">
                <div className="tt">rafaela tavares</div>
                <div className="row"><span>foco</span><b>frontend · produto</b></div>
                <div className="row"><span>stack</span><b>react · next.js · ts</b></div>
                <div className="row"><span>extra</span><b>python · automação</b></div>
                <div className="row"><span>local</span><b>brasil · remoto</b></div>
                <div className="row"><span>status</span><b className="ok">● disponível</b></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap"><div className="hr" /></div>

      {/* SOBRE */}
      <section id="sobre">
        <div className="sticker" style={{ top: "14px", right: "84px", width: "104px", transform: "rotate(-4deg)" }}>
          <img src="/stickers/sticker-hearts.png" alt="" />
        </div>
        <div className="wrap">
          <p className="eyebrow fade"><span className="idx">01</span> Sobre</p>
          <div className="sobre-grid fade">
            <div className="sobre-photo-frame">
              <img src="/images/sobremim.jpg" alt="Rafaela Tavares" />
            </div>
            <div className="sobre-text">
              <p>
                Sou <strong>Rafaela Tavares</strong>, desenvolvedora frontend que pensa em produto antes de pensar em pixel. Gosto de interfaces que são óbvias de usar e bonitas de olhar — onde cada decisão tem um motivo.
              </p>
              <p>
                Trabalho na interseção entre <strong>design e engenharia</strong>: construo com React, Next.js e TypeScript, automatizo processos repetitivos com Python e Node, e integro IA quando ela resolve o problema de verdade — não só por estar na moda.
              </p>
              <div className="facts">
                <div className="fact">
                  <div className="n">+3</div>
                  <div className="l">anos com código</div>
                </div>
                <div className="fact">
                  <div className="n">10+</div>
                  <div className="l">tecnologias</div>
                </div>
                <div className="fact">
                  <div className="n">100%</div>
                  <div className="l">remoto / async</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap"><div className="hr" /></div>

      {/* STACK */}
      <section id="stack">
        <div className="sticker" style={{ top: "10px", left: "70px", width: "92px", transform: "rotate(5deg)" }}>
          <img src="/stickers/sticker-exclamation.png" alt="" />
        </div>
        <div className="wrap">
          <p className="eyebrow fade"><span className="idx">02</span> Stack</p>
          <div className="stack-grid fade">
            <div className="stack-cat">
              <div className="cat-h"><span className="idx">/</span> Frontend</div>
              <div className="chips">
                <span className="chip">React</span>
                <span className="chip">Next.js</span>
                <span className="chip">TypeScript</span>
                <span className="chip">CSS</span>
                <span className="chip">Tailwind</span>
              </div>
            </div>
            <div className="stack-cat">
              <div className="cat-h"><span className="idx">/</span> Backend &amp; Dados</div>
              <div className="chips">
                <span className="chip">Node.js</span>
                <span className="chip">Python</span>
                <span className="chip">PostgreSQL</span>
                <span className="chip">REST APIs</span>
              </div>
            </div>
            <div className="stack-cat">
              <div className="cat-h"><span className="idx">/</span> Automação &amp; IA</div>
              <div className="chips">
                <span className="chip">Selenium</span>
                <span className="chip">n8n</span>
                <span className="chip">Make</span>
                <span className="chip">LLMs / IA</span>
              </div>
            </div>
            <div className="stack-cat">
              <div className="cat-h"><span className="idx">/</span> Ferramentas</div>
              <div className="chips">
                <span className="chip">Git</span>
                <span className="chip">Figma</span>
                <span className="chip">VS Code</span>
                <span className="chip">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap"><div className="hr" /></div>

      {/* PROJETOS */}
      <section id="projetos">
        <div className="sticker" style={{ bottom: "14px", right: "96px", width: "100px", transform: "rotate(-6deg)" }}>
          <img src="/stickers/sticker-star.png" alt="" />
        </div>
        <div className="sticker" style={{ top: "6px", right: "180px", width: "90px", transform: "rotate(7deg)" }}>
          <img src="/stickers/sticker-crow.png" alt="" />
        </div>
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow fade"><span className="idx">03</span> Projetos selecionados</p>
            <Link href="/cases" className="sec-link fade">
              Ver cases aprofundados <span className="arr">→</span>
            </Link>
          </div>
          <div className="proj-list">
            {projects.map((p) => (
              <article key={p.num} className="proj fade">
                <div className="proj-img-wrap">
                  <img src={p.thumbnail} alt={p.title} className="proj-img" />
                </div>
                <div className="proj-body">
                  <div className="proj-top">
                    <span className="num">{p.num}</span>
                    <span className="kind">{p.kind}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="proj-tags">
                    {p.tech.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <div className="proj-links">
                    {p.external ? (
                      <a href={p.href} target="_blank" rel="noopener noreferrer">
                        Ver projeto <span className="arr">↗</span>
                      </a>
                    ) : (
                      <Link href={p.href}>
                        Ver projeto <span className="arr">↗</span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap"><div className="hr" /></div>

      {/* CONTATO */}
      <section id="contato">
        <div className="sticker" style={{ bottom: "20px", left: "60px", width: "100px", transform: "rotate(4deg)" }}>
          <img src="/stickers/sticker-sparkles.png" alt="" />
        </div>
        <div className="wrap">
          <p className="eyebrow fade"><span className="idx">04</span> Contato</p>
          <h2 className="contact-head fade">
            Vamos construir algo <span className="gold">que funciona</span>?
          </h2>
          <p className="contact-sub fade">
            Aberta para oportunidades, freelances e colaborações. Me manda uma mensagem — respondo rápido.
          </p>
          <div className="contact-row fade">
            <a href="mailto:contato@rafaelatavares.dev" className="email-btn">
              <span style={{ color: "var(--accent)" }}>@</span> contato@rafaelatavares.dev
            </a>
            <div className="socials">
              <a
                href="https://linkedin.com/in/rafaela-s-tavares"
                target="_blank"
                rel="noopener noreferrer"
                className="soc"
                title="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/rafaelasv"
                target="_blank"
                rel="noopener noreferrer"
                className="soc"
                title="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <span className="mono">rafaela tavares — 2026</span>
          <span className="mono" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a href="#hero">de volta ao topo ↑</a>
            <img src="/stickers/sticker-rabbit.png" alt="" style={{ width: "40px", transform: "rotate(-6deg)" }} />
          </span>
        </div>
      </footer>
    </div>
  )
}
