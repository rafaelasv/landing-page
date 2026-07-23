import type React from "react"
import type { Metadata } from "next"
import { Newsreader, Courier_Prime } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
})

const courier = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-courier",
})

export const metadata: Metadata = {
  title: "Rafaela Tavares — Frontend & Automação",
  description: "Portfólio de Rafaela Tavares — interfaces React/Next.js, automação de processos e integração com IA.",
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
      <body className={`${newsreader.variable} ${courier.variable} antialiased`}>
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

