"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, LayoutGroup } from "motion/react"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import TextRotate from "@/components/ui/text-rotate"

const exampleImages = [
  {
    url: "https://res.cloudinary.com/dqfbtawoq/image/upload/q_auto/f_auto/v1777368968/1_gid8tq.jpg",
  },
  {
    url: "https://res.cloudinary.com/dqfbtawoq/image/upload/q_auto/f_auto/v1777369081/2_lwsud7.jpg",
  },
  {
    url: "https://res.cloudinary.com/dqfbtawoq/image/upload/q_auto/f_auto/v1777369120/5_z8n0hq.jpg",
  },
  {
    url: "https://res.cloudinary.com/dqfbtawoq/image/upload/q_auto/f_auto/v1777369101/3_tdgtj3.jpg",
  },
  {
    url: "https://res.cloudinary.com/dqfbtawoq/image/upload/q_auto/f_auto/v1777369112/4_ifovnj.jpg",
  },
]

const LandingHero = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center relative bg-transparent z-10">
      <Floating sensitivity={-0.5} className="h-full">
        <FloatingElement
          depth={0.5}
          className="top-[20%] left-[5%] md:top-[25%] md:left-[5%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl overflow-hidden"
          >
            <Image
              src={exampleImages[0].url}
              alt="Storefront item 1"
              width={128}
              height={96}
              priority
              className="w-32 h-24 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover"
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[5%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl overflow-hidden"
          >
            <Image
              src={exampleImages[1].url}
              alt="Storefront item 2"
              width={192}
              height={128}
              priority
              className="w-48 h-32 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover"
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={4}
          className="top-[82%] left-[5%] md:top-[80%] md:left-[8%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[4deg] shadow-2xl rounded-xl overflow-hidden"
          >
            <Image
              src={exampleImages[2].url}
              alt="Storefront item 3"
              width={176}
              height={176}
              className="w-44 h-44 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover"
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[5%] left-[75%] md:top-[2%] md:left-[83%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="hover:scale-105 duration-200 cursor-pointer transition-transform rotate-[6deg] shadow-2xl rounded-xl overflow-hidden"
          >
            <Image
              src={exampleImages[3].url}
              alt="Storefront item 4"
              width={192}
              height={160}
              className="w-48 h-40 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover"
            />
          </motion.div>
        </FloatingElement>

        <FloatingElement
          depth={1}
          className="top-[75%] left-[72%] md:top-[68%] md:left-[83%]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="hover:scale-105 duration-200 cursor-pointer transition-transform rotate-[19deg] shadow-2xl rounded-xl overflow-hidden"
          >
            <Image
              src={exampleImages[4].url}
              alt="Storefront item 5"
              width={224}
              height={224}
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover"
            />
          </motion.div>
        </FloatingElement>
      </Floating>

      <div className="flex flex-col justify-center items-center w-full max-w-[90%] sm:max-w-[200px] md:max-w-[600px] lg:max-w-[800px] z-50 pointer-events-auto px-4">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-center w-full justify-center items-center flex-col flex whitespace-pre leading-tight font-bricolage font-medium tracking-tight space-y-1 md:space-y-4 text-foreground"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.3 }}
        >
          <span>Build. Sell. </span>
          <LayoutGroup>
            <motion.span layout className="flex whitespace-pre">
              <motion.span
                layout
                className="flex whitespace-pre"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              >
                Reach{" "}
              </motion.span>
              <TextRotate
                texts={[
                  "Customers",
                  "Nigerians",
                  "Africans",
                  "Everyone",
                  "Buyers",
                  "Markets"
                ]}
                mainClassName="overflow-hidden pr-3 text-[#093C15] py-0 pb-2 md:pb-4 rounded-xl"
                staggerDuration={0.03}
                staggerFrom="last"
                rotationInterval={3000}
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
              />
            </motion.span>
          </LayoutGroup>
        </motion.h1>
        <motion.p
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center font-bricolage font-medium pt-4 sm:pt-8 md:pt-10 lg:pt-12 text-black max-w-2xl"
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut", delay: 0.5 }}
        >
          TELA lets you create your own storefront, manage products, accept payments, and grow your business—all from one powerful platform.
        </motion.p>

        <div className="flex flex-row justify-center space-x-4 items-center mt-10 sm:mt-16 md:mt-20 lg:mt-20 text-xs">
          <motion.button
            className="sm:text-base md:text-lg lg:text-xl font-bold tracking-tight text-background bg-foreground px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full z-20 shadow-2xl font-bricolage"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <Link href="#">
              Start Selling <span className="font-serif ml-1">→</span>
            </Link>
          </motion.button>
          <motion.button
            className="sm:text-base md:text-lg lg:text-xl font-bold tracking-tight text-foreground bg-background border border-foreground/10 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3 rounded-full z-20 shadow-2xl font-bricolage"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
              delay: 0.7,
              scale: { duration: 0.2 },
            }}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
          >
            <Link href="#">
              Explore Stores
            </Link>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default LandingHero
