import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
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
              <Button size="lg" className="font-bold text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700 text-white">
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-bold text-lg px-8 py-6 border-2 border-gray-900 bg-transparent text-gray-900 hover:bg-gray-100"
              >
                Contato
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
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-purple-600 text-center mb-12">PROJETOS</h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto mb-16" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Relógio Digital",
                description: "Projeto de Relógio Digital interativo, que exibe a hora em tempo real.2",
                tech: ["HTML", "CSS", "JavaScript"],
              },
              {
                title: "Gerador de Senhas",
                description: "Gerador de senhas seguras e personalizáveis.",
                tech: ["HTML", "CSS", "JavaScript"],
                link: "/senhas",
              },
              {
                title: "Gerador QR Code",
                description: "Projeto simples para gerar QR Codes a partir de texto ou URLs.",
                tech: ["CSS3", "JavaScript", "HTML5"],
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
                    <a href={project.link ?? "#"}>
                      Ver Projeto <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 bg-purple-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-purple-600 mb-8">CONTATO</h2>
          <div className="w-20 h-1 bg-fuchsia-500 mx-auto mb-12" />

          <div className="flex justify-center gap-6">
            <Button size="lg" className="font-bold bg-purple-600 hover:bg-purple-700 text-white" asChild>
              <a href="mailto:rafaela@email.com">
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
              <a href="https://linkedin.com/in/rafaelasv" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
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
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-white border-t-4 border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-900 font-bold">© 2024 Rafaela Tavares. Desenvolvido com ❤️ e muito código.</p>
        </div>
      </footer>
    </div>
  )
}
