import type { Transition } from 'motion/react';

export const initial: {opacity: number, y: number} = {
    opacity: 0,
    y: 40,
}

export const whileInView: {opacity: number, y: number} = {
  opacity: 1,
  y: 0,
}

export const transition: Transition = {
  duration: 0.5,
  ease: 'easeOut'
}

export const viewport: {once: boolean, margin: string} = {
  once: true,
  margin: '-50px',
}