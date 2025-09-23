import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, ExternalLink } from "lucide-react"
import Link from "next/link"  

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Geometric decoration */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-purple-600 rotate-12 hidden md:block" />
          <div className="absolute bottom-20 left-10 w-16 h-16 bg-fuchsia-500 rotate-45 hidden md:block" />

          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black text-purple-600 leading-none text-balance">
                RAFAELA
                <br />
                TAVARES
              </h1>
              <div className="w-32 h-2 bg-fuchsia-500 mx-auto" />
            </div>

            <p className="text-xl md:text-2xl font-bold text-gray-900 max-w-2xl mx-auto text-balance">
              Desenvolvedora Frontend apaixonada por criar experiências digitais únicas e funcionais
            </p>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <Button size="lg" className="font-bold text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white" asChild>
                <a href="#projetos">Ver Projetos</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-bold text-lg px-8 py-6 border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-100"
                asChild
              >
                <a href="https://linkedin.com/in/rafaela-s-tavares" target="_blank" rel="noopener noreferrer">Contato</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-purple-600">SOBRE MIM</h2>
              <div className="w-20 h-1 bg-fuchsia-500" />
              <p className="text-lg leading-relaxed text-gray-900">
                Sou uma desenvolvedora frontend com paixão por transformar ideias em realidade digital. Especializada em
                React, Next.js e TypeScript, busco sempre criar interfaces que combinam funcionalidade excepcional com
                design impactante.
              </p>
              <p className="text-lg leading-relaxed text-gray-900">
                Acredito que a tecnologia deve ser acessível e bonita, por isso dedico-me a criar experiências que não
                apenas funcionam perfeitamente, mas também encantam os usuários.
              </p>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-purple-100 border-4 border-gray-900 relative overflow-hidden">
                <div className="absolute inset-4 bg-purple-200" />
                <div className="absolute bottom-4 right-4 w-20 h-20 bg-fuchsia-500" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="text-6xl font-black text-purple-300">RT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-purple-600 text-center mb-12">PROJETOS</h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Relógio Digital",
                description: "Projeto de Relógio Digital interativo, que exibe a hora em tempo real.",
                tech: ["React", "Next.js", "Tailwind CSS"],
                link: "/relogio",
              },
              {
                title: "Gerador de Senhas",
                description: "Gerador de senhas seguras e personalizáveis.",
                tech: ["React", "Next.js", "Tailwind CSS"],
                link: "/senhas",
              },
              {
                title: "Gerador QR Code",
                description: "Projeto simples para gerar QR Codes a partir de texto ou URLs.",
                tech: ["React", "Next.js", "Tailwind CSS"],
                link: "/geradorqr",
              },
            ].map((project, index) => (
              <Card key={index} className="border-4 border-gray-900 hover:shadow-lg transition-shadow group bg-white">
                <CardContent className="p-6 space-y-4">
                  <div className="h-40 bg-purple-100 border-2 border-gray-900 relative overflow-hidden">
                    <div className="absolute inset-2 bg-purple-200" />
                    <div className="absolute bottom-2 right-2 w-8 h-8 bg-fuchsia-500" />
                  </div>

                  <h3 className="text-xl font-black text-purple-600 group-hover:text-fuchsia-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-900 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        className="text-xs font-bold bg-fuchsia-100 text-fuchsia-700 hover:bg-fuchsia-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full font-bold border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-100"
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
      <section id="contato" className="px-6 py-20 bg-purple-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-purple-600 mb-8">CONTATO</h2>
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
              className="font-bold border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-100"
              asChild
            >
              <a href="https://linkedin.com/in/rafaela-s-tavares" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="font-bold border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-100"
              asChild
            >
              <a href="https://github.com/rafaelasv" target="_blank" rel="noopener noreferrer">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-white border-t-4 border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-900 font-bold">© 2025 Rafaela Tavares. Desenvolvido com ❤️ e muito código.</p>
        </div>
      </footer>
    </div>
  )
}
