import AboutLayout from '@/components/AboutLayout'
import CardsAtuations from '@/components/CardsAtuations'
import HeaderLayout from '@/components/HeaderLayout'
import Separator from '@/components/Separator'
import SliderPhotos from '@/components/SliderPhotos'
import IconDividerVertical from '@/icons/IconDividerVertical'
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
      <div className="w-full bg-[#300202] p-4 text-[#3A3A3A]">
        <SliderPhotos />
      </div>
      
      <div className="w-full p-5 md:p-20 flex flex-col justify-center">
        <h1 className="mt-5 text-5xl sm:text-6xl leading-10 text-[#3A3A3A] flex items-center"><IconDividerVertical /> Áreas de atuação</h1>
          <CardsAtuations />
      </div>

      <div>
        Opa
      </div>
    </main>
  )
}
