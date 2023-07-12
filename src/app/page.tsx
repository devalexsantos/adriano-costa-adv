import AboutLayout from '@/components/AboutLayout'
import HeaderLayout from '@/components/HeaderLayout'
import Separator from '@/components/Separator'
import SliderPhotos from '@/components/SliderPhotos'
import { Lateef } from 'next/font/google'

const lateef = Lateef(
  { 
    weight: ['200', '700'],
    subsets: ['latin'],
  }
)

export default function Home() {
  return (
    <main className={`flex flex-col ${lateef.className} items-center`}>
      <HeaderLayout />
      <Separator />
      <AboutLayout />
      <div className="w-full bg-[#300202] p-4">
        <SliderPhotos />
      </div>
      <div>
        Opa
      </div>
    </main>
  )
}
