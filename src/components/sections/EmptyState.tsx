"use client"

import React, { useEffect, useRef } from 'react'
import { PackageOpen } from 'lucide-react'
import gsap from 'gsap'
import { motion } from 'motion/react'

const EmptyState = () => {
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(iconRef.current, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: 'power1.inOut'
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="py-24 px-6 flex flex-col items-center justify-center text-center relative z-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <div
          ref={iconRef}
          className="w-20 h-20 mb-6 text-muted/30 flex items-center justify-center"
        >
          <PackageOpen size={64} strokeWidth={1} />
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          No storefronts available
        </h2>
        <p className="text-muted max-w-sm">
          Check back later for new storefronts and exclusive deals from our top vendors.
        </p>

        <div className="mt-12 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-muted/20 to-transparent" />
      </motion.div>
    </section>
  )
}

export default EmptyState
