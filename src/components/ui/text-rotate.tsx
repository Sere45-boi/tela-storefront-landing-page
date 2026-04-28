"use client"

import React, {
  useEffect,
  useRef,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState
} from "react"
import { AnimatePresence, motion, MotionProps, Transition, LayoutGroup } from "motion/react"
import { cn } from "@/lib/utils"

interface TextRotateProps {
  texts: string[]
  rotationInterval?: number
  initial?: MotionProps["initial"]
  animate?: MotionProps["animate"]
  exit?: MotionProps["exit"]
  animatePresenceMode?: AnimatePresenceProps["mode"]
  animatePresenceInitial?: boolean
  staggerDuration?: number
  staggerFrom?: "first" | "last" | "center" | number | "random"
  transition?: Transition
  loop?: boolean
  auto?: boolean
  splitBy?: "words" | "characters" | "lines" | string
  onNext?: (index: number) => void
  mainClassName?: string
  splitLevelClassName?: string
  elementLevelClassName?: string
}

// Fixed AnimatePresenceProps issue by omitting mode if needed or importing it correctly
type AnimatePresenceProps = React.ComponentProps<typeof AnimatePresence>

export interface TextRotateRef {
  next: () => void
  previous: () => void
  jumpTo: (index: number) => void
  reset: () => void
}

const TextRotate = forwardRef<TextRotateRef, TextRotateProps>(
  (
    {
      texts,
      rotationInterval = 2000,
      initial = { opacity: 0, y: 20 },
      animate = { opacity: 1, y: 0 },
      exit = { opacity: 0, y: -20 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      staggerDuration = 0,
      staggerFrom = "first",
      transition = { type: "spring", damping: 25, stiffness: 300 },
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...props
    },
    ref
  ) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0)

    const handleIndexChange = useCallback(
      (newIndex: number) => {
        setCurrentTextIndex(newIndex)
        onNext?.(newIndex)
      },
      [onNext]
    )

    const next = useCallback(() => {
      const nextIndex =
        currentTextIndex === texts.length - 1
          ? loop
            ? 0
            : currentTextIndex
          : currentTextIndex + 1

      if (nextIndex !== currentTextIndex) {
        handleIndexChange(nextIndex)
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange])

    const previous = useCallback(() => {
      const prevIndex =
        currentTextIndex === 0
          ? loop
            ? texts.length - 1
            : currentTextIndex
          : currentTextIndex - 1

      if (prevIndex !== currentTextIndex) {
        handleIndexChange(prevIndex)
      }
    }, [currentTextIndex, texts.length, loop, handleIndexChange])

    const jumpTo = useCallback(
      (index: number) => {
        const validIndex = Math.max(0, Math.min(index, texts.length - 1))
        if (validIndex !== currentTextIndex) {
          handleIndexChange(validIndex)
        }
      },
      [currentTextIndex, texts.length, handleIndexChange]
    )

    const reset = useCallback(() => {
      if (currentTextIndex !== 0) {
        handleIndexChange(0)
      }
    }, [currentTextIndex, handleIndexChange])

    useImperativeHandle(ref, () => ({
      next,
      previous,
      jumpTo,
      reset
    }))

    useEffect(() => {
      if (!auto) return
      const intervalId = setInterval(next, rotationInterval)
      return () => clearInterval(intervalId)
    }, [next, rotationInterval, auto])

    const elements = useMemo(() => {
      const currentText = texts[currentTextIndex]
      if (splitBy === "characters") return Array.from(currentText)
      if (splitBy === "words") return currentText.split(" ")
      if (splitBy === "lines") return currentText.split("\n")
      return currentText.split(splitBy)
    }, [texts, currentTextIndex, splitBy])

    return (
      <motion.span
        className={cn("flex flex-wrap whitespace-pre", mainClassName)}
        {...props}
        layout
      >
        <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
          <motion.div
            key={currentTextIndex}
            className={cn(
              "flex flex-wrap",
              splitBy === "lines" ? "flex-col w-full" : "flex-row"
            )}
            layout
          >
            {elements.map((word, i) => (
              <motion.span
                key={i}
                initial={initial}
                animate={animate}
                exit={exit}
                transition={{
                  ...transition,
                  delay: i * staggerDuration
                }}
                className={cn("inline-block", elementLevelClassName)}
              >
                {word}
                {splitBy === "words" && i < elements.length - 1 && "\u00A0"}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.span>
    )
  }
)

TextRotate.displayName = "TextRotate"

export default TextRotate
