import type React from "react"
import type { Metadata } from "next"
import { Instrument_Serif, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
})

export const metadata: Metadata = {
  title: "Rafaela Tavares · Full-stack, Automação & IA",
  description: "Portfólio de Rafaela Tavares. Desenvolvimento full-stack, automação de processos e integração com IA, com frontend em React/Next.js.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%231c1023'/><text x='50' y='68' font-family='Georgia,serif' font-style='italic' font-size='58' fill='%23c9a7e0' text-anchor='middle'>r</text></svg>",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${instrumentSerif.variable} ${plexMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove Next.js development indicators
              function removeNextDevTools() {
                const selectors = [
                  '[id*="devtools-indicator"]',
                  '[data-nextjs-toast]',
                  '[data-next-badge]',
                  '[data-nextjs-dev-tools-button]',
                  '.nextjs-toast'
                ];
                selectors.forEach(selector => {
                  const elements = document.querySelectorAll(selector);
                  elements.forEach(el => el.remove());
                });
              }
              // Run immediately and on DOM changes
              removeNextDevTools();
              if (typeof MutationObserver !== 'undefined') {
                const observer = new MutationObserver(removeNextDevTools);
                observer.observe(document.body, { childList: true, subtree: true });
              }
            `,
          }}
        />
      </body>
    </html>
  )
}

