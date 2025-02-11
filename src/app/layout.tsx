import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Movie Recommender',
  description: 'Get personalized movie recommendations',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
