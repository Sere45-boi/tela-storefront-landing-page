import React from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LandingHero from '@/components/sections/LandingHero'
import EmptyState from '@/components/sections/EmptyState'
import BackToTop from '@/components/ui/back-to-top'
import Intercom from '@/components/ui/intercom'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent">
      <Header />
      <div className="flex-grow">
        <LandingHero />
        <EmptyState />
      </div>
      <Footer />
      <BackToTop />
      <Intercom />
    </main>
  )
}
