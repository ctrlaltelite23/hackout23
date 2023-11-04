import { Inter } from 'next/font/google'
import Hero from '@/frontend/modules/LandingPage/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Hero/>
    </main>
  )
}
