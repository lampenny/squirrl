import '@/app/ui/global.css'
import type { Metadata } from 'next'
import { Sono } from 'next/font/google'
import { Providers } from './providers'

// If loading a variable font, you don't need to specify the font weight
// If you can't use a variable font, you will need to specify a weight
const sono = Sono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'], // can specify multiple using array
})

export const metadata: Metadata = {
  title: 'Squirrl',
  description: 'Personal Finance & Planning app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={sono.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
