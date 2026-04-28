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
      title: "Legal",
      links: [
        { label: "Cookie Policy", href: "https://tela.ng/cookies" },
        { label: "Privacy Policy", href: "https://tela.ng/privacy" },
        { label: "Terms & Conditions", href: "https://tela.ng/Terms&conditions" },
        { label: "Merchant Policy", href: "https://tela.ng/merchant" },
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
    }
  ]

  return (
    <footer className="bg-transparent border-t border-muted/10 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-12">
        <div className="col-span-2">
          <Link href="/" className="inline-block mb-6">
            <Image
              src="/logo.png"
              alt="Tela Logo"
              width={100}
              height={30}
              className="w-auto h-6 object-contain"
            />
          </Link>
          <p className="text-muted text-sm max-w-xs mb-8">
            The all-in-one platform for commerce in Africa. Build, manage, and grow your business with ease.
          </p>
        </div>

        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="font-bold text-sm uppercase tracking-widest text-foreground mb-6">
              {section.title}
            </h4>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted hover:text-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-muted/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted/50 uppercase tracking-widest">
        <p>© 2026 TELA. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
