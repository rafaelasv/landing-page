"use client"

import { useState } from "react"
import Link from "next/link"

const links = [
  { href: "/#sobre", label: "sobre" },
  { href: "/#projetos", label: "projetos" },
  { href: "/#experiencia", label: "experiência" },
  { href: "/cases", label: "cases" },
  { href: "/#contato", label: "contato" },
]

const CV_HREF = "/curriculo-rafaela-tavares.pdf"

export default function SiteHeader({ current }: { current?: "cases" }) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  const ariaCurrent = (href: string) =>
    current === "cases" && href === "/cases" ? "page" : undefined

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <Link href="/" className="site-header__logo">
          rafaela<span>.tavares</span>
        </Link>

        <nav className="site-header__nav" aria-label="principal">
          {links.map((l) => (
            <Link key={l.href} href={l.href} aria-current={ariaCurrent(l.href)}>
              {l.label}
            </Link>
          ))}
          <a href={CV_HREF} download className="cv-pill">
            currículo (PDF) ↓
          </a>
        </nav>

        <div className="site-header__mobile">
          <a href={CV_HREF} download className="cv-pill cv-pill--short">
            CV ↓
          </a>
          <button
            type="button"
            className="site-header__toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? "fechar" : "menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" className="site-header__menu" aria-label="principal">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              aria-current={ariaCurrent(l.href)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
