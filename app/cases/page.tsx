"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

const cases = [
  {
    id: "case-01",
    num: "CASE 01",
    kind: "Automação · Produto",
    title: "Infraestrutura de vendas — escola de idiomas",
    tagline: "Sistema que automatizou toda a entrada de uma aluna nova: do pagamento ao primeiro contato no WhatsApp.",
    meta: {
      papel: "Desenvolvedora & Integradora",
      periodo: "2024 · ~3 meses",
      tipo: "Freelance",
      stack: "Python · n8n · WhatsApp API",
    },
    contexto: "Uma escola de idiomas online com fluxo de matrículas crescente operava todo o processo de forma manual — desde o envio de contratos por e-mail até a confirmação de pagamento feita na mão. Com o volume aumentando, o processo virou gargalo.",
    problema: "Vendas e onboarding inteiramente manuais: contratos enviados por e-mail, cobranças controladas numa planilha, nenhum fluxo automatizado. Cada nova aluna exigia ~1h de trabalho operacional da equipe.",
    pull: "Quando entrei no projeto, cada matrícula nova consumia cerca de uma hora de trabalho manual da equipe: enviar contrato, cobrar, confirmar pagamento, dar boas-vindas. Com 20 alunas por mês, era meio turno inteiro da semana gasto com processo, não com ensino.",
    steps: [
      {
        n: "01",
        title: "Mapeei o fluxo de ponta a ponta",
        desc: "Entrevistei a cliente e documentei cada etapa manual — do interesse da aluna ao primeiro acesso ao curso — para identificar onde automatizar teria mais impacto imediato.",
      },
      {
        n: "02",
        title: "Integrei pagamento e contrato automático",
        desc: "Conectei Asaas (cobranças recorrentes) com Assiny (assinatura digital) via webhooks e n8n. Ao confirmar o pagamento, o contrato é gerado, enviado e assinado sem intervenção humana.",
      },
      {
        n: "03",
        title: "Criei o bot de onboarding no WhatsApp",
        desc: "Automação que dispara boas-vindas personalizadas, envia o link de acesso ao Guru e guia a aluna nas primeiras horas — tudo automático, no horário certo.",
      },
    ],
    metrics: [
      { n: "0 min", l: "tempo manual por matrícula" },
      { n: "~1h", l: "economizada por aluna (antes)" },
      { n: "100%", l: "do fluxo automatizado" },
    ],
    links: [],
  },
  {
    id: "case-02",
    num: "CASE 02",
    kind: "Frontend · Conteúdo",
    title: "Sistema de conteúdo e distribuição",
    tagline: "Estrutura que deu identidade visual e organização à produção de conteúdo de uma marca com 80k seguidores.",
    meta: {
      papel: "Desenvolvedora Frontend",
      periodo: "2024 · contínuo",
      tipo: "Freelance",
      stack: "HTML/CSS · JS · Google AppScript",
    },
    contexto: "Uma escola de idiomas com 80 mil seguidores no Instagram produzia conteúdo de forma descentralizada, sem guia visual, sem identidade consistente e sem estrutura de distribuição para outros canais.",
    problema: "Produção de conteúdo desorganizada, sem identidade visual definida e sem infraestrutura para publicar além do Instagram. Cada post era um esforço individual sem padrão.",
    pull: "A marca tinha 80 mil seguidores e produzia conteúdo toda semana, mas cada post era feito sem guia — paleta, tipografia e tom mudavam de um carrossel pro outro. Nos outros canais, nada era publicado. O conteúdo morria no feed.",
    steps: [
      {
        n: "01",
        title: "Construí o sistema de identidade visual",
        desc: "Desenvolvi 8 páginas de guias de conteúdo cobrindo paleta, tipografia, tom de voz e diretrizes para cada formato — dando consistência a toda a produção.",
      },
      {
        n: "02",
        title: "Criei as páginas de distribuição",
        desc: "Páginas de link in bio otimizadas para Instagram e TikTok, mais uma página de vendas do curso principal — tudo em HTML/CSS puro com carregamento rápido.",
      },
      {
        n: "03",
        title: "Automatizei o pipeline de vídeo",
        desc: "Script em Google AppScript que aplica marca d'água nos vídeos automaticamente antes da publicação, eliminando o trabalho manual de edição básica.",
      },
    ],
    metrics: [
      { n: "8 guias", l: "de identidade visual — paleta, tipografia, tom de voz e diretrizes por formato" },
      { n: "3 páginas", l: "link in bio (Instagram e TikTok) + página de vendas do curso" },
      { n: "automático", l: "marca d'água via Google AppScript antes de cada publicação" },
    ],
    links: [],
  },
  {
    id: "case-03",
    num: "CASE 03",
    kind: "Automação · IA",
    title: "Automação de processos contábeis",
    tagline: "Tarefas que tomavam 1 hora do time passaram a ser resolvidas em 5 minutos, sem intervenção manual.",
    meta: {
      papel: "Desenvolvedora & Automatizadora",
      periodo: "2024 · CLT",
      tipo: "CLT",
      stack: "Python · Selenium · SQL · LLMs",
    },
    contexto: "Escritório de contabilidade com volume alto de tarefas operacionais repetitivas: download de documentos fiscais, geração de relatórios, atendimento de dúvidas recorrentes. O time gastava horas por semana em trabalho que poderia ser automatizado.",
    problema: "Tarefas operacionais consumindo ~1h por execução. Volume alto de tickets com perguntas que tinham a mesma resposta. Documentação inexistente dificultava o treinamento de novos colaboradores.",
    pull: "O time executava as mesmas tarefas todo dia — baixar NFS-e, puxar dados de ERPs, responder as mesmas dúvidas por ticket. Uma hora por execução, cinco dias por semana. Automatizar não era otimização, era óbvio.",
    steps: [
      {
        n: "01",
        title: "Mapeei e priorizei os processos",
        desc: "Identifiquei as tarefas que mais consumiam tempo (downloads de NFS-e, relatórios em ERPs) e priorizei pela combinação de frequência e esforço manual.",
      },
      {
        n: "02",
        title: "Automatizei com Python e Selenium",
        desc: "Scripts que executam tarefas em segundos — download em lote de NFS-e, extração de dados de ERPs (Bling, Tiny, Upseller) e geração automática de relatórios.",
      },
      {
        n: "03",
        title: "Reduzi tickets com IA e documentação",
        desc: "Agente de IA treinado com as FAQs internas para responder dúvidas recorrentes, mais documentação detalhada em vídeo para onboarding de novos colaboradores.",
      },
    ],
    metrics: [
      { n: "~1h → 5min", l: "tempo por execução" },
      { n: "agente de IA", l: "absorve tickets repetitivos com base nas FAQs internas" },
      { n: "0", l: "intervenção manual nas tarefas automatizadas" },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/rafaelasv/baixa-nfse" },
    ],
  },
  {
    id: "case-04",
    num: "CASE 04",
    kind: "IA · Automação",
    title: "Sistema de comunicação e alertas via IA",
    tagline: "A equipe parou de checar grupos e planilhas na mão — os avisos certos chegam sozinhos, na hora certa.",
    meta: {
      papel: "Desenvolvedora & Automatizadora",
      periodo: "2024–2025 · contínuo",
      tipo: "Freelance",
      stack: "Node.js · Claude · Gemini · Railway",
    },
    contexto: "Escola de idiomas online com equipe distribuída que dependia de checagem manual de 6 grupos de WhatsApp, planilhas de tráfego e formulários de alunas para tomar decisões diárias — gerando atraso e sobrecarga.",
    problema: "Equipe dependia de checagem manual de grupos de WhatsApp, planilhas de tráfego e formulários — gerando atraso na resposta a inadimplência, leads e aulas experimentais. Informação crítica se perdia no ruído.",
    pull: "A equipe começava o dia checando 6 grupos de WhatsApp, cruzando com planilhas de tráfego e formulários de alunas — tudo na mão, antes de tomar qualquer decisão. Informação importante se perdia no meio do ruído.",
    steps: [
      {
        n: "01",
        title: "Eliminei a checagem manual de grupos",
        desc: "Configurei Claude Code CLI para ler e resumir automaticamente os 6 grupos de WhatsApp toda manhã, entregando um relatório consolidado no horário certo, sem precisar abrir nenhum chat.",
      },
      {
        n: "02",
        title: "Automatizei cobranças e inadimplência",
        desc: "Sequência de cobrança de 7 dias com node-cron rodando no Railway — mensagens distintas para cartão e boleto, disparadas automaticamente sem qualquer intervenção humana.",
      },
      {
        n: "03",
        title: "Integrei Gemini para nivelamento de alunas",
        desc: "IA que lê as respostas do formulário de cada aluna nova, determina o nível de inglês e gera uma mensagem personalizada de nivelamento — entregue automaticamente no grupo certo.",
      },
    ],
    metrics: [
      { n: "6", l: "grupos monitorados automaticamente" },
      { n: "7 dias", l: "de cobrança automática por aluna inadimplente" },
      { n: "0", l: "checagens manuais necessárias" },
    ],
    links: [],
  },
  {
    id: "case-05",
    num: "CASE 05",
    kind: "Automação · Distribuição",
    title: "Distribuição multi-plataforma de conteúdo",
    tagline: "O mesmo conteúdo passou a alcançar Instagram, TikTok e Pinterest de forma automática, sem trabalho repetido.",
    meta: {
      papel: "Desenvolvedora & Automatizadora",
      periodo: "2025 · contínuo",
      tipo: "Freelance",
      stack: "Make · Python · ManyChat · Instagram API",
    },
    contexto: "Escola de idiomas com 80k seguidores no Instagram e produção constante de conteúdo. Todo o material ficava restrito a uma plataforma, sem aproveitamento no TikTok e Pinterest, e sem canal direto de engajamento com a base.",
    problema: "Conteúdo de uma marca com 80k seguidores ficava preso no Instagram. TikTok e Pinterest existiam mas recebiam zero publicação. O time precisaria duplicar o trabalho para distribuir — o que nunca acontecia.",
    pull: "Todo o conteúdo era produzido pro Instagram e ficava só lá. TikTok e Pinterest existiam como perfis vazios. Publicar nos três significaria triplicar o trabalho — então ninguém publicava.",
    steps: [
      {
        n: "01",
        title: "Integrei Instagram → Pinterest via Make",
        desc: "Cada post publicado no Instagram é automaticamente republicado no Pinterest com título e descrição adaptados — sem trabalho extra, alcançando uma segunda audiência de graça.",
      },
      {
        n: "02",
        title: "Estruturei o pipeline de Reels para TikTok",
        desc: "Sistema de organização e cronograma com gallery-dl e Python que facilita o upload em lote de Reels no TikTok, eliminando o trabalho duplicado de baixar e repostar manualmente.",
      },
      {
        n: "03",
        title: "Criei canal de transmissão automatizado",
        desc: "ManyChat configurado para adicionar seguidoras ao canal de transmissão do Instagram a partir de gatilhos de DM — criando um canal direto de engajamento com a base mais engajada.",
      },
    ],
    metrics: [
      { n: "Pinterest", l: "cada post do Instagram republicado automaticamente com título e descrição adaptados" },
      { n: "TikTok", l: "pipeline de organização e upload em lote de Reels via gallery-dl + Python" },
      { n: "Instagram", l: "canal de transmissão alimentado automaticamente via ManyChat a partir de DMs" },
    ],
    links: [],
  },
  {
    id: "case-06",
    num: "CASE 06",
    kind: "Full Stack · IA · Automação",
    title: "Plataforma de recrutamento com triagem por IA",
    tagline: "De mensagens manuais no WhatsApp a um sistema completo: portal de vagas, agente de triagem e extração automática de currículos.",
    meta: {
      papel: "Desenvolvedora Full Stack & Automatizadora",
      periodo: "2026 · em andamento",
      tipo: "Freelance",
      stack: "Next.js · PostgreSQL · n8n · DeepSeek · Redis",
    },
    contexto: "Uma empresa de recrutamento e estágios recebia candidatos por WhatsApp e fazia toda a triagem de forma manual — lendo mensagens, copiando dados, avaliando perfis um por um. Sem portal próprio, sem automação, sem estrutura para escalar. Cada vaga nova significava mais trabalho repetitivo para a equipe.",
    problema: "Recrutadores faziam triagem por conversa no WhatsApp, copiavam dados de candidatos para planilhas na mão, e não tinham uma plataforma própria para publicar vagas ou receber candidaturas. O processo não escalava — cada candidato exigia atenção manual do início ao fim, e informações se perdiam entre mensagens.",
    pull: "O recrutador recebia dezenas de mensagens no WhatsApp, lia uma por uma, pedia dados que o candidato já tinha mandado, e copiava tudo pra planilha. Com várias vagas abertas ao mesmo tempo, o processo não escalava.",
    steps: [
      {
        n: "01",
        title: "Construí o portal de vagas do zero",
        desc: "Plataforma web completa em Next.js com três áreas: pública (listagem de vagas com filtros sincronizados na URL, candidatura com upload de currículo), painel administrativo (dashboard com métricas, gestão de vagas, candidaturas e escolas parceiras) e painel da escola (solicitar vagas, acompanhar candidaturas). Autenticação com sessões separadas por perfil, PWA e SEO configurados.",
      },
      {
        n: "02",
        title: "Criei o agente de triagem no WhatsApp",
        desc: "Agente conversacional que recebe o candidato no WhatsApp, identifica a vaga de interesse, conduz triagem com perguntas estruturadas e classifica automaticamente: apto, reprovado ou desistente. Usa DeepSeek com prompt few-shot, Redis para agrupar mensagens fragmentadas (debounce) e PostgreSQL para persistir o estado da conversa entre interações. Reengajamento automático: 24h sem resposta gera lembrete, 72h encerra como desistência.",
      },
      {
        n: "03",
        title: "Automatizei a extração de dados curriculares",
        desc: "Sub-workflow acionado quando o candidato envia o currículo pelo WhatsApp. A IA extrai 18 campos estruturados (nome, contato, formação, experiências, habilidades) direto do texto do documento, sem intervenção humana — dados prontos para consulta no painel administrativo.",
      },
    ],
    metrics: [
      { n: "100%", l: "da triagem automatizada — do contato à classificação" },
      { n: "18", l: "campos curriculares extraídos por IA, sem intervenção humana" },
      { n: "3", l: "áreas autenticadas no portal (pública, admin, escola parceira)" },
      { n: "24h / 72h", l: "reengajamento automático: lembrete e encerramento por inatividade" },
    ],
    links: [],
  },
]

export default function Cases() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [activeCase, setActiveCase] = useState("")

  // Nav scroll + progress
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
    const els = document.querySelectorAll(".cases-page .fade")
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add("in"), i * 60)
          obs.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  // Scroll spy for subnav
  useEffect(() => {
    const sections = document.querySelectorAll(".case")
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveCase(entry.target.id)
      })
    }, { rootMargin: "-45% 0px -50% 0px" })
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <div className="cases-page">
      <div className="progress" id="progress" />

      {/* NAV */}
      <nav id="nav" className={navScrolled ? "scrolled" : ""}>
        <div className="wrap">
          <Link href="/" className="logo">
            rafaela<i style={{ color: "var(--accent)" }}>.tavares</i>
          </Link>
          <div className="nav-right">
            <ul className="nav-links">
              <li><Link href="/#sobre">sobre</Link></li>
              <li><Link href="/#stack">stack</Link></li>
              <li><Link href="/#projetos">projetos</Link></li>
              <li><a href="#" className="active">cases</a></li>
              <li><Link href="/#contato">contato</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* INTRO */}
      <section id="intro">
        <div className="postmark"><span className="mono">23 . 07 . 26</span><span className="mono">CASE PROOF</span></div>
        <div className="wrap">
          <Link href="/" className="back-link">
            <span className="arr">←</span> voltar ao início
          </Link>
          <p className="eyebrow"><span className="idx">✦</span> Estudos de caso</p>
          <h1 className="intro-h">
            Como eu penso — não só <span className="gold">o que eu entrego</span>.
          </h1>
          <p className="intro-sub">
            Seis projetos destrinchados de ponta a ponta: o contexto, o problema real, as decisões que tomei no caminho e o que mudou no fim. Menos vitrine, mais processo.
          </p>
          <p style={{ fontSize: "0.82rem", opacity: 0.5, marginTop: "1.25rem", maxWidth: "560px", lineHeight: "1.6" }}>
            Os cases 01, 02, 04 e 05 fazem parte de um trabalho contínuo com a mesma cliente ao longo de dois anos — cada um resolvendo um problema diferente à medida que o negócio crescia.
          </p>
        </div>
        <div className="sticker" style={{ bottom: "8px", right: "70px", width: "90px", transform: "rotate(-5deg)" }}>
          <img src="/stickers/sticker-hearts.png" alt="" />
        </div>
      </section>

      {/* SUBNAV */}
      <div className="subnav" id="subnav">
        <div className="wrap">
          {cases.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className={activeCase === c.id ? "active" : ""}
            >
              <span className="n">{c.num.replace("CASE ", "")}</span> {c.title.split("—")[0].trim()}
            </a>
          ))}
        </div>
      </div>

      <main>
        {cases.map((c, ci) => {
          const st = [
            { src: "sticker-exclamation.png", style: { top: "12px", left: "60px", width: "80px", transform: "rotate(6deg)" } },
            { src: "sticker-star.png", style: { top: "12px", right: "70px", width: "84px", transform: "rotate(-6deg)" } },
            { src: "sticker-rabbit.png", style: { top: "12px", left: "60px", width: "84px", transform: "rotate(5deg)" } },
            { src: "sticker-crow.png", style: { top: "12px", right: "70px", width: "78px", transform: "rotate(-4deg)" } },
            { src: "sticker-bow.png", style: { top: "12px", left: "60px", width: "84px", transform: "rotate(6deg)" } },
          ][ci % 5]
          return (
          <section key={c.id} className="case" id={c.id}>
            <div className="sticker" style={st.style}>
              <img src={`/stickers/${st.src}`} alt="" />
            </div>
            <div className="wrap">
              {/* Head */}
              <div className="case-head fade">
                <span className="case-num">{c.num}</span>
                <span className="case-kind">{c.kind}</span>
                <h2 className="case-title">{c.title}</h2>
                <p className="case-tagline">{c.tagline}</p>
              </div>

              {/* Meta */}
              <div className="case-meta fade">
                <div className="meta-item">
                  <div className="k">Papel</div>
                  <div className="v">{c.meta.papel}</div>
                </div>
                <div className="meta-item">
                  <div className="k">Período</div>
                  <div className="v">{c.meta.periodo}</div>
                </div>
                <div className="meta-item">
                  <div className="k">Tipo</div>
                  <div className="v">{c.meta.tipo}</div>
                </div>
                <div className="meta-item">
                  <div className="k">Stack</div>
                  <div className="v">{c.meta.stack}</div>
                </div>
              </div>

              {/* Contexto */}
              <div className="block fade">
                <div className="block-h">Contexto</div>
                <p>{c.contexto}</p>
              </div>

              {/* Problema */}
              <div className="block fade">
                <div className="block-h">O problema</div>
                <p>{c.problema}</p>
                <div className="pull">{c.pull}</div>
              </div>

              {/* Processo */}
              <div className="block fade" style={{ maxWidth: "none" }}>
                <div className="block-h">O processo</div>
                <div className="steps">
                  {c.steps.map((s) => (
                    <div key={s.n} className="step">
                      <span className="sn">{s.n}</span>
                      <div>
                        <h4>{s.title}</h4>
                        <p>{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resultado */}
              <div className="block fade" style={{ maxWidth: "none" }}>
                <div className="block-h">Resultado</div>
                <div className="metrics">
                  {c.metrics.map((m, i) => (
                    <div key={i} className="metric">
                      <div className="n">{m.n}</div>
                      <div className="l">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              {c.links.length > 0 && (
                <div className="case-links fade">
                  {c.links.map((lk) => (
                    <a key={lk.label} href={lk.href} target="_blank" rel="noopener noreferrer">
                      <span style={{ color: "var(--accent)" }}>↗</span> {lk.label} <span className="arr">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </section>
          )
        })}
      </main>

      {/* CTA */}
      <section className="cta">
        <div className="sticker" style={{ top: "14px", right: "90px", width: "70px", transform: "rotate(-8deg)" }}>
          <img src="/stickers/sticker-crow.png" alt="" />
        </div>
        <div className="wrap">
          <h2 className="fade">Gostou do <span className="gold">processo</span>?</h2>
          <p className="fade">
            Esses são alguns dos projetos que mais me ensinaram. Se quiser conversar sobre o seu, eu adoro um bom problema.
          </p>
          <div className="cta-btns fade">
            <Link href="/#contato" className="btn btn-fill">
              Falar comigo <span className="arr">→</span>
            </Link>
            <Link href="/#projetos" className="btn btn-ghost">
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <span className="mono">rafaela tavares — 2026</span>
          <span className="mono" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a href="#intro">voltar ao topo ↑</a>
            <img src="/stickers/sticker-sparkles.png" alt="" style={{ width: "36px", transform: "rotate(8deg)" }} />
          </span>
        </div>
      </footer>
    </div>
  )
}
