import Link from "next/link"
import SiteHeader from "@/components/site-header"

type Project = {
  num: string
  cat: string
  title: string
  img: string
  alt: string
  desc: string
  tags: string[]
  link: { label: string; href: string; external: boolean }
}

const featured: Project[] = [
  {
    num: "001",
    cat: "IA · Automação",
    title: "Agente de triagem de candidatos via WhatsApp",
    img: "/images/hub-escola.png",
    alt: "Agente de triagem de candidatos via WhatsApp",
    desc: "Agente conversacional no WhatsApp que conduz a triagem de candidatos do primeiro contato à classificação automática (apto, reprovado ou desistente), com extração de 18 campos curriculares por IA. O portal de vagas foi adaptado a partir de uma base existente.",
    tags: ["n8n", "Evolution API", "DeepSeek", "Redis", "PostgreSQL"],
    link: { label: "ver case →", href: "/cases#case-06", external: false },
  },
  {
    num: "002",
    cat: "Automação · Python",
    title: "Automação de download de NFS-e",
    img: "/images/baixa_nfse.png",
    alt: "Automação de download de NFS-e",
    desc: "Ferramenta com interface gráfica que baixa NFS-e do Portal Nacional para múltiplas empresas a partir de uma planilha, substituindo um processo manual de horas por alguns cliques.",
    tags: ["Python", "Selenium", "openpyxl"],
    link: { label: "código no GitHub ↗", href: "https://github.com/rafaelasv/baixa-nfse", external: true },
  },
  {
    num: "003",
    cat: "Freelance · React",
    title: "Saigom Contabilidade",
    img: "/images/saigom-screenshot.png",
    alt: "Site da Saigom Contabilidade",
    desc: "Site institucional desenvolvido para a Saigom Contabilidade, com design limpo e navegação direta.",
    tags: ["React", "JavaScript"],
    link: { label: "ver site ↗", href: "https://saigom-contabilidade.vercel.app/", external: true },
  },
  {
    num: "004",
    cat: "Freelance · Web",
    title: "Redesign do site do Scaldini Garcia",
    img: "/images/scaldini-screenshot.png",
    alt: "Site do Scaldini Garcia Contabilidade",
    desc: "Redesign completo do site institucional, com foco em transmitir credibilidade e facilitar o contato com o escritório.",
    tags: ["Wix"],
    link: { label: "ver site ↗", href: "https://www.scaldinigarcia.com.br/", external: true },
  },
]

const experiments = [
  { title: "Gerador de QR Code", desc: "texto ou URL → QR", img: "/images/geradorqr.png", href: "/geradorqr", external: false },
  { title: "Gerador de Senhas", desc: "tamanho e complexidade", img: "/images/geradorsenhas.png", href: "/senhas", external: false },
  { title: "Relógio Digital", desc: "fusos e 12h/24h", img: "/images/relogio.png", href: "/relogio", external: false },
  { title: "O Bando Mágico", desc: "microinterações", img: "/images/bandomagico.png", href: "https://bando-magico.vercel.app/", external: true },
]

const jobs = [
  { when: "jul/2026 até hoje", what: "Desenvolvedora Full Stack Jr. (Freelance, PJ)", where: "Hub Escola" },
  { when: "mai/2026 a jul/2026", what: "Assistente de Operações (Freelance, PJ)", where: "Amanda Arrigo Teacher" },
  { when: "abr/2026 a jul/2026", what: "Estagiária de Suporte", where: "e-Price Tecnologia" },
  { when: "abr/2024 a set/2025", what: "Técnico de Suporte", where: "Scaldini Garcia Contabilidade" },
]

const education = [
  { when: "previsão de conclusão jul/2027", what: "Análise e Desenvolvimento de Sistemas", where: "UNINTER" },
  { when: "concluído em 2024", what: "Técnico em Informática para Internet", where: "IFSULDEMINAS" },
]

const stack = [
  { group: "automação & IA", items: "n8n · Make · Selenium · LLMs" },
  { group: "backend & dados", items: "Python · Node.js · PostgreSQL · REST APIs" },
  { group: "frontend", items: "React · Next.js · TypeScript · Tailwind" },
  { group: "ferramentas", items: "Git · Figma · VS Code · Vercel" },
]

const contacts = [
  { label: "e-mail", value: "contato@rafaelatavares.dev", href: "mailto:contato@rafaelatavares.dev", external: false },
  { label: "LinkedIn", value: "in/rafaela-s-tavares ↗", href: "https://linkedin.com/in/rafaela-s-tavares", external: true },
  { label: "GitHub", value: "github.com/rafaelasv ↗", href: "https://github.com/rafaelasv", external: true },
  { label: "currículo", value: "Baixar currículo (PDF) ↓", href: "/curriculo-rafaela-tavares.pdf", external: false, download: true },
]

const CV_HREF = "/curriculo-rafaela-tavares.pdf"

export default function Home() {
  return (
    <div className="portfolio-page">
      <SiteHeader />

      <main className="home">
        <section id="hero" className="hp-hero">
          <div className="sticker hp-sticker--star" aria-hidden="true">
            <img src="/stickers/sticker-star.png" alt="" />
          </div>

          <div className="hp-hero__main">
            <p className="hp-avail">
              <span className="dot">●</span>
              <span>disponível · Trainee / Dev Júnior · remoto</span>
            </p>
            <h1>
              Do <em>backend</em> ao <em className="pink">frontend</em>, com automação e IA no meio.
            </h1>
            <p className="hp-sub">
              Desenvolvedora full-stack com foco em automação e IA. Construo do backend à interface, com Python, Node.js e React, e automatizo o que consome tempo demais.
            </p>
            <div className="hp-ctas">
              <a href="#projetos" className="hp-btn hp-btn--fill">ver projetos →</a>
              <a href="#contato" className="hp-btn">falar comigo</a>
              <a href={CV_HREF} download className="hp-btn hp-btn--pink">Baixar currículo (PDF) ↓</a>
            </div>
            <div className="hp-links">
              <a href="https://github.com/rafaelasv" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
              <a href="https://linkedin.com/in/rafaela-s-tavares" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href="mailto:contato@rafaelatavares.dev">contato@rafaelatavares.dev</a>
            </div>
          </div>

          <aside className="hp-ticket" aria-label="resumo">
            <p className="hp-ticket__name">rafaela tavares</p>
            <dl>
              <div className="hp-ticket__row"><dt>foco</dt><dd>full-stack · automação · IA</dd></div>
              <div className="hp-ticket__row"><dt>stack</dt><dd>python · node · react</dd></div>
              <div className="hp-ticket__row"><dt>extra</dt><dd>n8n · llms · integrações</dd></div>
              <div className="hp-ticket__row"><dt>local</dt><dd>Nova Serrana, MG · remoto</dd></div>
              <div className="hp-ticket__row"><dt>busca</dt><dd>Trainee / Desenvolvedora Júnior</dd></div>
            </dl>
          </aside>
        </section>

        <section id="projetos" className="hp-section">
          <div className="sticker hp-sticker--crow" aria-hidden="true">
            <img src="/stickers/sticker-crow.png" alt="" />
          </div>
          <p className="hp-eyebrow">01 · projetos em destaque</p>
          <h2 className="hp-h2">O que eu já entreguei</h2>

          <div className="hp-grid">
            {featured.map((p) => (
              <article key={p.num} className="hp-card">
                <img src={p.img} alt={p.alt} loading="lazy" className="hp-card__img" />
                <div className="hp-card__body">
                  <p className="hp-card__meta">{p.num} · {p.cat}</p>
                  <h3>{p.title}</h3>
                  <p className="hp-card__desc">{p.desc}</p>
                  <ul className="hp-tags" aria-label="tecnologias">
                    {p.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <div className="hp-card__links">
                    {p.link.external ? (
                      <a href={p.link.href} target="_blank" rel="noopener noreferrer">{p.link.label}</a>
                    ) : (
                      <Link href={p.link.href}>{p.link.label}</Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <Link href="/cases" className="hp-more">ver cases aprofundados →</Link>

          <div className="hp-lab">
            <h3>Experimentos</h3>
            <p className="hp-lab__sub">projetos de treino · React · Next.js · Tailwind</p>
            <ul>
              {experiments.map((e) => {
                const inner = (
                  <>
                    <img src={e.img} alt="" loading="lazy" />
                    <span className="hp-lab__text">
                      <span className="hp-lab__title">{e.title} {e.external ? "↗" : "→"}</span>
                      <span className="hp-lab__desc">{e.desc}</span>
                    </span>
                  </>
                )
                return (
                  <li key={e.title}>
                    {e.external ? (
                      <a href={e.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                    ) : (
                      <Link href={e.href}>{inner}</Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section id="experiencia" className="hp-section hp-split">
          <div>
            <p className="hp-eyebrow">02 · experiência</p>
            <h2 className="hp-h2 hp-h2--tight">Experiência</h2>
            <ol className="hp-timeline">
              {jobs.map((j) => (
                <li key={j.when}>
                  <span className="hp-when">{j.when}</span>
                  <span className="hp-what">{j.what}</span>
                  <span className="hp-where">{j.where}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="hp-eyebrow">formação</p>
            <h2 className="hp-h2 hp-h2--tight">Formação</h2>
            <ol className="hp-timeline">
              {education.map((d) => (
                <li key={d.what}>
                  <span className="hp-when">{d.when}</span>
                  <span className="hp-what">{d.what}</span>
                  <span className="hp-where">{d.where}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="sobre" className="hp-section hp-about">
          <div className="sticker hp-sticker--hearts" aria-hidden="true">
            <img src="/stickers/sticker-hearts.png" alt="" />
          </div>
          <figure className="hp-polaroid">
            <img src="/images/sobremim.jpg" alt="Rafaela Tavares" />
          </figure>
          <div className="hp-about__text">
            <p className="hp-eyebrow">03 · sobre</p>
            <p>
              Sou <strong>Rafaela Tavares</strong>, desenvolvedora full-stack. Construo de ponta a ponta: automações que economizam horas de trabalho manual, integrações com IA e interfaces que são óbvias de usar.
            </p>
            <p>
              Construo com React, Next.js e TypeScript, automatizo processos repetitivos com Python e Node, e integro IA quando ela resolve o problema.
            </p>
            <div className="hp-stats">
              <div className="hp-stat">
                <div className="hp-stat__n">10+</div>
                <div className="hp-stat__l">tecnologias</div>
              </div>
              <div className="hp-stat">
                <div className="hp-stat__n">~1 h → ~5 min</div>
                <div className="hp-stat__l">tarefa manual automatizada com Python no suporte contábil</div>
              </div>
              <div className="hp-stat">
                <div className="hp-stat__n">18 campos</div>
                <div className="hp-stat__l">extraídos por IA no agente de triagem do WhatsApp</div>
              </div>
            </div>
            <div className="hp-stack">
              {stack.map((s) => (
                <div key={s.group}>
                  <div className="hp-stack__group">/ {s.group}</div>
                  <div className="hp-stack__items">{s.items}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="hp-section hp-contact">
          <div className="sticker hp-sticker--sparkles" aria-hidden="true">
            <img src="/stickers/sticker-sparkles.png" alt="" />
          </div>
          <p className="hp-eyebrow">04 · contato</p>
          <h2>Vamos construir algo que funciona?</h2>
          <p className="hp-contact__sub">
            Aberta para vagas de Trainee e Desenvolvedora Júnior (remoto), freelances e colaborações.
          </p>
          <ul>
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(c.download ? { download: true } : {})}
                >
                  <span className="hp-contact__label">{c.label}</span>
                  <span className="hp-contact__value">{c.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="hp-footer">
        <span>rafaela tavares · 2026</span>
        <a href="#hero">de volta ao topo ↑</a>
      </footer>
    </div>
  )
}
