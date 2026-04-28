"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const sections = [
    {
      title: "About us",
      links: [
        { label: "AI", href: "https://tela.ng/ai" },
        { label: "Quiz", href: "https://tela.ng/quiz" },
        { label: "Press", href: "https://tela.ng/press" },
        { label: "Pricing", href: "https://tela.ng/pricing" },
        { label: "Business", href: "https://tela.ng/Business" }
      ]
    },
    {
      title: "Legals",
      links: [
        { label: "Cookie Policy", href: "https://tela.ng/cookies" },
        { label: "Privacy Policy", href: "https://tela.ng/privacy" },
        { label: "Terms & Conditions", href: "https://tela.ng/Terms&conditions" },
        { label: "Merchant Agreement", href: "https://tela.ng/merchant" },
        { label: "Information Security Policy", href: "https://tela.ng/isp" }
      ]
    },
    {
      title: "Social",
      links: [
        { label: "Instagram", href: "https://instagram.com/gettelaapp" },
        { label: "X", href: "https://x.com/mytelaapp" },
        { label: "TikTok", href: "https://www.tiktok.com/@mytelaapp" },
        { label: "Facebook", href: "https://facebook.com/gettelaapp" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "https://tela.ng/contact-us" }
      ]
    },
    {
      title: "Careers",
      links: [
        { label: "Join Tela", href: "https://tela.ng/careers" }
      ]
    }
  ]

  return (
    <footer className="bg-transparent border-t border-muted/10 pt-20 pb-12 px-6 md:px-12 font-bricolage">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-wrap gap-x-16 gap-y-12">
          {sections.map((section) => (
            <div key={section.title} className="min-w-[120px]">
              <h4 className="font-bold text-[14px] text-foreground mb-6">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted/60 hover:text-foreground text-[14px] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex items-start justify-end">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="Tela Logo"
              width={240}
              height={80}
              className="w-auto h-24 md:h-28  transition-all duration-500 opacity-90"
            />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-muted/10">
        <p className="text-center text-[13px] text-muted/60 leading-relaxed max-w-4xl mx-auto">
          © Tela 2026 — All rights reserved. "TELA" a sub of Difi Financial Services LTD.
          TELA offers its financial services in partnership with licensed financial institutions in their respective jurisdictions.
        </p>
      </div>
    </footer>
  )
}

export default Footer
