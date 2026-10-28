import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Rafaela Tavares · Desenvolvedora full-stack / automação",
  description: "Portfólio de Rafaela Tavares. Desenvolvimento full-stack com Python, Node.js e React, automação de processos e integração com IA.",
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
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable}`}>
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

