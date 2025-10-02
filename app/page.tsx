import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Home() {

  // Internal component LandingPage
  function LandingPage() {
    return (
      <>
        {/* Hero Section */}
        <section className="relative px-6 py-20 md:py-32 text-white">
          <div className="max-w-4xl mx-auto">
            {/* Geometric decoration */}
            <div className="absolute top-10 right-10 w-20 h-20 bg-purple-600 rotate-12 hidden md:block" />
            <div className="absolute bottom-20 left-10 w-16 h-16 bg-fuchsia-500 rotate-45 hidden md:block" />

            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-8xl font-black text-white leading-none text-balance">
                  RAFAELA
                  <br />
                  TAVARES
                </h1>
                <div className="w-32 h-2 mt-2 rounded mx-auto"
                  style={{ backgroundImage: "linear-gradient(to right, #8a7fd9, #c572c9)" }} />
              </div>

              <p className="text-xl md:text-2xl font-bold max-w-2xl mx-auto text-white text-balance">
                Desenvolvedora Frontend apaixonada por criar experiências digitais únicas e funcionais.
              </p>

              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <Button size="lg" className="font-bold text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white" asChild>
                  <a href="#projetos">Ver Projetos</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="font-bold text-lg px-8 py-6 border-2 border-white bg-transparent text-white hover:bg-white hover:text-purple-700"
                  asChild
                >
                  <a href="https://linkedin.com/in/rafaela-s-tavares" target="_blank" rel="noopener noreferrer">Contato</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobremim" className="px-6 pt-60 pb-20 text-white">
          <div className="max-w-4xl mx-auto">
            {/* Title Section */}
            <div className="flex flex-col gap-1 mb-12">
              <span className="font-mono text-cyan-400 text-sm">&lt;/SobreMim&gt;</span>
              <div
                className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(to right, #8ed0f9, #8a7fd9, #c572c9)" }}
              >
                MINHA JORNADA
              </div>
              <div
                className="w-16 h-1 mt-2 rounded"
                style={{ backgroundImage: "linear-gradient(to right, #06b6d4, #6366f1)" }}
              />
            </div>

            {/* Section Content */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div>
                <p className="text-gray-200 text-base leading-relaxed">
                  Sou uma desenvolvedora frontend em aprendizado contínuo, apaixonada por transformar ideias em realidade digital.
                  Estou explorando React, Next.js e TypeScript, e busco criar interfaces que combinam funcionalidade e design impactante.
                </p>
                <p className="mt-4 text-gray-200 text-base leading-relaxed">
                  Acredito que a tecnologia deve ser acessível e bonita, por isso me dedico a desenvolver experiências que não apenas funcionam bem, mas também encantam os usuários.
                </p>
              </div>

              {/* Photo */}
              <div className="flex justify-end">
                <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-lg group">
                  <img
                    src="/images/sobremim.jpg"
                    alt="Minha foto"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 rounded-full bg-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
                  {/* RT */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-6xl font-black text-purple-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
      {/* LandingPage */}
      <LandingPage />

      {/* Projects Section */}
      <section id="projetos" className="px-6 pt-60 pb-20 text-white">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="flex flex-col gap-1 mb-12">
            <span className="font-mono text-cyan-400 text-sm text-center">&lt;/MeuPortfólio&gt;</span>
            <div
              className="text-4xl md:text-5xl font-black bg-clip-text text-transparent text-center"
              style={{ backgroundImage: "linear-gradient(to right, #8ed0f9, #8a7fd9, #c572c9)" }}
            >
              PROJETOS
            </div>
            <div
              className="w-20 h-1 mt-2 rounded mx-auto"
              style={{ backgroundImage: "linear-gradient(to right, #06b6d4, #6366f1)" }}
            />
          </div>

          {/* Projects Grids */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {[
              {
                title: "Relógio Digital",
                description: "Projeto de Relógio Digital interativo, que exibe a hora em tempo real.",
                tech: ["React", "Next.js", "Tailwind CSS"],
                link: "/relogio",
                thumbnail: "/images/relogio.png",
              },
              {
                title: "Gerador de Senhas",
                description: "Gerador de senhas seguras e personalizáveis.",
                tech: ["React", "Next.js", "Tailwind CSS"],
                link: "/senhas",
                thumbnail: "/images/geradorsenhas.png",
              },
              {
                title: "Gerador QR Code",
                description: "Projeto simples para gerar QR Codes a partir de texto ou URLs.",
                tech: ["React", "Next.js", "Tailwind CSS"],
                link: "/geradorqr",
                thumbnail: "/images/geradorqr.png",
              },
            ].map((project, index) => (
              <Card
                key={index}
                className="backdrop-blur-md border rounded-xl shadow-lg w-full max-w-[350px] h-[400px] p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
                style={{
                  backgroundColor: "rgba(38,31,50,0.6)",
                  border: "2px solid #8a7fd9",          
                  backdropFilter: "blur(12px) saturate(180%)",
                  WebkitBackdropFilter: "blur(12px) saturate(180%)",
                }}
              >
                <CardContent className="p-0 flex flex-col justify-between h-full">
                  {/* Thumbnail */}
                  <div className="h-40 w-full mb-4 rounded-md overflow-hidden border"
                  style={{border: "2px solid #8a7fd9",}}>
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
                      <Badge
                        key={tech}
                        className="text-xs font-bold bg-purple-200 text-purple-800"
                      >
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
                    <Link href={project.link ?? "#"}>
                      Ver Projeto <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="px-6 pt-60 pb-20 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">CONTATO</h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto mb-12" />

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
        <p className="font-bold">© 2025 Rafaela Tavares. Desenvolvido com ❤️ e muito código.</p>
      </footer>
    </div>
  )
}
``
