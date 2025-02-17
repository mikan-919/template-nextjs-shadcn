import { ThemeProvider } from '@/src/components/theme-provider'
import { fontVariables } from '@/src/lib/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body className={fontVariables}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
