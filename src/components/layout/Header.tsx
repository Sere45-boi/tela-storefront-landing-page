"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Globe, Menu, X } from 'lucide-react'
import gsap from 'gsap'
import { AnimatePresence, motion } from "motion/react"

const Header = () => {
  const headerRef = useRef<HTMLElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        ease: 'power4.out'
      })
    })

    return () => ctx.revert()
  }, [])

  const navItems = [
    { label: 'Business', href: 'https://tela.ng/Business' },
    { label: 'Payment', href: 'https://tela.ng/Payment' },
    { label: 'Quiz', href: 'https://tela.ng/quiz' },
    { label: 'AI', href: 'https://tela.ng/ai' }
  ]

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-[100] py-3 px-6 md:px-12 flex items-center justify-between glass border-b border-muted/10 font-bricolage"
      >
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Tela Logo"
              width={120}
              height={40}
              priority
              className="w-auto h-5.5 object-contain"
              style={{ width: 'auto', height: 'auto' }}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[12px] font-bold tracking-widest text-muted/80 hover:text-foreground transition-colors uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-muted/10 border border-muted/20 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-accent/50 w-64 transition-all"
            />
          </div>

          <button
            className="md:hidden p-2 hover:bg-muted/10 rounded-full transition-colors text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-[90] pt-24 px-6 bg-background md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold tracking-tight text-foreground hover:text-accent transition-colors border-b border-muted/10 pb-4"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
