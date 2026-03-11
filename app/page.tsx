"use client"
import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink } from "lucide-react"
import Link from "next/link"
import { SiHtml5, SiCss, SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiPython, SiMysql } from "react-icons/si"
import { BsRobot } from "react-icons/bs"

const allProjects = [
  {
    title: "O Bando Mágico",
    description: "Site em homenagem às calopsitas Jujuba, Theo e Yuki, com ilustrações em aquarela e gerador de nomes.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "https://bando-magico.vercel.app/",
    thumbnail: "/images/bandomagico.png",
    external: true,
    category: "Frontend",
  },
  {
    title: "Gerador QR Code",
    description: "Projeto simples para gerar QR Codes a partir de texto ou URLs.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "/geradorqr",
    thumbnail: "/images/geradorqr.png",
    category: "Frontend",
  },
  {
    title: "Gerador de Senhas",
    description: "Gerador de senhas seguras e personalizáveis.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "/senhas",
    thumbnail: "/images/geradorsenhas.png",
    category: "Frontend",
  },
  {
    title: "Relógio Digital",
    description: "Projeto de Relógio Digital interativo, que exibe a hora em tempo real.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    link: "/relogio",
    thumbnail: "/images/relogio.png",
    category: "Frontend",
  },
]

const tabs = ["Todos", "Frontend", "IA & Automação"]

function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("Todos")

  const filtered = activeTab === "Todos"
    ? allProjects
    : allProjects.filter((p) => p.category === activeTab)

  return (
    <>
      {/* Tab buttons */}
      <div className="flex justify-center gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 border-2 ${
              activeTab === tab
                ? "bg-purple-600 border-purple-600 text-white"
                : "bg-transparent border-purple-400/50 text-gray-300 hover:border-purple-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {filtered.map((project, index) => (
          <Card
            key={index}
            className="bg-white/10 backdrop-blur-md border border-purple-400 rounded-xl shadow-lg w-full max-w-[350px] h-[400px] p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
              border: "2px solid #8a7fd9",
              backdropFilter: "blur(12px) saturate(180%)",
              WebkitBackdropFilter: "blur(12px) saturate(180%)",
            }}
          >
            <CardContent className="p-0 flex flex-col justify-between h-full">
              {/* Thumbnail */}
              <div className="h-40 w-full mb-4 rounded-md overflow-hidden"
                style={{ border: "2px solid #8a7fd9" }}>
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>

              {/* Description */}
              <p className="text-white text-sm mb-4">{project.description}</p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} className="text-xs font-bold bg-purple-200 text-purple-800">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Link */}
              <Button
                variant="outline"
                size="sm"
                className="w-full font-bold border-2 border-white bg-transparent text-white hover:bg-white hover:text-purple-700"
                asChild
              >
                {project.external ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ver Projeto <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                ) : (
                  <Link href={project.link ?? "#"}>
                    Ver Projeto <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}

export default function Home() {

  // Internal component LandingPage
  function LandingPage() {
    return (
      <>
        {/* Hero Section */}
        <section className="relative px-4 pt-32 pb-12 md:px-6 md:pt-40 md:pb-20 text-white min-h-screen flex flex-col justify-center">
          <div className="max-w-4xl mx-auto">
            {/* Geometric decoration */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-purple-600 rotate-12 hidden md:block float-shape" />
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-fuchsia-500 rotate-45 hidden md:block float-shape-slow" style={{ animationDelay: "1s" }} />

            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-none text-balance">
                  RAFAELA
                  <br />
                  TAVARES
                </h1>
                <div className="w-24 h-2 mt-2 rounded mx-auto"
                  style={{ backgroundImage: "linear-gradient(to right, #8a7fd9, #c572c9)" }} />
              </div>

              <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white text-balance">
                Support Engineer & Frontend Developer
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 pt-8">
                <Button size="lg" className="font-bold text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 bg-purple-600 hover:bg-purple-700 text-white" asChild>
                  <a href="#projetos">Ver Projetos</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-bold text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 border-2 border-white bg-transparent text-white hover:bg-white hover:text-purple-700"
                  asChild
                >
                  <a href="https://linkedin.com/in/rafaela-s-tavares" target="_blank" rel="noopener noreferrer">Contato</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobremim" className="px-4 pt-32 pb-12 md:px-6 md:pt-60 md:pb-20 text-white">
          <div className="max-w-4xl mx-auto">
            {/* Title Section */}
            <div className="flex flex-col gap-1 mb-8 md:mb-12">
              <span className="font-mono text-cyan-400 text-sm">&lt;/SobreMim&gt;</span>
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-white">
                MINHA JORNADA
              </div>
              <div
                className="w-12 h-1 mt-2 rounded"
                style={{ backgroundImage: "linear-gradient(to right, #8a7fd9, #c572c9)" }}
              />
            </div>

            {/* Section Content */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Text */}
              <div>
                <p className="text-gray-200 text-base leading-relaxed">
                  Desenvolvedora frontend em aprendizado contínuo, com experiência real em automação e IA generativa. Antes de terminar o curso, já criava scripts em Python para eliminar processos manuais e construía agentes de IA para escalar atendimento ao cliente.
                </p>
                <p className="mt-4 text-gray-200 text-base leading-relaxed">
                  Acredito que tecnologia deve ser acessível e resolver problemas reais - por isso me dedico a criar interfaces que não apenas funcionam bem, mas encantam quem usa.
                </p>
              </div>

              {/* Photo */}
              <div className="flex justify-center md:justify-end">
                <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg group">
                  <img
                    src="/images/sobremim.jpg"
                    alt="Minha foto"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 rounded-full bg-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
                  {/* RT */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-black text-purple-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      RT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </>
    )
  }

  return (
    <div className="landing-gradient min-h-screen text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
        style={{ background: "rgba(10, 7, 20, 0.7)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderBottom: "1px solid rgba(138, 127, 217, 0.2)" }}>
        <a href="#" className="text-white font-black text-xl tracking-widest hover:text-purple-400 transition-colors">RT</a>
        <div className="flex gap-6 text-sm font-bold">
          <a href="#sobremim" className="text-gray-300 hover:text-purple-400 transition-colors">Sobre Mim</a>
          <a href="#skills" className="text-gray-300 hover:text-purple-400 transition-colors">Skills</a>
          <a href="#projetos" className="text-gray-300 hover:text-purple-400 transition-colors">Projetos</a>
          <a href="#contato" className="text-gray-300 hover:text-purple-400 transition-colors">Contato</a>
        </div>
      </nav>

      {/* LandingPage */}
      <LandingPage />

      {/* Skills Section */}
      <section id="skills" className="px-6 pt-60 pb-20 text-white">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="flex flex-col gap-1 mb-12 items-center text-center">
            <span className="font-mono text-cyan-400 text-sm">&lt;/Skills&gt;</span>
            <div className="text-4xl md:text-5xl font-black text-white">
              TECNOLOGIAS
            </div>
            <div
              className="w-20 h-1 mt-2 rounded"
              style={{ backgroundImage: "linear-gradient(to right, #8a7fd9, #c572c9)" }}
            />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {[
              { name: "HTML", icon: <SiHtml5 className="w-8 h-8" />, color: "#e34f26" },
              { name: "CSS", icon: <SiCss className="w-8 h-8" />, color: "#1572b6" },
              { name: "React", icon: <SiReact className="w-8 h-8" />, color: "#61dafb" },
              { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" />, color: "#ffffff" },
              { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" />, color: "#3178c6" },
              { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" />, color: "#38bdf8" },
              { name: "Python", icon: <SiPython className="w-8 h-8" />, color: "#ffd343" },
              { name: "IA Generativa", icon: <BsRobot className="w-8 h-8" />, color: "#c572c9" },
              { name: "MySQL", icon: <SiMysql className="w-8 h-8" />, color: "#4479a1" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 border-2 border-purple-400/50 backdrop-blur-sm hover:border-purple-400 hover:bg-white/20 transition-all duration-200 hover:-translate-y-1"
                style={{
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                <span style={{ color: skill.color }}>{skill.icon}</span>
                <span className="text-white text-xs font-bold text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="px-6 pt-60 pb-20 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="flex flex-col gap-1 mb-12">
            <span className="font-mono text-cyan-400 text-sm text-center">&lt;/MeuPortfólio&gt;</span>
            <div className="text-4xl md:text-5xl font-black bg-clip-text text-white text-center">
              PROJETOS
            </div>
            <div
              className="w-20 h-1 mt-2 rounded mx-auto"
              style={{ backgroundImage: "linear-gradient(to right, #8a7fd9, #c572c9)" }}
            />
          </div>

          {/* Tabs */}
          <ProjectsSection />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="px-6 pt-60 pb-20 text-white">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Title */}
          <span className="font-mono text-cyan-400 text-sm text-center">&lt;/FaleComigo&gt;</span>
          <div
            className="text-4xl md:text-5xl font-black text-white text-center mb-4"
          >
            CONTATO
          </div>
          <div className="w-20 h-1 mt-2 mb-8 rounded mx-auto"
            style={{ backgroundImage: "linear-gradient(to right, #8a7fd9, #c572c9)" }}
          />

          {/* Buttons */}
          <div className="flex justify-center gap-6">
            <Button size="lg" className="font-bold bg-purple-600 hover:bg-purple-700 text-white" asChild>
              <a href="mailto:rafaelajtv@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-bold border-2 border-white bg-transparent text-white hover:bg-white hover:text-purple-700"
              asChild
            >
              <a href="https://linkedin.com/in/rafaela-s-tavares" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-bold border-2 border-white bg-transparent text-white hover:bg-white hover:text-purple-700"
              asChild
            >
              <a href="https://github.com/rafaelasv" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="px-6 py-12 border-t-4 border-white text-white text-center">
        <p className="font-bold">© 2026 Rafaela Tavares. Desenvolvido com 💜 e muito código.</p>
      </footer>
    </div>
  )
}
