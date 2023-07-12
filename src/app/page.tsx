import HeaderLayout from '@/components/HeaderLayout'
import { Lateef, Inter } from 'next/font/google'

const lateef = Lateef(
  { 
    weight: ['200', '700'],
    subsets: ['latin'],
  }
)

export default function Home() {
  return (
    <main className={`flex flex-col ${lateef.className}`}>
      <HeaderLayout />
      <div>
        Opa
      </div>
    </main>
  )
}
