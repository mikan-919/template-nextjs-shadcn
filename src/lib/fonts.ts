import { Noto_Sans, Noto_Serif } from 'next/font/google'

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
})

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  variable: '--font-noto-serif',
})

export const fontVariables = `${notoSans.variable} ${notoSerif.variable}`
