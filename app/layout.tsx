import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-geist-mono" })
const sora = Sora({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-sora" })

export const metadata: Metadata = {
  title: "Rafaela Tavares · Desenvolvedora full-stack / automação",
  description: "Portfólio de Rafaela Tavares. Desenvolvimento full-stack com Python, Node.js e React, automação de processos e integração com IA.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} ${sora.variable}`}>
      <body>
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
